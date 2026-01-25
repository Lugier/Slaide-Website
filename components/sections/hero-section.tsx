'use client'

import { memo, useCallback } from 'react'
import { ArrowRight, FileText, Shield, ChevronDown, CheckCircle2, TrendingUp } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'

function HeroSectionComponent(): JSX.Element {
  // Removed state-based visibility to avoid LCP delay
  // Animation is now handled purely by CSS

  const handleDemoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    openCalComOverlay()
  }, [])

  const handleScrollDown = (): void => {
    const nextSection = document.querySelector('#demo') || document.querySelector('section:nth-of-type(2)')
    if (nextSection) {
      const offset = 100
      const targetPosition = (nextSection as HTMLElement).offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden relative bg-white">
      {/* Background Grid with Fade - Grey Scale */}
      <div className="absolute inset-0 tech-grid -z-10 opacity-[0.15]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white -z-10"></div>


      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Content */}
        <div className="space-y-8">
          <div>
            {/* Status Badge - Subtle Monochrome */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 mb-8 hero-status-badge shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 status-dot-pulse"></span>
              <span className="unix-badge text-black tracking-widest font-bold">REVIEW BY SLAIDE</span>
            </div>

            {/* Headline - Stark Black */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] md:leading-[1] mb-8 hero-headline text-black">
              <span className="block hero-line-1">
                Perfektion.
              </span>
              <span className="block hero-line-2 bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900 bg-clip-text text-transparent">
                Ohne Kompromisse.
              </span>
            </h1>

            {/* Description - Focused & Sharp */}
            <p className="text-xl md:text-2xl text-grey-medium leading-relaxed max-w-4xl mx-auto font-light mb-10 hero-description tracking-tight">
              In Ihren Dokumenten gibt es keinen Spielraum für Fehler. Review analysiert Logik, Konsistenz und Zahlen mit maschineller Präzision – für Ergebnisse, die keine Fragen offen lassen.
            </p>
          </div>

          {/* Enhanced CTAs - Stark Contrast */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-ctas">
            <a
              href="#"
              onClick={handleDemoClick}
              className="group bg-black text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-gray-900 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 min-h-[48px] focus:outline-none hero-cta-primary relative overflow-hidden text-lg"
              aria-label="Demo buchen"
            >
              <span className="relative z-10 flex items-center gap-2">
                Demo vereinbaren <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </a>
            <a
              href="#roi"
              className="border-2 border-black text-black px-8 py-4 rounded-xl font-semibold text-center hover:bg-black hover:text-white transition-all bg-white min-h-[48px] flex items-center justify-center focus:outline-none hero-cta-secondary text-lg"
              aria-label="ROI Rechner"
            >
              ROI berechnen
            </a>
          </div>

          {/* Enhanced Verified Badges - Grey Scale with Selective Blue Accent */}
          <div className="pt-10 flex flex-wrap justify-center gap-8 md:gap-12 hero-badges">
            <div className="space-y-1 group cursor-default">
              <div className="unix-badge text-gray-400 mb-1">INPUT</div>
              <div className="flex gap-2 text-black items-center justify-center font-semibold">
                <FileText className="w-4 h-4 text-gray-400" aria-hidden="true" />
                <span>PDF, PPTX & Word</span>
              </div>
            </div>
            <div className="space-y-1 group cursor-default">
              <div className="unix-badge text-gray-400 mb-1">DATA SECURITY</div>
              <div className="flex gap-2 text-black items-center justify-center font-semibold">
                <Shield className="w-4 h-4 text-black" aria-hidden="true" />
                <span>DSGVO Konform</span>
              </div>
            </div>
            <div className="space-y-1 group cursor-default">
              <div className="unix-badge text-gray-400 mb-1">ROI</div>
              <div className="flex gap-2 text-black items-center justify-center font-semibold">
                <TrendingUp className="w-4 h-4 text-gray-400" aria-hidden="true" />
                <div className="flex flex-col items-center leading-tight">
                  <span className="block">Ø 532€ Ersparnis</span>
                  <span className="text-[10px] text-gray-400 font-normal mt-1 leading-none">pro Dokument</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="hidden md:flex absolute bottom-8 left-0 right-0 mx-auto flex-col items-center gap-2 text-gray-400 hover:text-black transition-colors focus:outline-none rounded-full p-2 scroll-indicator z-30 w-fit"
        aria-label="Nach unten scrollen"
        type="button"
      >
        <span className="text-xs unix-badge mb-1 block text-center">REVIEW ENTDECKEN</span>
        <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
