'use client'

import { useState, useEffect, useRef, memo } from 'react'
import { FileText, Search, Settings, Lock, BarChart3, FileCode, MousePointer2 } from 'lucide-react'

type MockupType = 'slide' | 'report' | 'contract'
type ViewType = 'presentation' | 'report' | 'contract'
type FindingStatus = 'active' | 'ignored' | 'accepted'

interface FindingState {
  [key: string]: FindingStatus
}

function PlatformDemoSectionComponent(): JSX.Element {
  const [viewType, setViewType] = useState<ViewType>('presentation')
  const [activeMockup, setActiveMockup] = useState<MockupType>('slide')
  const [isVisible, setIsVisible] = useState(false)
  const [findingStates, setFindingStates] = useState<FindingState>({})
  const [hoveredFinding, setHoveredFinding] = useState<string | null>(null)
  const [demoActive, setDemoActive] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const mainContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (viewType === 'presentation') {
      setActiveMockup('slide')
    } else if (viewType === 'report') {
      setActiveMockup('report')
    } else {
      setActiveMockup('contract')
    }
  }, [viewType])

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

  const getFindingKey = (mockup: MockupType, index: number): string => {
    return `${mockup}-${index}`
  }

  const handleIgnore = (mockup: MockupType, index: number): void => {
    const key = getFindingKey(mockup, index)
    setFindingStates((prev) => ({ ...prev, [key]: 'ignored' }))
  }

  const handleAccept = (mockup: MockupType, index: number): void => {
    const key = getFindingKey(mockup, index)
    setFindingStates((prev) => ({ ...prev, [key]: 'accepted' }))
  }

  const getFindingStatus = (mockup: MockupType, index: number): FindingStatus => {
    const key = getFindingKey(mockup, index)
    return findingStates[key] || 'active'
  }

  // Calculate quality score and get sorted findings
  const getFindingsForMockup = (mockup: MockupType): Array<{ index: number; status: FindingStatus }> => {
    const totalFindings = mockup === 'report' ? 5 : 4
    const findings = []
    for (let i = 0; i < totalFindings; i++) {
      findings.push({ index: i, status: getFindingStatus(mockup, i) })
    }
    // Sort: active first, then ignored/accepted
    return findings.sort((a, b) => {
      if (a.status === 'active' && b.status !== 'active') return -1
      if (a.status !== 'active' && b.status === 'active') return 1
      return 0
    })
  }

  // Get severity level for each finding
  const getFindingSeverity = (mockup: MockupType, index: number): 'critical' | 'medium' | 'low' => {
    if (mockup === 'slide') {
      // slide: 0=critical, 1=medium, 2=medium, 3=low
      if (index === 0) return 'critical'
      if (index === 1 || index === 2) return 'medium'
      return 'low'
    } else if (mockup === 'report') {
      // report: 0=critical, 1=medium, 2=medium, 3=low, 4=critical
      if (index === 0 || index === 4) return 'critical'
      if (index === 1 || index === 2) return 'medium'
      return 'low'
    } else {
      // contract: 0=critical, 1=medium, 2=medium, 3=low
      if (index === 0) return 'critical'
      if (index === 1 || index === 2) return 'medium'
      return 'low'
    }
  }

  const calculateQualityScore = (mockup: MockupType): number => {
    const totalFindings = mockup === 'report' ? 5 : 4

    // Start scores for each mockup type
    const startScores: Record<MockupType, number> = {
      slide: 79, // Präsentation
      report: 63, // Report
      contract: 79, // Vertrag
    }

    // Weighted points: critical = 3, medium = 2, low = 1
    const weights = { critical: 3, medium: 2, low: 1 }

    let totalWeight = 0
    let processedWeight = 0

    // Calculate total weight and processed weight
    for (let i = 0; i < totalFindings; i++) {
      const severity = getFindingSeverity(mockup, i)
      const weight = weights[severity]
      const status = getFindingStatus(mockup, i)

      totalWeight += weight

      if (status === 'accepted' || status === 'ignored') {
        processedWeight += weight
      }
    }

    if (totalWeight === 0) return 100

    // Start score for this mockup type
    const startScore = startScores[mockup] || 79

    // If all findings are processed, return 100%
    if (processedWeight >= totalWeight) {
      return 100
    }

    // Calculate score: starts at startScore, increases to 100% as findings are processed
    // Formula: startScore + (100 - startScore) * (processedWeight / totalWeight)
    const progressRatio = processedWeight / totalWeight
    return Math.round(startScore + (100 - startScore) * progressRatio)
  }

  const getActiveFindingsCount = (mockup: MockupType): number => {
    const totalFindings = mockup === 'report' ? 5 : 4
    let activeCount = 0
    for (let i = 0; i < totalFindings; i++) {
      const status = getFindingStatus(mockup, i)
      if (status === 'active') {
        activeCount++
      }
    }
    return activeCount
  }

  // Demo Sequence Logic
  useEffect(() => {
    if (!isVisible || demoActive) return

    const timer = setTimeout(() => {
      setDemoActive(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [isVisible, demoActive])

  const mockups = [
    {
      id: 'slide' as MockupType,
      label: 'Präsentation',
      icon: FileText,
      description: 'Seiten-basierte Dokumente',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="hidden md:block py-12 lg:py-20 px-6 bg-white overflow-visible relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-6 md:mb-8 text-center reveal">
          <h2 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black mb-3">
            Ein Cockpit für Qualität.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto mb-6">
            Die Findings werden direkt im Kontext angezeigt. Kein Suchen, sofortiges Verstehen.
          </p>
        </div>

        <div ref={mainContainerRef} className="relative reveal delay-200">
          {/* View Type Tabs - Above Mockup */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <button
              id="tab-presentation"
              onClick={() => setViewType('presentation')}
              aria-label="Präsentationsansicht auswählen"
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${viewType === 'presentation'
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 bg-white border border-gray-200'
                }`}
            >
              Präsentation
            </button>
            <button
              id="tab-report"
              onClick={() => setViewType('report')}
              aria-label="Berichtsansicht auswählen"
              type="button"
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${viewType === 'report'
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 bg-white border border-gray-200'
                }`}
            >
              Report
            </button>
            <button
              id="tab-contract"
              onClick={() => setViewType('contract')}
              aria-label="Vertragsansicht auswählen"
              type="button"
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${viewType === 'contract'
                ? 'bg-black text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 bg-white border border-gray-200'
                }`}
            >
              Vertrag
            </button>
          </div>

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
                  app.slaide.de/review/{viewType === 'presentation' ? 'Q3_Praesentation' : viewType === 'report' ? 'HPP_Alpen_Turbine_Revision' : 'Service_Vertrag_Nordstern_CloudSolutions'}
                </span>
              </div>

              {/* Live Preview Badge */}
              {demoActive && (
                <div className="hidden lg:flex items-center gap-1.5 px-2 py-1 bg-blue-50 border border-blue-100 rounded text-[10px] font-bold text-blue-600 animate-pulse shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  LIVE PREVIEW
                </div>
              )}
            </div>

            {/* App Content - Three Column Layout */}
            <div className="flex h-[580px] xl:h-[660px]">
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
                {viewType === 'presentation' ? (
                  <SlideMockup hoveredFinding={hoveredFinding} />
                ) : viewType === 'report' ? (
                  <ReportMockup hoveredFinding={hoveredFinding} />
                ) : (
                  <ContractMockup hoveredFinding={hoveredFinding} />
                )}
              </div>

              {/* Right Sidebar - Findings */}
              <div className="w-80 bg-white border-l border-gray-200 flex flex-col shrink-0">
                <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-black">FINDINGS</span>
                    <span className="text-xs text-gray-500">
                      ({getActiveFindingsCount(activeMockup)})
                    </span>
                    <div className={`w-2 h-2 rounded-full transition-colors ${getActiveFindingsCount(activeMockup) > 0 ? 'bg-red-500' : 'bg-green-500'}`}></div>
                  </div>
                </div>

                {/* Quality Score */}
                <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-600">Qualitätsscore</span>
                    <span className="text-2xl font-bold text-black">{calculateQualityScore(activeMockup)}%</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500 ease-out quality-score-bar"
                      style={{ '--quality-score-width': `${calculateQualityScore(activeMockup)}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                  {/* Critical Finding */}
                  {(() => {
                    const status = getFindingStatus(activeMockup, 0)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = `${activeMockup}-0`
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-red-500'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-red-50/30'} relative shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-red-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer ${isIgnored || isAccepted ? 'order-last' : 'order-first'} ${status === 'active' ? 'platform-finding-active-red' : ''} overflow-hidden group/card`}
                        onMouseEnter={() => { setHoveredFinding(findingKey); setDemoActive(false); }}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-red-600'}`}>
                              KRITISCH
                            </span>
                          </div>
                          <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                            {activeMockup === 'slide' ? 'Inkonsistenz (Zahl)' : activeMockup === 'report' ? 'Logik-Widerspruch: Text vs. Diagramm' : 'Widersprüchliche Vertragslaufzeit'}
                          </h4>
                          <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                            {activeMockup === 'slide'
                              ? 'Text nennt 14,2%, Tabelle zeigt 13,8% für Q2 (errechnet aus 15,9/114,8).'
                              : activeMockup === 'report'
                                ? 'Text behauptet "konstant unterhalb des Alarmgrenzwertes von 2,5 mm/s", aber Abb. 14 zeigt bei 100% Last einen Wert von 3,2 mm/s (28% über Grenzwert).'
                                : '§ 1.2 definiert Vertragslaufzeit von 36 Monaten, während § 2.2 eine Laufzeit von 24 Monaten angibt. Kritischer Widerspruch bei zentraler Vertragsbedingung.'
                            }
                          </p>
                          {status === 'active' && (
                            <div className="flex gap-1.5 mt-2">
                              <button
                                id={`accept-${activeMockup}-0`}
                                onClick={() => handleAccept(activeMockup, 0)}
                                className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                              >
                                Akzeptieren
                              </button>
                              <button
                                id={`ignore-${activeMockup}-0`}
                                onClick={() => handleIgnore(activeMockup, 0)}
                                aria-label="Fehler ignorieren"
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

                  {/* Critical Finding - Widersprüchliche Ursachenanalyse (nur Report) */}
                  {activeMockup === 'report' && (() => {
                    const status = getFindingStatus(activeMockup, 4)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = `${activeMockup}-4`
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-red-500'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-red-50/30'} relative shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-red-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer ${isIgnored || isAccepted ? 'order-last' : 'order-first'} ${status === 'active' ? 'platform-finding-active-red' : ''} overflow-hidden group/card`}
                        onMouseEnter={() => { setHoveredFinding(findingKey); setDemoActive(false); }}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-red-600'}`}>
                              KRITISCH
                            </span>
                          </div>
                          <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                            Widersprüchliche Ursachenanalyse
                          </h4>
                          <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                            Abschnitt 2.3 (Seite 45) führt erhöhte Schwingungen auf Rotorunwuchten zurück, während Abschnitt 4.2 (Seite 132) die Labyrinthdichtungen als Hauptursache identifiziert. Inkonsistente Ursachenanalyse.
                          </p>
                          {status === 'active' && (
                            <div className="flex gap-1.5 mt-2">
                              <button
                                id={`accept-${activeMockup}-4`}
                                onClick={() => handleAccept(activeMockup, 4)}
                                className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                                aria-label="Fehler akzeptieren"
                                type="button"
                              >
                                Akzeptieren
                              </button>
                              <button
                                id={`ignore-${activeMockup}-4`}
                                onClick={() => handleIgnore(activeMockup, 4)}
                                className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                                aria-label="Fehler ignorieren"
                                type="button"
                              >
                                Ignorieren
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })()}

                  {/* Medium Finding (Gelb) */}
                  {(() => {
                    const status = getFindingStatus(activeMockup, 1)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = `${activeMockup}-1`
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-yellow-400'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-yellow-50/30'} shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-yellow-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer ${isIgnored || isAccepted ? 'order-last' : 'order-first'} ${status === 'active' ? 'platform-finding-active-yellow' : ''} overflow-hidden group/card`}
                        onMouseEnter={() => { setHoveredFinding(findingKey); setDemoActive(false); }}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >

                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-yellow-700'}`}>
                            MITTEL
                          </span>
                        </div>
                        <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                          {activeMockup === 'slide' ? 'Formatierungsinkonsistenz' : activeMockup === 'report' ? 'Unvollständige Diagramm-Legende' : 'Begriffsinconsistenz: Vertragsgegenstand'}
                        </h4>
                        <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                          {activeMockup === 'slide'
                            ? 'Unterschiedliche Währungssymbole (€ vs. EUR) verwendet.'
                            : activeMockup === 'report'
                              ? 'Legende in Abb. 14 zeigt nur "Messwert", aber fehlt Angabe zu Messbedingungen (z.B. RMS-Glättung t=500ms) oder Messpunkten (L2 Radial).'
                              : '§ 1.1 spricht von "IT-Serviceleistungen", während § 1.3 den Vertragsgegenstand als "Software-Lizenz" definiert. § 4.1 erwähnt "SaaS-Dienstleistungen". Inkonsistente Begriffsverwendung.'
                          }
                        </p>
                        {status === 'active' && (
                          <div className="flex gap-1.5 mt-2">
                            <button
                              id={`accept-${activeMockup}-1`}
                              onClick={() => handleAccept(activeMockup, 1)}
                              className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                            >
                              Akzeptieren
                            </button>
                            <button
                              id={`ignore-${activeMockup}-1`}
                              onClick={() => handleIgnore(activeMockup, 1)}
                              className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                            >
                              Ignorieren
                            </button>
                          </div>
                        )}
                      </div>
                    )
                  })()}

                  {/* Medium Finding (Gelb) - Zweiter */}
                  {(() => {
                    const status = getFindingStatus(activeMockup, 2)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = `${activeMockup}-2`
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-yellow-400'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-yellow-50/30'} shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-yellow-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer ${isIgnored || isAccepted ? 'order-last' : 'order-first'} ${status === 'active' ? 'platform-finding-active-yellow' : ''} overflow-hidden group/card`}
                        onMouseEnter={() => { setHoveredFinding(findingKey); setDemoActive(false); }}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >

                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-yellow-700'}`}>
                            MITTEL
                          </span>
                        </div>
                        <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                          {activeMockup === 'slide' ? 'Rundungsinkonsistenz' : activeMockup === 'report' ? 'Ungewöhnlicher Wertverlauf' : 'Fehlende Anlagenreferenz'}
                        </h4>
                        <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                          {activeMockup === 'slide'
                            ? 'Chart zeigt für Q2 den Wert 115,0, aber Tabelle zeigt 114,8 - Rundungsinkonsistenz.'
                            : activeMockup === 'report'
                              ? 'Bei 100% Last zeigt Diagramm 3,2 mm/s, bei 110% Last jedoch nur 2,2 mm/s. Ungewöhnlicher Rückgang ohne Erklärung im Text.'
                              : '§ 5.4 verweist auf "Anlage B (Preismodell)", aber diese Anlage fehlt im Vertragsdokument. Unvollständige Dokumentation.'
                          }
                        </p>
                        {status === 'active' && (
                          <div className="flex gap-1.5 mt-2">
                            <button
                              id={`accept-${activeMockup}-2`}
                              onClick={() => handleAccept(activeMockup, 2)}
                              className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                            >
                              Akzeptieren
                            </button>
                            <button
                              id={`ignore-${activeMockup}-2`}
                              onClick={() => handleIgnore(activeMockup, 2)}
                              className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                            >
                              Ignorieren
                            </button>
                          </div>
                        )}
                      </div>
                    )
                  })()}

                  {/* Low Finding (Blau) - Rechtschreibfehler Straße (nur Contract) */}
                  {activeMockup === 'contract' && (() => {
                    const status = getFindingStatus(activeMockup, 3)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = `${activeMockup}-3`
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-blue-400'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-blue-50/30'} shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-blue-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer ${isIgnored || isAccepted ? 'order-last' : 'order-first'} ${status === 'active' ? 'platform-finding-active-blue' : ''} overflow-hidden group/card`}
                        onMouseEnter={() => { setHoveredFinding(findingKey); setDemoActive(false); }}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >

                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-blue-700'}`}>
                            NIEDRIG
                          </span>
                        </div>
                        <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                          Rechtschreibfehler: Straßenname
                        </h4>
                        <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                          Im Vertrag wird &quot;Maximillanstraße&quot; verwendet, korrekt wäre &quot;Maximilianstraße&quot;. Buchstabenfehler: doppeltes &quot;l&quot; statt &quot;i&quot; in &quot;Maximilian&quot;.
                        </p>
                        {status === 'active' && (
                          <div className="flex gap-1.5 mt-2">
                            <button
                              id={`accept-${activeMockup}-3`}
                              onClick={() => handleAccept(activeMockup, 3)}
                              className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                            >
                              Akzeptieren
                            </button>
                            <button
                              id={`ignore-${activeMockup}-3`}
                              onClick={() => handleIgnore(activeMockup, 3)}
                              className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                            >
                              Ignorieren
                            </button>
                          </div>
                        )}
                      </div>
                    )
                  })()}

                  {/* Low Finding (Blau) - nur für Slide und Report */}
                  {(activeMockup === 'slide' || activeMockup === 'report') && (() => {
                    const status = getFindingStatus(activeMockup, 3)
                    const isIgnored = status === 'ignored'
                    const isAccepted = status === 'accepted'
                    const findingKey = `${activeMockup}-3`
                    const isHovered = hoveredFinding === findingKey
                    return (
                      <div
                        className={`border ${isIgnored || isAccepted ? 'border-gray-300' : 'border-blue-400'} rounded-lg p-2.5 ${isIgnored || isAccepted ? 'bg-gray-100' : 'bg-blue-50/30'} shadow-sm ${isAccepted ? 'ring-2 ring-green-400 ring-opacity-50' : ''} ${isHovered ? 'ring-2 ring-blue-500 ring-opacity-70 scale-[1.02]' : ''} transition-all cursor-pointer ${isIgnored || isAccepted ? 'order-last' : 'order-first'} ${status === 'active' ? 'platform-finding-active-blue' : ''} overflow-hidden group/card`}
                        onMouseEnter={() => { setHoveredFinding(findingKey); setDemoActive(false); }}
                        onMouseLeave={() => setHoveredFinding(null)}
                      >

                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${isIgnored || isAccepted ? 'text-gray-500' : 'text-blue-700'}`}>
                            NIEDRIG
                          </span>
                        </div>
                        <h4 className={`text-xs font-semibold mb-1 ${isIgnored || isAccepted ? 'text-gray-500' : 'text-black'}`}>
                          {activeMockup === 'slide' ? 'Formatierungsinkonsistenz' : 'Fehlende Referenz'}
                        </h4>
                        <p className={`text-[10px] leading-relaxed ${isIgnored || isAccepted ? 'text-gray-400' : 'text-gray-600'}`}>
                          {activeMockup === 'slide'
                            ? 'Die Schriftgröße schwankt zwischen Executive Summary (text-xs Überschrift, 9px Text) und Key Highlights (11px Überschrift, 9px Text) - Formatierungsinkonsistenz.'
                            : 'Abschnitt 4.1 erwähnt DIN ISO 10816-5, aber keine vollständige Quellenangabe im Literaturverzeichnis.'
                          }
                        </p>
                        {status === 'active' && (
                          <div className="flex gap-1.5 mt-2">
                            <button
                              id={`accept-${activeMockup}-3`}
                              onClick={() => handleAccept(activeMockup, 3)}
                              className="flex-1 bg-gray-800 text-white text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-900 transition-colors"
                            >
                              Akzeptieren
                            </button>
                            <button
                              id={`ignore-${activeMockup}-3`}
                              onClick={() => handleIgnore(activeMockup, 3)}
                              className="flex-1 bg-gray-200 text-gray-700 text-[10px] py-1.5 px-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
                            >
                              Ignorieren
                            </button>
                          </div>
                        )}
                      </div>
                    )
                  })()}

                </div>
              </div>
            </div>

            {/* Demo Cursor */}
            {demoActive && (
              <DemoCursorComponent
                containerRef={mainContainerRef}
                onHover={setHoveredFinding}
                activeMockup={activeMockup}
              />
            )}
          </div>
        </div>
        <style jsx global>{`
          @keyframes platform-pulse-red {
            0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
            70% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
            100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
          }
          @keyframes platform-pulse-yellow {
            0% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.4); }
            70% { box-shadow: 0 0 0 8px rgba(250, 204, 21, 0); }
            100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0); }
          }
          @keyframes platform-pulse-blue {
            0% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.4); }
            70% { box-shadow: 0 0 0 8px rgba(96, 165, 250, 0); }
            100% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0); }
          }
          .platform-finding-active-red {
            animation: platform-pulse-red 2s infinite;
          }
          .platform-finding-active-yellow {
            animation: platform-pulse-yellow 2s infinite;
          }
          .platform-finding-active-blue {
            animation: platform-pulse-blue 2s infinite;
          }
        `}</style>
      </div>
    </section >
  )
}

export const PlatformDemoSection = memo(PlatformDemoSectionComponent)

// --- Demo Cursor Component ---
interface DemoCursorProps {
  containerRef: React.RefObject<HTMLDivElement>
  onHover: (id: string | null) => void
  activeMockup: MockupType
}

function DemoCursorComponent({ containerRef, activeMockup, onHover }: DemoCursorProps): JSX.Element {
  const [position, setPosition] = useState({ x: 600, y: 400 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Start the demo sequence
  useEffect(() => {
    let mounted = true

    const runDemo = async () => {
      // Allow layout to stabilize
      await new Promise(r => setTimeout(r, 1000))
      if (!mounted) return

      setIsVisible(true)

      if (!containerRef.current) return

      // Find finding cards
      const cards = Array.from(containerRef.current.querySelectorAll('.group\\/card'))

      // Determine logical order based on mockup type
      const getKeys = (m: MockupType) => {
        if (m === 'report') return [`${m}-0`, `${m}-4`, `${m}-1`, `${m}-2`, `${m}-3`]
        return [`${m}-0`, `${m}-1`, `${m}-2`, `${m}-3`]
      }

      const keys = getKeys(activeMockup)

      for (let i = 0; i < cards.length; i++) {
        if (!mounted) return
        const el = cards[i]
        const key = keys[i]

        if (!el || !key) continue

        // Calculate precise center position
        const updatePosition = () => {
          if (!containerRef.current) return { x: 0, y: 0 }
          const rect = el.getBoundingClientRect()
          const containerRect = containerRef.current.getBoundingClientRect()

          // Manual correction: Shift UP by 25% of height to hit conceptual center if visuals are off-center
          // Also apply a rigid offset if needed
          return {
            x: rect.left - containerRect.left + rect.width / 2,
            y: (rect.top - containerRect.top + rect.height / 2) - 40 // Force upward shift based on user feedback
          }
        }

        const target = updatePosition()
        setPosition(target)

        // Travel time (smooth glide)
        await new Promise(r => setTimeout(r, 1000))
        if (!mounted) return

        // Hover Effect
        setIsHovering(true)
        if (onHover) onHover(key)

        // Read time
        await new Promise(r => setTimeout(r, 1500))
        if (!mounted) return

        setIsHovering(false)
        if (onHover) onHover(null)
      }

      // Exit
      await new Promise(r => setTimeout(r, 500))
      setIsVisible(false)
    }

    runDemo()

    return () => { mounted = false }
  }, [containerRef, activeMockup, onHover])

  return (
    <div className={`absolute inset-0 pointer-events-none z-[100] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className="absolute transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1)"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        {/* Simple, Professional Cursor */}
        <div className="relative -translate-x-[6px] -translate-y-[2px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-transform duration-300 ${isHovering ? 'scale-90' : 'scale-100'}`}
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="black"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          {/* Subtle Touch/Interaction Ring */}
          <div className={`absolute top-0 left-0 w-8 h-8 -ml-3 -mt-3 border border-black/20 rounded-full transition-all duration-500 ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        </div>
      </div>
    </div>
  )
}

// Slide Mockup Component - Präsentation mit Charts (16:9)
interface MockupProps {
  hoveredFinding: string | null
}

function SlideMockup({ hoveredFinding }: MockupProps): JSX.Element {
  const finding0Hovered = hoveredFinding === 'slide-0'
  const finding1Hovered = hoveredFinding === 'slide-1'
  const finding2Hovered = hoveredFinding === 'slide-2'
  const finding3Hovered = hoveredFinding === 'slide-3'

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-5 relative flex flex-col w-full aspect-16-9 max-w-[700px]">
      {/* Slide Header */}
      <div className="mb-3 pb-2 border-b-2 border-gray-300 shrink-0">
        <div className="flex justify-between items-start">
          <h2 className="text-base font-bold text-black">Finanzübersicht 2024</h2>
          <div className="text-[9px] text-gray-500 font-mono">Folie 3 / 12</div>
        </div>
        <div className="text-[9px] text-gray-500 mt-0.5">Vertraulich</div>
      </div>

      {/* Slide Content - Two Column Layout */}
      <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
        {/* Left Column - Text */}
        <div className="space-y-1.5 flex flex-col min-h-0">
          <div className="shrink-0">
            <h3 className={`text-xs font-bold text-black transition-all ${finding3Hovered ? 'ring-2 ring-blue-400 bg-blue-50/30 rounded px-1 py-0.5' : ''}`}>Executive Summary</h3>
            <ul className="space-y-0.5 text-[9px] text-gray-700 list-disc list-inside">
              <li>Starkes Wachstum in Q3 trotz Marktvolatilität</li>
              <li>EBITDA-Marge deutlich verbessert, sowie die operative Effizienz</li>
              <li>
                Kosteneinsparungen von 8,5 Mio.{' '}
                <span
                  className={`px-0.5 rounded transition-all ${finding1Hovered ? 'bg-yellow-200 text-yellow-800 font-bold ring-2 ring-yellow-500' : ''}`}
                >
                  EUR
                </span>
                {' '}realisiert, aufgrund unserer Maßnahmen
              </li>
            </ul>
          </div>

          <div className="mt-1 shrink-0">
            <h4 className={`text-[11px] font-semibold text-black mb-0.5 transition-all ${finding3Hovered ? 'ring-2 ring-blue-400 bg-blue-50/30 rounded px-1 py-0.5' : ''}`}>Key Highlights</h4>
            <p className="text-[9px] text-gray-700 leading-tight">
              Trotz volatilen Marktumfelds konnten wir durch Kosteneinsparungen die EBIT-Marge von Q2 auf{' '}
              <span
                className={`px-0.5 rounded transition-all ${finding0Hovered ? 'bg-red-200 text-red-800 font-bold ring-2 ring-red-500' : ''}`}
              >
                14,2%
              </span>
              {' '}steigern und unsere operative Effizienz verbessern. Die strategischen
              Initiativen zeigen positive Wirkung und übertreffen unsere Erwartungen.
            </p>
          </div>
        </div>

        {/* Right Column - Chart */}
        <div className="space-y-1.5 flex flex-col min-h-0">
          <h3 className="text-xs font-bold text-black shrink-0">Umsatzentwicklung</h3>
          {/* Bar Chart */}
          <div className="bg-gray-50 p-2.5 rounded border border-gray-200 flex-1 flex items-end justify-between gap-1.5 min-h-0">
            <div className="flex flex-col items-center flex-1 h-full justify-end">
              <div className="w-full rounded-t mb-1 bg-blue-500 bar-height-60"></div>
              <div className="text-[8px] text-gray-600">Q1</div>
              <div className="text-[7px] text-gray-500">120,5</div>
            </div>
            <div className="flex flex-col items-center flex-1 h-full justify-end">
              <div className={`w-full rounded-t mb-1 bar-height-55 ${finding2Hovered ? 'bg-yellow-400 ring-2 ring-yellow-500' : 'bg-blue-600'}`}></div>
              <div className="text-[8px] text-gray-600">Q2</div>
              <div className={`text-[7px] ${finding2Hovered ? 'text-yellow-700 font-bold' : 'text-gray-500'} transition-all`}>115,0</div>
            </div>
            <div className="flex flex-col items-center flex-1 h-full justify-end">
              <div className="w-full rounded-t mb-1 bg-blue-500 bar-height-58"></div>
              <div className="text-[8px] text-gray-600">Q3</div>
              <div className="text-[7px] text-gray-500">118,2</div>
            </div>
            <div className="flex flex-col items-center flex-1 h-full justify-end">
              <div className="w-full rounded-t mb-1 bg-blue-600 bar-height-65"></div>
              <div className="text-[8px] text-gray-600">Q4</div>
              <div className="text-[7px] text-gray-500">125,8</div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Table at Bottom */}
      <div className="mt-1.5 relative shrink-0">
        <h3 className="text-[9px] font-semibold text-black mb-0.5">
          Finanzkennzahlen (in Mio.{' '}
          <span
            className={`px-0.5 rounded transition-all ${finding1Hovered ? 'bg-yellow-200 text-yellow-800 font-bold ring-2 ring-yellow-500' : ''}`}
          >
            €
          </span>
          )
        </h3>
        <div className="border border-gray-200 rounded overflow-hidden relative">
          <div className="grid grid-cols-5 text-[9px]">
            <div className="p-1.5 bg-gray-50 font-semibold text-gray-700 border-b border-gray-200">
              Position
            </div>
            <div className="p-1.5 bg-gray-50 font-semibold text-gray-700 border-b border-gray-200 text-center">
              Q1
            </div>
            <div className="p-1.5 bg-gray-50 font-semibold text-gray-700 border-b border-gray-200 text-center">
              Q2
            </div>
            <div className="p-1.5 bg-gray-50 font-semibold text-gray-700 border-b border-gray-200 text-center">
              Q3
            </div>
            <div className="p-1.5 bg-gray-50 font-semibold text-gray-700 border-b border-gray-200 text-center">
              Q4
            </div>

            <div className="p-1.5 border-b border-gray-100 text-gray-800">Umsatzerlöse</div>
            <div className="p-1.5 border-b border-gray-100 text-gray-900 text-center">120,5</div>
            <div className={`p-1.5 border-b border-gray-100 text-gray-900 text-center ${finding2Hovered ? 'bg-yellow-200 ring-2 ring-yellow-500' : ''} transition-all`}>114,8</div>
            <div className="p-1.5 border-b border-gray-100 text-gray-900 text-center">115,0</div>
            <div className="p-1.5 border-b border-gray-100 text-gray-900 text-center">125,8</div>

            <div className="p-1.5 border-b border-gray-100 text-gray-800">EBIT</div>
            <div className="p-1.5 border-b border-gray-100 text-gray-900 text-center">15,8</div>
            <div className="p-1.5 border-b border-gray-100 text-gray-900 text-center">15,9</div>
            <div className="p-1.5 border-b border-gray-100 text-gray-900 text-center">16,1</div>
            <div className="p-1.5 border-b border-gray-100 text-gray-900 text-center">16,3</div>

            {/* Error Row - Critical */}
            <div className={`p-1.5 ${finding0Hovered ? 'bg-red-200' : ''} text-gray-900 font-semibold transition-all`}>EBIT-Marge</div>
            <div className={`p-1.5 ${finding0Hovered ? 'bg-red-200' : ''} text-gray-900 text-center transition-all`}>13,1%</div>
            <div className={`p-1.5 border-b border-gray-100 text-center relative ${finding0Hovered ? 'bg-red-200 text-red-600' : 'text-gray-900'} transition-all`}>
              <span className="relative z-10">13,8%</span>
              {finding0Hovered && (
                <div className="absolute inset-0 border-2 border-red-500 rounded-sm pointer-events-none z-0"></div>
              )}
            </div>
            <div className={`p-1.5 ${finding0Hovered ? 'bg-red-200' : ''} text-gray-900 text-center transition-all`}>14,2%</div>
            <div className={`p-1.5 border-b border-gray-100 ${finding0Hovered ? 'bg-red-200' : ''} text-gray-900 text-center transition-all`}>13,0%</div>
          </div>
          {/* Red Glow Effect - Only on hover */}
          {finding0Hovered && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 shadow-[0_0_30px_rgba(239,68,68,1)] z-10 transition-all"></div>
          )}
        </div>
      </div>
    </div>
  )
}

// Report Mockup Component - DINA4 Format (210mm x 297mm)
function ReportMockup({ hoveredFinding }: MockupProps): JSX.Element {
  const finding0Hovered = hoveredFinding === 'report-0'
  const finding1Hovered = hoveredFinding === 'report-1'
  const finding2Hovered = hoveredFinding === 'report-2'
  const finding3Hovered = hoveredFinding === 'report-3'
  const finding4Hovered = hoveredFinding === 'report-4'

  return (
    <div className="w-full h-full bg-gray-100 relative overflow-hidden flex flex-col">
      {/* Document Area - DINA4 Format (Portrait), No Scroll */}
      <div className="flex-1 overflow-hidden p-3 flex justify-center items-center">
        {/* DINA4 Page - Portrait Orientation (210mm x 297mm) - Höher als breit */}
        <div
          className="bg-white text-black shadow-lg border border-gray-300 relative p-4 flex flex-col aspect-a4-portrait h-full max-h-[calc(100%-24px)] w-auto max-w-[calc((100%-24px)*0.707)]"
        >

          {/* Report Header */}
          <div className="border-b border-gray-300 pb-1 mb-2 flex justify-between items-end shrink-0">
            <div>
              <h1 className="text-[10px] font-bold text-black uppercase tracking-widest">Technische Revision T-402</h1>
              <span className="text-[7px] text-gray-500 font-mono">Kapitel 4: Diagnostik</span>
            </div>
            <div className="text-right text-[7px] text-gray-400 font-mono">
              Dokument-ID: ENG-2024-892-B
            </div>
          </div>

          {/* Dense Text Content - Compact, No Scroll */}
          <div className="text-[8px] leading-[1.35] text-gray-800 text-justify space-y-1 flex-1 min-h-0 overflow-hidden">

            {/* Section 4.1 */}
            <div>
              <h3 className="font-bold text-[9px] text-black mb-0.5">4.1 Methodik der Schwingungsmessung</h3>
              <p>
                Die Erfassung der mechanischen Schwingungen erfolgte gemäß{' '}
                <span className={`px-0.5 rounded transition-all ${finding3Hovered ? 'bg-blue-200 text-blue-800 font-bold ring-2 ring-blue-500' : ''}`}>
                  DIN ISO 10816-5
                </span>
                {' '}an den Lagergehäusen der Führungslager L1 (Turbine) und L2 (Generator). Die Signalabtastung (10 kHz, 48h) erfasste transiente Zustände vollständig. Rohdaten wurden durch einen Tiefpassfilter (Cut-off 1 kHz) bereinigt.
              </p>
            </div>

            {/* Section 4.2 (Problem Area) */}
            <div>
              <h3 className="font-bold text-[9px] text-black mb-0.5">4.2 Analyseergebnisse Lager L2 (Radial)</h3>
              <p className="mb-1">
                Fokus der Analyse war das radiale Schwingungsverhalten des generatorseitigen Führungslagers (L2) bei 20% bis 110% Nennlast. Die Messreihen zeigen eine Stabilisierung nach{' '}
                <span className={`px-0.5 rounded transition-all ${finding4Hovered ? 'bg-red-200 text-red-800 font-bold ring-2 ring-red-500' : ''}`}>
                  Ertüchtigung der Labyrinthdichtungen
                </span>
                .
              </p>
              <p className="mb-1">
                Der verwendete Alarmgrenzwert von 2,5 mm/s basiert auf den Vorgaben in Abschnitt 3.2 dieser Revision. Weitere Details zur Grenzwertbestimmung finden sich im Anhang A.
              </p>

              {/* The Contradiction Text */}
              <div className={`p-1 border-l-2 pl-1.5 my-1 ${finding0Hovered ? 'border-red-500 bg-red-50/50' : 'border-gray-300'}`}>
                <p>
                  &quot;Zusammenfassend ist festzustellen, dass die gemessenen Schwinggeschwindigkeiten (v_rms) über das gesamte Lastband{' '}
                  <span className={`font-semibold ${finding0Hovered ? 'text-red-700 decoration-red-300 underline decoration-wavy' : ''}`}>
                    konstant unterhalb des zulässigen Alarmgrenzwertes von 2,5 mm/s
                  </span>
                  {' '}verblieben sind. Ein dauerhafter Betrieb ist uneingeschränkt zulässig.&quot;
                </p>
              </div>
            </div>

            {/* The Chart (Technical, Embedded) - Larger */}
            <div className="my-1.5 border border-gray-200 p-2">
              {/* Chart Container - Larger without Y-axis */}
              <div className={`h-32 relative grid grid-cols-6 items-end gap-2 px-1.5 pb-1 border-b ${finding0Hovered ? 'ring-1 ring-red-500 ring-offset-1' : ''}`}>

                {/* Grid Background - Horizontal Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
                  <div className="w-full h-px bg-gray-500"></div>
                  <div className="w-full h-px bg-gray-500"></div>
                  <div className="w-full h-px bg-gray-500"></div>
                  <div className="w-full h-px bg-gray-500"></div>
                  <div className="w-full h-px bg-gray-500"></div>
                </div>

                {/* Bars with correct scaling (max 4.0 mm/s) */}
                <ReportBar height="22.5%" label="20%" value="0.9" /> {/* 0.9/4.0 = 22.5% */}
                <ReportBar height="35%" label="40%" value="1.4" /> {/* 1.4/4.0 = 35% */}
                <ReportBar height="45%" label="60%" value="1.8" /> {/* 1.8/4.0 = 45% */}
                <ReportBar height="50%" label="80%" value="2.0" /> {/* 2.0/4.0 = 50% */}

                {/* Error Bar (High Value) - 3.2 mm/s = 80% of 4.0 */}
                <div className="relative h-full flex flex-col justify-end group w-full">
                  <div className={`bg-gray-300 w-full relative transition-all group-hover:bg-gray-400 rounded-t bar-height-80 ${finding0Hovered ? 'ring-2 ring-red-500 bg-red-200' : finding2Hovered ? 'ring-2 ring-yellow-500 bg-yellow-200' : ''}`}>
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-bold ${finding0Hovered ? 'text-red-700' : finding2Hovered ? 'text-yellow-700' : 'text-gray-500 opacity-0 group-hover:opacity-100'}`}>3.2</span>
                  </div>
                  <span className={`text-[7px] text-center mt-1 pt-0.5 border-t border-gray-300 font-medium ${finding0Hovered ? 'text-red-700' : finding2Hovered ? 'text-yellow-700' : 'text-gray-600'}`}>100%</span>
                </div>

                {/* 110% Bar - Highlighted for Finding 2 */}
                <div className={`relative h-full flex flex-col justify-end group w-full ${finding2Hovered ? 'ring-2 ring-yellow-500 rounded-t' : ''}`}>
                  <div className={`bg-gray-300 w-full relative transition-all group-hover:bg-gray-400 rounded-t bar-height-55 ${finding2Hovered ? 'bg-yellow-200 ring-2 ring-yellow-500' : ''}`}>
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] ${finding2Hovered ? 'text-yellow-700 font-bold' : 'text-gray-500 opacity-0 group-hover:opacity-100'}`}>2.2</span>
                  </div>
                  <span className={`text-[7px] text-center mt-1 pt-0.5 border-t border-gray-300 font-medium ${finding2Hovered ? 'text-yellow-700' : 'text-gray-600'}`}>110%</span>
                </div>
              </div>

              {/* Text below chart */}
              <div className="mt-2 space-y-0.5">
                <div className="flex justify-between items-center">
                  <span className="text-[7px] font-bold text-gray-700">
                    Abb. 14: Schwinggeschwindigkeit v_rms (mm/s) vs. Generatorlast P/Pn
                  </span>
                  <div className={`flex gap-1.5 items-center text-[6px] px-2 py-1 rounded transition-all ${finding1Hovered ? 'ring-2 ring-yellow-500 bg-yellow-50/30' : 'text-gray-500'}`}>
                    <span className={`flex items-center gap-0.5 ${finding1Hovered ? 'text-yellow-700 font-semibold' : ''}`}>
                      <span className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></span> Messwert
                    </span>
                  </div>
                </div>
                <div className="text-[6px] text-gray-400 text-center italic">Datenquelle: VIB-L2, RMS-Glättung (t=500ms)</div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-auto pt-1 border-t border-gray-200 flex justify-between text-[6px] text-gray-400 font-mono shrink-0">
            <span>© TechFlow Industries 2024 | Vertraulich</span>
            <span>Seite 132</span>
          </div>

        </div>
      </div>
    </div>
  )
}

// Helper for Bar Chart
function ReportBar({ height, label, value }: { height: string, label: string, value: string }): JSX.Element {
  return (
    <div className="relative h-full flex flex-col justify-end group w-full">
      <div
        className="bg-gray-300 w-full relative transition-all group-hover:bg-gray-400 rounded-t"
        data-height={height}
        ref={(el) => {
          if (el) {
            el.style.setProperty('height', height)
          }
        }}
      >
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] text-gray-500 opacity-0 group-hover:opacity-100">{value}</span>
      </div>
      <span className="text-[7px] text-gray-600 text-center mt-1 pt-0.5 border-t border-gray-300 font-medium">{label}</span>
    </div>
  )
}

// Contract Mockup Component - DINA4 Format (210mm x 297mm)
function ContractMockup({ hoveredFinding }: MockupProps): JSX.Element {
  const finding0Hovered = hoveredFinding === 'contract-0'
  const finding1Hovered = hoveredFinding === 'contract-1'
  const finding2Hovered = hoveredFinding === 'contract-2'
  const finding3Hovered = hoveredFinding === 'contract-3'

  return (
    <div className="w-full h-full bg-gray-100 relative overflow-hidden flex flex-col">
      {/* Document Area - DINA4 Format (Portrait), No Scroll */}
      <div className="flex-1 overflow-hidden p-3 flex justify-center items-center">
        {/* DINA4 Page - Portrait Orientation (210mm x 297mm) */}
        <div
          className="bg-white text-black shadow-lg border border-gray-300 relative p-4 flex flex-col aspect-a4-portrait h-full max-h-[calc(100%-24px)] w-auto max-w-[calc((100%-24px)*0.707)]"
        >

          {/* Contract Header - Classic Legal Format */}
          <div className="border-b border-gray-300 pb-2 mb-2 shrink-0">
            <div className="flex gap-4 mb-1.5">
              <div className="flex-1">
                <p className="text-[7px] text-gray-700">
                  <span className="font-semibold">Nordstern Industrie GmbH</span><br />
                  Friedrichstraße 187<br />
                  10117 Berlin<br />
                  Geschäftsführer: Dr. Thomas Weber
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[7px] text-gray-700">
                  <span className="font-semibold">CloudSolutions AG</span><br />
                  <span className={finding3Hovered ? 'ring-2 ring-blue-500 bg-blue-50/30 rounded px-0.5' : ''}>
                    Maximillanstraße 28
                  </span><br />
                  80539 München<br />
                  Vorstand: Sabine Hoffmann
                </p>
              </div>
            </div>
            <div className="mb-1">
              <p className="text-[7.5px] text-black leading-tight">
                Zwischen der <span className="font-semibold">Nordstern Industrie GmbH</span>, Friedrichstraße 187, 10117 Berlin, nachfolgend &quot;Auftraggeber&quot; genannt, und der <span className="font-semibold">CloudSolutions AG</span>, Maximilianstraße 28, 80539 München, nachfolgend &quot;Dienstleister&quot; genannt, wird nachstehender Vertrag geschlossen.
              </p>
            </div>
            <div className="text-[7px] text-gray-500 italic">
              Berlin, den 15. März 2024
            </div>
          </div>

          {/* Contract Content - Compact, No Scroll */}
          <div className="text-[7.5px] leading-[1.3] text-gray-800 space-y-0.5 flex-1 min-h-0 overflow-hidden">

            {/* Section 1 */}
            <div>
              <h3 className="font-bold text-[8.5px] text-black mb-0.5">§ 1 Vertragsgegenstand</h3>
              <p className="mb-0.5">
                <span className="font-semibold">1.1</span> Dieser Vertrag regelt die Erbringung von IT-Serviceleistungen durch den Dienstleister an den Auftraggeber. Die Leistungen umfassen Wartung, Support und kontinuierliche Weiterentwicklung der vereinbarten Systeme.
              </p>
              <p className={`mb-0.5 ${finding0Hovered ? 'ring-2 ring-red-500 bg-red-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">1.2</span> Der Vertrag gilt für die Laufzeit von{' '}
                <span className={finding0Hovered ? 'text-red-700 bg-red-100' : ''}>
                  36 Monaten
                </span>
                {' '}ab Vertragsbeginn. Eine Verlängerung um weitere 12 Monate ist bei beidseitigem Einverständnis möglich.
              </p>
              <p className={`mb-0.5 ${finding1Hovered ? 'ring-2 ring-red-500 bg-red-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">1.3</span> Der{' '}
                <span className={finding1Hovered ? 'text-red-700 bg-red-100' : ''}>
                  Vertragsgegenstand
                </span>
                {' '}wird als{' '}
                <span className={finding1Hovered ? 'text-red-700 bg-red-100' : ''}>
                  &quot;Software-Lizenz&quot;
                </span>
                {' '}definiert und umfasst die Nutzungsrechte gemäß den Bestimmungen in Anlage C.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="font-bold text-[8.5px] text-black mb-0.5">§ 2 Vertragsbeginn und Laufzeit</h3>
              <p className="mb-0.5">
                <span className="font-semibold">2.1</span> Der Vertrag tritt mit Unterzeichnung durch beide Parteien in Kraft. Die Leistungserbringung beginnt spätestens 14 Werktage nach Vertragsbeginn.
              </p>
              <p className={`mb-0.5 ${finding0Hovered ? 'ring-2 ring-red-500 bg-red-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">2.2</span> Die Vertragslaufzeit beträgt{' '}
                <span className={finding0Hovered ? 'text-red-700 bg-red-100' : ''}>
                  24 Monate
                </span>
                . Eine ordentliche Kündigung ist frühestens 6 Monate vor Ablauf der Laufzeit möglich.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="font-bold text-[8.5px] text-black mb-0.5">§ 3 Kündigung</h3>
              <p className="mb-0.5">
                <span className="font-semibold">3.1</span> Beide Parteien können den Vertrag mit einer Frist von 3 Monaten zum Ende eines Kalendermonats kündigen, sofern keine abweichende Regelung getroffen wurde.
              </p>
              <p className="mb-0.5">
                <span className="font-semibold">3.2</span> Die Kündigungsfrist beträgt 30 Tage und beginnt mit Zugang der Kündigungserklärung beim Empfänger. Die Kündigung bedarf der Schriftform.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="font-bold text-[8.5px] text-black mb-0.5">§ 4 Leistungsumfang</h3>
              <p className={`mb-0.5 ${finding1Hovered ? 'ring-2 ring-red-500 bg-red-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">4.1</span> Der Dienstleister erbringt{' '}
                <span className={finding1Hovered ? 'text-red-700 bg-red-100' : ''}>
                  SaaS-Dienstleistungen
                </span>
                {' '}gemäß den Spezifikationen in Anlage A. Dies umfasst Hosting, Datenbankverwaltung und regelmäßige Updates.
              </p>
              <p className="mb-0.5">
                <span className="font-semibold">4.2</span> Der Leistungsumfang beinhaltet 24/7 Verfügbarkeit mit einer vereinbarten Uptime von mindestens 99,5% pro Monat. Ausfallzeiten für geplante Wartungen sind hiervon ausgenommen.
              </p>
              <p className="mb-0.5">
                <span className="font-semibold">4.3</span> Support-Leistungen werden über ein Ticket-System erbracht. Reaktionszeiten für kritische Störungen betragen maximal 2 Stunden während der Geschäftszeiten.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="font-bold text-[8.5px] text-black mb-0.5">§ 5 Vergütung</h3>
              <p className={`mb-0.5 ${finding2Hovered ? 'ring-2 ring-yellow-500 bg-yellow-50/30 rounded px-1 py-0.5' : ''} transition-all`}>
                <span className="font-semibold">5.1</span> Die monatliche Grundvergütung beträgt 8.500,00 EUR zzgl. gesetzlicher Mehrwertsteuer. Die erste Rechnung wird zum Vertragsbeginn gestellt. Details zum Preismodell finden sich in{' '}
                <span className={finding2Hovered ? 'text-yellow-700 bg-yellow-100 underline decoration-wavy' : ''}>
                  Anlage B (Preismodell)
                </span>
                .
              </p>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-auto pt-1 border-t border-gray-200 flex justify-between text-[6px] text-gray-400 font-mono shrink-0">
            <span>© TechCorp GmbH & ServiceProvider AG 2024 | Vertraulich</span>
            <span>Seite 1 von 3</span>
          </div>

        </div>
      </div>
    </div>
  )
}
