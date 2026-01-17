'use client'

import { useEffect, useState, useRef, memo } from 'react'
import { Timer, CheckCircle2, XCircle, Search, BrainCircuit, ScanSearch, ArrowRight, X } from 'lucide-react'

// Custom Hook für animierte Zahlen
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function für "natürliches" Hochzählen
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
  
  // Counter Hooks
  const humanErrors = useCounter(27, 2000, isVisible)
  const aiErrors = useCounter(49, 2000, isVisible)
  const humanTime = useCounter(60, 2000, isVisible)
  const aiTime = useCounter(4, 1000, isVisible) // Schneller, weil AI schneller ist

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="quality-comparison"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header - Sales Focused */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Mensch vs. Maschine: <br className="hidden md:block" />
            <span className="text-gray-400">Das 32-Seiten Experiment.</span>
          </h2>
          <p className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Wir haben ein Pitch Deck mit <span className="font-semibold text-black">54 versteckten Fehlern</span> präpariert. 
            Dann haben wir einen erfahrenen Senior Associate gegen unsere Review Engine antreten lassen. 
            Das Ergebnis ist kein Wettbewerb – es ist ein Klassenunterschied.
          </p>
        </div>

        {/* The Duel Arena - Split Card Design */}
        <div className={`rounded-3xl overflow-hidden shadow-2xl border border-gray-200 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid md:grid-cols-2">
            
            {/* LEFT SIDE: The Human (Traditional) */}
            <div className="bg-gray-50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 relative group/human">
              <div className="absolute top-6 right-6 opacity-0 group-hover/human:opacity-100 transition-opacity text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status Quo
              </div>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <span className="text-xl grayscale opacity-70">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Manuelle Prüfung</h3>
                  <p className="text-sm text-gray-500">Erfahrener Senior Associate</p>
                </div>
              </div>

              {/* Metric 1: Fehler */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Search className="w-4 h-4" /> Gefundene Fehler
                  </span>
                  <span className="text-3xl font-bold text-gray-900 leading-none">
                    {humanErrors}<span className="text-lg text-gray-400 font-normal">/54</span>
                  </span>
                </div>
                {/* Progress Bar Container */}
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gray-500 rounded-full transition-all duration-[2000ms] ease-out"
                    style={{ width: isVisible ? '50%' : '0%' }}
                  />
                </div>
                <div className="mt-3 flex gap-2 text-xs text-red-500 font-medium opacity-0 group-hover/human:opacity-100 transition-opacity transform translate-y-1 group-hover/human:translate-y-0">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Über 50% der Fehler übersehen (Müdigkeit)</span>
                </div>
              </div>

              {/* Metric 2: Zeit */}
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-medium text-gray-600 flex items-center gap-2">
                    <Timer className="w-4 h-4" /> Benötigte Zeit
                  </span>
                  <span className="text-3xl font-bold text-gray-900 leading-none">
                    {humanTime}<span className="text-lg text-gray-400 font-normal"> min</span>
                  </span>
                </div>
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gray-400 rounded-full transition-all duration-[2000ms] ease-out"
                    style={{ width: isVisible ? '100%' : '0%' }}
                  />
                </div>
                 <div className="mt-3 text-xs text-gray-500">
                  ~2 min pro Slide (Branchenstandard)
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: The Machine (Slaide) */}
            <div className="bg-[#050505] p-8 md:p-12 relative text-white group/ai overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="absolute top-6 right-6 text-xs font-bold text-green-400 uppercase tracking-wider border border-green-400/30 px-3 py-1 rounded-full animate-pulse-slow">
                Winner
              </div>

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Review Engine</h3>
                  <p className="text-sm text-gray-400">AI-Powered Audit</p>
                </div>
              </div>

              {/* Metric 1: Fehler */}
              <div className="mb-10 relative z-10">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <ScanSearch className="w-4 h-4" /> Gefundene Fehler
                  </span>
                  <span className="text-3xl font-bold text-white leading-none text-shadow-glow">
                    {aiErrors}<span className="text-lg text-gray-600 font-normal">/54</span>
                  </span>
                </div>
                {/* Progress Bar Container */}
                <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden relative">
                   <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-[2000ms] ease-out relative shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                    style={{ width: isVisible ? '91%' : '0%' }}
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-white mix-blend-overlay animate-pulse"></div>
                  </div>
                </div>
                <div className="mt-3 flex gap-2 text-xs text-green-400 font-medium opacity-0 group-hover/ai:opacity-100 transition-opacity transform translate-y-1 group-hover/ai:translate-y-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Findet auch "unsichtbare" Inkonsistenzen</span>
                </div>
              </div>

              {/* Metric 2: Zeit */}
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <Timer className="w-4 h-4" /> Benötigte Zeit
                  </span>
                  <span className="text-3xl font-bold text-green-400 leading-none">
                    {aiTime}<span className="text-lg text-gray-600 font-normal"> min</span>
                  </span>
                </div>
                <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gray-600 rounded-full transition-all duration-[1000ms] ease-out"
                    style={{ width: isVisible ? '6.6%' : '0%' }}
                  />
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  <span className="text-green-400 font-semibold">15x schneller</span> als menschliche Reviewer
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar: The Verdict */}
          <div className="bg-black text-white p-6 md:p-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-1">Was bedeutet das für dich?</h4>
              <p className="text-gray-400 text-sm">Weniger Korrekturschleifen. Mehr Zeit für die Story.</p>
            </div>
            
            <div className="flex items-center gap-8 md:gap-12">
               <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">+81%</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Präzision</div>
               </div>
               <div className="w-px h-8 bg-gray-800 hidden md:block"></div>
               <div className="text-center">
                  <div className="text-2xl font-bold text-white">-93%</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Zeitaufwand</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export const QualityComparisonSection = memo(QualityComparisonSectionComponent)
