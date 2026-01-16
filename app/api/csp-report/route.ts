import { NextRequest, NextResponse } from 'next/server'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Rate Limiter für CSP Reports (verhindert DoS-Angriffe)
const getRateLimiter = (): Ratelimit | null => {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(100, '1 m'), // 100 Reports pro Minute pro IP
      analytics: true,
    })
  }
  return null
}

// Maximale Request-Body-Größe für CSP Reports (50KB)
const MAX_CSP_REPORT_SIZE = 50 * 1024

/**
 * CSP Report Endpoint
 * Receives Content Security Policy violation reports
 * Security: Rate limited, size limited, no logging of sensitive data
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Rate Limiting (Security First)
    const rateLimiter = getRateLimiter()
    if (rateLimiter) {
      const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                 request.headers.get('x-real-ip') || 
                 'unknown'
      
      const { success } = await rateLimiter.limit(`csp-report:${ip}`)
      
      if (!success) {
        // Silently fail to prevent CSP report loops
        return NextResponse.json({ status: 'rate-limited' }, { status: 204 })
      }
    }

    // Begrenze Request-Body-Größe
    const text = await request.text()
    if (text.length > MAX_CSP_REPORT_SIZE) {
      return NextResponse.json({ status: 'too-large' }, { status: 413 })
    }

    let body: unknown
    try {
      body = JSON.parse(text)
    } catch {
      // Ungültiges JSON - silently fail
      return NextResponse.json({ status: 'invalid' }, { status: 204 })
    }
    
    // Validiere, dass es ein CSP Report ist (basic validation)
    if (typeof body === 'object' && body !== null && 'csp-report' in body) {
      // Log CSP violations (in production, send to monitoring service)
      if (process.env.NODE_ENV === 'development') {
        console.warn('[CSP Violation]', JSON.stringify(body, null, 2))
      }
      
      // In production, you might want to:
      // - Send to monitoring service (Sentry, LogRocket, etc.)
      // - Store in database for analysis
      // - Alert on critical violations
      // WICHTIG: Keine personenbezogenen Daten loggen!
    }
    
    return NextResponse.json({ status: 'received' }, { status: 204 })
  } catch (error) {
    // Silently fail to prevent CSP report loops
    return NextResponse.json({ status: 'error' }, { status: 200 })
  }
}

// Allow GET for testing (nur in Development)
export async function GET(): Promise<NextResponse> {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  
  return NextResponse.json({ 
    message: 'CSP Report endpoint is active',
    endpoint: '/api/csp-report',
    method: 'POST',
    note: 'This endpoint only accepts POST requests with CSP violation reports'
  })
}
