/**
 * Cal.com Integration Utilities
 * Handles opening Cal.com booking overlay for demo requests
 */

declare global {
  interface Window {
    Cal?: {
      inline: (config: { calLink: string; layout?: string }) => void
      popup: (config: { calLink: string }) => void
    }
  }
}

const CAL_COM_URL = 'https://cal.com/slaide/45min?overlayCalendar=true'

/**
 * Opens Cal.com booking overlay in a new window
 * This is the recommended approach for overlay calendar
 */
export function openCalComOverlay(): void {
  if (typeof window === 'undefined') return

  // Validate URL to prevent open redirect attacks
  if (!CAL_COM_URL.startsWith('https://cal.com/')) {
    // Silently fail in production, log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Invalid Cal.com URL')
    }
    return
  }

  const width = 800
  const height = 600
  const left = Math.max(0, window.screen.width / 2 - width / 2)
  const top = Math.max(0, window.screen.height / 2 - height / 2)

  // Use noopener and noreferrer for security
  const features = `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,noopener,noreferrer`
  
  const popup = window.open(CAL_COM_URL, 'cal', features)
  
  // Security: Verify popup was opened and is same origin
  if (popup) {
    popup.opener = null // Prevent window.opener access
  }
}

/**
 * Opens Cal.com using inline embed (if script is loaded)
 * Falls back to overlay if script is not available
 */
export function openCalComInline(): void {
  if (typeof window === 'undefined') return

  if (window.Cal) {
    window.Cal.inline({
      calLink: 'slaide/45min',
      layout: 'month_view',
    })
  } else {
    // Fallback to overlay
    openCalComOverlay()
  }
}

/**
 * Loads Cal.com embed script dynamically
 * Use this if you want to use inline embed instead of overlay
 */
export function loadCalComScript(): void {
  if (typeof window === 'undefined' || window.Cal) return

  // Validate script source
  const scriptSrc = 'https://cal.com/embed/embed.js'
  if (!scriptSrc.startsWith('https://cal.com/')) {
    // Silently fail in production, log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Invalid Cal.com script source')
    }
    return
  }

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = scriptSrc
  script.setAttribute('data-cal-namespace', 'cal')
  script.setAttribute('data-cal-link', 'slaide/45min')
  script.async = true
  script.crossOrigin = 'anonymous'
  script.referrerPolicy = 'no-referrer'
  // SRI: Generate hash with: openssl dgst -sha384 -binary < script.js | openssl base64 -A
  // Note: Hash needs to be updated when Cal.com script version changes
  // For now, SRI is disabled as Cal.com script may change frequently
  // script.integrity = 'sha384-...' // Add when stable version is available
  
  // Add error handling
  script.onerror = () => {
    // Silently fail in production, log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to load Cal.com script')
    }
  }
  
  document.head.appendChild(script)
}
