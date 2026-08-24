import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: "Plain-language terms for using Watt & Wall calculators, explanations, links, and planning estimates.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <TrustPageShell category="Site terms" path="/terms" title="Terms of Use" description="These plain-language terms explain the intended use and limits of the Watt & Wall website and calculators.">
      <TrustNote><strong>Effective date: August 24, 2026.</strong> These terms describe the current prototype. The site owner should obtain jurisdiction-specific legal review before commercial launch or adding paid, user-account, or advertising features.</TrustNote>

      <TrustSection title="Use the site for planning">
        <p>You may use the public pages and calculators for personal, educational, and early project-planning purposes. Enter values you are comfortable processing in your browser, check the assumptions, and verify important decisions against the relevant bill, tariff, product document, site conditions, or qualified professional.</p>
      </TrustSection>

      <TrustSection title="Results are not promises">
        <p>Watt & Wall provides estimates from the values and assumptions shown on each page. Results may be incomplete, unsuitable for a particular property or product, or changed by updated prices, weather, usage, installation choices, defects, layout, or local requirements.</p>
        <p>You are responsible for checking inputs and deciding whether a result is appropriate. Read the <TrustLink href="/disclaimer">Disclaimer</TrustLink> for the limits that apply to safety, cost, materials, and professional decisions.</p>
      </TrustSection>

      <TrustSection title="Content, links, and availability">
        <TrustList>
          <li>Formulas, explanations, branding, and page content belong to Watt & Wall or their credited source owners; do not copy or republish them as your own.</li>
          <li>External links are provided for source context or user understanding. Their availability and content can change, and their operators’ terms and privacy notices apply.</li>
          <li>We may revise, remove, or temporarily disable a page, source, calculator, or feature to correct an error or update the site.</li>
          <li>We do not promise uninterrupted availability, a particular result, search ranking, advertising approval, revenue, or fitness for a specific project.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="Questions and changes">
        <p>Questions or correction requests can be sent to <TrustLink href="mailto:wattandwall@gmail.com">wattandwall@gmail.com</TrustLink>. We may update these terms when the site’s behavior or scope changes. The effective date at the top identifies the current version.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
