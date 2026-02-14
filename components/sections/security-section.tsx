'use client'

import { memo, useCallback, useState } from 'react'
import { Lock, Server, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react'
import { WhitepaperModal } from '@/components/whitepaper-modal'
import { useLanguage } from '@/lib/context/language-context'

function SecuritySectionComponent(): JSX.Element {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWhitepaperClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    setIsModalOpen(true)
  }, [])

  return (
    <section id="security" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              {t('security.headline')}
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed font-light">
              {t('security.subline')}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Lock className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('security.retention.title')}</h3>
                  <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                    {t('security.retention.desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Server className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('security.hosting.title')}</h3>
                  <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                    {t('security.hosting.desc')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t('security.training.title')}</h3>
                  <p className="text-sm text-gray-200 mt-1 leading-relaxed">
                    {t('security.training.desc')}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              onClick={handleWhitepaperClick}
              aria-label={t('security.whitepaper.cta')}
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors focus:outline-none"
            >
              {t('security.whitepaper.cta')}{' '}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="bg-[#0A0A0A] border border-gray-800 p-8 rounded-2xl reveal delay-200">
            <h4 className="text-sm font-mono text-gray-300 mb-6 uppercase tracking-wider">
              {t('security.compliance.title')}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded border border-white/10 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                <span className="font-medium">{t('security.compliance.gdpr')}</span>
              </div>
              <div className="p-4 bg-white/5 rounded border border-white/10 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                <span className="font-medium">{t('security.compliance.avv')}</span>
              </div>
              <div className="p-4 bg-white/5 rounded border border-white/10 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                <span className="font-medium">{t('security.compliance.security')}</span>
              </div>
              <div className="p-4 bg-white/5 rounded border border-white/10 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                <span className="font-medium">{t('security.compliance.iso')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhitepaperModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}

export const SecuritySection = memo(SecuritySectionComponent)
