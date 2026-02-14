'use client'

import React from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/lib/context/language-context'
import { legalTranslations } from '@/lib/i18n/legal-translations'

export default function ImpressumPage() {
  const { language } = useLanguage()
  const t = legalTranslations[language as keyof typeof legalTranslations].impressum

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-black">
            {t.title}
          </h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.section1.title}</h2>
              <p className="text-grey-dark leading-relaxed whitespace-pre-line">
                {t.section1.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.section2.title}</h2>
              <div className="text-grey-dark leading-relaxed">
                <p>
                  {t.section2.email}{' '}
                  <a
                    href="mailto:info@slaide.de"
                    className="text-black hover:underline"
                  >
                    info@slaide.de
                  </a>
                </p>
                <p>{t.section2.phone} {t.section2.phoneValue}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.section3.title}</h2>
              <p className="text-grey-dark leading-relaxed">
                {t.section3.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.section4.title}</h2>
              <p className="text-grey-dark leading-relaxed">
                {t.section4.court}
                <br />
                {t.section4.number}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.section5.title}</h2>
              <p className="text-grey-dark leading-relaxed">
                {t.section5.content}
                <br />
                {t.section5.suffix}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.section6.title}</h2>
              <p className="text-grey-dark leading-relaxed whitespace-pre-line">
                {t.section6.content}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.section7.title}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">
                    {t.section7.sub1}
                  </h3>
                  <p className="text-grey-dark leading-relaxed">
                    {t.section7.content1}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">
                    {t.section7.sub2}
                  </h3>
                  <p className="text-grey-dark leading-relaxed">
                    {t.section7.content2}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">
                    {t.section7.sub3}
                  </h3>
                  <p className="text-grey-dark leading-relaxed">
                    {t.section7.content3}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">{t.section8.title}</h2>
              <p className="text-grey-dark leading-relaxed">
                {t.section8.content}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .{t.section8.suffix}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
