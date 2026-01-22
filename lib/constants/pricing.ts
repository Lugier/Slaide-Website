export const PRICE_PER_SLIDE: number = 2.69;

export type PricingTier = {
  tier: string;
  slidesPerMonth: string;
  price: string;
  numericPrice?: number; // Optional numeric price for calculations
  features: string[]; // Add features if needed for future display
};

export const PRICING_TIERS: PricingTier[] = [
  { tier: "Pay-per-Use", slidesPerMonth: "Beliebig", price: "2,69 €/Slide", numericPrice: 2.69, features: [] },
  { tier: "Mini", slidesPerMonth: "bis 500", price: "999 €", numericPrice: 999, features: [] },
  { tier: "Starter", slidesPerMonth: "501–1.999", price: "2.299 €", numericPrice: 2299, features: [] },
  { tier: "Growth", slidesPerMonth: "2.000–3.999", price: "4.899 €", numericPrice: 4899, features: [] },
  { tier: "Scale", slidesPerMonth: "4.000–7.999", price: "8.399 €", numericPrice: 8399, features: [] },
  { tier: "Business", slidesPerMonth: "8.000–14.999", price: "13.699 €", numericPrice: 13699, features: [] },
  { tier: "Enterprise", slidesPerMonth: "15.000+", price: "Custom VLA", features: [] },
];
