import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Methodology",
  description: "How Watt & Wall selects formulas, sources, assumptions, units, rounding, and review dates for its calculators.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <TrustPageShell category="How we calculate" path="/methodology" title="Methodology" description="A plain-language guide to the formulas, sources, assumptions, and review process behind Watt & Wall estimates.">
      <TrustNote><strong>Last reviewed: August 24, 2026.</strong> This page describes the current prototype. We update it when a calculator’s formula, source context, or data-handling behavior changes.</TrustNote>

      <TrustSection title="Start with a useful, limited question">
        <p>Each tool is designed for one early-planning question: estimating electricity cost, appliance running cost, paint quantity, or flooring and tile quantity. We keep the scope narrow so the input, formula, result, and limitation can be read together.</p>
        <p>The tools are not a substitute for an inspection, a product installation guide, a utility tariff, a contractor quote, or qualified safety advice.</p>
      </TrustSection>

      <TrustSection title="Show the formula and units">
        <p>Every calculator keeps its pure calculation in a typed TypeScript module, separate from the interface. Inputs are validated before calculation, results retain numeric precision, and display rounding happens only when values are presented to a reader.</p>
        <TrustList>
          <li>Electricity cost converts watts to kilowatts, multiplies by hours and active days, then applies the entered price per kWh.</li>
          <li>Appliance cost applies the same energy relationship to a recurring monthly schedule and extends it to an annual planning view.</li>
          <li>Paint quantity estimates wall area, subtracts entered openings, multiplies by coats, divides by coverage, and adds the visible waste allowance.</li>
          <li>Flooring and tile quantity multiplies rectangular length by width, adds visible waste, divides by product coverage, and rounds whole units up.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="Use sources with context">
        <p>We prefer primary sources such as government agencies, manufacturers, and established installation guidance. A source note should explain what the source supports, its geography where relevant, and when the page was last reviewed. User-entered local rates and product coverage take priority over example defaults.</p>
        <p>Examples of source context include the <TrustLink external href="https://www.eia.gov/energyexplained/electricity/measuring-electricity.php">U.S. Energy Information Administration’s explanation of kWh</TrustLink>, <TrustLink external href="https://www.sherwin-williams.com/homeowners/how-to/paint-calculator">manufacturer paint-coverage guidance</TrustLink>, and retailer flooring guidance that explains carton coverage and waste.</p>
      </TrustSection>

      <TrustSection title="Make assumptions visible">
        <p>Coverage, waste, opening allowances, usage days, electricity price, and other defaults are starting points—not promises. Each calculator shows the assumptions that materially affect its result and lets users replace editable values where practical.</p>
        <p>Complex layouts, unusual products, changing tariffs, surface condition, defects, cuts, and installation choices can move the final outcome. That is why the result cards use planning language and link to a full disclaimer.</p>
      </TrustSection>

      <TrustSection title="Review and update the tools">
        <p>When a source, formula, unit convention, or product assumption changes, the relevant calculator page and review date should be updated together. Tests cover normal values, boundary conditions, invalid values, and rounding behavior before a change is accepted.</p>
        <p>Questions about a source or calculation can be sent through the <TrustLink href="/contact">Contact page</TrustLink>. For data handling, read the <TrustLink href="/privacy">Privacy policy</TrustLink>; for result limitations, read the <TrustLink href="/disclaimer">Disclaimer</TrustLink>.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
