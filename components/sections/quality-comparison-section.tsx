'use client'

import { useEffect, useState, useRef, memo } from 'react'
import { Clock, CheckCircle, Info } from 'lucide-react'

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
  const humanErrors = useCounter(29, 2500, isVisible)
  const aiErrors = useCounter(51, 1500, isVisible)
  const humanTime = useCounter(224, 3000, isVisible) 
  const aiTime = useCounter(4, 800, isVisible)

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
        
        {/* Header - Minimalist */}
        <div className="mb-20">
            <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight text-black mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Der direkte Performance-Vergleich.
            </h2>
             <div className={`text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Wir haben die Slaide Engine gegen erfahrene Senior Associates antreten lassen. 
                Die Ergebnisse definieren einen neuen Standard für Qualitätssicherung.
                
                {/* Inline Info Trigger */}
                <span className="group relative inline-block ml-2 align-middle cursor-help">
                    <Info className="w-5 h-5 text-gray-400 hover:text-black transition-colors" />
                    
                    {/* Tooltip Content */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-80 p-5 bg-black text-white text-xs leading-relaxed rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-xl pointer-events-none transform translate-y-2 group-hover:translate-y-0 text-left font-sans">
                        <p className="font-semibold mb-2 text-white">Methodik:</p>
                        <p className="text-gray-300 mb-2">
                            Wir haben ein komplexes Operational Due Diligence Deck mit 54 versteckten Fehlern (Logik, Formatierung, Datenkonsistenz) präpariert.
                        </p>
                        <p className="text-gray-300">
                            Vergleichsbasis: Durchschnittswerte von mehreren Senior Associates (Big 4 & Strategy Consulting), die das Deck unter realistischen Zeitbedingungen geprüft haben.
                        </p>
                        {/* Arrow */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black"></div>
                    </div>
                </span>
            </div>
        </div>

        {/* The Dashboard Interface */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* COLUMN 1: SPEED */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900">Verarbeitungszeit</h3>
                </div>

                <div className="space-y-12">
                    {/* Item 1: Manual */}
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-medium text-gray-500">Manuelle Prüfung (Ø)</span>
                            <span className="text-2xl font-mono text-gray-400 tracking-tight">{humanTime} min</span>
                        </div>
                        <div className="h-2 w-full bg-gray-50 rounded-sm overflow-hidden">
                            <div className="h-full bg-gray-200 rounded-sm transition-all duration-[2000ms] ease-out" style={{ width: isVisible ? '100%' : '0%' }}></div>
                        </div>
                    </div>

                    {/* Item 2: Slaide */}
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-medium text-black">Slaide Engine</span>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded">56x Schneller</span>
                                <span className="text-4xl font-mono font-bold text-black tracking-tight">{aiTime} min</span>
                            </div>
                        </div>
                         <div className="h-2 w-full bg-gray-50 rounded-sm overflow-hidden">
                            <div className="h-full bg-black rounded-sm transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) delay-300" style={{ width: isVisible ? '2%' : '0%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* COLUMN 2: PRECISION */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                    <CheckCircle className="w-5 h-5 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900">Fehlererkennung</h3>
                </div>

                 <div className="space-y-12">
                    {/* Item 1: Manual */}
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-medium text-gray-500">Manuelle Prüfung (Ø)</span>
                            <span className="text-2xl font-mono text-gray-400 tracking-tight">{humanErrors} <span className="text-sm text-gray-300">/ 54</span></span>
                        </div>
                        <div className="h-2 w-full bg-gray-50 rounded-sm overflow-hidden">
                            <div className="h-full bg-gray-300 rounded-sm transition-all duration-[2000ms] ease-out" style={{ width: isVisible ? '53%' : '0%' }}></div>
                        </div>
                    </div>

                    {/* Item 2: Slaide */}
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-medium text-black">Slaide Engine</span>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded">+76% Präzision</span>
                                <span className="text-4xl font-mono font-bold text-black tracking-tight">{aiErrors} <span className="text-sm text-gray-400 font-medium">/ 54</span></span>
                            </div>
                        </div>
                         <div className="h-2 w-full bg-gray-50 rounded-sm overflow-hidden">
                            <div className="h-full bg-black rounded-sm transition-all duration-[1500ms] ease-out delay-300" style={{ width: isVisible ? '94%' : '0%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Footer Metrics */}
        <div className={`mt-24 pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div>
                 <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Effizienz</div>
                 <div className="text-xl font-medium text-black">-98% Review-Zyklen</div>
                 <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Eliminiert den Flaschenhals manueller Korrekturschleifen. Sofortige Ergebnisse statt Warten über Nacht.
                 </p>
            </div>
            <div>
                 <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Konsistenz</div>
                 <div className="text-xl font-medium text-black">Konstante Präzision</div>
                 <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Seite 1 wird genauso präzise und aufmerksam geprüft wie Seite 100 – ohne Ermüdungsfaktor.
                 </p>
            </div>
            <div>
                 <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Impact</div>
                 <div className="text-xl font-medium text-black">Board-Level Plausibilität</div>
                 <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Stellt sicher, dass jedes Dokument nicht nur fehlerfrei, sondern in sich schlüssig und plausibel ist.
                 </p>
            </div>
        </div>

      </div>
    </section>
  )
}

export const QualityComparisonSection = memo(QualityComparisonSectionComponent)
