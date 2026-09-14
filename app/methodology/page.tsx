import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

type FormulaRow = {
  href: `/calculators/${string}`;
  name: string;
  method: string;
  rounding: string;
  limitation: string;
};

const formulaRows = [
  {
    href: "/calculators/electricity-cost",
    name: "Electricity Cost Calculator",
    method: "Multiply known kWh by the entered rate, or convert watts to kilowatts before applying hours, active days, and rate.",
    rounding: "Keep full precision during calculation; round only the displayed energy and cost values.",
    limitation: "Uses one energy total or one load and schedule with one rate. Fixed fees and tariff tiers are excluded.",
  },
  {
    href: "/calculators/appliance-running-cost",
    name: "Appliance Running Cost Calculator",
    method: "Calculate each row from watts, schedule, duty cycle, and rate, then sum the unrounded row totals.",
    rounding: "Display rounded row values; calculate the combined total from unrounded values.",
    limitation: "All rows share one rate. Preset wattages are starting references that should be replaced when better values are available.",
  },
  {
    href: "/calculators/paint-quantity",
    name: "Paint Quantity Calculator",
    method: "Calculate rectangular wall area, subtract fixed door and window allowances, then apply coats, coverage, and waste.",
    rounding: "Show the calculated volume and round the purchase estimate up to a whole U.S. gallon.",
    limitation: "Uses 20 sq ft per door and 15 sq ft per window. It does not model ceilings or irregular wall shapes.",
  },
  {
    href: "/calculators/flooring-tile",
    name: "Flooring and Tile Calculator",
    method: "Multiply rectangular floor length by width, add the selected waste percentage, and divide by coverage per unit.",
    rounding: "Round the required number of packs or tiles up to the next whole unit.",
    limitation: "Assumes one rectangular area and consistent coverage per pack or tile.",
  },
  {
    href: "/calculators/furniture-fit",
    name: "Furniture Fit Calculator",
    method: "Compare standard and rotated footprints, calculate remaining room space, and test rectangular furniture faces against the opening.",
    rounding: "Preserve the calculated dimensions; format converted measurements for display.",
    limitation: "The opening check does not model turns, stairs, tilt angles, packaging, or removable parts.",
  },
  {
    href: "/calculators/rug-size",
    name: "Rug Size Calculator",
    method: "Add the editable extension to both sides of each furniture dimension, then test normal and rotated placement in the room.",
    rounding: "Preserve the calculated footprint; format converted measurements for display.",
    limitation: "Produces a minimum planning footprint rather than a guaranteed available product size.",
  },
  {
    href: "/calculators/curtain-measurement",
    name: "Curtain Measurement Calculator",
    method: "Add both rod extensions to the window width, apply fullness, and divide by the packaged width of one panel.",
    rounding: "Round the panel quantity up to the next whole panel.",
    limitation: "Header style, hems, pattern matching, shrinkage, and package conventions require a separate product check.",
  },
] as const satisfies readonly FormulaRow[];

export const metadata = createPageMetadata({
  title: "Calculator Methodology",
  description: "See how Watt & Wall home calculators validate inputs, apply formulas, handle units and rounding, document assumptions, and review source material.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <TrustPageShell
      category="How we calculate"
      path="/methodology"
      title="Calculator formulas, assumptions and source methodology"
      description="The calculation rules, rounding choices, source standards, and browser behavior behind every Watt & Wall planning estimate."
    >
      <TrustNote><strong>Last reviewed: September 14, 2026.</strong> This page reflects the formulas and calculator behavior currently published on Watt & Wall.</TrustNote>

      <TrustSection title="How estimates are calculated">
        <p>Each calculator answers a limited planning question from the values you enter. It validates the required fields before calculating, keeps units consistent inside the formula, and withholds the result when an input is incomplete or outside its supported range.</p>
        <p>The result remains an estimate. Check it against your bill, tariff, product instructions, room conditions, or professional advice when the decision requires more detail. For the step-by-step user workflow, read <TrustLink href="/how-it-works">How Watt &amp; Wall works</TrustLink>.</p>
      </TrustSection>

      <TrustSection title="Formula and rounding index">
        <p>The table summarizes the current calculation path for all seven tools. Follow a calculator link to see its complete formula, worked example, editable assumptions, and source notes.</p>
        <div
          aria-label="Calculator formula and rounding comparison"
          className="overflow-x-auto rounded-xl border border-border outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          role="region"
          tabIndex={0}
        >
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm leading-6">
            <caption className="sr-only">Calculation method, rounding behavior, and main limitation for each Watt &amp; Wall calculator.</caption>
            <thead className="bg-card">
              <tr>
                <th className="p-4 font-semibold" scope="col">Calculator</th>
                <th className="p-4 font-semibold" scope="col">Core method</th>
                <th className="p-4 font-semibold" scope="col">Rounding</th>
                <th className="p-4 font-semibold" scope="col">Main limitation</th>
              </tr>
            </thead>
            <tbody>
              {formulaRows.map((row) => (
                <tr className="border-t border-border align-top" key={row.href}>
                  <th className="p-4 font-normal" scope="row"><TrustLink href={row.href}>{row.name}</TrustLink></th>
                  <td className="p-4 text-muted-foreground">{row.method}</td>
                  <td className="p-4 text-muted-foreground">{row.rounding}</td>
                  <td className="p-4 text-muted-foreground">{row.limitation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TrustSection>

      <TrustSection title="Units, currencies and conversions">
        <TrustList>
          <li>Energy calculations accept watts or kilowatts and calculate usage in kilowatt-hours. One kilowatt equals 1,000 watts.</li>
          <li>USD, EUR, GBP, and INR change the displayed currency label. Enter the rate in the selected currency because the calculators do not convert exchange rates.</li>
          <li>Paint and flooring calculations use feet and square feet. Paint volume is also converted from U.S. gallons to litres.</li>
          <li>Furniture, rug, and curtain interfaces accept metric or imperial measurements and convert them to a common internal unit before calculating.</li>
          <li>Decimal calculations retain their precision until display. Counts for paint gallons, flooring units, tiles, and curtain panels round up because a fraction of a purchase unit is insufficient.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="How sources are selected">
        <p>We prefer a government agency or standards body for definitions and conversions. Manufacturer instructions support product-specific coverage or measurement guidance. Retailer guidance is used when it documents a practical buying convention, such as coverage per carton.</p>
        <TrustList>
          <li><TrustLink external href="https://www.eia.gov/energyexplained/electricity/measuring-electricity.php">U.S. EIA: measuring electricity</TrustLink> supports the relationship between watts, kilowatts, time, and kilowatt-hours.</li>
          <li><TrustLink external href="https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances">FTC: using an EnergyGuide label</TrustLink> explains the label&apos;s annual energy-use and operating-cost estimates.</li>
          <li><TrustLink external href="https://www.sherwin-williams.com/en-us/project-center/faqs/paint-faq">Sherwin-Williams: paint FAQ</TrustLink> supports checking paint coverage against the selected product.</li>
          <li><TrustLink external href="https://pdf.lowes.com/project-planner.pdf">Lowe&apos;s: project planner</TrustLink> documents flooring measurements, carton coverage, and material waste.</li>
          <li><TrustLink external href="https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9">NIST: U.S. gallon conversion</TrustLink> supports the gallon-to-litre conversion factor.</li>
          <li><TrustLink external href="https://www.ikea.com/in/en/files/pdf/ac/c1/acc1f97f/ikea-measurement-guide.pdf">IKEA: room measurement guide</TrustLink> supports room, opening, furniture, and curtain measurement context.</li>
          <li><TrustLink external href="https://www.ikea.com/ca/en/product-guides/how-to-choose-the-right-rug-size-pub2e7f9fb0/">IKEA: rug sizing by room</TrustLink> provides placement guidance used to frame the editable rug extensions.</li>
        </TrustList>
        <p>A source does not replace your local information. Product coverage, packaged dimensions, tariff terms, and model-specific labels take priority when they are available.</p>
      </TrustSection>

      <TrustSection title="Browser storage and shareable inputs">
        <p>Calculator arithmetic runs in your browser. The current calculator code does not submit the entered measurements, schedules, or rates to a Watt &amp; Wall application server.</p>
        <p>Inputs can appear in the page URL so you can bookmark or share a calculation. Anyone who receives that URL can read those values. The energy calculators also save the last entered electricity rate in your browser&apos;s local storage. Read the <TrustLink href="/privacy">Privacy policy</TrustLink> for the site&apos;s wider data and advertising disclosures.</p>
      </TrustSection>

      <TrustSection title="Review, corrections and limits">
        <p>We review a calculator when its formula, validation rule, unit conversion, editable default, source, or user-facing explanation changes. Automated tests cover expected calculations, invalid values, boundary conditions, and rounding behavior before a code change is accepted.</p>
        <p>If you find a broken source or a calculation that does not match the stated formula, send the page URL and details through the <TrustLink href="/contact">Contact page</TrustLink>. The <TrustLink href="/disclaimer">Disclaimer</TrustLink> explains where a planning estimate ends and where a bill, product document, contractor, or qualified professional should guide the decision.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
