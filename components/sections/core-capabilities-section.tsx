'use client'

import { memo } from 'react'
import { BrainCircuit, Calculator, X, Microscope, AlertTriangle, TrendingUp, ShieldCheck } from 'lucide-react'

function CoreCapabilitiesSectionComponent(): JSX.Element {
    return (
        <section className="py-24 md:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="mb-20 reveal text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-black">
                        Fehler zerstören Vertrauen.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                        Review versteht den Kontext und findet den Widerspruch. Es analysiert Ihre Unterlagen mit algorithmischer Präzision: Grammatik, Logik und Zahlen – für Ergebnisse, die klar und belastbar sind.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">

                    {/* Card 1: Formale Präzision (Syntax/Grammar) */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-default">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <span className="font-serif text-2xl italic font-bold text-black group-hover:text-white">Aa</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-black tracking-tight">Formale Präzision</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                Perfektionieren Sie Ihren Stil. Review prüft weit mehr als nur Syntax, Grammatik und Rechtschreibung. Es vereinfacht zudem komplexe Satzstrukturen und liefert klare Formulierungsvorschläge – für einen sprachlich makellosen Auftritt.
                            </p>
                        </div>

                        {/* Visual: Spelling/Entity Check */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300 h-[180px] flex flex-col justify-center">
                                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                                    <span className="text-gray-400 uppercase tracking-tighter">Prüfung_Modul_01</span>
                                    <span className="bg-black text-white px-1.5 rounded font-bold uppercase">Inkonsistenz</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[8px] text-gray-400 uppercase">Vorgabe (Glossar)</span>
                                        <div className="font-bold text-gray-400">"GenAI"</div>
                                    </div>
                                    <div className="bg-black text-white p-2 rounded relative">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[8px] text-gray-300 uppercase">Gefunden (Seite 14)</span>
                                            <AlertTriangle className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="font-bold border-b border-white/30 inline-block pb-0.5 mb-1">"Gen-AI"</div>
                                        <div className="text-[8px] text-gray-300 italic">Abweichende Schreibweise</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Numbers */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal delay-100 flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-default">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <Calculator className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-black tracking-tight">Daten-Validierung</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                Zahlen sind das Fundament Ihrer Glaubwürdigkeit. Review validiert jeden Datenpunkt, jedes Ergebnis und jeden Querverweis zwischen Tabellen, Charts und Fließtext. Damit Ihre Datenbasis über jeden Zweifel erhaben ist.
                            </p>
                        </div>

                        {/* Visual: Math check in Monochrome UI */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300 h-[180px] flex flex-col justify-center">
                                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                                    <span className="text-gray-400 uppercase tracking-tighter">Prüfung_Modul_02</span>
                                    <span className="bg-black text-white px-1.5 rounded font-bold uppercase">Rechenfehler</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[8px] text-gray-400 uppercase">Im Text gefunden (S. 05)</span>
                                        <div className="flex justify-between font-bold items-center">
                                            <span className="line-through decoration-red-500/50 decoration-2">"Marge bei ca. 14,2%"</span>
                                            <X className="w-3 h-3 text-red-500" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 bg-black text-white p-2 rounded relative overflow-hidden">
                                        <div className="relative z-10">
                                            <span className="text-[8px] text-gray-400 uppercase">AI-Nachrechnung (Werte aus S. 143)</span>
                                            <div className="flex flex-col font-mono mt-1">
                                                <span className="text-[9px] opacity-70">15,9 (EBIT) / 114,8 (Umsatz)</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-gray-500">=</span>
                                                    <span className="text-green-400 font-bold text-xs">13,85%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Merged Logic & Context */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal delay-200 flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-default">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <BrainCircuit className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-black tracking-tight">Logik & Storyline</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                Sichern Sie die inhaltliche Geschlossenheit. Review erkennt Widersprüche im Text sowie Diskrepanzen zwischen Charts und Aussagen. Egal ob auf Seite 5 oder 500 – Ihre Storyline bleibt widerspruchsfrei.
                            </p>
                        </div>

                        {/* Visual: Logic & Context combined */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300 h-[180px] flex flex-col justify-center">
                                <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
                                    <span className="text-gray-400 uppercase tracking-tighter">Prüfung_Modul_03</span>
                                    <span className="bg-black text-white px-1.5 rounded font-bold uppercase">Widerspruch</span>
                                </div>

                                <div className="space-y-2">
                                    {/* Simple Direct Comparison */}
                                    <div className="flex items-center justify-between p-2 rounded bg-white border border-gray-100">
                                        <span className="text-gray-400 font-bold w-12">TEXT</span>
                                        <span className="text-gray-700 italic">"Positiver Ausblick"</span>
                                        <span className="w-4"></span>
                                    </div>

                                    <div className="flex justify-center -my-1 relative z-10">
                                        <div className="bg-red-500 text-white text-[8px] font-bold px-2 py-0.5 rounded-full border-2 border-white">VS</div>
                                    </div>

                                    <div className="flex items-center justify-between p-2 rounded bg-black text-white">
                                        <span className="text-gray-400 font-bold w-12">CHART</span>
                                        <span className="font-bold flex items-center gap-1">
                                            Trend <TrendingUp className="w-3 h-3 text-red-500 rotate-90" />
                                        </span>
                                        <AlertTriangle className="w-3 h-3 text-red-500" />
                                    </div>

                                    <div className="text-[8px] text-red-500 font-bold text-center pt-2">
                                        &gt; Inhalt passt nicht zur Grafik
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

export const CoreCapabilitiesSection = memo(CoreCapabilitiesSectionComponent)
