import { TrustLink, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";
import { electricityRateReference } from "@/data/energy-reference";

const title = "How much does a window air conditioner cost to run?";
const description = "A specific Frigidaire 8,000 BTU window unit lists 670 W in cooling mode; eight hours a day for 30 days would use 160.8 kWh and cost $29.49 at the June 2026 US average rate of $0.1834/kWh, per EIA. The actual bill changes when the compressor cycles.";
const path = "/guides/window-ac-cost";
export const metadata = createPageMetadata({ title, description, path });

export default function GuidePage() {
 return <><ArticleJsonLd title={title} description={description} path={path} datePublished="2026-09-09" dateModified="2026-09-26" /><TrustPageShell category="Planning guide" title={title} description={description} path={path}>
<p>The 670 W value is from the <TrustLink href="https://www.frigidaire.ca/Owner-Centre/Product-Support/fhww083wbe" external>Frigidaire product support page</TrustLink>, checked September 26, 2026. This discontinued model supplies a documented example, not a purchase recommendation. The eight-hour schedule is a chosen scenario. Confirm the wattage and voltage for your model before using it.</p>
<p>The $0.1834/kWh comparison uses the June 2026 US residential average in <TrustLink href={electricityRateReference.url} external>EIA table 5.6.A</TrustLink>. Enter the variable price from your own summer bill when assessing this unit.</p>
<TrustSection title="Calculate from the rated input">
<p><strong>Monthly kWh = cooling watts ÷ 1,000 × scheduled hours per day × active days per month × duty cycle ÷ 100.</strong></p>
<p>At 100% duty, 670 ÷ 1,000 × 8 × 30 = 160.8 kWh. At $0.1834/kWh, 160.8 × 0.1834 = $29.49072, displayed as $29.49.</p>
<p>The duty input represents the share of scheduled time at the stated cooling input. A thermostat may stop the compressor while controls or a fan remain active. Enter 100% when you use a measured average watt value over the complete observation period. Do not apply a guessed duty percentage to a kWh reading that already includes cycling.</p>
</TrustSection>
<TrustSection title="Compare a schedule and a rate">
<p>The table holds the model&apos;s 670 W, 30 days and the EIA benchmark. Hours are chosen scenarios.</p>
<div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Worked example comparison" tabIndex={0}><table className="w-full min-w-80 text-left text-sm"><thead><tr><th scope="col" className="p-3">Hours/day</th><th scope="col" className="p-3">Monthly kWh at 100% duty</th><th scope="col" className="p-3">Cost at $0.1834/kWh</th></tr></thead><tbody><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">2</th><td className="p-3">40.2</td><td className="p-3">$7.37</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">4</th><td className="p-3">80.4</td><td className="p-3">$14.75</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">8</th><td className="p-3">160.8</td><td className="p-3">$29.49</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">12</th><td className="p-3">241.2</td><td className="p-3">$44.24</td></tr></tbody></table></div>
<p>At a chosen $0.25/kWh price, the eight-hour scenario is $40.20. The 160.8 kWh does not change. This is why the rate on your bill matters more than a national benchmark when you are checking a particular month.</p>
</TrustSection>
<TrustSection title="BTU is capacity, watts is input">
<p>BTU per hour describes cooling capacity. Watts describe electrical input. They are related through efficiency, so do not convert a BTU label to watts by using a single universal multiplier. Use the electrical input or measured kWh shown by the manufacturer and your meter.</p>
<p>The product page&apos;s 670 W is a model-specific cooling value. It is not a wattage for every 8,000 BTU unit. Features, voltage, controls and test conditions can differ. If the label shows amps and volts but no watts, a qualified person can help interpret it safely. Do not open the unit.</p>
</TrustSection>
<TrustSection title="Check installation and operation safely">
<p>Follow the manufacturer&apos;s installation instructions and keep the unit supported as specified. This guide does not provide mounting or electrical instructions. A circuit, outlet or cord that feels hot needs attention from a licensed electrician.</p>
<p>Clean and airflow conditions can change runtime. Record filter cleaning, outdoor temperature and the thermostat setting in your notes. These observations help explain a meter result without assigning an invented percentage to weather or insulation.</p>
</TrustSection>
<TrustSection title="Compare rated input with a measured average">
<p>Keep the planned schedule the same when comparing two kinds of evidence. In a hypothetical meter log, 5.4 kWh recorded over 12 hours gives an average of 0.45 kW, or 450 W. That average already includes any cycling during the observation. It is a teaching example, not a measurement we took from the Frigidaire model.</p>
<div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Rated input and hypothetical meter comparison" tabIndex={0}><table className="w-full min-w-[38rem] text-left text-sm"><thead><tr><th scope="col" className="p-3">Evidence used</th><th scope="col" className="p-3">Input in calculator</th><th scope="col" className="p-3">At 8 hours/day for 30 days</th><th scope="col" className="p-3">At $0.1834/kWh</th></tr></thead><tbody><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">Model&apos;s cooling input</th><td className="p-3">670 W, 100% duty assumption</td><td className="p-3">160.8 kWh</td><td className="p-3">$29.49</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">Hypothetical 5.4 kWh / 12-hour log</th><td className="p-3">450 W average, 100% duty</td><td className="p-3">108 kWh</td><td className="p-3">$19.81</td></tr></tbody></table></div>
<p>The second row uses 5.4 ÷ 12 × 8 × 30 = 108 kWh. Applying another duty-cycle reduction would count cycling twice. The difference between rows is not a savings claim: one is a rated-input scenario, while the other extrapolates a hypothetical observation. A hotter period, another thermostat setting or a different fan mode can change the next reading.</p>
<p>For your own log, record the model, start and end times, total kWh, thermostat setting, fan mode, outdoor conditions and filter condition. Compare periods of equal length where possible. Use a monitor only when its rating and the appliance instructions permit it; ask a licensed electrician if unsure. Do not open the unit or alter its electrical connection.</p>
</TrustSection>
<TrustSection title="Use the estimate within its limits">
<p>The estimate excludes fixed utility charges, taxes, demand charges, and equipment purchase or maintenance. A single rate does not model time-of-use pricing. It does not compare a window unit with central air. Use <TrustLink href="/guides/electricity-costs">the electricity-rate guide</TrustLink> for tariff details, <TrustLink href="/guides/appliance-energy-use">the appliance measurement guide</TrustLink> for meter readings and <TrustLink href="/guides/energyguide-labels">the EnergyGuide guide</TrustLink> for label context.</p>
<p>Enter the model&apos;s watts and your schedule in the <TrustLink href="/calculators/appliance-running-cost">appliance running-cost calculator</TrustLink>. Its output is a planning estimate for the stated input, not a guarantee of your next bill.</p>
</TrustSection>
</TrustPageShell></>;
}
