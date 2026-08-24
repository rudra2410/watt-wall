import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Estimate Disclaimer",
  description: "Important limits for using Watt & Wall energy, appliance, paint, flooring, and tile planning estimates.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <TrustPageShell category="Before you rely on a result" path="/disclaimer" title="Estimate Disclaimer" description="Watt & Wall calculators are planning aids. Review these limits before using an estimate for a purchase, installation, safety decision, or quote.">
      <TrustNote><strong>Short version:</strong> the result is only as useful as the values, formula scope, product information, and assumptions behind it. It is not a guarantee, inspection, quote, certification, or professional recommendation.</TrustNote>

      <TrustSection title="Energy and cost estimates">
        <TrustList>
          <li>Electricity and appliance estimates use the entered wattage, schedule, active days, and price per kWh. Actual loads, tariffs, taxes, fees, tiers, demand charges, and standby behavior can differ.</li>
          <li>Prices and defaults are examples unless the page says otherwise. Replace them with the current value from your bill, tariff, meter, supplier, or product label.</li>
          <li>A result does not predict savings, bill changes, equipment performance, or electrical safety.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="Paint, flooring, and tile estimates">
        <TrustList>
          <li>Paint coverage depends on product, surface, texture, colour, application method, coats, and touch-up needs.</li>
          <li>Flooring and tile quantities depend on product coverage, layout, cuts, pattern, defects, transitions, fixtures, spare material, and supplier packaging.</li>
          <li>Rectangular examples do not fully model L-shaped rooms, alcoves, stairways, diagonal patterns, irregular walls, or complex installation plans.</li>
          <li>Always follow the selected product’s installation instructions and confirm quantities with the supplier or qualified installer before ordering.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="Professional and safety decisions">
        <p>Do not use a calculator result as a substitute for an electrician, contractor, architect, inspector, manufacturer, utility, or other qualified professional. For electrical, structural, water, fire, or other safety-sensitive work, stop and obtain appropriate advice before acting.</p>
        <p>Watt & Wall is not responsible for decisions made from an estimate, including material shortages, over-ordering, installation damage, missed fees, safety incidents, or project delays. These terms are explained further in the <TrustLink href="/terms">Terms of Use</TrustLink>.</p>
      </TrustSection>

      <TrustSection title="Report a problem">
        <p>If a formula, source, unit, or page statement looks wrong, send the URL and non-sensitive example values through the <TrustLink href="/contact">Contact page</TrustLink>. We can review the issue, but a report does not make an estimate suitable for a particular project.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
