'use client'

import { useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'

// Dynamic imports for below-the-fold sections with optimized loading
const HowItWorksSection = dynamic(() => import('@/components/sections/how-it-works-section').then((mod) => ({ default: mod.HowItWorksSection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />, // Prevent layout shift
})

const ProblemSolutionSection = dynamic(() => import('@/components/sections/problem-solution-section').then((mod) => ({ default: mod.ProblemSolutionSection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />,
})

const CoreCapabilitiesSection = dynamic(() => import('@/components/sections/core-capabilities-section').then((mod) => ({ default: mod.CoreCapabilitiesSection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />,
})

const PlatformDemoSection = dynamic(() => import('@/components/sections/platform-demo-section').then((mod) => ({ default: mod.PlatformDemoSection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />,
})

const QualityComparisonSection = dynamic(() => import('@/components/sections/quality-comparison-section').then((mod) => ({ default: mod.QualityComparisonSection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />,
})

const UseCasesSection = dynamic(() => import('@/components/sections/use-cases-section').then((mod) => ({ default: mod.UseCasesSection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />,
})

const SecuritySection = dynamic(() => import('@/components/sections/security-section').then((mod) => ({ default: mod.SecuritySection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />,
})

const PricingSection = dynamic(() => import('@/components/sections/pricing-section').then((mod) => ({ default: mod.PricingSection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />,
})

const ROISection = dynamic(() => import('@/components/sections/roi-section').then((mod) => ({ default: mod.ROISection })), {
  loading: () => <div className="h-96 w-full" aria-label="Loading section" />,
})

export default function Home(): JSX.Element {
  useEffect(() => {
    // Defer non-critical DOM manipulation
    const initNonCritical = (): (() => void) => {
      // Scroll progress bar
      const progressBar = document.createElement('div')
      progressBar.className = 'scroll-progress'
      progressBar.setAttribute('aria-hidden', 'true')
      document.body.appendChild(progressBar)

      let scrollTimeout: number | null = null
      const handleScroll = (): void => {
        if (scrollTimeout !== null) {
          cancelAnimationFrame(scrollTimeout)
        }
        scrollTimeout = requestAnimationFrame(() => {
          const windowHeight =
            document.documentElement.scrollHeight - window.innerHeight
          const scrolled = (window.scrollY / windowHeight) * 100
          progressBar.style.width = scrolled + '%'
        })
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      // Scroll-triggered reveal animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }

      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'active')
            revealObserver.unobserve(entry.target)
          }
        })
      }, observerOptions)

      // Function to observe reveal elements
      const observeRevealElements = (): void => {
        const revealElements = document.querySelectorAll('.reveal:not(.visible):not(.active)')
        revealElements.forEach((el) => {
          revealObserver.observe(el)
        })
      }

      // Initial observation
      observeRevealElements()

      // Re-observe after dynamic components load (MutationObserver)
      const mutationObserver = new MutationObserver(() => {
        observeRevealElements()
      })

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      })

      // Scroll reveal for cards
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            cardObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.05, rootMargin: '50px' })

      const scrollRevealElements = document.querySelectorAll('.scroll-reveal')
      scrollRevealElements.forEach((card) => {
        cardObserver.observe(card)
      })

      // Smooth scroll for anchor links
      const anchors = document.querySelectorAll('a[href^="#"]')
      const anchorHandlers: Array<{ element: Element; handler: (e: Event) => void }> = []

      anchors.forEach((anchor) => {
        const handler = function (this: HTMLAnchorElement, e: Event): void {
          const href = this.getAttribute('href')
          if (href && href !== '#') {
            e.preventDefault()
            const target = document.querySelector(href)
            if (target) {
              const offset = 100
              const targetPosition = (target as HTMLElement).offsetTop - offset
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
              })
            }
          }
        }
        anchor.addEventListener('click', handler)
        anchorHandlers.push({ element: anchor, handler })
      })

      // Back to top button
      const backToTopBtn = document.createElement('button')
      backToTopBtn.className = 'back-to-top'
      backToTopBtn.setAttribute('aria-label', 'Nach oben scrollen')
      backToTopBtn.setAttribute('type', 'button')
      const arrowUpIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      arrowUpIcon.setAttribute('class', 'w-5 h-5')
      arrowUpIcon.setAttribute('fill', 'none')
      arrowUpIcon.setAttribute('stroke', 'currentColor')
      arrowUpIcon.setAttribute('viewBox', '0 0 24 24')
      arrowUpIcon.setAttribute('aria-hidden', 'true')
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('stroke-linecap', 'round')
      path.setAttribute('stroke-linejoin', 'round')
      path.setAttribute('stroke-width', '2')
      path.setAttribute('d', 'M5 10l7-7m0 0l7 7m-7-7v18')
      arrowUpIcon.appendChild(path)
      backToTopBtn.appendChild(arrowUpIcon)
      document.body.appendChild(backToTopBtn)

      const handleBackToTopScroll = (): void => {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add('visible')
        } else {
          backToTopBtn.classList.remove('visible')
        }
      }

      window.addEventListener('scroll', handleBackToTopScroll, { passive: true })

      const handleBackToTopClick = (): void => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      backToTopBtn.addEventListener('click', handleBackToTopClick)

      // Return cleanup function for initNonCritical
      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('scroll', handleBackToTopScroll)

        // Remove anchor listeners
        anchorHandlers.forEach(({ element, handler }) => {
          element.removeEventListener('click', handler)
        })

        // Disconnect observers
        revealObserver.disconnect()
        cardObserver.disconnect()
        mutationObserver.disconnect()

        // Remove DOM elements
        if (progressBar.parentNode) {
          progressBar.parentNode.removeChild(progressBar)
        }
        if (backToTopBtn.parentNode) {
          backToTopBtn.removeEventListener('click', handleBackToTopClick)
          backToTopBtn.parentNode.removeChild(backToTopBtn)
        }

        // Cleanup animation frame
        if (scrollTimeout !== null) {
          cancelAnimationFrame(scrollTimeout)
        }
      }
    }

    // Defer initialization until after initial render
    let cleanup: (() => void) | undefined
    const timeoutId = setTimeout(() => {
      cleanup = initNonCritical()
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (cleanup) {
        cleanup()
      }
    }
  }, [])

  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={<div className="h-96 w-full" aria-label="Loading section" />}>
          <CoreCapabilitiesSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 w-full" aria-label="Loading section" />}>
          <PlatformDemoSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 w-full" aria-label="Loading section" />}>
          <UseCasesSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 w-full" aria-label="Loading section" />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 w-full" aria-label="Loading section" />}>
          <QualityComparisonSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 w-full" aria-label="Loading section" />}>
          <SecuritySection />
        </Suspense>
        <Suspense fallback={<div className="h-96 w-full" aria-label="Loading section" />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 w-full" aria-label="Loading section" />}>
          <ROISection />
        </Suspense>
        <Footer />
      </main>
    </>
  )
}
