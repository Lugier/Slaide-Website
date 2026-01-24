'use client'

import { memo, useState, useEffect } from 'react'
import { BrainCircuit, Calculator, GitCompare, BookOpenCheck, X, Check, ArrowRight, FileText, CheckCircle2, ShieldCheck, Microscope, AlertTriangle, TrendingUp } from 'lucide-react'

function CoreCapabilitiesSectionComponent(): JSX.Element {
    return (
        <section className="py-24 md:py-32 bg-gray-50/80 border-t border-gray-100 relative overflow-hidden">
            {/* Background Dots */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-20 reveal">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900">
                            Versteht den Kontext.<br />
                            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Findet den Widerspruch.</span>
                        </h2>
                        <p className="text-grey-medium max-w-md text-lg leading-relaxed font-light">
                            Review analysiert nicht nur Text, sondern die Logik Ihrer Argumentation. Hybride AI prüft Konsistenz über Tabellen, Charts und Fließtext hinweg.
                        </p>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">

                    {/* Card 1: Argumentations-Check */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-pointer">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <BrainCircuit className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-black tracking-tight">Logik</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                Prüft, ob Ihre Argumentationskette über das gesamte Dokument hinweg konsistent bleibt. Erkennt widersprüchliche Aussagen zwischen weit entfernten Folien oder Kapiteln automatisch.
                            </p>
                        </div>

                        {/* Visual: Logic check in Monochrome UI */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300">
                                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                                    <span className="text-gray-400 uppercase tracking-tighter">Prüfung_Modul_01</span>
                                    <span className="bg-black text-white px-1.5 rounded font-bold uppercase">Konflikt</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="w-14 text-gray-400">Seite 04:</span>
                                        <span className="text-gray-400 line-through">"Fokus: Wachstum"</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-14 text-gray-400">Seite 22:</span>
                                        <span className="bg-black text-white px-2 py-0.5 rounded shadow-sm">"Fokus: Effizienz"</span>
                                    </div>
                                    <div className="pt-2 text-[8px] font-bold text-black uppercase tracking-tighter">
                                        &gt; Fokus-Konflikt erkannt
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Zahlen-Check */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal delay-100 flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-pointer">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <Calculator className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-black tracking-tight">Rechnungen</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                Rechnet jede Summe und jeden Prozentwert nach. Validiert, ob Zahlen im Fließtext exakt mit den Werten in Tabellen und Diagrammen übereinstimmen.
                            </p>
                        </div>

                        {/* Visual: Math check in Monochrome UI */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300">
                                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                                    <span className="text-gray-400 uppercase tracking-tighter">Prüfung_Modul_02</span>
                                    <span className="bg-black text-white px-1.5 rounded font-bold uppercase">Delta</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[8px] text-gray-400 uppercase">Input: Fließtext</span>
                                        <div className="flex justify-between font-bold">
                                            <span>"EBIT-Marge: 14,2%"</span>
                                            <X className="w-3 h-3 text-black" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 bg-black text-white p-2 rounded">
                                        <span className="text-[8px] text-gray-300 uppercase">Kalkulation: Tabelle S.12</span>
                                        <div className="flex justify-between font-bold">
                                            <span>15,9 / 114,8 = 13,85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Diagramm-Check */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal delay-200 flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-pointer">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <Microscope className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-black tracking-tight">Plausibilität</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                Vergleicht visuelle Trends in Charts mit den schriftlichen Aussagen. Erkennt, wenn ein Diagramm steigt, der Text aber von einer Stagnation spricht.
                            </p>
                        </div>

                        {/* Visual: Plausibility check in Monochrome UI */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300">
                                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                                    <span className="text-gray-400 uppercase tracking-tighter">Prüfung_Modul_03</span>
                                    <span className="bg-black text-white px-1.5 rounded font-bold uppercase">Abweichung</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between text-[8px] text-gray-400 uppercase">Chart_Data: Abb 3.2</div>
                                        <div className="flex items-center gap-2 font-bold">
                                            <TrendingUp className="w-3 h-3 text-black" />
                                            <span>Positiver Trend (↑)</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1 p-2 bg-black text-white rounded">
                                        <div className="flex justify-between text-[8px] text-gray-300 uppercase">Text_Audit: Summary</div>
                                        <div className="flex items-center justify-between font-bold italic underline decoration-white/30 underline-offset-4">
                                            "Stagnierender Markt"
                                            <X className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation Keyframes */}
                <style jsx global>{`
                    @keyframes shimmer {
                        100% {
                            transform: translateX(100%);
                        }
                    }
                `}</style>
            </div>
        </section>
    )
}

export const CoreCapabilitiesSection = memo(CoreCapabilitiesSectionComponent)
