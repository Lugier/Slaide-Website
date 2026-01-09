import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | Slaide',
  description: 'Allgemeine Geschäftsbedingungen von Slaide',
}

export default function AGBPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Allgemeine Geschäftsbedingungen</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-grey-dark leading-relaxed">
            Die AGB werden in Kürze verfügbar sein.
          </p>
        </div>
      </div>
    </div>
  )
}
