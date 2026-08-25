import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Understanding Electricity Costs",
  description: "Learn how watts, kilowatt-hours, usage time, and local electricity prices combine to estimate a home's energy cost.",
  path: "/guides/electricity-costs",
});

export default function ElectricityCostsGuide() {
  return (
    <TrustPageShell category="Planning guide" path="/guides/electricity-costs" title="Understanding electricity costs" description="A practical guide to turning appliance power, usage time, and your local rate into a clear planning estimate.">
      <TrustNote><strong>Use your local rate whenever possible.</strong> Electricity prices vary by location and may include delivery charges, taxes, and fees. A calculator estimate is useful for planning, not a replacement for your utility bill.</TrustNote>

      <TrustSection title="Watts, kilowatts, and kilowatt-hours">
        <p>Watts (W) describe the rate at which a device uses power. One kilowatt (kW) equals 1,000 watts. A kilowatt-hour (kWh) measures energy used over time: running a 1 kW device for one hour uses 1 kWh.</p>
        <p>The <TrustLink external href="https://www.eia.gov/energyexplained/electricity/measuring-electricity.php">U.S. Energy Information Administration explains</TrustLink> that a 40-watt bulb used for five hours consumes 0.2 kWh. The same unit is used on most residential electricity bills.</p>
      </TrustSection>

      <TrustSection title="The basic cost formula">
        <p>For a simple planning estimate, convert watts to kilowatts, multiply by hours of use, multiply by the number of active days, and then multiply by the price per kWh.</p>
        <TrustList>
          <li>Power in kW = watts ÷ 1,000.</li>
          <li>Energy in kWh = power in kW × hours used.</li>
          <li>Estimated cost = energy in kWh × your local price per kWh.</li>
        </TrustList>
        <p>For irregular schedules, estimate a representative day and enter the number of days that the device actually runs. This keeps the result tied to your routine instead of an unrealistic full-time assumption.</p>
      </TrustSection>

      <TrustSection title="Why your bill may differ">
        <p>The rate printed on a bill may not be the same as a headline average. The EIA notes that delivered electricity prices can include generation, transmission, distribution, taxes, and fees, while a utility tariff may apply charges differently.</p>
        <p>Standby power, thermostatic cycling, changing schedules, seasonal rates, demand charges, and other household loads can also change the final bill. For a closer estimate, use a measured average or the appliance’s energy label and enter the all-in rate from your bill.</p>
      </TrustSection>

      <TrustSection title="Continue with a calculator">
        <p>Use the <TrustLink href="/calculators/electricity-cost">Electricity Cost Calculator</TrustLink> for a recurring usage estimate, or review the <TrustLink href="/calculators/appliance-running-cost">Appliance Running Cost Calculator</TrustLink> for a single appliance schedule. Keep the input values and assumptions with the result so you can revisit them when your rate or routine changes.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
