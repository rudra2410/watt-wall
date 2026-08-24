import type { Metadata } from "next";

import { HeroSection } from "@/components/marketing/hero-section";
import { FeaturedCalculatorsSection } from "@/components/marketing/featured-calculators-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { CalculatorCategoriesSection } from "@/components/marketing/calculator-categories-section";
import { TrustSection } from "@/components/marketing/trust-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCtaSection } from "@/components/marketing/final-cta-section";
import { SiteStructuredData } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Home Energy and Renovation Calculators",
  description: "Plan home energy use and renovation materials with transparent formulas, local inputs, and clear assumptions.",
  path: "/",
});

export default function Home() {
  return (
    <main id="main-content">
      <SiteStructuredData />
      <HeroSection />
      <FeaturedCalculatorsSection />
      <HowItWorksSection />
      <CalculatorCategoriesSection />
      <TrustSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
