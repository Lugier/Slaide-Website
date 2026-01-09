'use client'

import { useState, useMemo, useCallback, memo } from 'react'
import { Calculator, FileText, Presentation, TrendingUp, Clock, DollarSign, Info } from 'lucide-react'

type DocumentType = 'presentation' | 'document'

// Konstante Werte
const HOURLY_RATE = 98 // EUR pro Stunde (Blended Rate)
const STANDARD_PRICE = 2.99 // EUR pro Seite
const LITE_PRICE = 2.19 // EUR pro Seite
const MANUAL_REVIEW_ERROR_RATE = 8 // Prozent der Fehler, die beim manuellen Review übersehen werden
const BATCH_SIZE = 10 // Seiten pro Batch
const BATCH_PROCESSING_TIME = 65 // Sekunden pro Batch

// Zeit pro Seite basierend auf Dokumententyp
const MINUTES_PER_PAGE: Record<DocumentType, number> = {
  presentation: 7, // Minuten pro Slide bei Präsentationen
  document: 12 // Minuten pro Seite bei Dokumenten (Median)
}

function ROISectionComponent(): JSX.Element {
  const [documentType, setDocumentType] = useState<DocumentType>('presentation')
  const [pages, setPages] = useState<number>(100)
  const [pagesInput, setPagesInput] = useState<string>('100') // Separate state für Input-String
  const [pricingTier, setPricingTier] = useState<'standard' | 'lite'>('standard')
  
  // Memoized Berechnungen
  const calculations = useMemo(() => {
    const minutesPerPageValue = MINUTES_PER_PAGE[documentType]
    const hoursPerPage = minutesPerPageValue / 60
    const pricePerPage = pricingTier === 'standard' ? STANDARD_PRICE : LITE_PRICE
    
    // Batch-Verarbeitung: Pro 10 Seiten = 65 Sekunden
    const numberOfBatches = pages > 0 ? Math.ceil(pages / BATCH_SIZE) : 0
    const totalProcessingTimeSeconds = numberOfBatches * BATCH_PROCESSING_TIME
    const totalProcessingTimeMinutes = Math.floor(totalProcessingTimeSeconds / 60)
    const totalProcessingTimeSecondsRemainder = totalProcessingTimeSeconds % 60
    const averageProcessingTimePerPage = pages > 0 ? totalProcessingTimeSeconds / pages : 0
    
    // Pro Review Cycle
    const manualReviewCost = pages * hoursPerPage * HOURLY_RATE
    const reviewCost = pages * pricePerPage
    const savingsPerCycle = manualReviewCost - reviewCost
    const roiPercentage = ((savingsPerCycle / reviewCost) * 100).toFixed(1)
    
    // Zeitersparnis berechnen
    const manualReviewTimeSeconds = pages * minutesPerPageValue * 60 // Manuelle Zeit in Sekunden
    const timeSavedSeconds = manualReviewTimeSeconds - totalProcessingTimeSeconds
    const timeSavedHours = Math.floor(timeSavedSeconds / 3600)
    const timeSavedMinutes = Math.floor((timeSavedSeconds % 3600) / 60)
    
    return {
      minutesPerPageValue,
      hoursPerPage,
      pricePerPage,
      numberOfBatches,
      totalProcessingTimeSeconds,
      totalProcessingTimeMinutes,
      totalProcessingTimeSecondsRemainder,
      averageProcessingTimePerPage,
      manualReviewCost,
      reviewCost,
      savingsPerCycle,
      roiPercentage,
      timeSavedHours,
      timeSavedMinutes,
    }
  }, [documentType, pages, pricingTier])
  
  // Event Handlers mit useCallback
  const handleDocumentTypeChange = useCallback((type: DocumentType) => {
    setDocumentType(type)
  }, [])
  
  const handlePagesChange = useCallback((value: number) => {
    setPages(value)
    setPagesInput(value.toString())
  }, [])
  
  const handlePagesInputChange = useCallback((inputValue: string) => {
    // Erlaube leeres Feld während der Eingabe
    setPagesInput(inputValue)
    
    // Wenn ein gültiger Wert eingegeben wird, aktualisiere auch pages
    if (inputValue === '') {
      return // Feld kann leer sein
    }
    
    const numValue = parseInt(inputValue, 10)
    if (!isNaN(numValue) && numValue >= 0 && numValue <= 100000) {
      setPages(numValue)
    }
  }, [])
  
  const handlePagesInputBlur = useCallback(() => {
    // Beim Verlassen des Feldes: Wenn leer oder ungültig, setze auf 0
    if (pagesInput === '' || isNaN(parseInt(pagesInput, 10))) {
      setPagesInput('0')
      setPages(0)
    } else {
      const numValue = parseInt(pagesInput, 10)
      if (numValue < 0) {
        setPagesInput('0')
        setPages(0)
      } else if (numValue > 100000) {
        setPagesInput('100000')
        setPages(100000)
      } else {
        // Stelle sicher, dass pagesInput und pages synchron sind
        setPagesInput(numValue.toString())
        setPages(numValue)
      }
    }
  }, [pagesInput])
  
  const handlePricingTierChange = useCallback((tier: 'standard' | 'lite') => {
    setPricingTier(tier)
  }, [])
  
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
            Berechnen Sie Ihre Einsparungen über alle Review Cycles hinweg.
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
                  onClick={() => handleDocumentTypeChange('presentation')}
                  className={`p-4 rounded-lg border-2 transition-all relative group/doc ${
                    documentType === 'presentation'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  type="button"
                  aria-label="Präsentation auswählen"
                >
                  <Presentation className={`w-5 h-5 mx-auto mb-2 ${documentType === 'presentation' ? 'text-white' : 'text-gray-400'}`} aria-hidden="true" />
                  <div className="text-sm font-medium">Präsentation</div>
                  <div className="text-xs mt-1 opacity-75">
                    7 Min/Slide
                  </div>
                </button>
                <button
                  onClick={() => handleDocumentTypeChange('document')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    documentType === 'document'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  type="button"
                  aria-label="Dokument auswählen"
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
              <label htmlFor="pages-input" className="block text-sm font-medium text-gray-700 mb-3">
                Anzahl Seiten
              </label>
              <input
                id="pages-input"
                type="text"
                value={pagesInput}
                onChange={(e) => {
                  const inputValue = e.target.value
                  // Erlaube leeres Feld und alle Ziffern
                  if (inputValue === '' || /^\d*$/.test(inputValue)) {
                    handlePagesInputChange(inputValue)
                  }
                }}
                onBlur={handlePagesInputBlur}
                onKeyDown={(e) => {
                  // Erlaube Backspace, Delete, Tab, Escape, Enter und Pfeiltasten
                  if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                    return
                  }
                  // Erlaube nur Ziffern
                  if (!/^\d$/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none text-lg font-semibold"
                aria-label="Anzahl Seiten"
                aria-describedby="pages-description"
                inputMode="numeric"
                pattern="[0-9]*"
              />
              <p id="pages-description" className="sr-only">Geben Sie die Anzahl der Seiten oder Slides ein</p>
            </div>

            {/* Pricing Tier */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Pricing Tier
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handlePricingTierChange('lite')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    pricingTier === 'lite'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  type="button"
                  aria-label="Lite Pricing Tier auswählen"
                >
                  <div className="text-sm font-medium">Lite</div>
                  <div className="text-xs mt-1 opacity-75">2,19€/Seite</div>
                  <div className="text-xs mt-0.5 opacity-60">65s/Batch (10 Seiten)</div>
                </button>
                <button
                  onClick={() => handlePricingTierChange('standard')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    pricingTier === 'standard'
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  type="button"
                  aria-label="Standard Pricing Tier auswählen"
                >
                  <div className="text-sm font-medium">Standard</div>
                  <div className="text-xs mt-1 opacity-75">2,99€/Seite</div>
                  <div className="text-xs mt-0.5 opacity-60">65s/Batch (10 Seiten)</div>
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
                <div className="text-2xl font-bold text-gray-900">{calculations.manualReviewCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600 mt-1 group/calc relative">
                  <span>{(pages * calculations.hoursPerPage).toFixed(1)} Stunden × {HOURLY_RATE.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}/h</span>
                  <div className="relative">
                    <Info className="w-3 h-3 text-gray-500 opacity-40 hover:opacity-70 cursor-help transition-opacity" aria-hidden="true" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover/calc:opacity-100 group-hover/calc:visible transition-all duration-200 z-10 border border-gray-700">
                      <p className="leading-relaxed">
                        Basierend auf Median-Werten aus Banking & Consulting. Der Stundensatz von {HOURLY_RATE.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}/h basiert auf durchschnittlichen Review-Zeiten und berücksichtigt die Beteiligung von Managern und Partnern im Review-Prozess.
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-500">€</span>
                  <span className="text-sm text-gray-700">Review Kosten</span>
                </div>
                <div className="text-2xl font-bold text-gray-900">{calculations.reviewCost.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 })}</div>
                <div className="text-xs text-gray-600 mt-1">
                  {pages} Seiten × {calculations.pricePerPage.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}/Seite
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Verarbeitungszeit: {calculations.totalProcessingTimeMinutes > 0 ? `${calculations.totalProcessingTimeMinutes} Min ` : ''}{calculations.totalProcessingTimeSecondsRemainder > 0 ? `${calculations.totalProcessingTimeSecondsRemainder}s` : ''}
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp className="w-4 h-4 text-green-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-green-700">Ihre Einsparung</span>
                </div>
                <div className="flex items-start gap-6 mb-5">
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-green-600 leading-tight">
                      {calculations.savingsPerCycle.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-xs text-green-700 font-medium mt-1.5">Kosteneinsparung</div>
                  </div>
                  {calculations.timeSavedHours > 0 || calculations.timeSavedMinutes > 0 ? (
                    <>
                      <div className="h-16 w-px bg-gradient-to-b from-green-200 via-green-300 to-green-200"></div>
                      <div className="flex-1">
                        <div className="text-4xl font-bold text-green-600 leading-tight">
                          {calculations.timeSavedHours > 0 && `${calculations.timeSavedHours}${calculations.timeSavedHours === 1 ? 'h' : 'h'}`}
                          {calculations.timeSavedHours > 0 && calculations.timeSavedMinutes > 0 && ' '}
                          {calculations.timeSavedMinutes > 0 && `${calculations.timeSavedMinutes}${calculations.timeSavedMinutes === 1 ? 'min' : 'min'}`}
                        </div>
                        <div className="text-xs text-green-700 font-medium mt-1.5">Zeitersparnis</div>
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-100">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-green-700 font-semibold">
                    {calculations.roiPercentage}% ROI pro Cycle
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Manuelles Review:</span> ~{MANUAL_REVIEW_ERROR_RATE}% Fehler werden übersehen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const ROISection = memo(ROISectionComponent)
