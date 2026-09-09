import { TrustLink, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

const title = "Why a dehumidifier's IEF does not predict your daily cost";
const description = "A chosen 500 W dehumidifier running 8 hours a day for 30 days uses 120 kWh and costs $22.01 at the June 2026 US average rate of $0.1834/kWh, per EIA. Its IEF is a moisture-removal efficiency measure, so it cannot by itself produce your electricity bill.";
const path = "/guides/dehumidifier-ief-cost";
export const metadata = createPageMetadata({ title, description, path });

export default function GuidePage() {
 return <><ArticleJsonLd title={title} description={description} path={path} dateModified="2026-09-09" /><TrustPageShell category="Planning guide" title={title} description={description} path={path}>
<p>The 500 W rating and eight-hour schedule are scenario inputs. They are not a claim about a standard unit. Use the rated input from your model or a measured average. A compressor may cycle while the control remains set to run continuously.</p>
<TrustSection title="What IEF measures">
<p><TrustLink href="https://www.energystar.gov/products/dehumidifiers/key_efficiency_criteria" external>ENERGY STAR&apos;s dehumidifier criteria</TrustLink> define Integrated Energy Factor in litres of water removed per kWh, including dehumidification and standby or off modes under representative test conditions. <TrustLink href="https://www.energystar.gov/products/dehumidifier_testing_and_capacity" external>Its testing page</TrustLink> explains that the post-2019 procedure includes off-cycle energy and tests portable units at 65°F.</p>
<p>IEF answers an efficiency question: how much water was removed per unit of energy in the test. It does not state your room&apos;s humidity, hours, target setting, filter condition or local price. Those inputs control cost.</p>
</TrustSection>
<TrustSection title="Use watts for a running-cost estimate">
<p>For a rated-input estimate, use:</p>
<p><strong>Monthly kWh = watts ÷ 1,000 × active hours per day × active days per month × duty cycle ÷ 100.</strong></p>
<p>The worked scenario is 500 ÷ 1,000 × 8 × 30 × 100 ÷ 100 = 120 kWh. At $0.1834/kWh, 120 × 0.1834 = $22.008, displayed as $22.01.</p>
<p>If a monitor records 3.2 kWh over 24 hours, divide by one day and use 3.2 kWh/day. An annualized 30-day comparison would be 96 kWh. The measured result already includes cycling, so enter a full 24-hour period at 100% duty when converting it to an average watt value. Do not apply a second duty reduction.</p>
</TrustSection>
<TrustSection title="Compare duty scenarios">
<p>These scenarios hold 500 W, eight scheduled hours and 30 days constant. The duty percentages are inputs for sensitivity analysis, not claims about how a particular model cycles.</p>
<div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Worked example comparison" tabIndex={0}><table className="w-full min-w-80 text-left text-sm"><thead><tr><th scope="col" className="p-3">Duty input</th><th scope="col" className="p-3">Monthly kWh</th><th scope="col" className="p-3">Cost at $0.1834/kWh</th></tr></thead><tbody><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">25%</th><td className="p-3">30</td><td className="p-3">$5.50</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">50%</th><td className="p-3">60</td><td className="p-3">$11.00</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">75%</th><td className="p-3">90</td><td className="p-3">$16.51</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">100%</th><td className="p-3">120</td><td className="p-3">$22.01</td></tr></tbody></table></div>
<p>The same table can represent scheduled operation, but it cannot estimate moisture removal. A unit that runs at a lower duty may remove less water, and a unit&apos;s fan can continue while its compressor is off.</p>
</TrustSection>
<TrustSection title="Check the room conditions">
<p>ENERGY STAR says frost can form below 65°F and cause a compressor to cycle without removing moisture. A filter or airflow restriction can also change operation. Treat these as reasons to inspect the manual and record observations, not as a fixed percentage to add to a bill.</p>
<p>If you need to know what happened in your room, use a suitable plug-in monitor and record the start and end kWh. Do not open the appliance or alter wiring. A whole-home installation needs a qualified professional.</p>
</TrustSection>
<TrustSection title="Keep price and energy separate">
<p>At a chosen $0.25/kWh rate, the 120 kWh scenario costs $30.00. The energy amount is unchanged. At the EIA benchmark, a 200 kWh scenario costs $36.68. That higher cost could result from a longer schedule, a higher average input or a different duty pattern. The formula shows which input changed.</p>
<p>The estimate excludes fixed charges, taxes, time-of-use prices and the value of the water removed. It also does not turn IEF into an annual cost. Use the product&apos;s own rating for comparisons and your meter for your home&apos;s consumption.</p>
<p>Use the <TrustLink href="/calculators/appliance-running-cost">appliance running-cost calculator</TrustLink>, <TrustLink href="/guides/appliance-energy-use">appliance measurement guide</TrustLink>, <TrustLink href="/guides/electricity-costs">electricity-rate guide</TrustLink> and <TrustLink href="/guides/energyguide-labels">EnergyGuide guide</TrustLink>. Each result is a planning estimate for the inputs you can support.</p>
</TrustSection>
<TrustSection title="Make the comparison repeatable">
<p>Write down the room temperature, humidity target, filter condition, start and end meter readings, and the exact dates. Those notes explain why two observations can differ without changing the arithmetic. A short observation can be useful for a check, while a longer observation captures more compressor cycling.</p>
<p>Compare like with like. Use the same scheduled hours, rate and number of days when comparing two scenarios. If one unit removes more water, its IEF and its operating schedule both matter; a lower electricity cost alone does not establish better moisture control. Keep the model number with the result so a future replacement is not mistaken for the tested unit.</p>
</TrustSection>
</TrustPageShell></>;
}
