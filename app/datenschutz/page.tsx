import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz | Slaide',
  description: 'Datenschutzerklärung von Slaide',
}

export default function DatenschutzPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-grey-dark leading-relaxed">
            Die Datenschutzerklärung wird in Kürze verfügbar sein.
          </p>
        </div>
      </div>
    </div>
  )
}
