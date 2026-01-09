import Link from 'next/link'

export function Footer(): JSX.Element {
  return (
    <footer
      className="py-12 px-6 border-t border-gray-100 bg-off-white safe-area-bottom pb-24 md:pb-12"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <div className="w-4 h-4 bg-black rounded-sm"></div>
          Slaide
        </div>
        <div className="flex gap-8 text-sm text-grey-dark">
          <Link
            href="#platform"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
          >
            Plattform
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
          >
            Datenschutz
          </Link>
          <Link
            href="/impressum"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
          >
            Impressum
          </Link>
          <Link
            href="/agb"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1 min-h-[44px] flex items-center"
          >
            AGB
          </Link>
        </div>
        <div className="text-sm text-gray-400">&copy; 2026 Slaide</div>
      </div>
    </footer>
  )
}
