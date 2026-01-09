'use client'

import { Check, Zap, ShieldCheck, ArrowRight } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'

export function PricingSection(): JSX.Element {
  const handleZugangClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    openCalComOverlay()
  }

  const handlePreiseClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    openCalComOverlay()
  }

  return (
    <section id="pricing" className="py-32 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 reveal">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Transparente Preise, nutzungsbasierte Abrechnung.
          </h2>
          <p className="text-grey-dark max-w-2xl mx-auto">
            Keine versteckten Kosten, keine Mindestlaufzeiten. Sie zahlen nur für verarbeitete Slides – volle Kostenkontrolle und maximale Flexibilität.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
          {/* Lite */}
          <div className="p-10 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all hover:shadow-elevated-hover reveal delay-100 group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Lite Audit</h3>
                <p className="text-sm text-grey-dark">Hygienefaktor & Basics</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <Zap className="w-4 h-4 text-black" aria-hidden="true" />
              </div>
            </div>
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">2,19</span>
                <span className="text-lg text-grey-dark">€</span>
              </div>
              <p className="text-sm text-grey-dark mt-2">pro Slide verarbeitet</p>
            </div>
            <ul className="space-y-4 text-sm text-grey-dark mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
                Rechtschreibung & Grammatik
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
                Formatierungs-Check
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
                Einfache Plausibilität
              </li>
            </ul>
            <a
              href="#"
              onClick={handlePreiseClick}
              className="block w-full py-3.5 text-center border-2 border-gray-200 rounded-lg text-sm font-semibold hover:border-black hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[48px] flex items-center justify-center"
              aria-label="Zugang anfragen"
            >
              Zugang anfragen
            </a>
          </div>

          {/* Pro */}
          <div className="p-10 rounded-2xl bg-black text-white shadow-xl reveal delay-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-bl font-mono">
              RECOMMENDED
            </div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Standard Verification</h3>
                <p className="text-sm text-gray-200">Forensische Tiefenprüfung</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ShieldCheck className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
            </div>
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold">2,99</span>
                <span className="text-lg text-gray-300">€</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">pro Slide verarbeitet</p>
            </div>
            <ul className="space-y-4 text-sm text-gray-300 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
                Alles aus Lite inklusive
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-white font-medium">Mathematische Neuberechnung</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
                Cross-Document Consistency
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
                Argumentations-Logik
              </li>
            </ul>
            <a
              href="#"
              onClick={handleZugangClick}
              className="block w-full py-3.5 text-center bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black min-h-[48px] flex items-center justify-center"
              aria-label="Zugang anfragen"
            >
              Zugang anfragen
            </a>
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
                Für Organisationen mit mehr als <span className="font-semibold text-black">5.000 Slides pro Monat</span> bieten wir maßgeschneiderte Enterprise-Lösungen mit attraktiven volumenbasierten Preisen und individueller Betreuung.
              </p>
            </div>
            <a
              href="#"
              onClick={handleZugangClick}
              className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[52px] whitespace-nowrap shrink-0"
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
