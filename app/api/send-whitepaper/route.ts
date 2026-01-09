import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { readFile, appendFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

// Resend wird zur Laufzeit initialisiert, nicht beim Build
const getResend = (): Resend | null => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null
  return new Resend(apiKey)
}

interface WhitepaperRequest {
  name: string
  company: string
  email: string
  agbAccepted: boolean
  datenschutzAccepted: boolean
}

async function saveLead(data: WhitepaperRequest): Promise<void> {
  try {
    // Erstelle data Ordner falls nicht vorhanden
    const dataDir = join(process.cwd(), 'data')
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    // Speichere in CSV-Format für einfache Weiterverarbeitung
    const csvLine = `${new Date().toISOString()},${data.name},${data.company},${data.email},${data.agbAccepted},${data.datenschutzAccepted}\n`
    const csvPath = join(dataDir, 'whitepaper-leads.csv')

    // Füge Header hinzu, falls Datei neu ist
    if (!existsSync(csvPath)) {
      await appendFile(csvPath, 'Datum,Name,Firma,Email,AGB akzeptiert,Datenschutz akzeptiert\n')
    }

    await appendFile(csvPath, csvLine)
  } catch (error) {
    console.error('Fehler beim Speichern des Leads:', error)
    // Nicht kritisch - E-Mail wird trotzdem versendet
  }
}

export async function POST(request: Request) {
  try {
    let body: WhitepaperRequest
    try {
      body = await request.json()
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Ungültige Anfrage. Bitte versuchen Sie es erneut.' },
        { status: 400 }
      )
    }

    const { name, company, email, agbAccepted, datenschutzAccepted } = body

    // Validierung
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Bitte geben Sie Ihren Namen ein' }, { status: 400 })
    }

    if (!company || !company.trim()) {
      return NextResponse.json({ error: 'Bitte geben Sie Ihre Firma ein' }, { status: 400 })
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 })
    }

    if (!agbAccepted || !datenschutzAccepted) {
      return NextResponse.json({ error: 'Bitte akzeptieren Sie die AGB und Datenschutzerklärung' }, { status: 400 })
    }

    // Speichere Lead (asynchron, blockiert nicht)
    saveLead({ name, company, email, agbAccepted, datenschutzAccepted }).catch(console.error)

    // PDF-Datei lesen (muss im public Ordner liegen)
    const pdfPath = join(process.cwd(), 'public', 'security-whitepaper.pdf')
    let pdfBuffer: Buffer | null = null

    try {
      pdfBuffer = await readFile(pdfPath)
    } catch (error) {
      console.error('PDF-Datei nicht gefunden:', pdfPath)
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
      return NextResponse.json(
        { error: 'E-Mail-Service nicht konfiguriert. Bitte kontaktieren Sie den Support.' },
        { status: 500 }
      )
    }

    // E-Mail mit Resend versenden
    const emailData: {
      from: string
      to: string
      subject: string
      html: string
      attachments?: Array<{ filename: string; content: Buffer }>
    } = {
      from: process.env.RESEND_FROM_EMAIL || 'Slaide <onboarding@resend.dev>',
      to: email,
      subject: 'Ihr Security Whitepaper von Slaide',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #050505; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Slaide Security Whitepaper</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; margin-bottom: 20px;">
                Hallo ${name},
              </p>
              <p style="font-size: 16px; margin-bottom: 20px;">
                Vielen Dank für Ihr Interesse an unserem Security Whitepaper!
              </p>
              <p style="font-size: 16px; margin-bottom: 20px;">
                ${pdfBuffer ? 'Im Anhang finden Sie das vollständige Security Whitepaper als PDF-Datei.' : 'Das Security Whitepaper wird Ihnen in Kürze zugesendet.'}
              </p>
              <p style="font-size: 16px; margin-bottom: 20px;">
                Bei Fragen stehen wir Ihnen gerne zur Verfügung.
              </p>
              <p style="font-size: 14px; color: #666; margin-top: 30px;">
                Mit freundlichen Grüßen,<br>
                Das Slaide Team
              </p>
            </div>
          </body>
        </html>
      `,
    }

    // Füge PDF-Anhang hinzu, falls vorhanden
    if (pdfBuffer) {
      emailData.attachments = [
        {
          filename: 'Slaide-Security-Whitepaper.pdf',
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
