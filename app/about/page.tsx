import { TrustLink, TrustList, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Watt & Wall",
  description: "Meet Rudra Sutariya, the frontend developer who built Watt & Wall to show the formula, assumptions, and sources behind every home planning estimate.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <TrustPageShell category="About the site" path="/about" title="About Watt & Wall" description="Practical home energy, renovation, furniture, and decoration tools for people who want to understand a number before making a decision.">
      <TrustSection title="Who I am"><p>My name is Rudra Sutariya. I am a frontend developer based in India, and I built Watt & Wall myself. I am not an energy consultant, licensed electrician or trade professional.</p></TrustSection>
      <TrustSection title="Why I built it">
        <p>I made this site after seeing how often a useful-looking calculator gives a number without showing what produced it. That makes it hard to spot a wrong unit, an unsuitable default, or a result that has been rounded up.</p>
        <p>On Watt &amp; Wall, the working stays beside the tool. You can see whether a cost starts with watts or known kWh, whether a material estimate includes waste, and when a result becomes a whole number of gallons, boxes, or panels.</p>
      </TrustSection>
      <TrustSection title="What I maintain">
        <TrustList>
          <li>I write and update the calculator interfaces, formulas, validation rules, explanations, and guides.</li>
          <li>I test normal inputs, invalid values, unit conversions, and rounding behavior before publishing a calculator change.</li>
          <li>I link a source when a page relies on an outside rate, product specification, measurement method, or safety statement.</li>
        </TrustList>
        <p>The <TrustLink href="/methodology">Methodology page</TrustLink> lists every calculator&apos;s core formula and rounding rule. The <TrustLink href="/editorial-policy">Editorial policy</TrustLink> explains how I review sources and corrections.</p>
      </TrustSection>
      <TrustSection title="What it is and is not"><p>These tools provide planning estimates for the values you enter. They are not professional advice, a property inspection, a utility tariff, or a contractor quote. I do not publish testimonials, invented field tests, or savings promises. Your actual bill, room, product, and project conditions remain the evidence that matters.</p><p>Read the <TrustLink href="/disclaimer">full disclaimer</TrustLink> for the limits of an estimate. If a formula, source, or explanation looks wrong, use the <TrustLink href="/contact">Contact page</TrustLink> and include the URL so I can check the exact page.</p></TrustSection>
    </TrustPageShell>
  );
}
