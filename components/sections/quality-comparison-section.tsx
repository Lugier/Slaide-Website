'use client'

import { useEffect, useState, useRef, memo } from 'react'

// Custom Hook für animierte Zahlen
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutExpo = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x)

      setCount(Math.floor(easeOutExpo(progress) * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, start])

  return count
}

function QualityComparisonSectionComponent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Data Points
  const humanErrors = useCounter(19, 2500, isVisible)
  const aiErrors = useCounter(34, 1500, isVisible)
  const humanTime = useCounter(140, 3000, isVisible)
  const aiTime = useCounter(3, 800, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="benchmark"
      className="py-24 md:py-32 bg-white border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Manuell vs. Review
          </h2>
          <div className={`text-lg md:text-xl text-gray-500 max-w-2xl font-light leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Wir haben Review gegen erfahrene Berater antreten lassen.
            Die Ergebnisse definieren einen neuen Standard für Ihre Qualitätssicherung.
          </div>
        </div>

        {/* The Dashboard Interface */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          {/* COLUMN 1: SPEED */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-8 pb-4 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 tracking-tight">Verarbeitungszeit</h3>
            </div>

            <div className="space-y-12 group/speed">
              {/* Item 1: Manual */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-medium text-gray-500">Erfahrene Berater (Ø)</span>
                  <span className="text-2xl font-mono text-gray-400 tracking-tight">{humanTime} min</span>
                </div>
                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-200 rounded-full transition-all duration-[2000ms] ease-out" style={{ width: isVisible ? '100%' : '0%' }}></div>
                </div>
              </div>

              {/* Item 2: Slaide */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-medium text-black">Review</span>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded">46x Schneller</span>
                    <span className="text-4xl font-mono font-bold text-green-600 tracking-tight">{aiTime} min</span>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden relative">
                  {/* Bar */}
                  <div className="h-full bg-green-600 rounded-full transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) delay-300 relative overflow-hidden" style={{ width: isVisible ? '2%' : '0%' }}>
                    {/* Shimmer Effect on Hover */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/speed:animate-[shimmer_1.5s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: PRECISION */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-8 pb-4 border-b border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 tracking-tight">Fehlererkennung</h3>
            </div>

            <div className="space-y-12 group/precision">
              {/* Item 1: Manual */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-medium text-gray-500">Erfahrene Berater (Ø)</span>
                  <span className="text-2xl font-mono text-gray-400 tracking-tight">{humanErrors} <span className="text-sm text-gray-300">/ 36 Fehler</span></span>
                </div>
                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full transition-all duration-[2000ms] ease-out" style={{ width: isVisible ? '53%' : '0%' }}></div>
                </div>
              </div>

              {/* Item 2: Slaide */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-medium text-black">Review</span>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded">+94% Präzision</span>
                    <span className="text-4xl font-mono font-bold text-green-600 tracking-tight">{aiErrors} <span className="text-sm text-green-600/60 font-medium">/ 36 Fehler</span></span>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                  {/* Bar */}
                  <div className="h-full bg-green-600 rounded-full transition-all duration-[1500ms] ease-out delay-300 relative overflow-hidden" style={{ width: isVisible ? '94%' : '0%' }}>
                    {/* Shimmer Effect on Hover */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/precision:animate-[shimmer_1.5s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Context Note */}
        <div className={`mt-8 text-sm text-gray-400 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>Das Dokument war eine Präsentation mit 20 Seiten und 36 Fehlern.</p>
        </div>

        {/* Footer Metrics */}
        <div className={`mt-24 pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="group cursor-default">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 group-hover:text-gray-900 transition-colors duration-500">Effizienz</div>
            <div className="text-xl font-medium text-black">-98% Zeitaufwand</div>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
              Eliminiert den Flaschenhals manueller Korrekturschleifen. Sofortige Ergebnisse statt stundenlanges Warten.
            </p>
          </div>
          <div className="group cursor-default">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 group-hover:text-gray-900 transition-colors duration-500">Konsistenz</div>
            <div className="text-xl font-medium text-black">Konstante Präzision</div>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
              Seite 1 wird genauso präzise und aufmerksam geprüft wie Seite 100 – ohne Ermüdungsfaktor.
            </p>
          </div>
          <div className="group cursor-default">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 group-hover:text-gray-900 transition-colors duration-500">Impact</div>
            <div className="text-xl font-medium text-black">Board-Level Plausibilität</div>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
              Stellt sicher, dass jedes Dokument nicht nur fehlerfrei, sondern in sich schlüssig und plausibel ist.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export const QualityComparisonSection = memo(QualityComparisonSectionComponent)
