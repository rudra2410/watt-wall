import type { Metadata } from "next";

import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { CalculatorCategoriesSection } from "@/components/marketing/calculator-categories-section";
import { TrustSection } from "@/components/marketing/trust-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCtaSection } from "@/components/marketing/final-cta-section";
import { GuideHighlightsSection } from "@/components/marketing/guide-highlights-section";
import { SiteStructuredData } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Home Energy and Renovation Calculators",
  description: "Free energy and renovation calculators for electricity costs, appliance use, paint, flooring, furniture, and decor, with transparent formulas and local inputs.",
  path: "/",
});

export default function Home() {
  return (
    <main id="main-content">
      <SiteStructuredData />
      <HeroSection />
      <HowItWorksSection />
      <CalculatorCategoriesSection />
      <GuideHighlightsSection />
      <TrustSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
