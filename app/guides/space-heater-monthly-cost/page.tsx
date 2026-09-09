import { TrustLink, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

const title = "How much does a space heater cost per month?";
const description = "A chosen 1,500 W heater used 6 hours a day for 30 days uses 270 kWh and costs $49.52 at the US average residential rate of $0.1834/kWh for June 2026, per EIA. Your bill depends on the heater label, schedule and tariff.";
const path = "/guides/space-heater-monthly-cost";
export const metadata = createPageMetadata({ title, description, path });

export default function GuidePage() {
 return <><ArticleJsonLd title={title} description={description} path={path} dateModified="2026-09-09" /><TrustPageShell category="Planning guide" title={title} description={description} path={path}>
<p>The wattage and schedule above are a worked scenario. The <TrustLink href="https://wmu.willmar.mn.us/energy-programs/energy-calculator/" external>Willmar Municipal Utilities appliance guide</TrustLink> lists 1,500 W for a heater as an estimated average reference value. It is not a guarantee for your model or its thermostat behavior.</p>
<TrustSection title="The calculation">
<p>Convert watts to kilowatts, then multiply by hours and days:</p>
<p><strong>Monthly kWh = watts ÷ 1,000 × hours per active day × active days per month × duty cycle ÷ 100.</strong></p>
<p><strong>Monthly cost = monthly kWh × rate in dollars per kWh.</strong></p>
<p>At 100% duty, the scenario is 1,500 ÷ 1,000 × 6 × 30 = 270 kWh. At $0.1834/kWh, 270 × 0.1834 = $49.518, displayed as $49.52. The arithmetic assumes the heater draws its stated power whenever it is on.</p>
</TrustSection>
<TrustSection title="Why six hours is not a measured average">
<p>A thermostat can switch an element off after the room warms. The clock time can still be six hours while the element is energized for less time. A 50% duty scenario uses 135 kWh and costs $24.76 at the same rate. That percentage is a calculation input, not a universal heater statistic.</p>
<p>Use the wattage printed on your unit when it is available. A low setting can have a different rating. If your unit has multiple heat settings, calculate each schedule separately or enter the setting you actually use. Do not infer the wattage from the room temperature.</p>
</TrustSection>
<TrustSection title="Compare schedules">
<p>These are chosen scenarios using the same 1,500 W reference and 100% duty. They show sensitivity to daily use, not a household average.</p>
<div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Worked example comparison" tabIndex={0}><table className="w-full min-w-80 text-left text-sm"><thead><tr><th scope="col" className="p-3">Hours each day</th><th scope="col" className="p-3">Monthly kWh</th><th scope="col" className="p-3">Cost at $0.1834/kWh</th></tr></thead><tbody><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">2</th><td className="p-3">90</td><td className="p-3">$16.51</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">4</th><td className="p-3">180</td><td className="p-3">$33.01</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">6</th><td className="p-3">270</td><td className="p-3">$49.52</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">8</th><td className="p-3">360</td><td className="p-3">$66.02</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">12</th><td className="p-3">540</td><td className="p-3">$99.04</td></tr></tbody></table></div>
<p>If your local price is $0.25/kWh, replace the EIA benchmark in the formula. The 270 kWh scenario would then be $67.50. A rate change affects the cost while the energy use stays 270 kWh.</p>
</TrustSection>
<TrustSection title="Include the right days">
<p>If you use a heater on 18 days rather than every day, use 18 active days. The 1,500 W, 6-hour, 18-day scenario is 162 kWh and $29.71 at the benchmark rate. Do not multiply a winter estimate by twelve unless you mean to model twelve months with the same schedule.</p>
<p>The calculator uses days per month because it is a planning tool. A real bill may cover a different number of days. Record the billing period from your statement when comparing a result to a bill.</p>
</TrustSection>
<TrustSection title="Safety is separate from cost">
<p>The <TrustLink href="https://www.cpsc.gov/node/66106" external>US Consumer Product Safety Commission</TrustLink> says to keep portable heaters at least three feet from combustible materials. Its current safety guidance also says to plug electric heaters directly into a wall outlet. I am not giving wiring or installation instructions. Ask a licensed electrician about an outlet or circuit that needs assessment.</p>
<p>Turn the heater off when you leave or sleep when the manufacturer&apos;s instructions call for it. A lower cost estimate never makes an unsafe setup safe.</p>
</TrustSection>
<TrustSection title="What the estimate leaves out">
<p>The calculation excludes fixed account charges, taxes, demand charges, time-of-use changes and heat loss from the room. It also excludes the cost of gas or a central heating system that the heater may replace. It does not promise savings.</p>
<p>Use the <TrustLink href="/calculators/appliance-running-cost">appliance running-cost calculator</TrustLink> to enter your wattage, hours, days, duty cycle and bill rate. Read <TrustLink href="/guides/electricity-costs">the electricity-rate guide</TrustLink> before choosing a rate, and compare assumptions with <TrustLink href="/guides/appliance-energy-use">the appliance measurement guide</TrustLink> and <TrustLink href="/guides/energyguide-labels">the EnergyGuide guide</TrustLink>. The output is a planning estimate for your stated inputs.</p>
</TrustSection>
<TrustSection title="Compare the estimate with one bill">
<p>Choose a bill that covers the same number of days as your schedule. Record the rate shown on the statement, then calculate the heater separately from fixed charges and other household loads. If the bill uses tiers or time-of-use periods, a single average rate is only a comparison input.</p>
<p>Keep the heater model, selected heat setting and thermostat notes with the calculation. Two heaters can show the same wattage while spending different amounts of time energized in the same room. The duty-cycle field lets you test that uncertainty without presenting a guessed cycle as a measured fact. A plug-in monitor can provide a better observation when it is rated for the load.</p>
</TrustSection>
</TrustPageShell></>;
}
