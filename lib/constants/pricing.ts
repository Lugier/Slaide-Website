export const PRICE_PER_SLIDE: number = 2.69;

export const PRICING_TIERS: Array<{
  tier: string;
  slidesPerMonth: string;
  price: string;
  features: string[]; // Add features if needed for future display
}> = [
  { tier: "Pay-per-Use", slidesPerMonth: "Beliebig", price: "2,69 €/Slide", features: [] },
  { tier: "Mini", slidesPerMonth: "bis 500", price: "999 €", features: [] },
  { tier: "Starter", slidesPerMonth: "501–1.999", price: "2.299 €", features: [] },
  { tier: "Growth", slidesPerMonth: "2.000–3.999", price: "4.899 €", features: [] },
  { tier: "Scale", slidesPerMonth: "4.000–7.999", price: "8.399 €", features: [] },
  { tier: "Business", slidesPerMonth: "8.000–14.999", price: "13.699 €", features: [] },
  { tier: "Enterprise", slidesPerMonth: "15.000+", price: "Custom VLA", features: [] },
];
