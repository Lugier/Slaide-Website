import { useLanguage } from '@/lib/context/language-context'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/favicon.svg"
              alt="Slaide Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </Link>
          <div className="text-sm text-gray-400 font-light">
            &copy; {new Date().getFullYear()} Slaide. {t('footer.copyright')}
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
          <Link href="#platform" className="hover:text-black transition-colors">{t('footer.links.platform')}</Link>
          <Link href="/datenschutz" className="hover:text-black transition-colors">{t('footer.links.privacy')}</Link>
          <Link href="/impressum" className="hover:text-black transition-colors">{t('footer.links.imprint')}</Link>
          <Link href="/agb" className="hover:text-black transition-colors">{t('footer.links.terms')}</Link>
        </nav>

      </div>
    </footer>
  )
}
