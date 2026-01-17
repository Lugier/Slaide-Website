'use client'

import { useEffect, useState, useRef, memo } from 'react'
import { Timer, CheckCircle2, AlertCircle, Zap, User } from 'lucide-react'

function QualityComparisonSectionComponent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Observer für Animation beim Scrollen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="py-24 md:py-32 bg-white border-t border-gray-100 overflow-hidden relative"
      id="quality-comparison"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-30 mix-blend-multiply" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-gray-600 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Benchmark Data
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">
            Präzision im Härtetest
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Wir haben ein Pitch Deck mit <span className="font-semibold text-black">32 Seiten</span> und <span className="font-semibold text-black">54 versteckten Fehlern</span> erstellt. 
            Hier ist das Ergebnis im direkten Vergleich.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* CARD: Mensch (Status Quo) */}
          <div className={`relative p-8 rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm transition-all duration-700 delay-100 hover:shadow-lg hover:border-gray-300 group/human ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
                <User className="w-7 h-7 text-gray-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Senior Associate</h3>
                <p className="text-sm text-gray-500 font-medium">Manuelle Prüfung</p>
              </div>
            </div>

            {/* Metric: Zeit */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-3 font-medium">
                <span className="text-gray-600 flex items-center gap-2"><Timer className="w-4 h-4" /> Zeitaufwand</span>
                <span className="text-gray-900">60 min</span>
              </div>
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gray-400 rounded-full transition-all duration-[2000ms] ease-out relative"
                  style={{ width: isVisible ? '100%' : '0%' }}
                >
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20"></div>
                </div>
              </div>
            </div>

            {/* Metric: Fehler gefunden */}
            <div>
              <div className="flex justify-between text-sm mb-3 font-medium">
                <span className="text-gray-600 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Fehler gefunden</span>
                <span className="text-gray-900">27 / 54 (50%)</span>
              </div>
              <div className="relative">
                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner group-hover/human:ring-2 ring-gray-200 transition-all">
                    <div 
                    className="h-full bg-gray-500 rounded-full transition-all duration-[2000ms] ease-out relative"
                    style={{ width: isVisible ? '50%' : '0%' }}
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20"></div>
                    </div>
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/4 -translate-x-1/2 mt-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover/human:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/human:translate-y-0 pointer-events-none shadow-xl">
                  Konzentrationsabfall ab Min 30
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD: Slaide AI (Winner) */}
          <div className={`relative p-8 rounded-3xl border-2 border-black bg-white shadow-2xl shadow-black/5 transition-all duration-700 delay-300 transform group/ai hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Winner Badge */}
            <div className="absolute -top-4 right-8 bg-black text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 animate-pulse-slow z-20">
              <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              Game Changer
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white shadow-lg shadow-black/20">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Slaide Engine</h3>
                <p className="text-sm text-gray-500 font-medium">AI-Powered Audit</p>
              </div>
            </div>

            {/* Metric: Zeit */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-3 font-medium">
                <span className="text-gray-600 flex items-center gap-2"><Timer className="w-4 h-4" /> Zeitaufwand</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-md">4 min (15x schneller)</span>
              </div>
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-black rounded-full transition-all duration-[1000ms] cubic-bezier(0.34, 1.56, 0.64, 1) delay-500 relative"
                  style={{ width: isVisible ? '6.6%' : '0%' }}
                >
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/30"></div>
                </div>
              </div>
            </div>

            {/* Metric: Fehler gefunden */}
            <div>
              <div className="flex justify-between text-sm mb-3 font-medium">
                <span className="text-gray-600 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Fehler gefunden</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-md">49 / 54 (91%)</span>
              </div>
              <div className="relative">
                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner group-hover/ai:ring-2 ring-green-100 transition-all">
                    <div 
                    className="h-full bg-green-500 rounded-full transition-all duration-[1500ms] cubic-bezier(0.22, 1, 0.36, 1) delay-300 relative"
                    style={{ width: isVisible ? '91%' : '0%' }}
                    >
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/30 animate-pulse"></div>
                    </div>
                </div>
                 {/* Tooltip */}
                 <div className="absolute -bottom-10 right-0 mt-2 px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-lg opacity-0 group-hover/ai:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/ai:translate-y-0 pointer-events-none shadow-xl shadow-green-900/20">
                  Findet auch konsistente Inkonsistenzen
                  <div className="absolute -top-1 right-8 w-2 h-2 bg-green-600 rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Conclusion */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-block p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm max-w-2xl">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              <span className="font-semibold text-black">Fazit:</span> Slaide findet <span className="text-green-600 font-bold">81% mehr Fehler</span> in <span className="text-black font-bold">einem Fünfzehntel</span> der Zeit – ohne Kaffeepause.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export const QualityComparisonSection = memo(QualityComparisonSectionComponent)
