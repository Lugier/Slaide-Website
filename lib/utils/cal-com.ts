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

  const width = 800
  const height = 600
  const left = window.screen.width / 2 - width / 2
  const top = window.screen.height / 2 - height / 2

  window.open(
    CAL_COM_URL,
    'cal',
    `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no`
  )
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

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://cal.com/embed/embed.js'
  script.setAttribute('data-cal-namespace', 'cal')
  script.setAttribute('data-cal-link', 'slaide/45min')
  script.async = true
  document.head.appendChild(script)
}
