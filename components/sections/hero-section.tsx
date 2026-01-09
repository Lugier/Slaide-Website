'use client'

import { useEffect, useState, memo, useCallback } from 'react'
import { ArrowRight, FileText, Shield, ChevronDown, CheckCircle2, TrendingUp } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'

function HeroSectionComponent(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [visibleWords, setVisibleWords] = useState<number>(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Staggered Animation: Wörter erscheinen nacheinander
    const words = ['Sehen', 'Sie,', 'was', 'Menschen', 'übersehen.']
    
    // Zeige Wörter nacheinander mit 150ms Verzögerung
    words.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(index + 1)
      }, index * 150)
    })
  }, [])

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
    <section className="pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden relative">
      {/* Background Grid with Fade */}
      <div className="absolute inset-0 tech-grid -z-10 opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white -z-10"></div>


      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Content */}
        <div className="space-y-8">
          <div>
            {/* Enhanced Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-8 hero-status-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 status-dot-pulse"></span>
              <span className="unix-badge text-grey-dark">SYSTEM STATUS: ONLINE</span>
            </div>

            {/* Headline mit verbesserter Darstellung */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.05] mb-6 hero-headline">
              <span className="inline-block hero-line-1">
                {['Sehen', 'Sie,', 'was', 'Menschen', 'übersehen.'].map((word, index) => {
                  const isVisible = visibleWords > index
                  
                  return (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] text-black font-semibold ${
                        isVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {word}
                      {index < 4 && <span className="inline-block w-2 md:w-3"></span>}
                    </span>
                  )
                })}
              </span>
            </h1>

            {/* Description with fade-in */}
            <p className="text-lg md:text-xl lg:text-2xl text-grey-medium leading-relaxed max-w-2xl mx-auto font-light mb-10 hero-description">
              Multimodale Analyse deckt Inkonsistenzen über hunderte Seiten auf. Von der falschen Summe im Anhang bis zum Widerspruch in zentralen Aussagen. Verhindern Sie Reputationsschäden, bevor sie entstehen.
            </p>
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-ctas">
            <a
              href="#"
              onClick={handleDemoClick}
              className="group bg-black text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-gray-800 transition-all shadow-xl shadow-gray-200/50 flex items-center justify-center gap-2 min-h-[48px] focus:outline-none hero-cta-primary relative overflow-hidden"
              aria-label="Demo buchen"
            >
              <span className="relative z-10 flex items-center gap-2">
                Demo buchen <ArrowRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a
              href="#roi"
              className="border-2 border-gray-200 text-black px-8 py-4 rounded-xl font-semibold text-center hover:border-gray-900 hover:bg-gray-50 transition-all bg-white min-h-[48px] flex items-center justify-center focus:outline-none hero-cta-secondary"
              aria-label="ROI Rechner"
            >
              ROI Rechner
            </a>
          </div>

          {/* Enhanced Verified Badges */}
          <div className="pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-10 hero-badges">
            <div className="space-y-2 group cursor-default">
              <div className="unix-badge text-grey-light">INPUT</div>
              <div className="flex gap-3 text-grey-dark items-center justify-center">
                <FileText className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" aria-hidden="true" />
                <span className="font-medium text-sm">PDF, PPTX, DOCX</span>
              </div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="unix-badge text-grey-light">SECURITY</div>
              <div className="flex gap-3 text-grey-dark items-center justify-center">
                <Shield className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" aria-hidden="true" />
                <span className="font-medium text-sm">DSGVO Konform</span>
              </div>
            </div>
            <div className="space-y-2 group cursor-default">
              <div className="unix-badge text-grey-light">ROI</div>
              <div className="flex gap-3 text-grey-dark items-center justify-center">
                <TrendingUp className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" aria-hidden="true" />
                <span className="font-medium text-sm">Ø 532€ pro Dokument</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-grey-medium hover:text-black transition-colors focus:outline-none rounded-full p-2 scroll-indicator w-full max-w-fit"
        aria-label="Nach unten scrollen"
        type="button"
      >
        <span className="text-xs unix-badge mb-1">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
      </button>
    </section>
  )
}

export const HeroSection = memo(HeroSectionComponent)
