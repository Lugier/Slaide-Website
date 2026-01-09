'use client'

import { useState } from 'react'
import { Calculator, FileText, Presentation, TrendingUp, Clock, DollarSign, Info } from 'lucide-react'

type DocumentType = 'presentation' | 'document'

export function ROISection(): JSX.Element {
  const [documentType, setDocumentType] = useState<DocumentType>('presentation')
  const [pages, setPages] = useState<number>(100)
  const [pricingTier, setPricingTier] = useState<'standard' | 'lite'>('standard')
  
  // Konstante Werte
  const hourlyRate = 80 // EUR pro Stunde
  const standardPrice = 2.99 // EUR pro Seite
  const litePrice = 2.19 // EUR pro Seite
  
  // Zeit pro Seite basierend auf Dokumententyp
  const minutesPerPage: Record<DocumentType, number> = {
    presentation: 7, // Minuten pro Slide bei Präsentationen
    document: 12 // Minuten pro Seite bei Dokumenten (Median)
  }
  
  // Berechnungen
  const minutesPerPageValue = minutesPerPage[documentType]
  const hoursPerPage = minutesPerPageValue / 60
  const pricePerPage = pricingTier === 'standard' ? standardPrice : litePrice
  
  // Pro Review Cycle
  const manualReviewCost = pages * hoursPerPage * hourlyRate
  const slaideCost = pages * pricePerPage
  const savingsPerCycle = manualReviewCost - slaideCost
  const roiPercentage = ((savingsPerCycle / slaideCost) * 100).toFixed(1)
  
  // Über mehrere Cycles (inkl. Partner und Manager)
  const cycles = [1, 3, 6, 12]
  const reviewCyclesPerYear = 12 // Annahme: monatliche Reviews
  
  return (
    <section id="roi" className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center reveal">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6">
            <Calculator className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            ROI-Rechner
          </h2>
          <p className="text-grey-dark max-w-2xl mx-auto">
            Berechnen Sie Ihre Einsparungen über alle Review Cycles hinweg. Inklusive Partner- und Manager-Review.
          </p>
        </div>

        {/* Rechner */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Inputs */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50 reveal">
            <h3 className="text-lg font-semibold mb-6">Ihre Parameter</h3>
            
            {/* Dokumententyp */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Dokumententyp
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDocumentType('presentation')}
                  className={`p-4 rounded-lg border-2 transition-all relative group/doc ${
                    documentType === 'presentation'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <Presentation className={`w-5 h-5 mx-auto mb-2 ${documentType === 'presentation' ? 'text-white' : 'text-gray-400'}`} aria-hidden="true" />
                  <div className="text-sm font-medium">Präsentation</div>
                  <div className="text-xs mt-1 opacity-75">
                    7 Min/Slide
                  </div>
                </button>
                <button
                  onClick={() => setDocumentType('document')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    documentType === 'document'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <FileText className={`w-5 h-5 mx-auto mb-2 ${documentType === 'document' ? 'text-white' : 'text-gray-400'}`} aria-hidden="true" />
                  <div className="text-sm font-medium">Dokument</div>
                  <div className="text-xs mt-1 opacity-75">
                    12 Min/Seite
                  </div>
                </button>
              </div>
            </div>

            {/* Anzahl Seiten */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Anzahl Seiten
              </label>
              <input
                type="number"
                min="1"
                value={pages}
                onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none text-lg font-semibold"
              />
            </div>

            {/* Pricing Tier */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Pricing Tier
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPricingTier('standard')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    pricingTier === 'standard'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-medium">Standard</div>
                  <div className="text-xs mt-1 opacity-75">2,99€/Seite</div>
                </button>
                <button
                  onClick={() => setPricingTier('lite')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    pricingTier === 'lite'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-medium">Lite</div>
                  <div className="text-xs mt-1 opacity-75">2,19€/Seite</div>
                </button>
              </div>
            </div>
          </div>

          {/* Ergebnisse pro Cycle */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50 reveal delay-100">
            <h3 className="text-lg font-semibold mb-6 text-gray-800">Einsparung pro Review Cycle</h3>
            
            <div className="space-y-4 mb-6">
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-500" aria-hidden="true" />
                  <span className="text-sm text-gray-700">Manuelle Prüfung</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{manualReviewCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600 mt-1 group/calc relative">
                  <span>{(pages * hoursPerPage).toFixed(1)} Stunden × {hourlyRate.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}/h</span>
                  <div className="relative">
                    <Info className="w-3 h-3 text-gray-500 opacity-40 hover:opacity-70 cursor-help transition-opacity" aria-hidden="true" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover/calc:opacity-100 group-hover/calc:visible transition-all duration-200 z-10 border border-gray-700">
                      <p className="leading-relaxed">
                        Basierend auf Median-Werten aus Banking & Consulting. Der Stundensatz von {hourlyRate.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}/h berücksichtigt die Beteiligung von Managern und Partnern im Review-Prozess.
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-gray-500" aria-hidden="true" />
                  <span className="text-sm text-gray-700">Slaide Kosten</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{slaideCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 })}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {pages} Seiten × {pricePerPage.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}/Seite
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-green-700">Ihre Einsparung</span>
                </div>
                <div className="text-3xl font-bold text-green-600">
                  {savingsPerCycle.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
                </div>
                <div className="text-sm text-green-700 mt-2 font-medium">
                  {roiPercentage}% ROI pro Cycle
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI über mehrere Cycles */}
        <div className="p-10 rounded-2xl bg-white border border-gray-200 reveal delay-200">
          <div className="grid md:grid-cols-4 gap-6">
            {cycles.map((months) => {
              const cyclesCount = months
              const totalManualCost = manualReviewCost * cyclesCount
              const totalSlaideCost = slaideCost * cyclesCount
              const totalSavings = totalManualCost - totalSlaideCost
              const netROI = ((totalSavings / totalSlaideCost) * 100).toFixed(0)
              
              return (
                <div key={months} className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold mb-1 text-gray-900">{cyclesCount}</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Review Cycle{cyclesCount > 1 ? 's' : ''}</div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="pb-3 border-b border-gray-200">
                      <div className="text-gray-600 mb-1 text-xs">Kosten</div>
                      <div className="text-lg font-semibold text-gray-900">{totalSlaideCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</div>
                    </div>
                    <div className="pb-3 border-b border-gray-200">
                      <div className="text-gray-600 mb-1 text-xs">Manuell</div>
                      <div className="text-lg font-semibold text-red-600">{totalManualCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1 text-xs">Einsparung</div>
                      <div className="text-xl font-bold text-green-600">
                        {totalSavings.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{netROI}% ROI</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

