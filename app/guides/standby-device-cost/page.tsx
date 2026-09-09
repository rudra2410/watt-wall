import { TrustLink, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

const title = "What always-on standby devices cost per year";
const description = "A chosen 10 W continuous standby load uses 87.6 kWh in a 365-day year and costs $16.07 at the June 2026 US average rate of $0.1834/kWh, per EIA. The only reliable way to know your home's standby load is to measure or document each device's draw.";
const path = "/guides/standby-device-cost";
export const metadata = createPageMetadata({ title, description, path });

export default function GuidePage() {
 return <><ArticleJsonLd title={title} description={description} path={path} dateModified="2026-09-09" /><TrustPageShell category="Planning guide" title={title} description={description} path={path}>
<p>The 10 W is a worksheet scenario. It is not an average household figure. A device&apos;s standby power depends on model, settings, network features and whether a charger has finished charging.</p>
<TrustSection title="The always-on formula">
<p><strong>Annual kWh = watts ÷ 1,000 × hours per day × days per year.</strong></p>
<p><strong>Annual cost = annual kWh × electricity rate.</strong></p>
<p>For continuous operation, 10 ÷ 1,000 × 24 × 365 = 87.6 kWh. At $0.1834/kWh, 87.6 × 0.1834 = $16.06584, displayed as $16.07 when rounded to cents.</p>
<p>One watt continuously is 8.76 kWh per chosen 365-day year. At the benchmark, that is $1.6066, or about $1.61. This relationship is arithmetic, not a claim about what every device draws.</p>
</TrustSection>
<TrustSection title="Build a device list">
<p>Write the device, its mode, its watt reading, the hours it remains in that mode and the date measured. A router that must stay connected is different from a game console in an optional instant-on mode. Do not call every plugged-in device a wasteful vampire load.</p>
<p>The <TrustLink href="https://bpi.org/__cms/docs/Estimating-Appliance-and-Home-Electronic-Energy-Use-_-Department-of-Energy.pdf" external>DOE appliance-estimation guidance hosted by BPI</TrustLink> explains using nameplate information and energy monitoring for estimates. A nameplate maximum is not proof of standby draw. A meter reading is stronger for the specific device and mode you tested.</p>
</TrustSection>
<TrustSection title="Compare chosen loads">
<p>These are scenarios at continuous operation. They are not measurements of particular products.</p>
<div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Worked example comparison" tabIndex={0}><table className="w-full min-w-80 text-left text-sm"><thead><tr><th scope="col" className="p-3">Continuous load</th><th scope="col" className="p-3">Annual kWh</th><th scope="col" className="p-3">Cost at $0.1834/kWh</th></tr></thead><tbody><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">1 W</th><td className="p-3">8.76</td><td className="p-3">$1.61</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">5 W</th><td className="p-3">43.8</td><td className="p-3">$8.03</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">10 W</th><td className="p-3">87.6</td><td className="p-3">$16.07</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">20 W</th><td className="p-3">175.2</td><td className="p-3">$32.14</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">50 W</th><td className="p-3">438</td><td className="p-3">$80.33</td></tr></tbody></table></div>
<p>If a device is in standby for 20 hours per day rather than 24, multiply the wattage by 20 × 365. The chosen 10 W load then uses 73 kWh and costs $13.39 at the same rate. State the hours rather than silently treating “off” as continuous.</p>
</TrustSection>
<TrustSection title="Measure without guessing">
<p>Use a monitor that is suitable for the device and follow its instructions. Let the device settle in the mode you want to study, then record kWh at the start and end of a known interval. If the display only shows watts, record whether the value moves while the device sleeps, wakes for network traffic or charges a battery.</p>
<p>Do not open a power supply or modify a plug to insert a meter. A hardwired circuit needs a licensed electrician. A one-minute reading may miss a device&apos;s periodic activity; a longer observation provides a better picture of that chosen mode.</p>
</TrustSection>
<TrustSection title="Group loads carefully">
<p>Suppose a chosen group contains 10 W continuous network equipment and 5 W of entertainment standby. The combined 15 W load uses 131.4 kWh per year and costs $24.10 at $0.1834/kWh. If the entertainment equipment is active for two hours each day, it does not belong in the continuous calculation for those remaining hours. Separate schedules prevent double counting.</p>
<p>The estimate excludes fixed fees, taxes, rate changes, battery degradation and the value of convenience. It does not promise that unplugging a device will save a particular amount. Some devices need power for safety, connectivity or settings; follow the manual before changing a mode.</p>
<p>Use the <TrustLink href="/calculators/appliance-running-cost">appliance running-cost calculator</TrustLink> for measured watts and schedules. Read <TrustLink href="/guides/electricity-costs">the electricity-rate guide</TrustLink>, <TrustLink href="/guides/appliance-energy-use">the appliance measurement guide</TrustLink> and <TrustLink href="/guides/energyguide-labels">the EnergyGuide guide</TrustLink> for related context. These calculations are planning estimates tied to the inputs you document.</p>
</TrustSection>
<TrustSection title="Decide what to measure first">
<p>Measure the devices that stay connected for the longest time or that show a changing standby display. A one-time watt reading can miss network activity, charging, updates or a periodic wake cycle. Record the mode and observation length so another person can reproduce the comparison.</p>
<p>Use the same rate and year length when comparing devices. If the monitor reports kWh, use that energy directly and avoid multiplying it by a second guessed wattage. If it reports average watts, state the hours and days that produced the average. Leave safety-critical, security, medical and connectivity equipment in its required mode unless the manufacturer gives a different instruction.</p>
</TrustSection>
</TrustPageShell></>;
}
