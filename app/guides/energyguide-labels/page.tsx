import { ArticleJsonLd } from "@/components/seo/structured-data";
import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { electricityRateReference } from "@/data/energy-reference";
import { createPageMetadata } from "@/lib/seo";

const path = "/guides/energyguide-labels";
const title = "How to read an EnergyGuide label";
const description = "Learn how to compare EnergyGuide annual kWh, operating cost, product capacity, and local electricity rates before buying an appliance.";

export const metadata = createPageMetadata({ title: "How to Read an EnergyGuide Label", description, path });

export default function EnergyGuideLabelsPage() {
  return (
    <><ArticleJsonLd title="How to Read an EnergyGuide Label" description={description} path={path} datePublished="2026-08-25" dateModified="2026-09-26" /><TrustPageShell category="Buying guide" path={path} title={title} description="Read annual energy use first, compare only similar products, then reprice the estimate with your local utility rate. The yellow label is a comparison tool, not a household bill forecast.">
      <TrustNote><strong>Start with kWh, not the dollar figure.</strong> Annual kWh describes the label&apos;s energy estimate. The operating-cost figure applies a national energy-price assumption that may differ from your tariff.</TrustNote>

      <TrustSection title="What the yellow label answers">
        <p>The Federal Trade Commission says an EnergyGuide label shows how much energy an appliance uses and how that use compares with similar models. Depending on the product, the label may show estimated yearly energy use, estimated yearly operating cost, or both. It also identifies the model and the product group used for the comparison.</p>
        <p>The comparison range needs context. A refrigerator should be compared with models of similar type and capacity. A smaller unit may sit lower on the scale simply because it has less interior volume. Features such as through-the-door ice, configuration, and tested capacity can define a different comparison group.</p>
        <p>The FTC lists covered products including refrigerators, freezers, clothes washers, dishwashers, water heaters, televisions, room air conditioners, central air conditioners, heat pumps, furnaces, boilers, pool heaters, and ceiling fans. When a label is not visible in a store, the FTC suggests checking inside the product or on the seller&apos;s or manufacturer&apos;s website.</p>
      </TrustSection>

      <TrustSection title="Read the label in a useful order">
        <TrustList>
          <li>Confirm the manufacturer, model number, appliance type, and capacity printed on the label.</li>
          <li>Find the estimated annual kWh or other energy-use measure. Keep its stated test assumptions with the number.</li>
          <li>Use the comparison scale only against products in the same label category.</li>
          <li>Note the national price assumption used for estimated operating cost.</li>
          <li>Check for an ENERGY STAR mark separately. EnergyGuide and ENERGY STAR answer different questions.</li>
        </TrustList>
        <p>EnergyGuide is required consumer information for covered products. ENERGY STAR is an efficiency certification for products that meet program criteria. A product can carry both marks, but the yellow label remains the place to compare the model&apos;s stated energy estimate with similar products.</p>
      </TrustSection>

      <TrustSection title="Reprice annual kWh with your local rate">
        <p>Use this formula when the label provides annual electricity use:</p>
        <p><strong>Adjusted annual cost = label kWh per year × your local price per kWh.</strong></p>
        <p>Suppose a label shows 500 kWh per year. This is a chosen arithmetic example, not a typical value for every appliance. At the US average residential rate of $0.1834/kWh for June 2026, reported by the US Energy Information Administration, the calculation is 500 × $0.1834 = $91.70 per year. At a local rate of $0.25/kWh, the same 500 kWh becomes $125.00.</p>
        <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="EnergyGuide repricing example" tabIndex={0}>
          <table className="w-full min-w-[34rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Annual energy</th><th className="p-3" scope="col">Rate</th><th className="p-3" scope="col">Adjusted annual cost</th><th className="p-3" scope="col">Monthly planning average</th></tr></thead><tbody>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">500 kWh</th><td className="p-3">$0.12/kWh</td><td className="p-3">$60.00</td><td className="p-3">$5.00</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">500 kWh</th><td className="p-3">$0.1834/kWh</td><td className="p-3">$91.70</td><td className="p-3">$7.64</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">500 kWh</th><td className="p-3">$0.25/kWh</td><td className="p-3">$125.00</td><td className="p-3">$10.42</td></tr>
          </tbody></table>
        </div>
        <p>The monthly column divides the annual estimate by twelve. It does not predict seasonal use. Room air conditioners, furnaces, and other seasonal equipment may use most of their annual energy during a smaller part of the year.</p>
      </TrustSection>

      <TrustSection title="Why your bill can differ">
        <p>The FTC states that actual cost depends on how you use the appliance and your local energy price. A standardized test cannot know your household schedule, climate, settings, maintenance, water temperature, door openings, or utility tariff. Fixed customer charges, taxes, tiers, and time-of-use prices can also make a bill comparison look different.</p>
        <p>Compare the label with a bill in two steps. First, multiply label kWh by a rate that represents the electricity charge you want to test. Second, keep unrelated household loads and fixed charges outside the appliance estimate. If your tariff has several price periods, calculate each period separately or describe the single rate as an approximation.</p>
      </TrustSection>

      <TrustSection title="EnergyGuide buying worksheet">
        <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="EnergyGuide comparison worksheet" tabIndex={0}>
          <table className="w-full min-w-[40rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Record</th><th className="p-3" scope="col">Model A</th><th className="p-3" scope="col">Model B</th><th className="p-3" scope="col">Why it matters</th></tr></thead><tbody>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Type and capacity</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">Keeps the comparison group fair</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Annual kWh</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">Shows the standardized energy estimate</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Your rate per kWh</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">Reprices both models consistently</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Adjusted annual cost</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">Supports a local operating-cost comparison</td></tr>
          </tbody></table>
        </div>
        <p>Keep purchase price, warranty, repair access, dimensions, ventilation clearance, and useful features in a separate comparison. A lower energy estimate is one input to a buying decision.</p>
      </TrustSection>

      <TrustSection title="Calculate and check related assumptions">
        <p>Use the <TrustLink href="/calculators/electricity-cost">Electricity Cost Calculator</TrustLink> in known-kWh mode to reprice a label total. Use the <TrustLink href="/calculators/appliance-running-cost">Appliance Running Cost Calculator</TrustLink> when you have watts, hours, active days, and a duty-cycle estimate instead. The <TrustLink href="/guides/fridge-energyguide-cost">refrigerator label guide</TrustLink> explains why a measured period and the standardized annual estimate may not line up exactly.</p>
        <p>This worksheet produces planning estimates. It does not verify the manufacturer&apos;s test, predict equipment life, or promise savings.</p>
      </TrustSection>

      <TrustSection title="Sources">
        <TrustList>
          <li><TrustLink external href="https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances">FTC: How to use the EnergyGuide label</TrustLink>, for label contents, covered-product examples, comparison use, and the warning that actual cost depends on use and local energy prices.</li>
          <li><TrustLink external href={electricityRateReference.url}>US EIA: monthly residential electricity price</TrustLink>, for the June 2026 US residential benchmark of $0.1834/kWh used in the worked example.</li>
        </TrustList>
        <p>Formula, examples, and sources last reviewed September 26, 2026.</p>
      </TrustSection>
    </TrustPageShell></>
  );
}
