import { HeroSection } from "@/components/marketing/hero-section";
import { FeaturedCalculatorsSection } from "@/components/marketing/featured-calculators-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { CalculatorCategoriesSection } from "@/components/marketing/calculator-categories-section";
import { TrustSection } from "@/components/marketing/trust-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { FinalCtaSection } from "@/components/marketing/final-cta-section";

export default function Home() {
  return (
    <main id="main-content">
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
