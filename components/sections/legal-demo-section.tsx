'use client'

import { useState, useEffect, useRef } from 'react'
import { FileText, Search, Settings, Lock } from 'lucide-react'

type FindingStatus = 'active' | 'ignored' | 'accepted'

interface FindingState {
  [key: string]: FindingStatus
}

export function LegalDemoSection(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false)
  const [findingStates, setFindingStates] = useState<FindingState>({})
  const [hoveredFinding, setHoveredFinding] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleIgnore = (index: number): void => {
    setFindingStates((prev) => ({ ...prev, [`contract-${index}`]: 'ignored' }))
  }

  const handleAccept = (index: number): void => {
    setFindingStates((prev) => ({ ...prev, [`contract-${index}`]: 'accepted' }))
  }

  const getFindingStatus = (index: number): FindingStatus => {
    return findingStates[`contract-${index}`] || 'active'
  }

  return (
    <section
      ref={sectionRef}
      id="legal-demo"
      className="py-12 lg:py-20 px-6 bg-gray-50 overflow-visible relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-6 md:mb-8 text-center reveal">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-black mb-3">
            Verträge ohne Widersprüche.
          </h2>
          <p className="text-base md:text-lg text-grey-dark max-w-2xl mx-auto mb-6">
            Review erkennt Inkonsistenzen zwischen Vertragsklauseln, fehlende Referenzen und widersprüchliche Definitionen.
          </p>
        </div>

        {/* Mockup Container */}
        <div className="relative reveal delay-200">
          <div className="bg-white rounded-2xl shadow-[0_30px_100px_-20px_rgba(0,0,0,0.25)] border border-gray-200/60 overflow-hidden relative w-full transform transition-all duration-500">
            {/* Browser Top Bar */}
            <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center gap-1.5 px-4 shrink-0">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 flex items-center gap-1.5 bg-white rounded-md px-3 py-1.5 text-xs text-gray-600 border border-gray-200">
                <Lock className="w-3 h-3 text-gray-400" aria-hidden="true" />
                <span className="font-mono truncate">
                  app.review.ai / prüfung / Service_Vertrag_M&A_2024
                </span>
              </div>
            </div>

            {/* App Content - Three Column Layout */}
            <div className="flex h-[520px] xl:h-[600px]">
              {/* Left Sidebar */}
              <div className="w-16 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4 gap-4 shrink-0">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-md">
                  <FileText className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
                <Settings className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </div>

              {/* Central Document Area */}
              <div className="flex-1 bg-gray-50 p-4 overflow-hidden flex items-center justify-center">
                <ContractMockup hoveredFinding={hoveredFinding} />
              </div>

              {/* Right Sidebar - Findings */}
              <div className="w-80 bg-white border-l border-gray-200 flex flex-col shrink-0">
                <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-black">FINDINGS</span>
                    <span className="text-xs text-gray-500">(4)</span>
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                  {/* Critical Finding 1 - Widersprüchliche Fristen */}
                  {(() => {
                    const status = getFindingStatus(0)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = 'contract-0'
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div 
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-red-500'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-red-50/30'} relative shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-red-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer`}
                        onMouseEnter={() => setHoveredFinding(findingKey)}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-red-600'}`}>
                              KRITISCH
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono">§ 3.2, § 7.1</span>
                          </div>
                          <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                            Widersprüchliche Fristen
                          </h4>
                          <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                            § 3.2 definiert Kündigungsfrist als "30 Tage", während § 7.1 "20 Werktage" angibt. Inkonsistente Fristendefinition.
                          </p>
                          {status === 'active' && (
                            <div className="flex gap-1.5 mt-2">
                              <button 
                                onClick={() => handleAccept(0)}
                                className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                              >
                                Akzeptieren
                              </button>
                              <button 
                                onClick={() => handleIgnore(0)}
                                className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                              >
                                Ignorieren
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })()}

                  {/* Critical Finding 2 - Inkonsistente Definition */}
                  {(() => {
                    const status = getFindingStatus(1)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = 'contract-1'
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div 
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-red-500'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-red-50/30'} relative shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-red-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer`}
                        onMouseEnter={() => setHoveredFinding(findingKey)}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-red-600'}`}>
                              KRITISCH
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono">§ 1.3, § 4.1</span>
                          </div>
                          <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                            Inkonsistente Definition
                          </h4>
                          <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                            "Vertragsgegenstand" wird in § 1.3 als "Software-Lizenz" definiert, aber § 4.1 verwendet "SaaS-Dienstleistung" - unterschiedliche Definitionen.
                          </p>
                          {status === 'active' && (
                            <div className="flex gap-1.5 mt-2">
                              <button 
                                onClick={() => handleAccept(1)}
                                className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                              >
                                Akzeptieren
                              </button>
                              <button 
                                onClick={() => handleIgnore(1)}
                                className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                              >
                                Ignorieren
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })()}

                  {/* Medium Finding - Fehlende Referenz */}
                  {(() => {
                    const status = getFindingStatus(2)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = 'contract-2'
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div 
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-yellow-400'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-yellow-50/30'} shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-yellow-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer`}
                        onMouseEnter={() => setHoveredFinding(findingKey)}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-yellow-700'}`}>
                              MITTEL
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono">§ 5.4</span>
                          </div>
                          <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                            Fehlende Referenz
                          </h4>
                          <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                            § 5.4 verweist auf "Anlage B (Preismodell)", aber Anlage B existiert nicht im Dokument. Fehlende Anlage.
                          </p>
                          {status === 'active' && (
                            <div className="flex gap-1.5 mt-2">
                              <button 
                                onClick={() => handleAccept(2)}
                                className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                              >
                                Akzeptieren
                              </button>
                              <button 
                                onClick={() => handleIgnore(2)}
                                className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                              >
                                Ignorieren
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })()}

                  {/* Medium Finding - Widersprüchliche Zahlungsbedingungen */}
                  {(() => {
                    const status = getFindingStatus(3)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = 'contract-3'
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div 
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-yellow-400'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-yellow-50/30'} shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-yellow-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer`}
                        onMouseEnter={() => setHoveredFinding(findingKey)}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-yellow-700'}`}>
                              MITTEL
                            </span>
                            <span className="text-[10px] text-gray-400 font-mono">§ 6.2, § 8.1</span>
                          </div>
                          <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                            Widersprüchliche Zahlungsbedingungen
                          </h4>
                          <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                            § 6.2 nennt Zahlungsziel &quot;14 Tage nach Rechnungsstellung&quot;, § 8.1 erwähnt &quot;netto 30 Tage&quot;. Inkonsistente Zahlungsbedingungen.
                          </p>
                          {status === 'active' && (
                            <div className="flex gap-1.5 mt-2">
                              <button 
                                onClick={() => handleAccept(3)}
                                className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                              >
                                Akzeptieren
                              </button>
                              <button 
                                onClick={() => handleIgnore(3)}
                                className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                              >
                                Ignorieren
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contract Mockup Component
interface ContractMockupProps {
  hoveredFinding: string | null
}

function ContractMockup({ hoveredFinding }: ContractMockupProps): JSX.Element {
  const finding0Hovered = hoveredFinding === 'contract-0'
  const finding1Hovered = hoveredFinding === 'contract-1'
  const finding2Hovered = hoveredFinding === 'contract-2'
  const finding3Hovered = hoveredFinding === 'contract-3'
  
  return (
    <div className="w-full h-full bg-gray-100 relative overflow-hidden flex flex-col">
      {/* Document Area */}
      <div className="flex-1 overflow-hidden p-3 flex justify-center items-center">
        {/* Contract Document */}
        <div 
          className="bg-white text-black shadow-lg border border-gray-300 relative p-6 flex flex-col"
          style={{ 
            width: '100%',
            maxWidth: '600px',
            height: '100%',
            maxHeight: 'calc(100% - 24px)'
          }}
        >
          
          {/* Contract Header */}
          <div className="border-b border-gray-300 pb-3 mb-4 shrink-0">
            <h1 className="text-lg font-bold text-black mb-1">SERVICE-VERTRAG</h1>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>zwischen TechCorp GmbH und ServiceProvider AG</span>
              <span className="font-mono">Vertrag-ID: SV-2024-0892</span>
            </div>
            <div className="text-xs text-gray-400 mt-1">Stand: 15. März 2024</div>
          </div>

          {/* Contract Content - Scrollable */}
          <div className="text-[9px] leading-[1.5] text-gray-800 space-y-3 flex-1 min-h-0 overflow-y-auto">
            
            {/* Section 1 */}
            <div>
              <h3 className="font-bold text-[11px] text-black mb-1">§ 1 Vertragsgegenstand</h3>
              <p className="mb-1">
                <span className="font-semibold">1.1</span> Dieser Vertrag regelt die Erbringung von IT-Serviceleistungen durch den Dienstleister an den Auftraggeber.
              </p>
              <p className="mb-1">
                <span className="font-semibold">1.2</span> Die Leistungen umfassen Wartung, Support und Entwicklung von Software-Lösungen gemäß Anlage A.
              </p>
              <p className={`mb-1 ${finding1Hovered ? 'ring-2 ring-red-500 bg-red-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">1.3</span> Der{' '}
                <span className={`font-semibold ${finding1Hovered ? 'text-red-700 bg-red-100' : ''}`}>
                  Vertragsgegenstand
                </span>
                {' '}wird als{' '}
                <span className={`font-semibold ${finding1Hovered ? 'text-red-700 bg-red-100' : ''}`}>
                  &quot;Software-Lizenz&quot;
                </span>
                {' '}definiert und umfasst die Nutzungsrechte gemäß den Bestimmungen dieses Vertrags.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-bold text-[11px] text-black mb-1">§ 3 Kündigung</h3>
              <p className="mb-1">
                <span className="font-semibold">3.1</span> Beide Parteien können diesen Vertrag mit einer Frist von drei Monaten zum Monatsende kündigen.
              </p>
              <p className={`mb-1 ${finding0Hovered ? 'ring-2 ring-red-500 bg-red-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">3.2</span> Die{' '}
                <span className={`font-semibold ${finding0Hovered ? 'text-red-700 bg-red-100' : ''}`}>
                  Kündigungsfrist
                </span>
                {' '}beträgt{' '}
                <span className={`font-semibold ${finding0Hovered ? 'text-red-700 bg-red-100' : ''}`}>
                  30 Tage
                </span>
                {' '}und beginnt mit Zugang der Kündigungserklärung.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-bold text-[11px] text-black mb-1">§ 4 Leistungsumfang</h3>
              <p className={`mb-1 ${finding1Hovered ? 'ring-2 ring-red-500 bg-red-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">4.1</span> Der Dienstleister erbringt{' '}
                <span className={`font-semibold ${finding1Hovered ? 'text-red-700 bg-red-100' : ''}`}>
                  SaaS-Dienstleistungen
                </span>
                {' '}gemäß den Spezifikationen in Anlage A. Die Leistungen umfassen Hosting, Wartung und Support.
              </p>
              <p className="mb-1">
                <span className="font-semibold">4.2</span> Der Umfang der Leistungen kann durch schriftliche Vereinbarung erweitert werden.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="font-bold text-[11px] text-black mb-1">§ 5 Vergütung</h3>
              <p className="mb-1">
                <span className="font-semibold">5.1</span> Die Vergütung erfolgt monatlich im Voraus gemäß dem vereinbarten Tarif.
              </p>
              <p className="mb-1">
                <span className="font-semibold">5.2</span> Die Höhe der Vergütung richtet sich nach der Anzahl der Nutzer und dem gewählten Leistungspaket.
              </p>
              <p className="mb-1">
                <span className="font-semibold">5.3</span> Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>
              <p className={`mb-1 ${finding2Hovered ? 'ring-2 ring-yellow-500 bg-yellow-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">5.4</span> Details zum{' '}
                <span className={`font-semibold ${finding2Hovered ? 'text-yellow-700 bg-yellow-100' : ''}`}>
                  Preismodell
                </span>
                {' '}finden sich in{' '}
                <span className={`font-semibold ${finding2Hovered ? 'text-yellow-700 bg-yellow-100 underline decoration-wavy' : ''}`}>
                  Anlage B (Preismodell)
                </span>
                .
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="font-bold text-[11px] text-black mb-1">§ 6 Zahlungsbedingungen</h3>
              <p className="mb-1">
                <span className="font-semibold">6.1</span> Rechnungen werden monatlich zum 1. des Folgemonats erstellt.
              </p>
              <p className={`mb-1 ${finding3Hovered ? 'ring-2 ring-yellow-500 bg-yellow-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">6.2</span> Das{' '}
                <span className={`font-semibold ${finding3Hovered ? 'text-yellow-700 bg-yellow-100' : ''}`}>
                  Zahlungsziel
                </span>
                {' '}beträgt{' '}
                <span className={`font-semibold ${finding3Hovered ? 'text-yellow-700 bg-yellow-100' : ''}`}>
                  14 Tage nach Rechnungsstellung
                </span>
                .
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="font-bold text-[11px] text-black mb-1">§ 7 Sonderkündigung</h3>
              <p className={`mb-1 ${finding0Hovered ? 'ring-2 ring-red-500 bg-red-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">7.1</span> Bei erheblichen Vertragsverletzungen kann der Vertrag mit einer Frist von{' '}
                <span className={`font-semibold ${finding0Hovered ? 'text-red-700 bg-red-100' : ''}`}>
                  20 Werktagen
                </span>
                {' '}außerordentlich gekündigt werden.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h3 className="font-bold text-[11px] text-black mb-1">§ 8 Allgemeine Bestimmungen</h3>
              <p className={`mb-1 ${finding3Hovered ? 'ring-2 ring-yellow-500 bg-yellow-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">8.1</span> Die Zahlung erfolgt{' '}
                <span className={`font-semibold ${finding3Hovered ? 'text-yellow-700 bg-yellow-100' : ''}`}>
                  netto 30 Tage
                </span>
                {' '}nach Rechnungsdatum, sofern nicht anders vereinbart.
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-auto pt-3 border-t border-gray-200 flex justify-between text-[8px] text-gray-400 font-mono shrink-0">
            <span>© TechCorp GmbH & ServiceProvider AG 2024 | Vertraulich</span>
            <span>Seite 1 von 3</span>
          </div>

        </div>
      </div>
    </div>
  )
}
