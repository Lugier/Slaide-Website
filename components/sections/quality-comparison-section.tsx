'use client'

import { useEffect, useState, useRef, memo } from 'react'
import { Clock, CheckCircle, Zap } from 'lucide-react'

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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="benchmark"
      className="py-24 md:py-32 bg-white border-t border-gray-100 font-sans"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header - Simple & Direct */}
        <div className="mb-20">
          <div className={`text-sm font-mono text-gray-500 uppercase tracking-widest mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Benchmark Results
          </div>
          <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight text-black mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            32-Page Audit Analysis
          </h2>
        </div>

        {/* The Dashboard Interface */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* COLUMN 1: SPEED */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900">Processing Time</h3>
                </div>

                <div className="space-y-12">
                    {/* Item 1: Manual */}
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-medium text-gray-500">Manual Review</span>
                            <span className="text-2xl font-mono text-gray-400 tracking-tight">{humanTime}m</span>
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
                                <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded">56x Faster</span>
                                <span className="text-4xl font-mono font-bold text-black tracking-tight">{aiTime}m</span>
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
                    <h3 className="text-lg font-medium text-gray-900">Error Detection</h3>
                </div>

                 <div className="space-y-12">
                    {/* Item 1: Manual */}
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-medium text-gray-500">Manual Review</span>
                            <span className="text-2xl font-mono text-gray-400 tracking-tight">{humanErrors} <span className="text-sm text-gray-300">/ 54</span></span>
                        </div>
                        <div className="h-2 w-full bg-gray-50 rounded-sm overflow-hidden">
                            <div className="h-full bg-gray-300 rounded-sm transition-all duration-[2000ms] ease-out" style={{ width: isVisible ? '50%' : '0%' }}></div>
                        </div>
                    </div>

                    {/* Item 2: Slaide */}
                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-sm font-medium text-black">Slaide Engine</span>
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded">+89% Precision</span>
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
                 <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Efficiency Gain</div>
                 <div className="text-xl font-medium text-black">Reduces review cycles by 90%</div>
                 <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Eliminates the bottleneck of manual proofreading, allowing teams to focus on narrative and strategy.
                 </p>
            </div>
            <div>
                 <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Consistency</div>
                 <div className="text-xl font-medium text-black">Zero fatigue factor</div>
                 <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Maintains 100% analytical precision from page 1 to page 100, regardless of time of day.
                 </p>
            </div>
            <div>
                 <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Impact</div>
                 <div className="text-xl font-medium text-black">Board-ready confidence</div>
                 <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Ensures every document leaving the firm meets the highest standards of visual and logical integrity.
                 </p>
            </div>
        </div>

      </div>
    </section>
  )
}

export const QualityComparisonSection = memo(QualityComparisonSectionComponent)
