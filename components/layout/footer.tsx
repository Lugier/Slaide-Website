import Link from 'next/link'
import Image from 'next/image'

export function Footer(): JSX.Element {
  return (
    <footer
      className="py-12 px-6 border-t border-gray-100 bg-off-white safe-area-bottom pb-24 md:pb-12"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-slaide.svg"
            alt="Slaide Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <span className="text-base font-semibold text-black">Slaide</span>
        </div>
        <div className="flex gap-8 text-sm text-grey-dark">
          <Link
            href="#platform"
            className="hover:text-black transition-colors focus:outline-none rounded px-2 py-1 min-h-[44px] flex items-center"
          >
            Plattform
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-black transition-colors focus:outline-none rounded px-2 py-1 min-h-[44px] flex items-center"
          >
            Datenschutz
          </Link>
          <Link
            href="/impressum"
            className="hover:text-black transition-colors focus:outline-none rounded px-2 py-1 min-h-[44px] flex items-center"
          >
            Impressum
          </Link>
          <Link
            href="/agb"
            className="hover:text-black transition-colors focus:outline-none rounded px-2 py-1 min-h-[44px] flex items-center"
          >
            AGB
          </Link>
        </div>
        <div className="text-sm text-gray-600">&copy; 2026 Slaide</div>
      </div>
    </footer>
  )
}
