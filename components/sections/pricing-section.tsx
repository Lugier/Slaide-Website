'use client'

import { memo, useCallback } from 'react'
import { Check, ArrowRight, Clock, Zap, Sparkles } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'

function PricingSectionComponent(): JSX.Element {
  const handleCtaClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    openCalComOverlay()
  }, [])

  return (
    <section id="pricing-tiers" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-semibold tracking-tight mb-4 text-black">
            Warum 412€ riskieren, um 2,69€ zu sparen?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Review sichert Ihr wertvollstes Asset für <span className="font-bold text-black text-lg">weniger als 1 %</span> der Kosten ab.
          </p>
        </div>

        {/* Main Comparison Card - Expert Design */}
        <div className="reveal delay-100 relative">
          <div className="relative rounded-[2.5rem] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden isolate max-w-5xl mx-auto">

            <div className="grid lg:grid-cols-2">

              {/* LEFT: Manual Creation */}
              <div className="relative p-6 md:p-14 lg:p-16 bg-gray-50/30 flex flex-col h-full border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="relative h-full flex flex-col">
                  {/* Header Row */}
                  <div className="flex items-center gap-4 mb-20 h-12">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-1">Manuelle Erstellung</h3>
                      <p className="text-xs text-gray-500 font-medium">Investition & Aufwand</p>
                    </div>
                  </div>

                  {/* The Single Big Number */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl md:text-8xl font-medium text-gray-900 tracking-tighter">
                        412
                      </span>
                      <span className="text-3xl text-gray-400 font-normal">€</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm font-medium mb-8">Wert Ihrer Arbeit (pro Seite)</p>

                  <div className="mt-auto">
                    <div className="h-px w-full bg-gray-200 mb-6"></div>
                    <p className="text-base font-semibold text-gray-900 mb-2">Investierte Ressourcen</p>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                      Kalkuliert auf Basis von 4,2 Stunden Arbeitszeit (Konzeption, Erstellung & Reviewschleifen) bei einer Blended Rate von 98€/h.
                    </p>
                  </div>

                </div>
              </div>

              {/* RIGHT: Review */}
              <div className="relative p-6 md:p-14 lg:p-16 bg-[#050505] text-white overflow-hidden group flex flex-col h-full">
                {/* Premium Gradient Overlay */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-20" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header Row - Aligned with Left */}
                  <div className="flex items-center justify-between mb-20 h-12">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400/10 to-green-600/10 border border-green-500/20 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-1">KI-Prüfung</h3>
                        <p className="text-xs text-gray-400 font-medium">Absicherung & Review</p>
                      </div>
                    </div>
                  </div>

                  {/* Price - Aligned with Left */}
                  <div className="mb-12">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl md:text-8xl font-medium text-white tracking-tighter">
                        2,69
                      </span>
                      <span className="text-3xl text-gray-500 font-normal">€</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 items-start">
                      <p className="text-gray-400 text-sm font-medium">pro Seite absichern</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-12 flex-1">
                    <FeatureRow label="Rechtschreibung, Grammatik & Syntax" />
                    <FeatureRow label="Querverweise" />
                    <FeatureRow label="Plausibilität" />
                    <FeatureRow label="Mathematische Neuberechnung" />
                    <FeatureRow label="Argumentationslogik" />
                  </div>

                  <div className="pt-8 border-t border-white/10 mt-auto">
                    <a
                      href="#"
                      onClick={handleCtaClick}
                      className="group relative flex items-center justify-center gap-4 px-8 py-4 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] w-full"
                    >
                      <span>Dokument für &lt; 1% perfektionieren</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Enterprise Footer - Full Width & Expanded */}
        <div className="mt-8 reveal delay-200">
          <div className="max-w-5xl mx-auto p-1 rounded-3xl bg-gray-50/50 border border-gray-100">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow">

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Feste Volumenpreise für Organisationen</h3>
                  <p className="text-gray-500 max-w-xl leading-relaxed">
                    Für Teams mit höheren monatlichen Volumen gelten transparente, feste Staffelpreise. Etablieren Sie Review als verlässlichen Qualitäts-Standard in Ihrer Organisation.
                  </p>
                </div>
              </div>

              <a
                href="#"
                onClick={handleCtaClick}
                className="group flex items-center gap-3 py-4 px-8 rounded-xl bg-black text-white hover:bg-gray-800 transition-all font-semibold shrink-0 whitespace-nowrap"
              >
                <span>Sales kontaktieren</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-default py-1">
      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:border-green-400 transition-all duration-300 shadow-[0_0_0_0_rgba(74,222,128,0)] group-hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]">
        <Check className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-300" />
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 font-medium tracking-wide group-hover:translate-x-1 transform">{label}</span>
    </div>
  )
}

export const PricingSection = memo(PricingSectionComponent)
