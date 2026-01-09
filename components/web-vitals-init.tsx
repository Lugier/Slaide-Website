'use client'

import { useEffect } from 'react'
import { initWebVitals } from '@/lib/utils/web-vitals'

/**
 * Client component to initialize Web Vitals collection
 * Must be a client component to access window object
 */
export function WebVitalsInit(): null {
  useEffect(() => {
    initWebVitals()
  }, [])

  return null
}
