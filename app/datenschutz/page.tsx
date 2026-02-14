'use client'

import React from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/lib/context/language-context'
import { legalTranslations } from '@/lib/i18n/legal-translations'

export default function DatenschutzPage() {
  const { language } = useLanguage()
  const t = legalTranslations[language as keyof typeof legalTranslations].datenschutz

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            {t.title}
          </h1>
          <p className="text-gray-500 mb-12">
            {t.stand} {new Date().toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <div className="prose prose-slate max-w-none">
            <p className="text-grey-dark leading-relaxed mb-8">
              {t.intro}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-lg">
              <p className="text-blue-900 font-medium m-0">
                {t.note}
              </p>
            </div>

            <div className="space-y-12">
              {t.sections.map((section: any, idx: number) => (
                <section key={idx}>
                  <h2 className="text-2xl font-semibold mb-6 text-black">
                    {section.title}
                  </h2>
                  <div className="text-grey-dark leading-relaxed whitespace-pre-line space-y-4">
                    <p>{section.content}</p>

                    {section.sub1 && (
                      <div className="mt-6">
                        <h3 className="text-xl font-medium mb-3">{section.sub1}</h3>
                        <p>{section.content1}</p>
                      </div>
                    )}

                    {section.list && (
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        {section.list.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.content2 && <p>{section.content2}</p>}

                    {section.sub2 && (
                      <div className="mt-6">
                        <h3 className="text-xl font-medium mb-3">{section.sub2}</h3>
                        <p>{section.content3}</p>
                      </div>
                    )}

                    {section.sub3 && (
                      <div className="mt-6">
                        <h3 className="text-xl font-medium mb-3">{section.sub3}</h3>
                        <p>{section.content4}</p>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
