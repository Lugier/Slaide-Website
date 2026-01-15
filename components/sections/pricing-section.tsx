'use client'

import { memo, useCallback } from 'react'
import { Check, Zap, ShieldCheck, ArrowRight, X } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'

function PricingSectionComponent(): JSX.Element {
  const handleZugangClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    openCalComOverlay()
  }, [])

  const handlePreiseClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    openCalComOverlay()
  }, [])

  return (
    <section id="pricing" className="py-32 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Vergleichs-Banner: Manuell vs. Slaide - Nutzen-Sektion */}
        <div className="mb-20 reveal delay-100">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Dekoratives Element */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 px-2">
                    Ihre Arbeit für 2,99€ absichern
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto px-2">
                    Fehler in wichtigen Dokumenten kosten mehr als nur Geld – sie kosten Reputation, Zeit und Umsatz. Mit Review schützen Sie alles für weniger als 1%.
                  </p>
                </div>

                {/* Vergleich: Drei Boxen nebeneinander */}
                <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 rounded-xl md:rounded-2xl relative">
                  {/* Box 1: Arbeitszeit */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-r-none p-6 md:p-8 border border-white/20 md:border-r-0 text-center flex flex-col justify-center w-full md:w-auto md:flex-1 relative">
                    <div className="text-xs md:text-sm text-gray-400 mb-2">Manuelle Erstellung</div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">3-5h</div>
                    <div className="text-xs md:text-sm font-medium text-gray-300">Arbeitszeit pro Seite</div>
                  </div>

                  {/* Pfeil 1 - Mobile: nach unten, Desktop: nach rechts */}
                  <div className="flex md:hidden items-center justify-center my-2 z-20 pointer-events-none">
                    <ArrowRight className="w-5 h-5 text-white/50 rotate-90" aria-hidden="true" />
                  </div>
                  <div className="hidden md:flex items-center justify-center absolute left-[calc(33.333%-12px)] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ArrowRight className="w-6 h-6 text-white/50" aria-hidden="true" />
                  </div>

                  {/* Box 2: Kosten */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-none p-6 md:p-8 border border-white/20 md:border-x-0 text-center flex flex-col justify-center w-full md:w-auto md:flex-1 relative">
                    <div className="text-xs md:text-sm text-gray-400 mb-2">Manuelle Erstellung</div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">312€</div>
                    <div className="text-xs md:text-sm font-medium text-gray-300">Kosten pro Seite</div>
                  </div>

                  {/* Pfeil 2 - Mobile: nach unten, Desktop: nach rechts */}
                  <div className="flex md:hidden items-center justify-center my-2 z-20 pointer-events-none">
                    <ArrowRight className="w-6 h-6 text-green-400 rotate-90" aria-hidden="true" />
                  </div>
                  <div className="hidden md:flex items-center justify-center absolute left-[calc(66.666%-12px)] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ArrowRight className="w-8 h-8 text-green-400" aria-hidden="true" />
                  </div>

                  {/* Box 3: Slaide Vorteil - Prominent hervorgehoben */}
                  <div className="bg-green-500/30 backdrop-blur-sm rounded-xl md:rounded-l-none p-6 md:p-8 lg:p-10 border-2 border-green-400/50 md:border-l-0 text-center shadow-lg shadow-green-500/20 relative overflow-hidden flex flex-col justify-center w-full md:w-auto md:flex-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="relative z-10">
                      <div className="text-xs md:text-sm text-green-200 mb-2 font-medium">Review</div>
                      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">&lt;1%</div>
                      <div className="text-xs md:text-sm font-medium text-green-200 mb-1">der manuellen Kosten</div>
                      <div className="text-xs text-gray-200 mt-2 leading-relaxed">
                        für vollständige Absicherung gegen Fehler
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="max-w-5xl mx-auto">
          <div id="pricing-tiers" className="text-center mb-12 reveal delay-200 scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Wählen Sie Ihr Paket</h2>
            <p className="text-grey-dark text-lg max-w-2xl mx-auto">
              Transparente Preise, nutzungsbasierte Abrechnung – Sie zahlen nur für verarbeitete Seiten, keine versteckten Kosten, keine Mindestlaufzeiten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 reveal delay-300 items-stretch">
            {/* Lite - Links */}
            <div className="p-10 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-elevated-hover group flex flex-col h-full">
              <div className="mb-6 min-h-[60px] flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors mb-4">
                  <Zap className="w-5 h-5 text-black" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Lite Audit</h3>
                <p className="text-sm text-grey-dark">Hygienefaktor & Basics</p>
            </div>
            <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold">2,19</span>
                <span className="text-lg text-grey-dark">€</span>
              </div>
              <p className="text-sm text-grey-dark mt-2">pro Seite verarbeitet</p>
            </div>
              <ul className="space-y-4 text-sm text-grey-dark mb-8 flex-grow text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-black flex-shrink-0" aria-hidden="true" />
                  <span>Rechtschreibung & Grammatik</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-black flex-shrink-0" aria-hidden="true" />
                  <span>Formatierungs-Check</span>
              </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-black flex-shrink-0" aria-hidden="true" />
                  <span>Einfache Plausibilität</span>
              </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-black flex-shrink-0" aria-hidden="true" />
                  <span>Cross-Document Consistency</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-400">Mathematische Neuberechnung</span>
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-4 h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-400">Argumentations-Logik</span>
              </li>
            </ul>
            <a
              href="#"
              onClick={handlePreiseClick}
                className="block w-full py-3.5 text-center border-2 border-gray-200 rounded-lg text-sm font-semibold hover:border-black hover:bg-gray-50 transition-all focus:outline-none min-h-[48px] flex items-center justify-center mt-auto transform hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Zugang anfragen"
            >
              Zugang anfragen
            </a>
          </div>

            {/* Standard - Rechts */}
            <div className="p-10 rounded-2xl bg-black text-white shadow-xl relative overflow-hidden group flex flex-col h-full transform transition-all hover:scale-[1.02]">
              <div className="absolute top-0 right-0 bg-gradient-to-br from-green-400 to-green-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-lg font-mono shadow-lg">
              RECOMMENDED
            </div>
              <div className="mb-6 min-h-[60px] flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors mb-4">
                  <ShieldCheck className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Standard Verification</h3>
                <p className="text-sm text-gray-200">Forensische Tiefenprüfung</p>
            </div>
            <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold">2,99</span>
                <span className="text-lg text-gray-300">€</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">pro Seite verarbeitet</p>
            </div>
              <ul className="space-y-4 text-sm text-gray-300 mb-8 flex-grow text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
                  <span><span className="font-semibold">Verbesserte</span> Rechtschreibung & Grammatik</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
                  <span><span className="font-semibold">Verbesserter</span> Formatierungs-Check</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
                  <span><span className="font-semibold">Verbesserte</span> Plausibilität</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
                  <span><span className="font-semibold">Verbesserte</span> Cross-Document Consistency</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
                  <span>Mathematische Neuberechnung</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
                  <span>Argumentations-Logik</span>
                </li>
            </ul>
            <a
              href="#"
              onClick={handleZugangClick}
                className="block w-full py-3.5 text-center bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-100 transition-all shadow-sm focus:outline-none min-h-[48px] flex items-center justify-center mt-auto transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              aria-label="Zugang anfragen"
            >
              Zugang anfragen
            </a>
            </div>
          </div>
        </div>

        {/* Enterprise Pricing */}
        <div className="mt-16 p-10 rounded-2xl border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-white shadow-lg reveal delay-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left md:text-center md:flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold mb-4">
                ENTERPRISE
              </div>
              <h3 className="text-2xl font-semibold mb-3">Volumenbasierte Preise</h3>
              <p className="text-base text-grey-dark leading-relaxed max-w-xl mx-auto md:mx-0">
                Für Organisationen mit mehr als <span className="font-semibold text-black">5.000 Seiten pro Monat</span> bieten wir maßgeschneiderte Enterprise-Lösungen mit attraktiven volumenbasierten Preisen und individueller Betreuung.
              </p>
            </div>
            <a
              href="#"
              onClick={handleZugangClick}
              className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg focus:outline-none min-h-[52px] whitespace-nowrap shrink-0"
              aria-label="Enterprise Pricing anfragen"
            >
              Enterprise anfragen
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export const PricingSection = memo(PricingSectionComponent)
