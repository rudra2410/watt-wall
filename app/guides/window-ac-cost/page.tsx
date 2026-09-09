import { TrustLink, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

const title = "How much does a window air conditioner cost to run?";
const description = "A specific Frigidaire 8,000 BTU window unit lists 670 W in cooling mode; eight hours a day for 30 days would use 160.8 kWh and cost $29.49 at the June 2026 US average rate of $0.1834/kWh, per EIA. The actual bill changes when the compressor cycles.";
const path = "/guides/window-ac-cost";
export const metadata = createPageMetadata({ title, description, path });

export default function GuidePage() {
 return <><ArticleJsonLd title={title} description={description} path={path} dateModified="2026-09-09" /><TrustPageShell category="Planning guide" title={title} description={description} path={path}>
<p>The 670 W value is from the <TrustLink href="https://www.frigidaire.ca/Owner-Centre/Product-Support/fhww083wbe" external>Frigidaire product support page</TrustLink>, retrieved September 8, 2026. The eight-hour schedule is a chosen scenario. Confirm the wattage and voltage for your model before using it.</p>
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
<TrustSection title="Use a meter for a real comparison">
<p>If a suitable energy monitor records 5.4 kWh over 12 hours, that is 0.45 kWh per hour for that observation. Extending it across a chosen 30-day schedule gives 324 kWh if used 24 hours each day, or a different amount for your actual schedule. State the exact observation period and do not present the extrapolation as a manufacturer rating.</p>
<p>The estimate excludes fixed charges, taxes, demand charges, time-of-use rates and the cost of heating removed from the room. It does not compare a window unit with central air. Use <TrustLink href="/guides/electricity-costs">the electricity-rate guide</TrustLink> for tariff details, <TrustLink href="/guides/appliance-energy-use">the appliance measurement guide</TrustLink> for meter readings and <TrustLink href="/guides/energyguide-labels">the EnergyGuide guide</TrustLink> for label context.</p>
<p>Enter the model&apos;s watts and your schedule in the <TrustLink href="/calculators/appliance-running-cost">appliance running-cost calculator</TrustLink>. Its output is a planning estimate for the stated input, not a guarantee of your next bill.</p>
</TrustSection>
<TrustSection title="Keep an observation log">
<p>Record the model, rated input, thermostat setting, outdoor conditions, filter state and the exact start and end times of a meter observation. Note whether the compressor or fan cycles. These details help explain a difference between the rated-input scenario and a measured kWh result.</p>
<p>For a comparison, change one input at a time. Hold the rate and billing days constant while testing hours, then hold the schedule constant while testing a different tariff. A window unit can draw a different average during a mild period than during a hot period, so label an extrapolation as a scenario. Follow the product manual and ask a licensed electrician about any outlet, cord or circuit concern.</p>
</TrustSection>
</TrustPageShell></>;
}
