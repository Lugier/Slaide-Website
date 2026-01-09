'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'

export function Navigation(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMobileLinkClick = (): void => {
    setIsMobileMenuOpen(false)
  }

  const handleDemoClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    openCalComOverlay()
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight flex items-center gap-2.5 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
          aria-label="Slaide Startseite"
        >
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-sm"></div>
          </div>
          Slaide
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-grey-medium">
          <a
            href="#platform"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Plattform
          </a>
          <a
            href="#how"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Technologie
          </a>
          <a
            href="#use-cases"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Use Cases
          </a>
          <a
            href="#security"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Security
          </a>
          <a
            href="#pricing"
            className="hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
          >
            Pricing
          </a>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            onClick={handleDemoClick}
            className={`text-sm font-medium px-5 py-2.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] flex items-center shadow-sm ${
              isScrolled
                ? 'bg-black text-white hover:bg-gray-800'
                : 'border border-gray-200 hover:border-gray-900 hover:bg-gray-50'
            }`}
            aria-label="Demo anfragen"
          >
            Demo anfragen
          </a>
          <Link
            href="https://app.slaide.de"
            className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] flex items-center"
            aria-label="Login"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden p-2 w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] min-w-[44px]"
          aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-gray-100 z-40 transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-4">
          <a
            href="#platform"
            className="text-grey-medium hover:text-black transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 min-h-[44px] flex items-center"
            onClick={handleMobileLinkClick}
          >
            Plattform
          </a>
          <a
            href="#how"
            className="text-grey-medium hover:text-black transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 min-h-[44px] flex items-center"
            onClick={handleMobileLinkClick}
          >
            Technologie
          </a>
          <a
            href="#use-cases"
            className="text-grey-medium hover:text-black transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 min-h-[44px] flex items-center"
            onClick={handleMobileLinkClick}
          >
            Use Cases
          </a>
          <a
            href="#security"
            className="text-grey-medium hover:text-black transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 min-h-[44px] flex items-center"
            onClick={handleMobileLinkClick}
          >
            Security
          </a>
          <a
            href="#pricing"
            className="text-grey-medium hover:text-black transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 min-h-[44px] flex items-center"
            onClick={handleMobileLinkClick}
          >
            Pricing
          </a>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link
              href="https://app.slaide.de"
              className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[44px] flex items-center justify-center"
              onClick={handleMobileLinkClick}
              aria-label="Login"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1400px] mx-auto px-6 py-3">
          <a
            href="#"
            onClick={handleDemoClick}
            className="w-full text-sm font-medium bg-black text-white px-5 py-3.5 rounded-lg hover:bg-gray-800 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-h-[52px] flex items-center justify-center"
            aria-label="Demo anfragen"
          >
            Demo anfragen
          </a>
        </div>
      </div>
    </nav>
  )
}
