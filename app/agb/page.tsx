'use client'

import React from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { useLanguage } from '@/lib/context/language-context'
import { legalTranslations } from '@/lib/i18n/legal-translations'

export default function AGBPage() {
  const { language } = useLanguage()
  const t = legalTranslations[language as keyof typeof legalTranslations].agb

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            {t.title}
          </h1>
          <p className="text-gray-500 mb-12">
            {t.stand}
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

                    {section.list && (
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        {section.list.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.content2 && <p>{section.content2}</p>}

                    {section.note && (
                      <p className="italic text-gray-400 mt-4 text-sm">
                        {section.note}
                      </p>
                    )}

                    {section.widerrufTitle && (
                      <div className="mt-8 border-t pt-8">
                        <h3 className="text-xl font-bold mb-4 text-black">{section.widerrufTitle}</h3>
                        <h4 className="font-semibold mb-2">{section.widerrufSub}</h4>
                        <p>{section.widerrufText1}</p>
                        <p>{section.widerrufText2}</p>
                        <p className="mt-4">{section.widerrufText3}</p>

                        {section.form && (
                          <div className="mt-6 p-6 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 print:bg-white">
                            <h4 className="font-bold text-center mb-6 uppercase tracking-wider">{section.form.title}</h4>
                            <p className="italic mb-6 text-center text-sm">{section.form.intro}</p>
                            <p className="mb-8 font-medium">{section.form.to}</p>
                            <div className="space-y-6">
                              <p>{section.form.text1}</p>
                              <div className="space-y-4">
                                <p>{section.form.text2}</p>
                                <p>{section.form.text3}</p>
                                <p>{section.form.text4}</p>
                                <p className="pt-4">{section.form.text5}</p>
                                <p>{section.form.text6}</p>
                              </div>
                              <p className="text-sm italic text-center mt-8">{section.form.footer}</p>
                            </div>
                          </div>
                        )}

                        <h4 className="font-semibold mb-2 mt-8">{section.widerrufFolgen}</h4>
                        <p>{section.widerrufFolgenText}</p>
                        <p className="font-semibold mt-8 text-center border-t border-b py-4">{section.widerrufEnde}</p>
                      </div>
                    )}

                    {section.link && (
                      <a
                        href={section.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline break-all"
                      >
                        {section.link}
                      </a>
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
