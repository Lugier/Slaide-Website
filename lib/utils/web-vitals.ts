/**
 * Web Vitals Reporting Utility
 * Collects and reports Core Web Vitals metrics to Vercel Analytics
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals'

/**
 * Reports a metric to Vercel Analytics
 */
function reportToAnalytics(metric: Metric): void {
  // Vercel Analytics automatically collects web vitals
  // This function can be extended to send to custom analytics
  if (typeof window !== 'undefined' && (window as any).va) {
    // Vercel Analytics is already handling this
    return
  }

  // Log in development for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', metric.name, metric.value, metric.id)
  }
}

/**
 * Initialize Web Vitals collection
 * Should be called in a client component
 */
export function initWebVitals(): void {
  if (typeof window === 'undefined') return

  // Collect all Core Web Vitals
  // Note: onFID was replaced by onINP in web-vitals v5.x
  onCLS(reportToAnalytics)
  onINP(reportToAnalytics) // Interaction to Next Paint (replaces First Input Delay)
  onFCP(reportToAnalytics)
  onLCP(reportToAnalytics)
  onTTFB(reportToAnalytics)
}
