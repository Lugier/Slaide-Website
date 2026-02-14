'use client'

import { memo, useState, useCallback } from 'react'
import { Check, ArrowRight, Zap, Users, Building, HelpCircle, Sparkles, ShieldCheck } from 'lucide-react'
import { openCalComOverlay } from '@/lib/utils/cal-com'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/context/language-context'

function PricingSectionComponent(): JSX.Element {
  const { t } = useLanguage()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')

  const handleCtaClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    openCalComOverlay()
  }, [])

  return (
    <section id="pricing-tiers" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Decor - Strict Monochrome Grid */}
      <div className="absolute inset-0 tech-grid -z-10 opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-black tracking-tight leading-[1.1]">
            <span>{t('pricing.headline')}</span>
          </h2>
          <p className="text-black text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed opacity-60">
            {t('pricing.subline')}
          </p>

          {/* Toggle - Strict Monochrome Switch */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-white border border-black/10 relative shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 relative z-10",
                billingCycle === 'monthly'
                  ? "bg-black text-white shadow-lg"
                  : "text-black opacity-40 hover:opacity-100"
              )}
            >
              {t('pricing.billing.monthly')}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 relative z-10",
                billingCycle === 'yearly'
                  ? "bg-black text-white shadow-lg"
                  : "text-black opacity-40 hover:opacity-100"
              )}
            >
              {t('pricing.billing.yearly')}
            </button>

            {/* Discount Badge - Strict Monochrome */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-black ring-2 ring-white shadow-xl animate-in fade-in slide-in-from-left-2 duration-500 whitespace-nowrap">
              <Sparkles className="w-3 h-3" />
              <span>{t('pricing.billing.save')}</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch reveal delay-100">

          {/* Card 1: Pay-per-Use */}
          <PricingCard
            title={t('pricing.payPerUse.title')}
            description={t('pricing.payPerUse.desc')}
            price={t('pricing.payPerUse.price')}
            suffix={t('pricing.payPerUse.suffix')}
            icon={<Zap className="w-5 h-5" />}
            features={[
              t('pricing.payPerUse.features.0'),
              t('pricing.payPerUse.features.1'),
              t('pricing.payPerUse.features.2'),
              t('pricing.payPerUse.features.3'),
              t('pricing.payPerUse.features.4')
            ]}
            ctaText={t('pricing.payPerUse.cta')}
            ctaAction={handleCtaClick}
            variant="light"
          />

          {/* Card 2: Teams (Ab 5 Usern) - The 'Black Card' */}
          <PricingCard
            title={t('pricing.teams.title')}
            description={<span><strong>{t('pricing.teams.desc.bold')}</strong> {t('pricing.teams.desc.text')}</span>}
            price={billingCycle === 'yearly' ? t('pricing.teams.price.yearly') : t('pricing.teams.price.monthly')}
            suffix={t('pricing.teams.suffix')}
            icon={<Users className="w-5 h-5" />}
            features={[
              t('pricing.teams.features.0'),
              t('pricing.teams.features.1'),
              t('pricing.teams.features.2'),
              t('pricing.teams.features.3'),
              t('pricing.teams.features.4')
            ]}
            ctaText={t('pricing.teams.cta')}
            ctaAction={handleCtaClick}
            variant="dark"
            badge={t('pricing.teams.badge')}
            highlighted
          />

          {/* Card 3: Scale (Ab 50 Usern) */}
          <PricingCard
            title={t('pricing.scale.title')}
            description={<span><strong>{t('pricing.scale.desc.bold')}</strong> {t('pricing.scale.desc.text')}</span>}
            price={billingCycle === 'yearly' ? t('pricing.scale.price.yearly') : t('pricing.scale.price.monthly')}
            suffix={t('pricing.scale.suffix')}
            icon={<Building className="w-5 h-5" />}
            features={[
              t('pricing.scale.features.0'),
              t('pricing.scale.features.1'),
              t('pricing.scale.features.2'),
              t('pricing.scale.features.3'),
              t('pricing.scale.features.4')
            ]}
            ctaText={t('pricing.scale.cta')}
            ctaAction={handleCtaClick}
            variant="light"
          />

        </div>

        {/* Trust Footer */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-8 reveal delay-200">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold tracking-widest uppercase text-black">
            <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full border border-black/10">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('pricing.trust.gdpr')}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full border border-black/10">
              <Check className="w-4 h-4" />
              <span>{t('pricing.trust.cancel')}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full border border-black/10">
              <Check className="w-4 h-4" />
              <span>{t('pricing.trust.setup')}</span>
            </div>
          </div>

          <p className="text-black opacity-40 text-sm flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>{t('pricing.contact.question')}</span>
            <a href="#" onClick={handleCtaClick} className="text-black opacity-100 underline decoration-black/30 hover:decoration-black transition-all font-bold">
              {t('pricing.contact.cta')}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  title: string
  description: React.ReactNode
  price: string
  suffix: string
  icon: React.ReactNode
  features: string[]
  ctaText: string
  ctaAction: (e: React.MouseEvent<HTMLAnchorElement>) => void
  variant: 'light' | 'dark'
  badge?: string
  highlighted?: boolean
}

function PricingCard({
  title,
  description,
  price,
  suffix,
  icon,
  features,
  ctaText,
  ctaAction,
  variant,
  badge,
  highlighted
}: PricingCardProps) {
  const isDark = variant === 'dark'

  return (
    <div className={cn(
      "relative rounded-3xl p-10 flex flex-col h-full transition-all duration-500 group",
      isDark
        ? "bg-black text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-black ring-1 ring-white/10"
        : "bg-white text-black border border-black hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1",
      highlighted && !isDark && "lg:scale-105 z-10 border-2"
    )}>

      {/* Badge for Recommended Tier */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-white/20 shadow-2xl flex items-center gap-2 ring-4 ring-white z-20">
          <Sparkles className="w-3 h-3" />
          {badge}
        </div>
      )}

      <div className="flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
            isDark ? "bg-white text-black" : "bg-black text-white shadow-xl"
          )}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tighter">{title}</h3>
          <p className={cn("text-sm leading-relaxed opacity-60 font-light", isDark ? "text-white" : "text-black")}>
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-10">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl lg:text-6xl font-black tracking-tighter leading-none">
              {price}
            </span>
          </div>
          <p className={cn("text-[10px] font-bold uppercase tracking-[0.15em] mt-4 opacity-40", isDark ? "text-white" : "text-black")}>
            {suffix}
          </p>
        </div>

        {/* Divider */}
        <div className={cn("h-px w-full mb-10 opacity-10", isDark ? "bg-white" : "bg-black")} />

        {/* Features */}
        <ul className="space-y-4 mb-12 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-4 text-sm group/item">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border transition-colors",
                isDark ? "border-white/20 text-white group-hover/item:border-white" : "border-black/10 text-black group-hover/item:border-black"
              )}>
                <Check className="w-3 h-3" strokeWidth={4} />
              </div>
              <span className={cn("font-medium transition-opacity", isDark ? "text-white/80 group-hover/item:text-white" : "text-black/70 group-hover/item:text-black")}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#"
          onClick={ctaAction}
          className={cn(
            "w-full py-5 px-8 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-3 transition-all duration-500 uppercase tracking-widest",
            isDark
              ? "bg-white text-black hover:bg-gray-100 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:scale-[1.02]"
              : "bg-black text-white hover:bg-[#1a1a1a] shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
          )}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export const PricingSection = memo(PricingSectionComponent)
