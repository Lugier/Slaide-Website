import { NextRequest, NextResponse } from 'next/server'

/**
 * CSP Report Endpoint
 * Receives Content Security Policy violation reports
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json()
    
    // Log CSP violations (in production, send to monitoring service)
    if (process.env.NODE_ENV === 'development') {
      console.warn('[CSP Violation]', JSON.stringify(body, null, 2))
    }
    
    // In production, you might want to:
    // - Send to monitoring service (Sentry, LogRocket, etc.)
    // - Store in database for analysis
    // - Alert on critical violations
    
    return NextResponse.json({ status: 'received' }, { status: 204 })
  } catch (error) {
    // Silently fail to prevent CSP report loops
    return NextResponse.json({ status: 'error' }, { status: 200 })
  }
}

// Allow GET for testing
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ 
    message: 'CSP Report endpoint is active',
    endpoint: '/api/csp-report',
    method: 'POST'
  })
}
