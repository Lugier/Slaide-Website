'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'

type ActiveSection = 'loesung' | 'platform' | 'benchmark' | 'security' | 'pricing-tiers' | null

export function Navigation(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<ActiveSection>(null)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds: Array<{ id: ActiveSection; selector: string }> = [
      { id: 'loesung', selector: '#loesung' },
      { id: 'platform', selector: '#platform' },
      { id: 'benchmark', selector: '#benchmark' },
      { id: 'security', selector: '#security' },
      { id: 'pricing-tiers', selector: '#pricing-tiers' },
    ]

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      // Find the entry with the highest intersection ratio
      let maxRatio = 0
      let activeEntry: IntersectionObserverEntry | null = null

      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          activeEntry = entry
        }
      }

      if (activeEntry) {
        const sectionId = activeEntry.target.id as ActiveSection
        setActiveSection(sectionId)
      }
    }, observerOptions)

    const observeSections = (): void => {
      sectionIds.forEach(({ selector }) => {
        const element = document.querySelector(selector)
        if (element) {
          observer.observe(element)
        }
      })
    }

    // Handle initial scroll position
    const checkInitialSection = (): void => {
      const scrollPosition = window.scrollY + 150
      let currentSection: ActiveSection = null
      let minDistance = Infinity

      sectionIds.forEach(({ selector, id }) => {
        const element = document.querySelector(selector)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          const distance = Math.abs(scrollPosition - elementTop)

          if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom + 100) {
            if (distance < minDistance) {
              minDistance = distance
              currentSection = id
            }
          }
        }
      })

      if (currentSection) {
        setActiveSection(currentSection)
      } else if (window.scrollY < 100) {
        setActiveSection(null)
      }
    }

    // Initial observation attempt
    observeSections()
    checkInitialSection()

    // Re-observe after dynamic sections load (with delays for progressive loading)
    const timeouts = [
      setTimeout(() => {
        observeSections()
        checkInitialSection()
      }, 300),
      setTimeout(() => {
        observeSections()
        checkInitialSection()
      }, 1000),
      setTimeout(() => {
        observeSections()
        checkInitialSection()
      }, 2000),
    ]

    // Also observe DOM changes for dynamically loaded sections
    const mutationObserver = new MutationObserver(() => {
      observeSections()
      checkInitialSection()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Fallback scroll listener for better accuracy
    let scrollTimeout: number | null = null
    const handleScroll = (): void => {
      if (scrollTimeout !== null) {
        cancelAnimationFrame(scrollTimeout)
      }
      scrollTimeout = requestAnimationFrame(() => {
        checkInitialSection()
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
      timeouts.forEach((timeout) => clearTimeout(timeout))
      if (scrollTimeout !== null) {
        cancelAnimationFrame(scrollTimeout)
      }
    }
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
      className={`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''
        }`}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight flex items-center gap-2.5 hover:opacity-80 transition-opacity focus:outline-none rounded-lg"
          aria-label="Slaide Startseite"
        >
          <Image
            src="/logo-slaide.svg"
            alt="Slaide Logo"
            width={24}
            height={24}
            className="w-6 h-6"
            priority
          />
          Slaide
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-grey-medium">
          <Link
            href="/#loesung"
            className={`relative hover:text-black transition-all duration-300 focus:outline-none rounded px-2 py-1 ${activeSection === 'loesung'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
          >
            Lösung
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left transition-all duration-300 ease-out ${activeSection === 'loesung' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/#platform"
            className={`relative hover:text-black transition-all duration-300 focus:outline-none rounded px-2 py-1 ${activeSection === 'platform'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
          >
            Plattform
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left transition-all duration-300 ease-out ${activeSection === 'platform' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/#benchmark"
            className={`relative hover:text-black transition-all duration-300 focus:outline-none rounded px-2 py-1 ${activeSection === 'benchmark'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
          >
            Benchmark
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left transition-all duration-300 ease-out ${activeSection === 'benchmark' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/#security"
            className={`relative hover:text-black transition-all duration-300 focus:outline-none rounded px-2 py-1 ${activeSection === 'security'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
          >
            Sicherheit
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left transition-all duration-300 ease-out ${activeSection === 'security' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/#pricing-tiers"
            className={`relative hover:text-black transition-all duration-300 focus:outline-none rounded px-2 py-1 ${activeSection === 'pricing-tiers'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
          >
            Pricing
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left transition-all duration-300 ease-out ${activeSection === 'pricing-tiers' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            onClick={handleDemoClick}
            className={`text-sm font-medium px-5 py-2.5 rounded-lg transition-all focus:outline-none min-h-[44px] flex items-center shadow-sm ${isScrolled
              ? 'bg-black text-white hover:bg-gray-800'
              : 'border border-gray-200 hover:border-gray-900 hover:bg-gray-50'
              }`}
            aria-label="Demo anfragen"
          >
            Demo anfragen
          </a>
          <Link
            href="https://app.slaide.de"
            className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all shadow-sm focus:outline-none min-h-[44px] flex items-center"
            aria-label="Login"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuToggle}
          className="md:hidden p-2 w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none min-h-[44px] min-w-[44px]"
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
        className={`md:hidden fixed top-20 left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-gray-100 z-40 transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-4">
          <Link
            href="/#loesung"
            className={`relative hover:text-black transition-all duration-300 font-medium py-2 focus:outline-none rounded px-2 min-h-[44px] flex items-center ${activeSection === 'loesung'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
            onClick={handleMobileLinkClick}
          >
            Lösung
            <span
              className={`absolute left-0 top-0 bottom-0 w-1 bg-black origin-top transition-all duration-300 ease-out rounded-r ${activeSection === 'loesung' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/#platform"
            className={`relative hover:text-black transition-all duration-300 font-medium py-2 focus:outline-none rounded px-2 min-h-[44px] flex items-center ${activeSection === 'platform'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
            onClick={handleMobileLinkClick}
          >
            Plattform
            <span
              className={`absolute left-0 top-0 bottom-0 w-1 bg-black origin-top transition-all duration-300 ease-out rounded-r ${activeSection === 'platform' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/#benchmark"
            className={`relative hover:text-black transition-all duration-300 font-medium py-2 focus:outline-none rounded px-2 min-h-[44px] flex items-center ${activeSection === 'benchmark'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
            onClick={handleMobileLinkClick}
          >
            Benchmark
            <span
              className={`absolute left-0 top-0 bottom-0 w-1 bg-black origin-top transition-all duration-300 ease-out rounded-r ${activeSection === 'benchmark' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/#security"
            className={`relative hover:text-black transition-all duration-300 font-medium py-2 focus:outline-none rounded px-2 min-h-[44px] flex items-center ${activeSection === 'security'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
            onClick={handleMobileLinkClick}
          >
            Sicherheit
            <span
              className={`absolute left-0 top-0 bottom-0 w-1 bg-black origin-top transition-all duration-300 ease-out rounded-r ${activeSection === 'security' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <Link
            href="/#pricing-tiers"
            className={`relative hover:text-black transition-all duration-300 font-medium py-2 focus:outline-none rounded px-2 min-h-[44px] flex items-center ${activeSection === 'pricing-tiers'
              ? 'text-black font-bold'
              : 'text-grey-medium font-medium'
              }`}
            onClick={handleMobileLinkClick}
          >
            Pricing
            <span
              className={`absolute left-0 top-0 bottom-0 w-1 bg-black origin-top transition-all duration-300 ease-out rounded-r ${activeSection === 'pricing-tiers' ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
              aria-hidden="true"
            />
          </Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link
              href="https://app.slaide.de"
              className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all shadow-sm text-center focus:outline-none min-h-[44px] flex items-center justify-center"
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
            className="w-full text-sm font-medium bg-black text-white px-5 py-3.5 rounded-lg hover:bg-gray-800 transition-all shadow-sm focus:outline-none min-h-[52px] flex items-center justify-center"
            aria-label="Demo anfragen"
          >
            Demo anfragen
          </a>
        </div>
      </div>
    </nav>
  )
}
