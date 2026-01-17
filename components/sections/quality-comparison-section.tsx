'use client'

import { useEffect, useState, useRef, memo } from 'react'
import { Timer, CheckCircle2, Search, Zap, Clock, AlertCircle, BarChart3 } from 'lucide-react'

// Custom Hook für animierte Zahlen
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4)
      
      setCount(Math.floor(easeOutQuart(progress) * end))

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
  
  // Harmonized Data Points (32 Slides)
  const humanErrors = useCounter(27, 2000, isVisible)
  const aiErrors = useCounter(51, 2000, isVisible)
  const humanTime = useCounter(224, 2500, isVisible) // ~3.7h
  const aiTime = useCounter(4, 1000, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="quality-comparison"
      className="py-24 md:py-32 bg-white border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header - Clean & Professional */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <BarChart3 className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
          </div>
          <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-gray-900 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Benchmark: Qualität & Geschwindigkeit
          </h2>
          <p className={`text-lg text-gray-500 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Wir haben ein Pitch Deck mit <span className="font-medium text-gray-900">32 Seiten</span> und <span className="font-medium text-gray-900">54 versteckten Fehlern</span> analysiert. 
            Der direkte Vergleich zeigt den Unterschied.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Card 1: Human Review (Standard) */}
            <div className={`p-8 rounded-2xl border border-gray-100 bg-gray-50/50 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400">
                        <span className="text-lg">1</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Manuelle Prüfung</h3>
                        <p className="text-sm text-gray-500">Senior Associate Level</p>
                    </div>
                </div>

                {/* Metric: Time */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500 flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Zeitaufwand
                        </span>
                        <span className="text-gray-900 font-medium">{humanTime} min</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full transition-all duration-[2000ms] ease-out" style={{ width: isVisible ? '100%' : '0%' }} />
                    </div>
                    <div className="mt-2 text-xs text-gray-400">~7 min pro Seite</div>
                </div>

                {/* Metric: Errors */}
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" /> Fehler gefunden
                        </span>
                        <span className="text-gray-900 font-medium">{humanErrors} / 54</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full transition-all duration-[2000ms] ease-out" style={{ width: isVisible ? '50%' : '0%' }} />
                    </div>
                    <div className="mt-2 text-xs text-gray-400">50% Erfolgsquote</div>
                </div>
            </div>

            {/* Card 2: Slaide Engine (Excellence) */}
            <div className={`p-8 rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Subtle Active Indicator */}
                <div className="absolute top-0 left-0 w-full h-1 bg-black rounded-t-2xl opacity-100"></div>

                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-sm">
                        <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Slaide Engine</h3>
                        <p className="text-sm text-gray-500">Automated Audit</p>
                    </div>
                </div>

                {/* Metric: Time */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500 flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Zeitaufwand
                        </span>
                        <span className="text-black font-semibold">{aiTime} min</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-black rounded-full transition-all duration-[1000ms] ease-out delay-300" style={{ width: isVisible ? '2%' : '0%' }} />
                    </div>
                    <div className="mt-2 text-xs text-green-600 font-medium">98% Zeitersparnis</div>
                </div>

                {/* Metric: Errors */}
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500 flex items-center gap-2">
                            <Search className="w-4 h-4" /> Fehler gefunden
                        </span>
                        <span className="text-black font-semibold">{aiErrors} / 54</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-black rounded-full transition-all duration-[1500ms] ease-out delay-200" style={{ width: isVisible ? '94%' : '0%' }} />
                    </div>
                    <div className="mt-2 text-xs text-green-600 font-medium">Findet auch konsistente Fehler</div>
                </div>
            </div>

        </div>

        {/* Footer Impact Stats */}
        <div className={`mt-16 pt-12 border-t border-gray-100 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="px-4">
                    <div className="text-3xl font-semibold text-gray-900 mb-1">56x</div>
                    <div className="text-sm text-gray-500">Schnellere Verarbeitung</div>
                </div>
                <div className="px-4 md:border-l md:border-r border-gray-100">
                    <div className="text-3xl font-semibold text-gray-900 mb-1">+89%</div>
                    <div className="text-sm text-gray-500">Gefundene Fehler</div>
                </div>
                <div className="px-4">
                    <div className="text-3xl font-semibold text-gray-900 mb-1">Zero</div>
                    <div className="text-sm text-gray-500">Ermüdungserscheinungen</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export const QualityComparisonSection = memo(QualityComparisonSectionComponent)
