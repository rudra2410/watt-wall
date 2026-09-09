import { TrustLink, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

const title = "How much electricity does an electric water heater use?";
const description = "A chosen 4,500 W electric element running for 2 hours a day over 30 days uses 270 kWh and costs $49.52 at the June 2026 US residential average of $0.1834/kWh, per EIA. That is an element-runtime scenario, not a prediction of a household bill.";
const path = "/guides/electric-water-heater-use";
export const metadata = createPageMetadata({ title, description, path });

export default function GuidePage() {
 return <><ArticleJsonLd title={title} description={description} path={path} dateModified="2026-09-09" /><TrustPageShell category="Planning guide" title={title} description={description} path={path}>
<p>Check your heater&apos;s nameplate and manual for the actual element rating. The Willmar Municipal Utilities reference table lists 4,500 W for an 80-gallon water heater as an estimated average reference. Product models and controls differ.</p>
<TrustSection title="The element formula">
<p><strong>Monthly kWh = watts ÷ 1,000 × heating hours per day × heating days per month.</strong></p>
<p><strong>Monthly cost = monthly kWh × electricity rate.</strong></p>
<p>For the scenario, 4,500 ÷ 1,000 × 2 × 30 = 270 kWh. At $0.1834/kWh, 270 × 0.1834 = $49.518, displayed as $49.52.</p>
<p>An electric storage heater may have power available to maintain temperature even when no tap is open. The two hours are a chosen equivalent element-runtime input. They are not a claim that every tank&apos;s element runs for exactly two hours.</p>
</TrustSection>
<TrustSection title="Demand and standby are different inputs">
<p>Water used by the household causes the heater to add heat. Heat lost through the tank and pipes causes additional reheating. Your meter records both. A wattage-and-hours estimate can model them together only when the hours represent the total energized time.</p>
<p>Do not estimate energy from tank volume alone. A larger tank can hold more hot water, but the electricity depends on inlet temperature, set point, insulation, draw volume, recovery and controls. The <TrustLink href="https://consumer.ftc.gov/articles/how-use-energyguide-label-shop-home-appliances" external>FTC EnergyGuide guidance</TrustLink> explains that label operating costs use typical use and a national average energy price; actual cost depends on local price and use.</p>
</TrustSection>
<TrustSection title="Compare element-runtime scenarios">
<p>These are chosen scenarios at 4,500 W and 30 days using the EIA benchmark. They help show sensitivity to total element runtime.</p>
<div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Worked example comparison" tabIndex={0}><table className="w-full min-w-80 text-left text-sm"><thead><tr><th scope="col" className="p-3">Equivalent element hours/day</th><th scope="col" className="p-3">Monthly kWh</th><th scope="col" className="p-3">Cost at $0.1834/kWh</th></tr></thead><tbody><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">0.5</th><td className="p-3">67.5</td><td className="p-3">$12.38</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">1</th><td className="p-3">135</td><td className="p-3">$24.76</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">2</th><td className="p-3">270</td><td className="p-3">$49.52</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">3</th><td className="p-3">405</td><td className="p-3">$74.28</td></tr></tbody></table></div>
<p>If your meter shows 18 kWh over seven days, do not also multiply the element rating by a guessed schedule. Use the measured 18 kWh as the primary energy observation, divide by seven for a daily average and record the date range.</p>
</TrustSection>
<TrustSection title="A measured example">
<p>Suppose a plug-in or whole-home meter reading, chosen only as an example, is 18 kWh over seven days. The daily average is 18 ÷ 7 = 2.5714 kWh. Extending that average across 30 chosen days gives 77.1429 kWh. At $0.1834/kWh, the comparison cost is about $14.15. This does not say the next 30 days will have the same hot-water demand.</p>
<p>Keep showers, laundry and guests in your notes. A short period with unusual water use is not a stable annual estimate. If you suspect a fault, ask a qualified plumber or electrician to assess it. Do not remove covers or change wiring based on a calculator result.</p>
</TrustSection>
<TrustSection title="Rate changes the answer">
<p>The 270 kWh scenario costs $67.50 at a chosen $0.25/kWh rate. The heater&apos;s energy use remains 270 kWh. A tiered or time-based tariff can make a single average rate unsuitable. Read <TrustLink href="/guides/electricity-costs">the electricity-cost guide</TrustLink> and use the rate from your statement when possible.</p>
<p>The estimate excludes fixed account fees, demand charges, gas usage, water charges and the cost of replacing equipment. It does not recommend a temperature or promise savings. Use manufacturer instructions for safe settings.</p>
<p>Use the <TrustLink href="/calculators/appliance-running-cost">appliance running-cost calculator</TrustLink> for supported wattage schedules, then compare with <TrustLink href="/guides/appliance-energy-use">the appliance measurement guide</TrustLink> and <TrustLink href="/guides/energyguide-labels">the EnergyGuide label guide</TrustLink>. These are planning tools, not professional advice.</p>
</TrustSection>
<TrustSection title="Turn a bill check into a worksheet">
<p>Start with the billing period and record the meter dates. Then list showers, baths, laundry, dishwashing, guests and any vacant days beside the observation. This separates a change in hot-water demand from a change in the heater or tariff. Use the same number of days when comparing a meter result with the calculator.</p>
<p>If the tank shares a circuit with another load, isolate the heater only when your monitoring method can do so safely. Otherwise label the reading as a combined load. Do not remove a panel or alter a circuit to obtain a reading. A licensed electrician or plumber can investigate wiring, controls, temperature problems or leaks.</p>
</TrustSection>
</TrustPageShell></>;
}
