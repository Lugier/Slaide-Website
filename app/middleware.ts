import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { randomBytes } from 'crypto'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Initialize rate limiter (only if environment variables are set)
const ratelimit = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(10, '10 s'),
      analytics: true,
    })
  : null

export async function middleware(request: NextRequest): Promise<NextResponse> {
  // Rate limiting (only if Upstash is configured)
  if (ratelimit) {
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? '127.0.0.1'
    const { success, limit, remaining, reset } = await ratelimit.limit(ip)
    
    if (!success) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
          'Retry-After': '10',
        },
      })
    }
  }

  // Handle domain redirects (Security: Whitelist-only, prevents Open Redirect)
  const host = request.headers.get('host')
  const url = request.nextUrl.clone()

  // Primary domain: www.slaide.de
  // Redirect all others to primary for SEO consistency
  const primaryDomain = 'www.slaide.de'
  const secondaryDomains = [
    'slaide.de',
    'slaide.eu',
    'www.slaide.eu',
    'slaide.online',
    'www.slaide.online'
  ]

  // Security: Nur bekannte Domains redirecten (verhindert Open Redirect)
  if (host && secondaryDomains.includes(host)) {
    url.hostname = primaryDomain
    // Security: Behalte nur den Pfad, entferne Query-Parameter die Redirects enthalten könnten
    url.searchParams.delete('redirect')
    url.searchParams.delete('return')
    url.searchParams.delete('next')
    return NextResponse.redirect(url, 301)
  }

  // Generate nonce for this request
  const nonce = Buffer.from(randomBytes(16)).toString('base64')
  
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  
  // Build CSP header with improved security
  // Note: 'unsafe-inline' removed from script-src for better security
  // Inline scripts must use nonces (Next.js handles this automatically)
  const cspHeader = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval' https://va.vercel-scripts.com https://cal.com https://*.cal.com`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    "font-src 'self' https://fonts.gstatic.com https://r2cdn.perplexity.ai data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://va.vercel-scripts.com https://cal.com https://*.cal.com",
    "frame-src 'self' https://cal.com https://*.cal.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
    "require-trusted-types-for 'script'",
    "trusted-types default",
    "report-uri /api/csp-report",
    "report-to csp-endpoint",
  ].join('; ')
  
  // Set Reporting-Endpoints header for CSP reporting
  const reportingEndpoints = 'csp-endpoint="/api/csp-report"'
  
  // Create response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  
  // Set security headers
  response.headers.set('Content-Security-Policy', cspHeader)
  response.headers.set('Reporting-Endpoints', reportingEndpoints)
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
  )
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
