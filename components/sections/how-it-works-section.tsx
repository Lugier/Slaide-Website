'use client'

import { useEffect, useRef, useState, memo, useCallback } from 'react'
import { Layers, Cpu, FileCheck, ArrowRight, Calendar } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'
import { useLanguage } from '@/lib/context/language-context'

interface Stage {
  number: string
  title: string
  description: string
  icon: typeof Layers
  badge: string
  badgeColor: string
  features?: string[]
  isHighlighted?: boolean
}

function HowItWorksSectionComponent(): JSX.Element {
  const { t } = useLanguage()
  const [activeStage, setActiveStage] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const sectionRef = useRef<HTMLElement>(null)
  const depthWordRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = useCallback((index: number) => {
    setActiveStage(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setActiveStage(null)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    const currentSection = sectionRef.current
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !depthWordRef.current) return

    let rafId: number | null = null
    let lastProgress = -1
    const THRESHOLD = 0.01 // Only update if progress changes by more than 1%

    const updateTransform = (progress: number): void => {
      if (!depthWordRef.current) return

      // Parallax effect: "Tiefe" moves deeper into the screen
      const depthOffset = progress * 80 // Move up to 80px deeper
      const scale = 1 + progress * 0.2 // Scale up to 1.2x
      const opacity = Math.min(1, 0.5 + progress * 0.5) // Fade in as we scroll

      // Use CSS variables to avoid forced reflows
      depthWordRef.current.style.setProperty('--depth-offset', `${depthOffset}px`)
      depthWordRef.current.style.setProperty('--depth-scale', String(scale))
      depthWordRef.current.style.setProperty('--depth-opacity', String(opacity))
    }

    const handleScroll = (): void => {
      if (!sectionRef.current || !depthWordRef.current) return

      // Batch all DOM reads first (no forced reflow)
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      // Calculate scroll progress within section (0 to 1)
      const progress = Math.max(
        0,
        Math.min(1, 1 - (sectionTop / (windowHeight + sectionHeight)))
      )

      // Only update if progress changed significantly (reduce unnecessary updates)
      if (Math.abs(progress - lastProgress) < THRESHOLD) return
      lastProgress = progress

      // Schedule DOM writes in next frame (after all reads are done)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }

      rafId = requestAnimationFrame(() => {
        updateTransform(progress)
        rafId = null
      })
    }

    // Use IntersectionObserver to only run when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener('scroll', handleScroll, { passive: true })
            handleScroll() // Initial call
          } else {
            window.removeEventListener('scroll', handleScroll)
          }
        })
      },
      { threshold: 0, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  const stages: Stage[] = [
    {
      number: '01',
      title: t('howItWorks.stages.ingest.title'),
      description: t('howItWorks.stages.ingest.desc'),
      icon: Layers,
      badge: t('howItWorks.stages.ingest.badge'),
      badgeColor: 'text-gray-400',
    },
    {
      number: '02',
      title: t('howItWorks.stages.core.title'),
      description: t('howItWorks.stages.core.desc'),
      features: [
        t('howItWorks.stages.core.features.0'),
        t('howItWorks.stages.core.features.1'),
        t('howItWorks.stages.core.features.2'),
        t('howItWorks.stages.core.features.3'),
        t('howItWorks.stages.core.features.4'),
      ],
      icon: Cpu,
      badge: t('howItWorks.stages.core.badge'),
      badgeColor: 'text-white',
      isHighlighted: true,
    },
    {
      number: '03',
      title: t('howItWorks.stages.synthesis.title'),
      description: t('howItWorks.stages.synthesis.desc'),
      icon: FileCheck,
      badge: t('howItWorks.stages.synthesis.badge'),
      badgeColor: 'text-gray-400',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="how"
      className="relative py-32 md:py-40 px-6 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505] text-white overflow-hidden perspective-1000"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] bg-radial-dots"
        ></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20 md:mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
              <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">
                {t('howItWorks.badge')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-white">
              {t('howItWorks.headline')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
              {t('howItWorks.subline')}
            </p>
          </div>
        </div>

        {/* Pipeline Visual */}
        <div className="relative">
          {/* Animated Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
            <div
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent transition-all duration-2000 transform-origin-left ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
            ></div>

            {/* Animated Flow Indicator */}
            {isVisible && (
              <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent flow-indicator">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60 shadow-lg shadow-white/20"></div>
                </div>
              </div>
            )}
          </div>

          {/* Stage Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const isActive = activeStage === index
              const delay = index * 200

              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 dynamic-transition-delay ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                    }`}
                  data-transition-delay={delay}
                  ref={(el) => {
                    if (el) {
                      el.style.setProperty('--transition-delay', `${delay}ms`)
                    }
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Card Container */}
                  <div
                    className={`relative h-full bg-gradient-to-br from-[#0a0a0a] to-[#050505] border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-500 ${stage.isHighlighted
                      ? 'border-white/20'
                      : 'border-gray-800/50 hover:border-gray-700/50'
                      } ${isActive
                        ? 'transform scale-[1.02]'
                        : 'hover:scale-[1.01]'
                      }`}
                  >
                    {/* Subtle Background Overlay */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 ${isActive || stage.isHighlighted ? 'opacity-100' : 'group-hover:opacity-30'
                        }`}
                    ></div>

                    {/* Glow Effect for Highlighted Card - auf dem Rahmen */}
                    {stage.isHighlighted && (
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.15)] pointer-events-none animate-pulse"></div>
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div
                        className={`relative mb-6 md:mb-8 transition-all duration-500 ${isActive || stage.isHighlighted
                          ? 'transform scale-110'
                          : 'group-hover:scale-105'
                          }`}
                      >
                        <div
                          className={`w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 ${stage.isHighlighted
                            ? 'bg-white text-black shadow-lg shadow-white/20'
                            : 'bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 group-hover:text-white group-hover:from-gray-700 group-hover:to-gray-800'
                            }`}
                        >
                          <Icon className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
                        </div>

                        {/* Icon Glow */}
                        {stage.isHighlighted && (
                          <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl -z-10 animate-pulse"></div>
                        )}
                      </div>

                      {/* Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-6 transition-all duration-300 ${isActive ? 'border-white/20 bg-white/10' : ''
                          }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${stage.isHighlighted ? 'bg-white' : 'bg-gray-500'
                            } animate-pulse`}
                        ></div>
                        <span
                          className={`text-xs font-mono font-medium uppercase tracking-wider ${stage.badgeColor}`}
                        >
                          {stage.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 leading-tight">
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-base md:text-lg leading-relaxed mb-6 transition-colors duration-300 ${stage.isHighlighted ? 'text-gray-200' : 'text-gray-400 group-hover:text-gray-300'
                          }`}
                      >
                        {stage.description}
                      </p>

                      {/* Features List */}
                      {stage.features && (
                        <ul className="space-y-3">
                          {stage.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-3 text-sm md:text-base text-gray-300"
                            >
                              <div className="flex-shrink-0">
                                <div
                                  className={`w-1.5 h-1.5 rounded-full ${stage.isHighlighted ? 'bg-white' : 'bg-gray-500'
                                    }`}
                                ></div>
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* CTA Button (only visible on hover) */}
                      <button
                        onClick={openCalComOverlay}
                        className={`mt-8 flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 cursor-pointer group/button ${isActive
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-2 pointer-events-none'
                          }`}
                        type="button"
                        aria-label="Kostenlose Demo buchen"
                      >
                        <span>{t('howItWorks.cta.text')}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" aria-hidden="true" />
                      </button>
                    </div>

                  </div>

                  {/* Connection Arrow (Mobile) */}
                  {index < stages.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-gray-700 to-transparent"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-24 md:mt-32 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-gray-400 text-sm md:text-base mb-6">
            {t('howItWorks.cta.text')}
          </p>
          <button
            onClick={openCalComOverlay}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95"
            type="button"
            aria-label="Kostenlose Demo buchen"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            <span>{t('howItWorks.cta.button')}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

export const HowItWorksSection = memo(HowItWorksSectionComponent)
