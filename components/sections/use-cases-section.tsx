'use client'

import { memo } from 'react'
import {
  Briefcase,
  Leaf,
  Scale,
  FlaskConical,
  TrendingUp,
  Cpu,
  Check,
} from 'lucide-react'

function UseCasesSectionComponent(): JSX.Element {
  const useCases = [
    {
      icon: Briefcase,
      title: 'Unternehmensberatung',
      description:
        'Konsistenz von Kennzahlen und Storyline-Checks in Pitch-Decks und SteerCo-Unterlagen.',
      features: ['Cross-Slide Consistency', 'Action-Title Logik'],
    },
    {
      icon: Scale,
      title: 'Legal',
      description:
        'Prüfung von Schriftsätzen und Gutachten auf formale Korrektheit, Referenzen und Logikbrüche.',
      features: ['Referenz-Checks', 'Definitions-Konsistenz'],
    },
    {
      icon: FlaskConical,
      title: 'Pharma & R&D',
      description:
        'Einhaltung strenger Regulatorik und Konsistenz in Studien-Reports und Einreichungen.',
      features: ['Statistische Plausibilität', 'Tabellen-Verifikation'],
    },
    {
      icon: TrendingUp,
      title: 'Banking',
      description:
        'Prüfung von Finanzkennzahlen, Tabellen-Summen und Wachstumsraten.',
      features: ['Tabellen-Footing', 'CAGR-Validierung'],
    },
    {
      icon: Leaf,
      title: 'ESG',
      description:
        'Validierung von hunderten Kennzahlen, Definitionen und CO2-Aussagen über alle Seiten.',
      features: ['Einheiten-Prüfung', 'Daten-Lineage Tracking'],
    },
    {
      icon: Cpu,
      title: 'Technologie',
      description:
        'KPI-Reports und Architektur-Diagramme auf logische Brüche zwischen Text und Bild prüfen.',
      features: ['Text-Bild-Abgleich', 'Versions-Konsistenz'],
    },
  ]

  return (
    <section id="use-cases" className="py-24 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 reveal text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-black text-center">
            Für Teams, die sich keine<br className="hidden md:block" /> Fehler leisten können.
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed text-center">
            Review ist Ihre finale Instanz für kompromisslose Qualität. Sie schützt Ihre Reputation dort, wo Präzision die Währung Ihres Erfolgs ist.
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
