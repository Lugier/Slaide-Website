'use client'

import { memo, useCallback } from 'react'
import { Check, Zap, ShieldCheck, ArrowRight, X } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'
import { PRICE_PER_SLIDE, PRICING_TIERS } from "@/lib/constants/pricing";

function PricingSectionComponent(): JSX.Element {
  const handleZugangClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
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
                    Ihre Arbeit für {PRICE_PER_SLIDE.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })}/Seite absichern
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto px-2">
                    Fehler in wichtigen Dokumenten kosten mehr als nur Geld – sie kosten Reputation, Zeit und Umsatz. Mit Review schützen Sie alles automatisiert und zuverlässig.
                  </p>
                </div>

                {/* Wiederhergestellter Vergleichs-Banner: Manuell vs. Slaide */}
                <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0 rounded-xl md:rounded-2xl relative mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-r-none p-6 md:p-8 border border-white/20 md:border-r-0 text-center flex flex-col justify-center w-full md:w-auto md:flex-1 relative">
                    <div className="text-xs md:text-sm text-gray-400 mb-2">Manuelle Erstellung</div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">3-5h</div>
                    <div className="text-xs md:text-sm font-medium text-gray-300">Arbeitszeit pro Seite</div>
                  </div>

                  <div className="flex md:hidden items-center justify-center my-2 z-20 pointer-events-none">
                    <ArrowRight className="w-6 h-6 text-green-400 rotate-90" aria-hidden="true" />
                  </div>
                  <div className="hidden md:flex items-center justify-center absolute left-[calc(50%-24px)] top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ArrowRight className="w-8 h-8 text-green-400" aria-hidden="true" />
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-none p-6 md:p-8 border border-white/20 md:border-x-0 text-center flex flex-col justify-center w-full md:w-auto md:flex-1 relative">
                    <div className="text-xs md:text-sm text-gray-400 mb-2">Kosten</div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{(PRICING_TIERS.find(t=>t.tier==='Pay-per-Use')?.numericPrice || PRICE_PER_SLIDE * 100).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</div>
                    <div className="text-xs md:text-sm font-medium text-gray-300">Kosten pro Seite</div>
                  </div>

                  <div className="bg-green-500/30 backdrop-blur-sm rounded-xl md:rounded-l-none p-6 md:p-8 lg:p-10 border-2 border-green-400/50 md:border-l-0 text-center shadow-lg shadow-green-500/20 relative overflow-hidden flex flex-col justify-center w-full md:w-auto md:flex-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                    <div className="relative z-10">
                      <div className="text-xs md:text-sm text-green-200 mb-2 font-medium">Review</div>
                      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">&lt;1%</div>
                      <div className="text-xs md:text-sm font-medium text-green-200 mb-1">der manuellen Kosten</div>
                      <div className="text-xs text-gray-200 mt-2 leading-relaxed">
                        Vollständige Absicherung gegen Fehler — deutlich günstiger als manuelle Reviews.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  {/* Black pricing block */}
                  <div className="p-8 bg-black text-white rounded-2xl border border-white/10 text-left">
                    <div className="text-sm font-medium text-gray-200 mb-2">Pay‑per‑Use</div>
                    <div className="text-5xl font-bold mb-2">{PRICE_PER_SLIDE.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })}</div>
                    <div className="text-xs text-gray-300 mb-4">pro verarbeiteter Seite • zzgl. MwSt.</div>
                    <div className="mt-6">
                      <a
                        href="#"
                        onClick={handleZugangClick}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all shadow-sm"
                      >
                        Zugang anfragen
                      </a>
                    </div>
                    </div>

                  {/* Enterprise callout (right) */}
                  <div className="p-8 rounded-2xl border border-gray-200 bg-white text-left flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold mb-4 self-start">
                      ENTERPRISE
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Volumenbasierte Preise</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Für Organisationen ab <span className="font-semibold">500 Seiten/Monat</span> bieten wir maßgeschneiderte Enterprise-Lösungen mit individuellen Volumenpreisen und dediziertem Onboarding.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="#"
                        onClick={handleZugangClick}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-md"
                      >
                        Enterprise anfragen
                      </a>
                    </div>
                  </div>
                </div>

                {/* Features below the pricing block */}
                <div className="mt-6 p-6 bg-white rounded-2xl border border-gray-100 text-left">
                  <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <li className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-medium">Rechtschreibung & Grammatik</div>
                        <div className="text-xs text-gray-500">Automatische Korrektur und Vorschläge</div>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-medium">Formatierungs- & Struktur-Checks</div>
                        <div className="text-xs text-gray-500">Konsistente Formatierung über Dokumente</div>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-medium">Cross‑Slide / Cross‑Document Consistency</div>
                        <div className="text-xs text-gray-500">Querverweise, Begriffs- und Zahlenkonsistenz</div>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-medium">Plausibilitäts‑ & Logik‑Checks</div>
                        <div className="text-xs text-gray-500">Inhaltliche Inkonsistenzen & Argumentationsprüfungen</div>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-medium">Mathematische Neuberechnung & Zahlenprüfung</div>
                        <div className="text-xs text-gray-500">Tabellenvalidierung und Rechenprüfungen</div>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="font-medium">Argumentations‑Logik</div>
                        <div className="text-xs text-gray-500">Bewertung der logischen Konsistenz von Aussagen</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div id="pricing-tiers" className="text-center mb-12 reveal delay-200 scroll-mt-24">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Transparente Preise & Flexible Pakete</h2>
            <p className="text-grey-dark text-lg max-w-2xl mx-auto">
              Wählen Sie das passende Modell für Ihre Anforderungen: vom flexiblen Pay-per-Use bis zu volumenbasierten Enterprise-Lösungen.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-xl shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-xl">
                    Tier
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Slides/Monat
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-xl">
                    Preise
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {PRICING_TIERS.map((tierData) => (
                  <tr key={tierData.tier} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {tierData.tier}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {tierData.slidesPerMonth}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                      {tierData.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 text-center reveal delay-300">
            <h3 className="text-2xl font-semibold mb-4">Für individuelle Anforderungen</h3>
            <p className="text-base text-grey-dark leading-relaxed max-w-2xl mx-auto mb-8">
              Benötigen Sie eine spezielle Lösung oder verarbeiten Sie mehr als 15.000 Seiten pro Monat? Kontaktieren Sie uns für ein maßgeschneidertes Enterprise-Angebot.
            </p>
            <a
              href="#"
              onClick={handleZugangClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg focus:outline-none min-h-[52px] whitespace-nowrap shrink-0"
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
