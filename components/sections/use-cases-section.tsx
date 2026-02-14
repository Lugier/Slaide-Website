'use client'

import { memo } from 'react'
import {
  Briefcase,
  Leaf,
  Scale,
  TrendingUp,
  Cpu,
  Check,
  Landmark,
  GitMerge,
} from 'lucide-react'
import { useLanguage } from '@/lib/context/language-context'

function UseCasesSectionComponent(): JSX.Element {
  const { t } = useLanguage()

  const useCases = [
    {
      icon: Briefcase,
      title: t('useCases.consulting.title'),
      description: t('useCases.consulting.desc'),
      // features are arrays in translations.ts, but standard i18n libraries usually return objects for arrays or we need to access index.
      // However, our simple t() implementation splits by dot.
      // Let's assume for now we construct the array manually or mapped.
      // Wait, the current t() implementation in language-context.tsx returns a string.
      // I need to check if t() handles arrays or if I should specific keys for features.
      // Looking at translations.ts, features is an array of strings.
      // My simple t() implementation:
      /*
       const t = (path: string): string => {
         const keys = path.split('.')
         let current: any = translations[language]
         for (const key of keys) { ... }
         return current as string
       }
      */
      // It returns `current as string`. If current is an array, it might return it, but the type signature says string.
      // In JS it will return the array object.
      // So I can cast it or change the usage.

      features: [
        t('useCases.consulting.features.0'),
        t('useCases.consulting.features.1')
      ],
    },
    {
      icon: Scale,
      title: t('useCases.legal.title'),
      description: t('useCases.legal.desc'),
      features: [
        t('useCases.legal.features.0'),
        t('useCases.legal.features.1')
      ],
    },
    {
      icon: TrendingUp, // PE usually associated with growth/money
      title: t('useCases.pe.title'),
      description: t('useCases.pe.desc'),
      features: [
        t('useCases.pe.features.0'),
        t('useCases.pe.features.1')
      ],
    },
    {
      icon: TrendingUp, // Banking - reused icon from original or generic? Original had TrendingUp. Let's use something else for PE maybe?
      // Original Banking used TrendingUp.
      // Let's use Briefcase for PE? No consulting has Briefcase.
      // Let's use PieChart or BarChart? Lucide has those.
      // Let's stick to existing imports if possible or add new ones.
      // Imports: Briefcase, Leaf, Scale, FlaskConical, TrendingUp, Cpu, Check.
      // PE can use TrendingUp (Growth). Banking can use... maybe Landmark (Bank) if I add it?
      // Or simply reuse TrendingUp for now and maybe swap Banking icon.
      // Let's verify imports.
      title: t('useCases.banking.title'),
      description: t('useCases.banking.desc'),
      features: [
        t('useCases.banking.features.0'),
        t('useCases.banking.features.1')
      ],
    },
    {
      icon: Leaf,
      title: t('useCases.esg.title'),
      description: t('useCases.esg.desc'),
      features: [
        t('useCases.esg.features.0'),
        t('useCases.esg.features.1')
      ],
    },
    {
      icon: Cpu, // M&A - maybe Handshake? Or Merge?
      // Let's use Cpu for now (Technology was Cpu). M&A doesn't fit Cpu.
      // I should add 'Handshake' or similar from lucide-react if available, or 'GitMerge'.
      // Let's add 'GitMerge' or 'Users' or 'PieChart'.
      // Getting 'GitMerge' from lucide-react (represents merging).
      title: t('useCases.ma.title'),
      description: t('useCases.ma.desc'),
      features: [
        t('useCases.ma.features.0'),
        t('useCases.ma.features.1')
      ],
    },
  ]

  // I need to update the icons for PE and M&A.
  // PE -> TrendingUp (moved from Banking)
  // Banking -> Landmark (NEED TO IMPORT)
  // M&A -> GitMerge or Handshake (NEED TO IMPORT)

  return (
    <section id="use-cases" className="py-24 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 reveal text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-black mb-8 leading-[0.9]">
            {t('useCases.headline').split(', ').map((part, i, arr) => (
              <span key={i} className="block">
                {part}{i < arr.length - 1 ? ',' : ''}
              </span>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed text-center">
            {t('useCases.subline')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className={`p-8 border border-gray-200 rounded-2xl hover:border-black hover:shadow-lg transition-all reveal ${index === 0
                  ? ''
                  : index === 1 || index === 3
                    ? 'delay-100'
                    : 'delay-200'
                  } group`}
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-black mb-2">{useCase.title}</h3>
                <p className="text-sm text-grey-dark leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <ul className="text-xs text-grey-medium space-y-2 border-t border-gray-100 pt-4">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-2">
                      <Check className="w-3 h-3 text-black flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const UseCasesSection = memo(UseCasesSectionComponent)
