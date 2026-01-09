'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { PlatformDemoSection } from '@/components/sections/platform-demo-section'
import { UseCasesSection } from '@/components/sections/use-cases-section'
import { SecuritySection } from '@/components/sections/security-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { ROISection } from '@/components/sections/roi-section'

export default function Home(): JSX.Element {
  useEffect(() => {
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

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => {
      revealObserver.observe(el)
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
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
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
      })
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
      if (window.pageYOffset > 400) {
        backToTopBtn.classList.add('visible')
      } else {
        backToTopBtn.classList.remove('visible')
      }
    }

    window.addEventListener('scroll', handleBackToTopScroll, { passive: true })

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleBackToTopScroll)
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar)
      }
      if (backToTopBtn.parentNode) {
        backToTopBtn.parentNode.removeChild(backToTopBtn)
      }
    }
  }, [])

  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <HowItWorksSection />
        <PlatformDemoSection />
        <UseCasesSection />
        <SecuritySection />
        <PricingSection />
        <ROISection />
        <Footer />
      </main>
    </>
  )
}
