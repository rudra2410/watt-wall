import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How to Estimate Appliance Energy Use",
  description: "A clear guide to reading appliance power information, estimating usage schedules, and checking the limits of running-cost estimates.",
  path: "/guides/appliance-energy-use",
});

export default function ApplianceEnergyGuide() {
  return (
    <><ArticleJsonLd title="How to Estimate Appliance Energy Use" description="A clear guide to reading appliance power information, estimating usage schedules, and checking the limits of running-cost estimates." path="/guides/appliance-energy-use" /><TrustPageShell category="Planning guide" path="/guides/appliance-energy-use" title="How to estimate appliance energy use" description="Learn which appliance values matter, how to build a realistic usage schedule, and why measured power can be better than a label rating.">
      <TrustNote><strong>Start with the product label or manual.</strong> A nameplate rating is a useful starting point, but actual draw can change with settings, cycling, temperature, load, and the age or condition of the appliance.</TrustNote>

      <TrustSection title="Find the right power value">
        <p>Look for watts, kilowatts, voltage and amperage, or a yearly energy figure on the product label, manual, or manufacturer documentation. Do not confuse voltage with power: voltage is electrical pressure, while watts describe power use.</p>
        <p>The <TrustLink external href="https://www.energy.gov/energysaver/estimating-appliance-and-home-electronic-energy-use">U.S. Department of Energy’s Energy Saver guidance</TrustLink> recommends using the appliance rating and the hours of use to estimate energy consumption, while recognizing that real-world use varies.</p>
      </TrustSection>

      <TrustSection title="Build a realistic schedule">
        <p>Record how many hours the appliance is active on a typical day and how many days it runs in a month. For a refrigerator, heat pump, or other cycling appliance, the nameplate maximum may overstate the average because the compressor or heating element switches on and off.</p>
        <TrustList>
          <li>Use a representative schedule rather than the longest possible day.</li>
          <li>Separate active hours from standby or idle time when the values are known.</li>
          <li>Recheck seasonal appliances in both high-use and low-use months.</li>
          <li>Use a plug-in energy monitor only when it is rated for the appliance and used safely.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="Understand the estimate">
        <p>The calculation is simple: power in kW × hours per day × active days × local price per kWh. It answers “what might this schedule cost?” rather than promising an exact bill or a guaranteed saving.</p>
        <p>ENERGY STAR or a manufacturer’s annual energy figure may use a standardized test cycle. Treat it as a comparison tool, then adjust for your household’s settings, frequency, climate, and tariff.</p>
      </TrustSection>

      <TrustSection title="Try the appliance calculator">
        <p>Enter the appliance’s wattage, your realistic usage schedule, and the all-in price from your bill in the <TrustLink href="/calculators/appliance-running-cost">Appliance Running Cost Calculator</TrustLink>. For a broader household view, use the <TrustLink href="/calculators/electricity-cost">Electricity Cost Calculator</TrustLink> and compare scenarios rather than relying on one default.</p>
      </TrustSection>
    </TrustPageShell></>
  );
}
