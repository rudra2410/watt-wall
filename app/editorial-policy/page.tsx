import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Editorial and Review Policy",
  description: "How Rudra Sutariya researches, tests, updates, and corrects Watt & Wall calculators and home-planning guides.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <TrustPageShell category="Our standards" path="/editorial-policy" title="Editorial and review policy" description="Watt & Wall is an independent planning resource created and edited by Rudra Sutariya, with a focus on useful estimates, transparent assumptions, and source-backed explanations.">
      <TrustNote><strong>Last reviewed: August 24, 2026.</strong> This policy explains our editorial workflow. It does not make the calculators professional engineering, utility, contractor, or financial advice.</TrustNote>

      <TrustSection title="Who creates the content">
        <p>Rudra Sutariya creates and edits the site, including its calculator interfaces, formulas, explanations, guides, and search metadata. Watt & Wall is designed for homeowners who need a clear starting point before checking a bill, product document, site condition, or qualified professional.</p>
      </TrustSection>

      <TrustSection title="How we review a page">
        <TrustList>
          <li>We define one practical question and keep the calculator or guide focused on that purpose.</li>
          <li>We prefer primary sources from government agencies, standards bodies, manufacturers, and established installation guidance, and describe what each source supports.</li>
          <li>We check formulas and validation rules with normal, boundary, invalid, and rounding cases before publishing changes.</li>
          <li>We show units, assumptions, limitations, and a last-reviewed date so readers can decide whether the estimate fits their situation.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="Corrections and updates">
        <p>If you find a broken source, unclear assumption, accessibility issue, factual error, or calculation problem, send the page URL and a short explanation to <TrustLink href="mailto:wattandwall@gmail.com">wattandwall@gmail.com</TrustLink>. Do not include utility account numbers, payment details, or private property documents.</p>
        <p>When a correction is accepted, we update the relevant content, source note, formula, test, or review date. The <TrustLink href="/methodology">Methodology</TrustLink> page explains the calculation approach, and the <TrustLink href="/contact">Contact page</TrustLink> explains what to include in a report.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
