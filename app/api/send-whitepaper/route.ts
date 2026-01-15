import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { readFile, stat } from 'fs/promises'
import { join, resolve, normalize } from 'path'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Resend wird zur Laufzeit initialisiert, nicht beim Build
const getResend = (): Resend | null => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  return new Resend(apiKey)
}

// Rate Limiter für API-Route (striktes Limit für Whitepaper-Anfragen)
const getRateLimiter = (): Ratelimit | null => {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 Anfragen pro Stunde pro IP
      analytics: true,
    })
  }
  return null
}

interface WhitepaperRequest {
  name: string
  company: string
  email: string
  agbAccepted: boolean
  datenschutzAccepted: boolean
}

// Security-Konstanten
const MAX_NAME_LENGTH = 100
const MAX_COMPANY_LENGTH = 200
const MAX_EMAIL_LENGTH = 254 // RFC 5321
const MAX_PDF_SIZE_MB = 10
const MAX_PDF_SIZE_BYTES = MAX_PDF_SIZE_MB * 1024 * 1024

// HTML-Escape für sichere Ausgabe
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// RFC 5322-konforme E-Mail-Validierung (vereinfacht, aber sicher)
function isValidEmail(email: string): boolean {
  if (!email || email.length > MAX_EMAIL_LENGTH) return false
  
  // Basis-Validierung: mindestens local@domain Format
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  if (!emailRegex.test(email)) return false
  
  // Zusätzliche Sicherheitsprüfungen
  // Verhindere E-Mail-Injection (CRLF, etc.)
  if (/[\r\n]/.test(email)) return false
  if (email.includes('..')) return false // Keine doppelten Punkte
  if (email.startsWith('.') || email.endsWith('.')) return false
  
  return true
}

// Sanitize Input: Entferne gefährliche Zeichen und trimme
function sanitizeInput(input: string, maxLength: number): string {
  if (!input || typeof input !== 'string') return ''
  
  // Trim und entferne Steuerzeichen
  let sanitized = input.trim().replace(/[\x00-\x1F\x7F]/g, '')
  
  // Begrenze Länge
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }
  
  return sanitized
}

// Validiere PDF-Pfad gegen Path Traversal
function validatePdfPath(filePath: string): boolean {
  try {
    const resolved = resolve(process.cwd(), 'public', 'Whitepaper.pdf')
    const normalized = normalize(filePath)
    
    // Prüfe, ob der normalisierte Pfad innerhalb des public-Ordners liegt
    const publicDir = resolve(process.cwd(), 'public')
    return normalized.startsWith(publicDir) && normalized === resolved
  } catch {
    return false
  }
}

// Sende Lead-Benachrichtigung an interne E-Mail-Adresse
async function sendLeadNotification(
  resend: Resend,
  leadData: WhitepaperRequest
): Promise<void> {
  const notificationEmail = process.env.RESEND_LEAD_NOTIFICATION_EMAIL

  // Wenn keine Notification-E-Mail konfiguriert ist, überspringen
  if (!notificationEmail) {
    console.log('⚠️ RESEND_LEAD_NOTIFICATION_EMAIL nicht konfiguriert - Lead-Benachrichtigung wird übersprungen')
    return
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Slaide <onboarding@resend.dev>',
      to: notificationEmail,
      subject: `🎯 Neuer Whitepaper-Lead: ${escapeHtml(leadData.name)} von ${escapeHtml(leadData.company)}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #050505; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Neuer Whitepaper-Lead</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 40%;">Datum:</td>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb;">${new Date().toLocaleString('de-DE', { dateStyle: 'long', timeStyle: 'short' })}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Name:</td>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb;">${escapeHtml(leadData.name)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Firma:</td>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb;">${escapeHtml(leadData.company)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb; font-weight: 600;">E-Mail:</td>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb;">
                    <a href="mailto:${escapeHtml(leadData.email)}" style="color: #050505; text-decoration: none;">${escapeHtml(leadData.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb; font-weight: 600;">AGB akzeptiert:</td>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: ${leadData.agbAccepted ? '#10b981' : '#ef4444'}; font-weight: 600;">
                      ${leadData.agbAccepted ? '✓ Ja' : '✗ Nein'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Datenschutz akzeptiert:</td>
                  <td style="padding: 12px; background: #fff; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: ${leadData.datenschutzAccepted ? '#10b981' : '#ef4444'}; font-weight: 600;">
                      ${leadData.datenschutzAccepted ? '✓ Ja' : '✗ Nein'}
                    </span>
                  </td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>Hinweis:</strong> Dies ist eine automatische Benachrichtigung über einen neuen Whitepaper-Lead.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })
  } catch (error) {
    console.error('Fehler beim Senden der Lead-Benachrichtigung:', error)
    // Nicht kritisch - Haupt-E-Mail wird trotzdem versendet
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Rate Limiting (Security First)
    const rateLimiter = getRateLimiter()
    if (rateLimiter) {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                 request.headers.get('x-real-ip') || 
                 'unknown'
      
      const { success, limit, remaining, reset } = await rateLimiter.limit(`whitepaper:${ip}`)
      
      if (!success) {
        return NextResponse.json(
          { 
            error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.',
            retryAfter: Math.ceil((reset - Date.now()) / 1000)
          },
          { 
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
              'X-RateLimit-Reset': reset.toString(),
              'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
            }
          }
        )
      }
    }

    // Parse Request Body mit Größenlimit
    let body: WhitepaperRequest
    try {
      const text = await request.text()
      
      // Begrenze Request-Body-Größe (max 10KB)
      if (text.length > 10240) {
        return NextResponse.json(
          { error: 'Anfrage zu groß' },
          { status: 413 }
        )
      }
      
      body = JSON.parse(text) as WhitepaperRequest
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Ungültige Anfrage. Bitte versuchen Sie es erneut.' },
        { status: 400 }
      )
    }

    // Input-Sanitization und Validierung (Security First)
    const sanitizedName = sanitizeInput(body.name, MAX_NAME_LENGTH)
    const sanitizedCompany = sanitizeInput(body.company, MAX_COMPANY_LENGTH)
    const sanitizedEmail = sanitizeInput(body.email, MAX_EMAIL_LENGTH).toLowerCase()

    // Strikte Validierung
    if (!sanitizedName || sanitizedName.length < 2) {
      return NextResponse.json({ error: 'Bitte geben Sie einen gültigen Namen ein (mindestens 2 Zeichen)' }, { status: 400 })
    }

    if (!sanitizedCompany || sanitizedCompany.length < 2) {
      return NextResponse.json({ error: 'Bitte geben Sie einen gültigen Firmennamen ein (mindestens 2 Zeichen)' }, { status: 400 })
    }

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 })
    }

    // Type-Check für Booleans (verhindere Type Confusion)
    const agbAccepted = body.agbAccepted === true
    const datenschutzAccepted = body.datenschutzAccepted === true

    if (!agbAccepted || !datenschutzAccepted) {
      return NextResponse.json({ error: 'Bitte akzeptieren Sie die AGB und Datenschutzerklärung' }, { status: 400 })
    }

    const leadData: WhitepaperRequest = { 
      name: sanitizedName, 
      company: sanitizedCompany, 
      email: sanitizedEmail, 
      agbAccepted, 
      datenschutzAccepted 
    }

    // PDF-Datei lesen mit Security-Validierung
    const pdfPath = resolve(process.cwd(), 'public', 'Whitepaper.pdf')
    
    // Path Traversal-Schutz: Validiere, dass der Pfad sicher ist
    if (!validatePdfPath(pdfPath)) {
      console.error('⚠️ Unsicherer PDF-Pfad erkannt:', pdfPath)
      return NextResponse.json(
        { error: 'Sicherheitsfehler beim Zugriff auf die Datei' },
        { status: 500 }
      )
    }

    let pdfBuffer: Buffer | null = null

    try {
      // Prüfe Dateigröße VOR dem Lesen
      const fileStats = await stat(pdfPath)
      if (fileStats.size > MAX_PDF_SIZE_BYTES) {
        console.error(`⚠️ PDF zu groß: ${fileStats.size} bytes (max: ${MAX_PDF_SIZE_BYTES})`)
        return NextResponse.json(
          { error: 'Whitepaper-Datei ist zu groß' },
          { status: 500 }
        )
      }

      pdfBuffer = await readFile(pdfPath)
      
      // Zusätzliche Validierung: Prüfe PDF-Magic Bytes (PDF-Header)
      if (pdfBuffer.length < 4 || pdfBuffer.toString('ascii', 0, 4) !== '%PDF') {
        console.error('⚠️ Datei ist kein gültiges PDF')
        return NextResponse.json(
          { error: 'Ungültiges PDF-Format' },
          { status: 500 }
        )
      }
    } catch (error) {
      console.error('PDF-Datei nicht gefunden:', pdfPath, error)
      // In Development: Erlaube ohne PDF (nur für Tests)
      if (process.env.NODE_ENV === 'development') {
        console.warn('⚠️ Development-Modus: Whitepaper wird ohne PDF-Anhang versendet')
      } else {
        return NextResponse.json(
          { error: 'Whitepaper-Datei nicht gefunden. Bitte kontaktieren Sie den Support.' },
          { status: 500 }
        )
      }
    }

    // Prüfe Resend API Key und initialisiere Resend
    const resend = getResend()
    if (!resend) {
      console.error('RESEND_API_KEY fehlt in Umgebungsvariablen')

      // In Development: Erlaube lokalen Test ohne tatsächlichen Mailversand
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          'Development-Modus: RESEND_API_KEY ist nicht gesetzt. Whitepaper-E-Mail wird nicht versendet, Request gilt aber als erfolgreich.'
        )

        return NextResponse.json({
          success: true,
          message: 'Development-Modus: E-Mail wurde nicht wirklich versendet (RESEND_API_KEY fehlt).',
        })
      }

      return NextResponse.json(
        { error: 'E-Mail-Service nicht konfiguriert. Bitte kontaktieren Sie den Support.' },
        { status: 500 }
      )
    }

    // Sende Lead-Benachrichtigung an interne E-Mail (asynchron, blockiert nicht)
    sendLeadNotification(resend, leadData).catch(console.error)

    // E-Mail mit Resend versenden
    const emailData: {
      from: string
      to: string
      subject: string
      html: string
      attachments?: Array<{ filename: string; content: Buffer }>
    } = {
      from: process.env.RESEND_FROM_EMAIL || 'Slaide <onboarding@resend.dev>',
      to: sanitizedEmail,
      subject: 'Ihr Security Whitepaper von Slaide',
      html: `
        <!DOCTYPE html>
        <html lang="de">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin:0; padding:0; background-color:#f5f5f5;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f5f5f5; padding:32px 12px;">
              <tr>
                <td align="center">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px; background-color:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 18px 45px rgba(15,23,42,0.14);">
                    <tr>
                      <td style="padding:24px 28px 12px 28px;">
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:14px; color:#6b7280; text-align:left;">
                              <span style="display:inline-flex; align-items:center; gap:8px; padding:6px 12px; border-radius:999px; border:1px solid #e5e7eb; background-color:#f9fafb; text-transform:uppercase; letter-spacing:0.08em; font-size:11px; font-weight:600;">
                                <span style="display:inline-block; width:8px; height:8px; border-radius:999px; background-color:#22c55e;"></span>
                                Review by Slaide
                              </span>
                            </td>
                            <td style="text-align:right; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:14px; color:#111827;">
                              <span style="font-weight:600;">Slaide</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 28px 4px 28px;">
                        <h1 style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:30px; line-height:1.1; letter-spacing:-0.04em; color:#050505;">
                          Review sieht, was Menschen übersehen.
                        </h1>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 28px 4px 28px;">
                        <p style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:15px; line-height:1.6; color:#4b5563;">
                          Hallo ${escapeHtml(sanitizedName)},
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 28px 4px 28px;">
                        <p style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:15px; line-height:1.6; color:#4b5563;">
                          vielen Dank für Ihr Interesse an unserem Security Whitepaper. Damit Sie fundierte Entscheidungen zu Sicherheit, Hosting und Datenschutz treffen können, haben wir die wichtigsten technischen und organisatorischen Maßnahmen von Slaide für Sie zusammengefasst.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 28px 4px 28px;">
                        <p style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:15px; line-height:1.6; color:#4b5563;">
                          ${pdfBuffer ? 'Im Anhang finden Sie das vollständige Security Whitepaper als PDF-Datei.' : 'Das Security Whitepaper wird Ihnen in Kürze zugesendet.'}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 28px 4px 28px;">
                        <p style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:14px; line-height:1.6; color:#6b7280;">
                          Sie erhalten darin unter anderem einen Überblick über unsere Architektur, Datenflüsse sowie die konkreten organisatorischen und technischen Maßnahmen, mit denen wir Vertraulichkeit, Integrität und Verfügbarkeit Ihrer Dokumente sicherstellen.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 28px 4px 28px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="padding-bottom:16px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:13px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:#6b7280;">
                              Für Teams, die sich keine Fehler leisten können.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate; border-spacing:0 10px;">
                                <tr>
                                  <td style="width:50%; padding:12px 14px; border-radius:16px; border:1px solid #e5e7eb; background-color:#f9fafb; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:13px; color:#111827;">
                                    <div style="font-weight:600; margin-bottom:4px;">DSGVO-konform</div>
                                    <div style="color:#6b7280; font-size:12px;">EU-Hosting &amp; Verschlüsselung in ISO-zertifizierten Rechenzentren.</div>
                                  </td>
                                  <td style="width:50%; padding:12px 14px; border-radius:16px; border:1px solid #e5e7eb; background-color:#f9fafb; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:13px; color:#111827;">
                                    <div style="font-weight:600; margin-bottom:4px;">Security-first</div>
                                    <div style="color:#6b7280; font-size:12px;">Keine Nutzung Ihrer Dokumente für Training oder Fine-Tuning.</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="width:50%; padding:12px 14px; border-radius:16px; border:1px solid #e5e7eb; background-color:#f9fafb; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:13px; color:#111827;">
                                    <div style="font-weight:600; margin-bottom:4px;">Customer Data Isolation</div>
                                    <div style="color:#6b7280; font-size:12px;">Strikte Trennung von Kundendaten &amp; Zugriffspfaden.</div>
                                  </td>
                                  <td style="width:50%; padding:12px 14px; border-radius:16px; border:1px solid #e5e7eb; background-color:#f9fafb; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:13px; color:#111827;">
                                    <div style="font-weight:600; margin-bottom:4px;">Standard-Retention</div>
                                    <div style="color:#6b7280; font-size:12px;">Dokumente werden temporär verarbeitet und automatisch gelöscht.</div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 28px 28px 28px;" align="left">
                        <table role="presentation" cellpadding="0" cellspacing="0">
                          <tr>
                            <td>
                              <a href="https://www.slaide.de/Whitepaper.pdf" target="_blank" style="display:inline-block; padding:12px 22px; border-radius:999px; background-color:#050505; color:#ffffff; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:14px; font-weight:600; text-decoration:none;">
                                Whitepaper direkt öffnen
                              </a>
                            </td>
                            <td style="width:12px;"></td>
                            <td>
                              <a href="https://cal.com/slaide/45min?utm_source=whitepaper-mail&utm_medium=email&utm_campaign=whitepaper_lead" style="display:inline-block; padding:12px 22px; border-radius:999px; border:1px solid #d1d5db; background-color:#ffffff; color:#111827; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:14px; font-weight:500; text-decoration:none;">
                                45‑Minuten Strategie-Call
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0 28px 24px 28px; border-top:1px solid #e5e7eb;">
                        <p style="margin:16px 0 4px 0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:13px; line-height:1.6; color:#6b7280;">
                          Wenn Sie auf Basis des Whitepapers prüfen möchten, wie Review konkret in Ihrem Team eingesetzt werden kann, buchen Sie gerne direkt einen kurzen Strategie-Call mit uns.
                        </p>
                        <p style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:13px; line-height:1.6; color:#6b7280;">
                          Mit freundlichen Grüßen,<br>
                          <span style="color:#111827; font-weight:500;">Ihr Slaide Team</span>
                        </p>
                      </td>
                    </tr>
                  </table>
                  <p style="margin:16px 0 0 0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; font-size:11px; color:#9ca3af; text-align:center;">
                    © ${new Date().getFullYear()} Slaide. Alle Rechte vorbehalten.
                  </p>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    }

    // Füge PDF-Anhang hinzu, falls vorhanden
    if (pdfBuffer) {
      emailData.attachments = [
        {
          filename: 'Whitepaper.pdf',
          content: pdfBuffer,
        },
      ]
    }

    const { data, error } = await resend.emails.send(emailData)

    if (error) {
      console.error('Resend Fehler:', error)
      return NextResponse.json({ error: 'Fehler beim Versenden der E-Mail' }, { status: 500 })
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('API Fehler:', error)
    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}
