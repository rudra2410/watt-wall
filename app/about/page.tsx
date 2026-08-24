import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Watt & Wall",
  description: "Learn who Watt & Wall is for, how the site is maintained, and what the calculators are designed to help with.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <TrustPageShell category="About the site" path="/about" title="About Watt & Wall" description="Practical home energy and renovation tools for people who want to understand a number before making a decision.">
      <TrustNote><strong>Publisher: Watt & Wall.</strong> The current site is a focused, independent prototype. It does not present itself as a utility, manufacturer, contractor, government service, or professional adviser.</TrustNote>

      <TrustSection title="What we are building">
        <p>Watt & Wall brings small, useful calculations and their explanations into one calm place. The goal is not to produce the biggest possible answer or hide a formula behind a result. The goal is to help a homeowner check inputs, understand units, compare scenarios, and know when a professional or product document should take over.</p>
      </TrustSection>

      <TrustSection title="How the site is maintained">
        <p>The Watt & Wall project team maintains the calculator code, explanatory pages, source notes, and review dates. The team uses typed calculation modules and regression tests for formulas, then checks the rendered pages for keyboard access, responsive layout, and consistent light-theme rendering.</p>
        <TrustList>
          <li>Calculator pages explain their scope before asking for values.</li>
          <li>Sources and assumptions are shown near the result, not hidden in a separate technical document.</li>
          <li>Claims are kept narrower than the evidence; no savings, accuracy, approval, popularity, or professional-endorsement claim is implied.</li>
          <li>When a page changes materially, its review date and supporting research should change with it.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="What we do not do">
        <p>Watt & Wall does not inspect a property, set a utility tariff, select a product, certify an installation, or provide a contractor quote. Calculator values are planning aids. Read the <TrustLink href="/disclaimer">full estimate disclaimer</TrustLink> before relying on a result for a purchase or project.</p>
      </TrustSection>

      <TrustSection title="Keep reading">
        <p>For the calculation process, visit <TrustLink href="/methodology">Methodology</TrustLink>. For questions, source corrections, or accessibility feedback, use the <TrustLink href="/contact">Contact page</TrustLink>. The <TrustLink href="/privacy">Privacy policy</TrustLink> explains what the current prototype does and does not collect.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
