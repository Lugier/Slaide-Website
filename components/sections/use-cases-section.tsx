'use client'

import {
  Briefcase,
  Leaf,
  Scale,
  FlaskConical,
  TrendingUp,
  Cpu,
  Check,
} from 'lucide-react'

export function UseCasesSection(): JSX.Element {
  const useCases = [
    {
      icon: Briefcase,
      title: 'Unternehmensberatung',
      description:
        'Konsistenz von Kennzahlen und Storyline-Checks in Pitch-Decks und SteerCo-Unterlagen.',
      features: ['Cross-Slide Consistency', 'Action-Title Logik'],
    },
    {
      icon: Leaf,
      title: 'ESG / Sustainability',
      description:
        'Validierung von hunderten Kennzahlen, Definitionen und CO2-Aussagen über viele Seiten.',
      features: ['Einheiten-Prüfung', 'Daten-Lineage Tracking'],
    },
    {
      icon: Scale,
      title: 'Legal / Due Diligence',
      description:
        'Prüfung von Schriftsätzen und Reports auf formale Korrektheit, Referenzen und Logikbrüche.',
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
      title: 'Corporate Finance',
      description:
        'Automatische Prüfung von Finanzkennzahlen, Tabellen-Summen und Wachstumsraten in Investor Decks und Finanzreports.',
      features: ['Tabellen-Footing', 'CAGR-Validierung'],
    },
    {
      icon: Cpu,
      title: 'Tech / Architektur',
      description:
        'KPI-Reports und Architektur-Diagramme auf logische Brüche zwischen Text und Bild prüfen.',
      features: ['Text-Bild-Abgleich', 'Versions-Konsistenz'],
    },
  ]

  return (
    <section id="use-cases" className="py-24 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Für Teams, die keine Fehler leisten können.
          </h2>
          <p className="text-grey-dark max-w-2xl mx-auto">
            Review passt sich dynamisch an Ihren Dokumententyp an – egal ob Folien, Verträge
            oder Studien. Schützen Sie Ihre Reputation, bevor Fehler an Kunden oder Investoren gehen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className={`p-8 border border-gray-200 rounded-2xl hover:border-black hover:shadow-lg transition-all reveal ${
                  index === 0
                    ? ''
                    : index === 1 || index === 3
                    ? 'delay-100'
                    : 'delay-200'
                } group`}
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
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
