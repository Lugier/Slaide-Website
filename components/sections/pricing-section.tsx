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

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  <div className="p-8 bg-white/10 rounded-2xl md:rounded-r-none border border-white/10 text-left">
                    <div className="text-sm font-medium text-gray-200 mb-2">Pay‑per‑Use</div>
                    <div className="text-5xl font-bold text-white mb-2">{PRICE_PER_SLIDE.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 })}</div>
                    <div className="text-xs text-gray-300 mb-4">pro verarbeiteter Seite • zzgl. MwSt.</div>

                    <ul className="space-y-3 text-sm text-gray-200">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-medium">Rechtschreibung & Grammatik</div>
                          <div className="text-xs text-gray-300">Fehler in Texten zuverlässig erkennen und korrigieren</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-medium">Formatierungs- & Struktur-Checks</div>
                          <div className="text-xs text-gray-300">Konsistente Formatierung, Styles und Struktur über Dokumente hinweg</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-medium">Cross‑Slide / Cross‑Document Consistency</div>
                          <div className="text-xs text-gray-300">Querverweise, Begriffs- und Zahlenkonsistenz über Folien und Dokumente</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-medium">Plausibilitäts‑ & Logik‑Checks</div>
                          <div className="text-xs text-gray-300">Erkennung inhaltlicher Inkonsistenzen und Argumentationsbrüche</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <div className="font-medium">Mathematische Neuberechnung & Zahlenprüfung</div>
                          <div className="text-xs text-gray-300">Tabellen- und Zahlenvalidierung inklusive Rechenprüfungen</div>
                        </div>
                      </li>
                    </ul>
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

                  <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-white/3 text-left flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold mb-4 self-start">
                      ENTERPRISE
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Volumenbasierte Preise</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Für Organisationen ab <span className="font-semibold">500 Seiten/Monat</span> bieten wir maßgeschneiderte Enterprise-Lösungen mit individuellen Volumenpreisen und dediziertem Onboarding.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="#"
                        onClick={handleZugangClick}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-all shadow-md"
                      >
                        Enterprise anfragen
                      </a>
                    </div>
                  </div>
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
