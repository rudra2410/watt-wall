import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Home Energy Audit Checklist",
  description: "A practical checklist for reviewing a home's energy use, spotting common air leaks, and deciding when to arrange a professional assessment.",
  path: "/guides/home-energy-audit",
});

export default function HomeEnergyAuditGuide() {
  return (
    <><ArticleJsonLd title="Home Energy Audit Checklist" description="Use a practical home energy audit checklist to inspect common energy-loss areas and decide when professional assessment can help." path="/guides/home-energy-audit" /><TrustPageShell category="Energy guide" path="/guides/home-energy-audit" title="Home energy audit checklist" description="A simple starting point for understanding where a home uses energy before choosing an improvement project.">
      <TrustNote><strong>A walkthrough is not a certification.</strong> A DIY check can reveal questions and low-cost opportunities, but a professional assessment is better for a whole-home diagnosis or safety-sensitive work.</TrustNote>

      <TrustSection title="Start with your energy story">
        <p>Collect recent utility bills, note seasonal changes, and list rooms or systems that feel uncomfortable. Record heating and cooling equipment, water heating, insulation you can safely see, and appliances that run for long periods.</p>
        <p>The <TrustLink external href="https://www.energy.gov/energysaver/why-energy-efficiency-matters">U.S. Department of Energy recommends an energy evaluation</TrustLink> as a first step because it helps identify which improvements may be most useful for a particular home.</p>
      </TrustSection>

      <TrustSection title="Walk through common leak points">
        <TrustList>
          <li>Check visible gaps around doors, windows, attic hatches, baseboards, vents, and utility penetrations.</li>
          <li>Look for damaged weatherstripping or caulk and note rooms with drafts or uneven temperatures.</li>
          <li>Inspect accessible filters and equipment clearances according to the manufacturer’s instructions.</li>
          <li>Write down questions for a qualified professional instead of opening combustion equipment or electrical panels.</li>
        </TrustList>
        <p>DOE’s <TrustLink external href="https://www.energy.gov/sites/default/files/2021-08/ES-Home%20Energy%20Assessments_080221.pdf">Consumer Guide to Home Energy Assessments</TrustLink> describes these observations as part of a broader assessment, not a substitute for one.</p>
      </TrustSection>

      <TrustSection title="Turn observations into a plan">
        <p>Prioritize actions by comfort, safety, expected impact, cost, and how easy they are to verify. Use Watt & Wall calculators to quantify individual loads or material quantities, then ask a qualified contractor or energy auditor to review complex changes.</p>
      </TrustSection>
    </TrustPageShell></>
  );
}
