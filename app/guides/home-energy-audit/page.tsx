import { ArticleJsonLd } from "@/components/seo/structured-data";
import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

const path = "/guides/home-energy-audit";
const title = "Home energy audit checklist";
const description = "Use a room-by-room home energy audit checklist to organize utility bills, comfort notes, appliance loads, air leaks, and questions for an assessor.";

export const metadata = createPageMetadata({ title: "Home Energy Audit Checklist", description, path });

export default function HomeEnergyAuditGuide() {
  return (
    <><ArticleJsonLd title="Home Energy Audit Checklist" description={description} path={path} datePublished="2026-08-25" dateModified="2026-09-15" /><TrustPageShell category="Energy guide" path={path} title={title} description="A useful DIY audit creates a record of bills, equipment, comfort problems, and visible leak points. It helps you choose questions and next steps; it does not replace professional testing.">
      <TrustNote><strong>Begin with evidence you already have.</strong> Gather twelve months of bills when available, record the billing days and fuels, then connect unusual use with weather, occupancy, equipment, and comfort notes.</TrustNote>

      <TrustSection title="Define the audit question">
        <p>A walkthrough is more useful when it answers a specific question. You might be investigating a winter electricity increase, one uncomfortable room, long air-conditioner run time, or an appliance that appears expensive to operate. Write the question at the top of the worksheet before inspecting the house.</p>
        <p>The US Department of Energy describes a home energy assessment as a way to learn how a home uses energy and identify measures that may improve efficiency. DOE distinguishes a simple DIY inspection from a professional assessment that can include diagnostic equipment and safety testing.</p>
      </TrustSection>

      <TrustSection title="Build a twelve-month energy record">
        <p>For each statement, record the start and end dates, number of billing days, electricity kWh, other fuel use, total cost, and the rate or tariff name. Compare energy units before cost. A higher bill can come from more use, a different rate, fixed charges, or a longer billing period.</p>
        <p>Normalize electricity use with this formula:</p>
        <p><strong>Average daily electricity use = billing-period kWh ÷ billing days.</strong></p>
        <p>If one bill shows 900 kWh over 30 days, the daily average is 30 kWh. If another shows 930 kWh over 31 days, its daily average is also 30 kWh. The second total is larger because the period is longer. This chosen example shows why billing days belong in the comparison.</p>
        <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Utility bill review worksheet" tabIndex={0}>
          <table className="w-full min-w-[42rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Period</th><th className="p-3" scope="col">Days</th><th className="p-3" scope="col">kWh or fuel</th><th className="p-3" scope="col">Per-day use</th><th className="p-3" scope="col">Weather or household note</th></tr></thead><tbody>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Current</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Previous</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Same season last year</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td></tr>
          </tbody></table>
        </div>
      </TrustSection>

      <TrustSection title="Walk through the building envelope">
        <p>DOE&apos;s consumer guide identifies common leak locations where different materials meet and around windows, doors, attic hatches, baseboards, wall-mounted air conditioners, service entrances, vents, and fans. Record the location and visible condition. Avoid turning a visual note into a diagnosis.</p>
        <TrustList>
          <li>Check accessible weatherstripping and caulk for gaps, damage, or separation.</li>
          <li>Note drafts, uneven temperatures, moisture marks, and rooms that are difficult to heat or cool.</li>
          <li>Record insulation only where it is safely visible. Do not disturb unknown material.</li>
          <li>Mark doors, windows, attic access, recessed fixtures, plumbing penetrations, ducts, and exhaust openings on a simple floor plan.</li>
        </TrustList>
        <p>Do not use smoke, a flame, or a depressurization procedure around combustion equipment without understanding the safety implications. A professional assessor can use a blower door, infrared imaging, and combustion-safety checks as appropriate.</p>
      </TrustSection>

      <TrustSection title="Inventory equipment and appliance loads">
        <p>List heating and cooling equipment, water heating, refrigeration, laundry, cooking, pumps, dehumidifiers, portable heaters, and devices that remain on. Record the model, fuel, age when known, label wattage or annual kWh, settings, and an observed schedule. Do not guess a precise duty cycle and present it as measured.</p>
        <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Home equipment audit worksheet" tabIndex={0}>
          <table className="w-full min-w-[44rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Equipment</th><th className="p-3" scope="col">Label value</th><th className="p-3" scope="col">Observed schedule</th><th className="p-3" scope="col">Condition or comfort note</th><th className="p-3" scope="col">Next check</th></tr></thead><tbody>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Heating or cooling</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">Filter, service record, assessor</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Water heating</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">Label and manufacturer guide</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Large appliance</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">EnergyGuide or measured use</td></tr>
            <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Always-on load</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">Rated monitor if suitable</td></tr>
          </tbody></table>
        </div>
      </TrustSection>

      <TrustSection title="Rank observations without promising savings">
        <p>Group each observation by safety, comfort, evidence, estimated energy impact, cost to investigate, and who should review it. A draft at one window may be easy to inspect, while combustion backdrafting, damaged wiring, persistent moisture, or inaccessible insulation needs qualified help.</p>
        <p>Use calculators to test a stated scenario, then compare the result with the scale of the bill. The <TrustLink href="/calculators/electricity-cost">Electricity Cost Calculator</TrustLink> accepts a known kWh total or a single device schedule. The <TrustLink href="/calculators/appliance-running-cost">Appliance Running Cost Calculator</TrustLink> combines several loads and lets you vary duty cycle. Neither calculator measures the home.</p>
      </TrustSection>

      <TrustSection title="When a professional assessment adds value">
        <p>Arrange qualified help when the question involves the whole building, combustion appliances, electrical safety, hidden moisture, major insulation work, or expensive equipment replacement. DOE explains that a professional assessment may include a blower-door test and infrared camera work. Ask what testing is included, how safety is handled, and what the final report will contain.</p>
        <p>Keep your bills, floor plan, equipment list, comfort notes, and past work records ready. They help the assessor focus on the question that prompted the audit.</p>
        <p>After the visit, connect each recommendation to the observation or test that supports it. Record the proposed scope, expected result, dependencies, and a way to verify the change. Keep safety corrections separate from optional efficiency projects so urgency and payback are not confused.</p>
      </TrustSection>

      <TrustSection title="Sources and limits">
        <TrustList>
          <li><TrustLink external href="https://www.energy.gov/sites/default/files/2021-08/ES-Home%20Energy%20Assessments_080221.pdf">DOE Consumer Guide to Home Energy Assessments</TrustLink>, for DIY inspection scope, common air-leak locations, and professional diagnostic methods.</li>
          <li><TrustLink external href="https://www.energy.gov/cmei/femp/home-energy-checklist">DOE Home Energy Checklist</TrustLink>, for organizing bill review, equipment maintenance, filters, lighting, and professional audit questions.</li>
        </TrustList>
        <p>This checklist does not estimate savings or diagnose a building. Follow equipment instructions and use a qualified assessor, contractor, or licensed electrician for work outside a safe visual walkthrough. Content and sources last reviewed September 15, 2026.</p>
      </TrustSection>
    </TrustPageShell></>
  );
}
