'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Globe } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'
import { useLanguage } from '@/lib/context/language-context'

type ActiveSection = 'loesung' | 'platform' | 'benchmark' | 'security' | 'pricing-tiers' | null

export function Navigation(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<ActiveSection>(null)
  const { language, setLanguage, t } = useLanguage()

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

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de')
  }

  return (
    <>
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
              src="/favicon.svg"
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
              {t('nav.solution')}
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
              {t('nav.platform')}
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
              {t('nav.benchmark')}
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
              {t('nav.security')}
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
              {t('nav.pricing')}
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-black origin-left transition-all duration-300 ease-out ${activeSection === 'pricing-tiers' ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-grey-medium hover:text-black transition-colors focus:outline-none px-2 py-1 flex items-center gap-1"
              aria-label="Sprache wechseln"
            >
              <Globe className="w-4 h-4" />
              <span className={language === 'de' ? 'font-bold' : ''}>DE</span>
              <span>|</span>
              <span className={language === 'en' ? 'font-bold' : ''}>EN</span>
            </button>
            <a
              href="#"
              onClick={handleDemoClick}
              className={`text-sm font-medium px-5 py-2.5 rounded-lg transition-all focus:outline-none min-h-[44px] flex items-center shadow-sm ${isScrolled
                ? 'bg-black text-white hover:bg-gray-800'
                : 'border border-gray-200 hover:border-gray-900 hover:bg-gray-50'
                }`}
              aria-label="Demo anfragen"
            >
              {t('nav.requestDemo')}
            </a>
            <Link
              href="https://app.slaide.de"
              className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all shadow-sm focus:outline-none min-h-[44px] flex items-center"
              aria-label="Login"
            >
              {t('nav.login')}
            </Link>
          </div>

          {/* Mobile Actions: Language + Burger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none min-h-[44px] min-w-[44px]"
              aria-label="Sprache wechseln"
            >
              <span className="text-sm font-semibold">{language === 'de' ? 'DE' : 'EN'}</span>
            </button>

            <button
              onClick={handleMobileMenuToggle}
              className="relative z-50 p-2 w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none min-h-[44px] min-w-[44px]"
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="flex flex-col gap-1.5 items-center justify-center w-6 h-6">
                <span
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-out origin-center transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                />
                <span
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-out origin-center transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Moved outside of nav to avoid exposure to backdrop-filter clipping */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transform transition-all duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-10 overflow-y-auto">
          <nav className="flex flex-col items-center gap-6 text-center">
            <Link
              href="/#loesung"
              className={`text-2xl font-medium transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-4 opacity-0'
                } ${activeSection === 'loesung' ? 'text-black' : 'text-grey-medium'}`}
              onClick={handleMobileLinkClick}
            >
              {t('nav.solution')}
            </Link>
            <Link
              href="/#platform"
              className={`text-2xl font-medium transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100 delay-150' : '-translate-y-4 opacity-0'
                } ${activeSection === 'platform' ? 'text-black' : 'text-grey-medium'}`}
              onClick={handleMobileLinkClick}
            >
              {t('nav.platform')}
            </Link>
            <Link
              href="/#benchmark"
              className={`text-2xl font-medium transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100 delay-200' : '-translate-y-4 opacity-0'
                } ${activeSection === 'benchmark' ? 'text-black' : 'text-grey-medium'}`}
              onClick={handleMobileLinkClick}
            >
              {t('nav.benchmark')}
            </Link>
            <Link
              href="/#security"
              className={`text-2xl font-medium transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100 delay-250' : '-translate-y-4 opacity-0'
                } ${activeSection === 'security' ? 'text-black' : 'text-grey-medium'}`}
              onClick={handleMobileLinkClick}
            >
              {t('nav.security')}
            </Link>
            <Link
              href="/#pricing-tiers"
              className={`text-2xl font-medium transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100 delay-300' : '-translate-y-4 opacity-0'
                } ${activeSection === 'pricing-tiers' ? 'text-black' : 'text-grey-medium'}`}
              onClick={handleMobileLinkClick}
            >
              {t('nav.pricing')}
            </Link>

            <div className={`w-full max-w-xs h-px bg-gray-100 my-4 transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />

            <div className={`flex flex-col gap-6 w-full max-w-xs transition-all duration-500 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-3 text-lg font-medium text-black hover:bg-gray-50 py-3 rounded-xl border border-gray-200 transition-colors w-full"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border ${language === 'de' ? 'bg-black text-white border-black' : 'border-gray-200 text-grey-medium'}`}>DE</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border ${language === 'en' ? 'bg-black text-white border-black' : 'border-gray-200 text-grey-medium'}`}>EN</div>
                <span className="ml-2">{language === 'de' ? 'Sprache wechseln' : 'Switch Language'}</span>
              </button>

              <Link
                href="https://app.slaide.de"
                className="w-full text-lg font-medium bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center"
                onClick={handleMobileLinkClick}
              >
                {t('nav.login')}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

