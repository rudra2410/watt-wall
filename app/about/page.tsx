import { TrustLink, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Watt & Wall",
  description: "Meet Rudra Sutariya, the creator of Watt & Wall, and learn how this SEO-focused Next.js and React website helps homeowners plan with clearer numbers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <TrustPageShell category="About the site" path="/about" title="About Watt & Wall" description="Practical home energy, renovation, furniture, and decoration tools for people who want to understand a number before making a decision.">
      <TrustSection title="Who I am"><p>My name is Rudra Sutariya. I am a frontend developer based in India, and I built Watt & Wall myself. I am not an energy consultant, licensed electrician or trade professional.</p></TrustSection>
      <TrustSection title="Why I built it"><p>I made this site because many calculator pages hide the formula or bury it among ads. Watt & Wall shows the inputs, arithmetic, assumptions and sources so you can understand a planning number before using it.</p></TrustSection>
      <TrustSection title="What it is and is not"><p>These tools provide planning estimates for your stated inputs. They are not professional advice, a property inspection, a utility tariff or a contractor quote. Your real bill depends on your tariff and usage. Read the <TrustLink href="/disclaimer">full disclaimer</TrustLink> and contact me through the <TrustLink href="/contact">Contact page</TrustLink> when a source needs correction.</p></TrustSection>
    </TrustPageShell>
  );
}
