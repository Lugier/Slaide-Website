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
  
  // Harmonized Data Points (32 Slides)
  const humanErrors = useCounter(27, 2500, isVisible)
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="benchmark"
      className="py-32 bg-white border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Ultra Clean */}
        <div className="mb-20 max-w-2xl">
          <h2 className={`text-4xl font-semibold tracking-tight text-black mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Performance Benchmark
          </h2>
          <p className={`text-lg text-gray-500 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Vergleich basierend auf einem 32-seitigen Operational Due Diligence Deck.
          </p>
        </div>

        {/* The Grid Interface */}
        <div className="border-t border-black/5">
            
            {/* ROW 1: Manual Workflow */}
            <div className={`group relative grid md:grid-cols-12 gap-8 py-10 border-b border-black/5 items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Label */}
                <div className="md:col-span-3">
                    <div className="font-medium text-gray-900">Manuelle Prüfung</div>
                    <div className="text-sm text-gray-400 mt-0.5">Senior Associate</div>
                </div>

                {/* Visualization - Timeline */}
                <div className="md:col-span-5 relative h-12 flex items-center">
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                         <div 
                            className="h-full bg-gray-300 rounded-full transition-all duration-[3000ms] ease-out" 
                            style={{ width: isVisible ? '100%' : '0%' }} 
                        />
                    </div>
                    {/* Marker for time */}
                    <div className="absolute top-8 left-0 text-[10px] text-gray-400 font-mono tracking-wider uppercase">0m</div>
                    <div className="absolute top-8 right-0 text-[10px] text-gray-400 font-mono tracking-wider uppercase">224m</div>
                </div>

                {/* Stats */}
                <div className="md:col-span-2 text-right md:text-left md:pl-8">
                    <div className="text-3xl font-mono text-gray-400 tracking-tighter tabular-nums leading-none">
                        {humanTime}<span className="text-sm text-gray-400 ml-1 font-sans font-normal">min</span>
                    </div>
                </div>
                <div className="md:col-span-2 text-right">
                    <div className="text-3xl font-mono text-gray-400 tracking-tighter tabular-nums leading-none">
                         {humanErrors}<span className="text-lg text-gray-300 font-sans font-normal">/54</span>
                    </div>
                </div>
            </div>

            {/* ROW 2: Slaide Engine */}
            <div className={`relative grid md:grid-cols-12 gap-8 py-10 border-b border-black/5 items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Active Indicator Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black scale-y-0 origin-top transition-transform duration-1000 delay-500" style={{ transform: isVisible ? 'scaleY(1)' : 'scaleY(0)' }}></div>

                {/* Label */}
                <div className="md:col-span-3 pl-4 md:pl-0">
                    <div className="font-semibold text-black">Slaide Engine</div>
                    <div className="text-sm text-gray-500 mt-0.5">Automated Audit</div>
                </div>

                {/* Visualization - Timeline */}
                <div className="md:col-span-5 relative h-12 flex items-center">
                    <div className="w-full h-1.5 bg-gray-100/50 rounded-full overflow-hidden">
                         <div 
                            className="h-full bg-black rounded-full transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) delay-500" 
                            style={{ width: isVisible ? '1.8%' : '0%' }} 
                        />
                    </div>
                    {/* Pulsing Dot at the end of the very short bar */}
                    <div 
                        className="absolute w-2 h-2 bg-black rounded-full top-1/2 -translate-y-1/2 transition-all duration-1000 delay-500"
                        style={{ left: isVisible ? '1.8%' : '0%', opacity: isVisible ? 1 : 0 }}
                    >
                         <div className="absolute inset-0 bg-black rounded-full animate-ping opacity-20"></div>
                    </div>
                </div>

                {/* Stats */}
                <div className="md:col-span-2 text-right md:text-left md:pl-8">
                    <div className="text-3xl font-mono text-black tracking-tighter tabular-nums leading-none">
                        0{aiTime}<span className="text-sm text-gray-500 ml-1 font-sans font-normal">min</span>
                    </div>
                </div>
                <div className="md:col-span-2 text-right">
                    <div className="text-3xl font-mono text-black tracking-tighter tabular-nums leading-none">
                         {aiErrors}<span className="text-lg text-gray-400 font-sans font-normal">/54</span>
                    </div>
                </div>
            </div>
            
            {/* Headers for Columns (visually placed below for cleaner look or just implied? Let's add them as footer legend style) */}
            <div className="grid md:grid-cols-12 gap-8 pt-4">
                 <div className="md:col-span-3"></div>
                 <div className="md:col-span-5"></div>
                 <div className="md:col-span-2 text-left md:pl-8 text-[10px] uppercase tracking-wider text-gray-400 font-medium">Zeitaufwand</div>
                 <div className="md:col-span-2 text-right text-[10px] uppercase tracking-wider text-gray-400 font-medium">Fehler gefunden</div>
            </div>

        </div>

        {/* Footer Impact Stats - The "Verdict" */}
        <div className={`mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/5 pt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
                <div className="text-sm text-gray-500 mb-2 font-medium">Verarbeitungszeit</div>
                <div className="text-4xl font-semibold tracking-tight text-black">-98%</div>
                <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                    Reduziert von Stunden auf Minuten. Sofortige Ergebnisse statt Warten über Nacht.
                </div>
            </div>
            <div>
                <div className="text-sm text-gray-500 mb-2 font-medium">Gefundene Fehler</div>
                <div className="text-4xl font-semibold tracking-tight text-black">+89%</div>
                <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                    Erkennt selbst mikroskopische Inkonsistenzen in Schriftgrößen und Abständen.
                </div>
            </div>
            <div>
                <div className="text-sm text-gray-500 mb-2 font-medium">Ermüdung</div>
                <div className="text-4xl font-semibold tracking-tight text-black">Zero</div>
                <div className="mt-2 text-sm text-gray-400 leading-relaxed">
                    Konstante Leistung. Seite 1 wird genauso präzise geprüft wie Seite 100.
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}

export const QualityComparisonSection = memo(QualityComparisonSectionComponent)
