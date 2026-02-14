'use client'

import { memo } from 'react'
import { BrainCircuit, Calculator, X, Microscope, AlertTriangle, TrendingUp, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/lib/context/language-context'

function CoreCapabilitiesSectionComponent(): JSX.Element {
    const { t } = useLanguage()

    return (
        <section id="loesung" className="py-24 md:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="mb-20 reveal text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-black">
                        {t('coreCapabilities.headline')}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                        {t('coreCapabilities.subline')}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">

                    {/* Card 1: Numbers (Daten) */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-default">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <Calculator className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-black tracking-tight">{t('coreCapabilities.data.title')}</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                {t('coreCapabilities.data.desc')}
                            </p>
                        </div>

                        {/* Visual: Math check in Monochrome UI */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300 h-[190px] flex flex-col">
                                <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <span className="text-gray-400 uppercase tracking-tighter font-bold">{t('coreCapabilities.data.visual.module')}</span>
                                    </div>
                                    <span className="bg-black text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider">{t('coreCapabilities.data.visual.error')}</span>
                                </div>
                                <div className="space-y-4 flex-grow flex flex-col justify-center">
                                    <div className="flex flex-col gap-1 pl-3 border-l-2 border-gray-200">
                                        <span className="text-[8px] text-gray-400 uppercase font-bold">{t('coreCapabilities.data.visual.found')}</span>
                                        <div className="flex justify-between font-bold items-center text-[11px]">
                                            <span className="line-through decoration-red-500/50 decoration-2">{t('coreCapabilities.data.visual.text')}</span>
                                            <X className="w-3 h-3 text-red-500" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 bg-black text-white p-3 rounded relative overflow-hidden group-hover:shadow-lg transition-all min-h-[85px] justify-center">
                                        <div className="relative z-10">
                                            <span className="text-[8px] text-gray-500 uppercase font-bold tracking-widest">{t('coreCapabilities.data.visual.ai')}</span>
                                            <div className="flex flex-col font-mono mt-1">
                                                <span className="text-[9px] opacity-70">{t('coreCapabilities.data.visual.calc')}</span>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-gray-500">=</span>
                                                    <span className="text-green-400 font-bold text-sm">13,85%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Logic & Plausibilität... (Already updated) */}
                    {/* ... (keep existing redesign) ... */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal delay-100 flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-default">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <BrainCircuit className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-black tracking-tight">{t('coreCapabilities.logic.title')}</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                {t('coreCapabilities.logic.desc')}
                            </p>
                        </div>

                        {/* Visual: Logic & Plausibility Redesign */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300 h-[190px] flex flex-col">
                                <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                        <span className="text-gray-400 uppercase tracking-tighter font-bold">{t('coreCapabilities.logic.visual.module')}</span>
                                    </div>
                                    <span className="bg-red-500 text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider">{t('coreCapabilities.logic.visual.error')}</span>
                                </div>

                                <div className="space-y-4 flex-grow flex flex-col justify-center">
                                    {/* Statement Section */}
                                    <div className="relative pl-3 border-l-2 border-gray-200">
                                        <span className="text-[8px] text-gray-400 uppercase block mb-1 font-bold">{t('coreCapabilities.logic.visual.textLabel')}</span>
                                        <div className="text-gray-900 font-medium italic text-[11px] leading-tight">
                                            {t('coreCapabilities.logic.visual.textValue')}
                                        </div>
                                    </div>

                                    {/* Data Section with Black Accent */}
                                    <div className="bg-black rounded-lg p-3 text-white relative overflow-hidden group-hover:shadow-lg transition-all flex flex-col justify-between min-h-[85px]">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <span className="text-[7px] text-gray-500 uppercase block mb-1 font-bold tracking-widest">{t('coreCapabilities.logic.visual.chartLabel')}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-bold text-white">{t('coreCapabilities.logic.visual.chartValue')}</span>
                                                    <TrendingUp className="w-3 h-3 text-red-500 rotate-90" />
                                                </div>
                                            </div>
                                            <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                                        </div>

                                        <div className="pt-2 border-t border-white/10">
                                            <div className="text-[9px] text-red-400 font-bold flex items-center gap-1.5 font-mono italic">
                                                <span className="text-red-500">›</span>
                                                {t('coreCapabilities.logic.visual.message')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Formale Korrektheit */}
                    <div className="group bg-white p-8 rounded-3xl border border-gray-200 hover:border-black transition-all duration-500 reveal delay-200 flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-xl cursor-default">

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300 border border-gray-100">
                                <span className="font-serif text-2xl italic font-bold text-black group-hover:text-white">Aa</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-black tracking-tight">{t('coreCapabilities.formal.title')}</h3>
                            <p className="text-gray-500 leading-relaxed font-light">
                                {t('coreCapabilities.formal.desc')}
                            </p>
                        </div>

                        {/* Visual: Spelling/Entity Check */}
                        <div className="mt-8 relative z-10 font-mono text-[10px]">
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 group-hover:bg-white group-hover:border-black transition-all duration-300 h-[190px] flex flex-col">
                                <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-gray-400 uppercase tracking-tighter font-bold">{t('coreCapabilities.formal.visual.module')}</span>
                                    </div>
                                    <span className="bg-black text-white px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider">{t('coreCapabilities.formal.visual.error')}</span>
                                </div>
                                <div className="space-y-4 flex-grow flex flex-col justify-center">
                                    <div className="flex flex-col gap-1 pl-3 border-l-2 border-gray-200">
                                        <span className="text-[8px] text-gray-400 uppercase font-bold">{t('coreCapabilities.formal.visual.guideline')}</span>
                                        <div className="font-bold text-gray-400 text-[11px]">{t('coreCapabilities.formal.visual.term')}</div>
                                    </div>
                                    <div className="bg-black text-white p-3 rounded relative group-hover:shadow-lg transition-all min-h-[85px] flex flex-col justify-between">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-[8px] text-gray-500 uppercase font-bold tracking-widest">{t('coreCapabilities.formal.visual.found')}</span>
                                            <AlertTriangle className="w-3 h-3 text-red-500" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold border-b border-red-500/50 block pb-0.5 mb-1 text-[11px] text-white underline decoration-red-500 underline-offset-4 decoration-2">{t('coreCapabilities.formal.visual.wrongTerm')}</div>
                                            <div className="text-[9px] text-red-400 italic font-medium">{t('coreCapabilities.formal.visual.message')}</div>
                                        </div>
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
