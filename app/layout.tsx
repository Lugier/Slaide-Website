import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { WebVitalsInit } from '@/components/web-vitals-init'
import './globals.css'
import { LanguageProvider } from '@/lib/context/language-context'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['300', '400', '500', '600'], // Only load needed weights
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  preload: false, // Only load when needed (below-the-fold)
  fallback: ['Courier New', 'monospace'],
  adjustFontFallback: true,
  weight: ['400', '500', '600'], // Only load needed weights
})

export const metadata: Metadata = {
  title: 'Slaide | Automatische Fehlerprüfung für PowerPoint & Berichte',
  description: 'Finden Sie Zahlenfehler, Logikbrüche und Inkonsistenzen in Sekunden. Die KI-Lösung für fehlerfreie Pitch Decks und Dokumente. Jetzt kostenlos testen.',
  keywords: 'Fehler in Präsentation finden, Powerpoint Korrekturlesen, Inkonsistenzen prüfen, Zahlenvalidierung, Pitch Deck Fehlercheck, Lektorat',
  authors: [{ name: 'Slaide' }],
  creator: 'Slaide',
  publisher: 'Slaide',
  metadataBase: new URL('https://www.slaide.de'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': 'https://www.slaide.de',
      'de-AT': 'https://www.slaide.de',
      'de-CH': 'https://www.slaide.de',
      'x-default': 'https://www.slaide.de',
    },
  },
  category: 'Business Software',
  openGraph: {
    type: 'website',
    title: 'Slaide | Automatische Fehlerprüfung für PowerPoint & Berichte',
    description: 'Finden Sie Zahlenfehler, Logikbrüche und Inkonsistenzen in Sekunden. Die KI-Lösung für fehlerfreie Pitch Decks und Dokumente. Jetzt kostenlos testen.',
    url: 'https://www.slaide.de/',
    siteName: 'Slaide',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'Slaide - Automatische Fehlerprüfung',
      },
    ],
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slaide | Automatische Fehlerprüfung für PowerPoint & Berichte',
    description: 'Finden Sie Zahlenfehler, Logikbrüche und Inkonsistenzen in Sekunden. Die KI-Lösung für fehlerfreie Pitch Decks und Dokumente. Jetzt kostenlos testen.',
    images: ['/favicon.svg'],
    site: '@slaide',
    creator: '@slaide',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.slaide.de" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://cal.com" />
        {/* Prefetch critical sections */}
        <link rel="prefetch" href="/#how-it-works" as="document" />
        <link rel="prefetch" href="/#security" as="document" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" type="image/x-icon" />
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        <link rel="apple-touch-icon" href="/favicon.png?v=3" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Slaide',
              url: 'https://www.slaide.de',
              sameAs: [
                'https://slaide.eu',
                'https://slaide.online'
              ],
              logo: 'https://www.slaide.de/favicon.svg',
              description: 'Finden Sie Zahlenfehler, Logikbrüche und Inkonsistenzen in Sekunden. Die KI-Lösung für fehlerfreie Pitch Decks und Dokumente.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Neckarstraße 10',
                addressLocality: 'Untereisesheim',
                postalCode: '74257',
                addressCountry: 'DE',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Kundenservice',
                email: 'info@slaide.de',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Zero-Defect Reporting',
              provider: {
                '@type': 'Organization',
                name: 'Slaide',
                url: 'https://www.slaide.de',
              },
              areaServed: [
                {
                  '@type': 'Country',
                  name: 'Deutschland',
                },
                {
                  '@type': 'Country',
                  name: 'Österreich',
                },
                {
                  '@type': 'Country',
                  name: 'Schweiz',
                },
                {
                  '@type': 'Place',
                  name: 'European Union',
                },
              ],
              description: 'Automatische Fehlerprüfung für PowerPoint & Berichte. Findet Zahlenfehler, Logikbrüche und Inkonsistenzen in Sekunden.',
              offers: [
                {
                  '@type': 'Offer',
                  priceCurrency: 'EUR',
                  price: '2.69',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '2.69',
                    priceCurrency: 'EUR',
                    unitText: 'pro Seite',
                  },
                  name: 'Slaide Standard',
                },
              ],
              priceRange: '€',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Slaide Review',
              description: 'Automatische Fehlerprüfung für PowerPoint & Berichte. Findet Zahlenfehler, Logikbrüche und Inkonsistenzen in Sekunden.',
              brand: {
                '@type': 'Brand',
                name: 'Slaide',
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                price: '2.69',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Was ist Slaide?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Slaide ist eine Zero-Defect Reporting-Plattform für High-Stakes Dokumente. Wir prüfen Ihre gesamte Unterlage oder Ihren Bericht auf logische Inkonsistenzen und Zahlenfehler – über alle Folien, Seiten und Kapitel hinweg. Laden Sie Ihre Dokumente als Word, PDF oder PowerPoint hoch, und unsere KI-Validierung findet Fehler, die selbst den besten Experten entgehen, bevor sie den Empfänger erreichen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie funktioniert die Fehlerprüfung?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Unser System stützt sich auf eine Kombination aus feinjustierten generativen KI-Modellen und einer mehrstufigen, regelbasierten Konsistenz-Architektur. Wir nutzen multimodales Parsing auf jeder Seite und Folie, um Text, Tabellen und visuelle Elemente in semantisch normalisierte Entitäten zu überführen. Anschließend errichten wir einen Constraint-Graph, der als wissensbasierter Konsistenz-Graph fungiert. Dieser Graph integriert Constraint-Propagation und Logical Inference Engines, die inkonsistente Zustände deckübergreifend über die gesamte Unterlage hinweg auflösen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Welche Dateiformate werden unterstützt?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wir arbeiten mit Word, PDF und PowerPoint.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie sicher sind meine Daten?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Slaide ist SOC 2 zertifiziert und nutzt Ende-zu-Ende-Verschlüsselung. Alle Daten werden ausschließlich in ISO-zertifizierten Rechenzentren in Europa gespeichert – der Großteil auf Servern in Frankfurt, Deutschland. Ihre Dokumente werden niemals für Training oder andere Zwecke verwendet.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Was kostet Slaide?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Der Preis für Slaide Standard beträgt 2,69 € pro verarbeiteter Seite. Für Organisationen mit mehr als 500 Seiten pro Monat bieten wir individuelle Enterprise-Verträge mit attraktiven volumenbasierten Preisen an. Kontaktieren Sie uns für ein maßgeschneidertes Angebot.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wie lange dauert eine Prüfung?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Typischerweise dauert die Prüfung von 100 Seiten etwa 5-10 Minuten. Die genaue Dauer hängt von der Komplexität des Dokuments ab.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Für welche Branchen ist Slaide geeignet?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Slaide ist ideal für Consulting, Corporate Finance, Legal, ESG, Investment Banking und Risk Management. Wir prüfen Präsentationen, Berichte und Dokumente für geschäftskritische Entscheidungen.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Werden meine Daten für Training verwendet?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nein. Ihre Dokumente werden niemals für Modelltraining oder andere Zwecke verwendet. Opt-Out/Zero retention je Provider-Option.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Wo werden meine Daten gespeichert?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Alle Daten werden ausschließlich in ISO-zertifizierten Rechenzentren in Europa gespeichert – der Großteil auf Servern in Frankfurt, Deutschland. EU-Region möglich.',
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'Wie funktioniert die Slaide Dokumentenvalidierung?',
              description: 'Schritt-für-Schritt Anleitung zur automatisierten Konsistenzprüfung von Dokumenten',
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Multimodales Parsing',
                  text: 'Wir erzeugen pro Seite ein Bild-Preview und bauen daraus eine strukturierte Inhaltsrepräsentation. Text, Tabellen und visuelle Elemente werden in semantisch normalisierte Entitäten überführt.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Screening & Deep Verification',
                  text: 'Ein screening-modell entfernt Low-Content-Seiten und markiert High-Stakes-Seiten für Deep Verification. Constraint-Propagation und Logical Inference Engines lösen inkonsistente Zustände deckübergreifend auf.',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Konsistenz-Graph',
                  text: 'Ein Constraint-Graph fungiert als wissensbasierter Konsistenz-Graph. Dieser integriert alle Prüfungen und findet Fehler, die selbst den besten Experten entgehen – bevor sie den Empfänger erreichen.',
                },
              ],
              totalTime: 'PT10M',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Slaide',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description: 'Automatische Fehlerprüfung für PowerPoint & Berichte. Findet Zahlenfehler, Logikbrüche und Inkonsistenzen in Sekunden.',
              url: 'https://www.slaide.de',
              offers: {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                price: '2.69',
              },
              featureList: [
                'Multimodales Parsing',
                'Deep Verification',
                'Cross-Slide Checks',
                'Logikfehler-Erkennung',
                'Zahlenfehler-Detection',
                'PDF, PPTX, DOCX Support',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Slaide',
              url: 'https://www.slaide.de',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.slaide.de/?s={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Startseite',
                  item: 'https://www.slaide.de',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Plattform',
                  item: 'https://www.slaide.de#platform',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Wie es funktioniert',
                  item: 'https://www.slaide.de#how-it-works',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Use Cases',
                  item: 'https://www.slaide.de#use-cases',
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'Security',
                  item: 'https://www.slaide.de#security',
                },
                {
                  '@type': 'ListItem',
                  position: 6,
                  name: 'Pricing',
                  item: 'https://www.slaide.de#pricing',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <WebVitalsInit />
        {process.env.NODE_ENV === 'production' && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}
      </body>
    </html>
  )
}
