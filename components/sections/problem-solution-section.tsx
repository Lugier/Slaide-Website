'use client'

import { memo } from 'react'
import { AlertTriangle, ShieldCheck, X, Check, Calculator, Search, AlertCircle, TrendingDown, TrendingUp, Info, Ban } from 'lucide-react'

function ProblemSolutionSectionComponent(): JSX.Element {
    return (
        <section id="loesung" className="py-24 md:py-32 px-6 bg-white overflow-hidden relative">

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20 reveal">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] text-black mx-auto">
                        Fehler zerstören<br className="hidden md:block" />
                        Vertrauen & Reputation.
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
                        Review erkennt komplexe Sachverhaltsfehler, semantische Widersprüche und Rechenfehler über alle Seiten Ihrer Unterlagen hinweg – schneller, präziser und konsistenter als manuelles Prüfen.
                    </p>
                </div>

                {/* COMPARISON - HIGH FIDELITY PAIN VS SOLUTION */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">

                    {/* Left: Manueller Prozess (The Risk Side) */}
                    <div className="group flex flex-col gap-10 reveal">

                        {/* Visual Container: Manual Chaos */}
                        <div className="relative aspect-[3/2] flex items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 overflow-visible transition-colors duration-500 hover:bg-red-50/30">

                            {/* The Angled Paper */}
                            <div className="relative w-[85%] h-[85%] bg-white shadow-xl shadow-gray-200/50 border border-gray-200 transform -rotate-1 transition-all duration-500 group-hover:-rotate-2">

                                {/* Header / Logic Conflict */}
                                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                                    <div className="w-1/3 h-2 bg-gray-100 rounded"></div>
                                    <div className="text-[7px] font-bold text-gray-400 flex items-center gap-1">
                                        <Info className="w-2 h-2" /> Seite 12: Umsatz 5,2 Mio. €
                                    </div>
                                </div>

                                {/* Content with Broken Chart */}
                                <div className="p-5 space-y-6">
                                    <div className="flex justify-between gap-4">
                                        {/* BROKEN CHART VISUAL */}
                                        <div className="w-1/2 h-24 bg-gray-50 rounded border border-gray-100 p-2 relative">
                                            <div className="absolute top-1 right-1 flex items-center gap-0.5 pointer-events-none opacity-100">
                                                <AlertTriangle className="w-2 h-2 text-red-500 animate-pulse" />
                                                <span className="text-[6px] font-bold text-red-500">Fehler: Summe 115%</span>
                                            </div>
                                            <div className="flex items-end justify-between h-full gap-1 pt-4">
                                                <div className="w-full bg-gray-300 h-[30%]"></div>
                                                <div className="w-full bg-gray-300 h-[50%]"></div>
                                                {/* MISSING VALUE BAR */}
                                                <div className="w-full bg-red-400 h-[85%] relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent)]"></div>
                                                </div>
                                                <div className="w-full bg-gray-300 h-[20%]"></div>
                                            </div>
                                        </div>

                                        <div className="w-1/2 space-y-2 py-2">
                                            <div className="h-1.5 bg-gray-100 rounded w-full"></div>
                                            <div className="h-1.5 bg-gray-100 rounded w-5/6"></div>
                                            <div className="h-1.5 bg-gray-100 rounded w-4/6"></div>

                                            {/* CONFLICTING DATA - NOW ALWAYS VISIBLE */}
                                            <div className="mt-4 p-1.5 rounded border border-red-100 bg-red-50/80 shadow-sm">
                                                <div className="text-[6px] font-bold text-red-600 flex items-center gap-1">
                                                    <AlertTriangle className="w-2 h-2" /> WIDERSPRUCH ERKANNT
                                                </div>
                                                <div className="text-[5px] text-red-500 font-medium">Seite 84 enthält 7,1 Mio. € für den gleichen Wert</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* The "False Confidence" Sticky Note */}
                                <div className="absolute top-6 -right-2 md:top-10 md:-right-6 w-24 md:w-32 bg-[#ffffb8] p-2 md:p-3 shadow-lg transform rotate-3 border border-yellow-200/50 font-handwriting text-gray-700 text-[7px] md:text-[9px] leading-tight z-30">
                                    <div className="font-bold text-green-600 mb-0.5 md:mb-1 flex items-center gap-1 uppercase tracking-tighter">
                                        <Check className="w-2 h-2 md:w-2.5 md:h-2.5" /> Ready!
                                    </div>
                                    "Zahlen geprüft. Kann so raus an den Kunden."
                                </div>

                                {/* Overlooked Marker - NOW ALWAYS VISIBLE */}
                                <div className="absolute bottom-6 left-4 md:bottom-6 md:left-6 w-12 h-6 md:w-16 md:h-8 border-2 border-red-500 border-dashed rounded-[50%] opacity-100 z-20 pointer-events-none transform -rotate-6">
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[5px] md:text-[6px] font-black tracking-widest text-red-600 whitespace-nowrap bg-white px-1 shadow-sm">ÜBERSEHEN</span>
                                </div>

                                {/* Badge: False Security */}
                                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1.5 z-40 transform -rotate-2">
                                    <AlertCircle className="w-2 h-2 fill-white" />
                                    <span className="text-[7px] font-bold tracking-widest uppercase text-white">Hohes Risiko</span>
                                </div>
                            </div>
                        </div>

                        {/* Copy Block */}
                        <div className="px-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Manueller Prozess</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 group/list">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0 group-hover/list:bg-red-50 group-hover/list:border-red-100 transition-colors mt-0.5">
                                        <Calculator className="w-4 h-4 text-red-400" />
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 block text-base mb-1 font-semibold">Rechenfehler über hunderte Seiten</strong>
                                        <p className="text-gray-500 leading-snug font-light text-sm">Flüchtigkeitsfehler in Tabellen oder Charts werden schlicht übersehen und gefährden die Glaubwürdigkeit des gesamten Dokuments.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group/list">
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0 group-hover/list:bg-red-50 group-hover/list:border-red-100 transition-colors mt-0.5">
                                        <Ban className="w-4 h-4 text-red-400" />
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 block text-base mb-1 font-semibold">Plausibilitäts- & Logikfehler</strong>
                                        <p className="text-gray-500 leading-snug font-light text-sm">Wenn viele Personen an einem Dokument arbeiten, entstehen unvermeidbar Widersprüche, die die Gesamtkonsistenz zerstören.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* Right: Review (The Precision Side) */}
                    <div className="group flex flex-col gap-10 reveal delay-100">

                        {/* Visual Container: Review Precision */}
                        <div className="relative aspect-[3/2] flex items-center justify-center p-6 bg-[#050505] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#00FF94]/50">

                            {/* Background Glow */}
                            <div className="absolute inset-x-0 top-0 h-full bg-blue-900/10 pointer-events-none"></div>

                            {/* The Verified Paper */}
                            <div className="relative w-[85%] h-[85%] bg-[#111] shadow-2xl shadow-black border border-gray-800 transform rotate-0 transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden">

                                {/* Content (Clean & Corrected) */}
                                <div className="p-5 h-full flex flex-col relative z-10">
                                    <div className="flex justify-between items-center border-b border-gray-800 pb-3 mb-6">
                                        <div className="w-1/3 h-2 bg-gray-800 rounded"></div>
                                        <div className="text-[6px] md:text-[7px] font-bold text-[#00FF94] flex items-center gap-1 uppercase tracking-widest animate-pulse">
                                            <ShieldCheck className="w-2 h-2" /> Übereinstimmung: 5,2 Mio. €
                                        </div>
                                    </div>

                                    <div className="flex justify-between gap-4">
                                        {/* CORRECTED CHART */}
                                        <div className="w-1/2 h-24 bg-gray-900/40 rounded border border-gray-800 p-2 relative overflow-hidden group/chart">
                                            {/* Scanning Effect over chart */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF94]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out"></div>

                                            <div className="flex items-end justify-between h-full gap-1 pt-4">
                                                <div className="w-full bg-gray-800 h-[30%]"></div>
                                                <div className="w-full bg-gray-800 h-[50%]"></div>
                                                <div className="w-full bg-gradient-to-t from-blue-600 to-[#00FF94] h-[65%] shadow-[0_0_15px_rgba(0,255,148,0.3)] animate-[pulse_2s_infinite]"></div>
                                                <div className="w-full bg-gray-800 h-[20%]"></div>
                                            </div>
                                            <div className="absolute top-1 left-2 text-[6px] text-gray-500 tracking-tighter">Summe: 100% korrigiert</div>
                                        </div>

                                        <div className="w-1/2 space-y-2 py-2">
                                            <div className="h-1.5 bg-gray-800 rounded w-full"></div>
                                            <div className="h-1.5 bg-gray-800 rounded w-5/6"></div>
                                            <div className="h-1.5 bg-[#111] border border-gray-800 rounded w-4/6 flex items-center px-1">
                                                <div className="w-1/2 h-[1px] bg-[#00FF94]/50"></div>
                                            </div>

                                            {/* HARMONIZATION RESULT */}
                                            <div className="mt-4 p-1.5 rounded border border-[#00FF94]/20 bg-[#00FF94]/5 shadow-[0_0_15px_rgba(0,255,148,0.1)]">
                                                <div className="text-[6px] font-bold text-[#00FF94] tracking-widest uppercase">Logik harmonisiert</div>
                                                <div className="text-[5px] text-gray-400 mt-0.5">Dokumentenweite Prüfung erfolgreich</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status Badge */}
                                    <div className="absolute top-2 left-2 bg-[#00FF94] text-black px-2 py-0.5 rounded-full shadow-[0_0_15px_rgba(0,255,148,0.4)] flex items-center gap-1 z-30">
                                        <Search className="w-2 h-2" />
                                        <span className="text-[6px] md:text-[7px] font-black tracking-widest uppercase">Review Präzision 100%</span>
                                    </div>

                                    {/* Verified Seal (Subtle Watermark) */}
                                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity duration-1000">
                                        <ShieldCheck className="w-8 h-8 text-[#00FF94]" />
                                    </div>
                                </div>

                                {/* Main Scanning Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FF94] to-transparent opacity-40 shadow-[0_0_12px_#00FF94] animate-[scan_4s_ease-in-out_infinite] z-20"></div>
                            </div>
                        </div>

                        {/* Copy Block */}
                        <div className="px-2">
                            <h3 className="text-xl font-bold text-black mb-6">Review</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 group/list">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gray-800 flex-shrink-0 group-hover/list:bg-[#00FF94] group-hover/list:border-[#00FF94] transition-all mt-0.5">
                                        <Check className="w-4 h-4 text-white group-hover/list:text-black" />
                                    </div>
                                    <div>
                                        <strong className="text-black block text-base mb-1 font-semibold">Mathematische Präzision</strong>
                                        <p className="text-gray-500 leading-snug font-light text-sm">Review prüft jede Zahl gegen alle Referenzen im Dokument – über hunderte von Seiten hinweg.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group/list">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gray-800 flex-shrink-0 group-hover/list:bg-[#00FF94] group-hover/list:border-[#00FF94] transition-all mt-0.5">
                                        <Search className="w-4 h-4 text-white group-hover/list:text-black" />
                                    </div>
                                    <div>
                                        <strong className="text-black block text-base mb-1 font-semibold">Konsistenz</strong>
                                        <p className="text-gray-500 leading-snug font-light text-sm">Review erkennt Logikfehler sofort und stellt sicher, dass alle Beiträge zu einem widerspruchsfreien Ganzen harmonisiert werden.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Animation Keyframes */}
                <style jsx global>{`
                    @keyframes scan {
                        0% { top: 0%; }
                        50% { top: 100%; }
                        100% { top: 0%; }
                    }
                `}</style>
            </div>
        </section>
    )
}

export const ProblemSolutionSection = memo(ProblemSolutionSectionComponent)
