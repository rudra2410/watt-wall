import { ArticleJsonLd } from "@/components/seo/structured-data";
import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

const path = "/guides/choosing-rug-size";
const title = "How to choose the right rug size";
const description = "Choose a rug size for a living room, dining table, or bed with furniture-based formulas, clearance comparisons, and a measurement worksheet.";

export const metadata = createPageMetadata({ title: "How to Choose the Right Rug Size", description, path });

export default function RugSizeGuide() {
  return <><ArticleJsonLd title="How to Choose the Right Rug Size" description={description} path={path} datePublished="2026-08-26" dateModified="2026-09-15" /><TrustPageShell category="Decoration planning guide" path={path} title={title} description="For a 180-by-90-centimeter dining table with 60 centimeters of chair clearance on every side, the furniture-based minimum rug is 300 by 210 centimeters. Test that footprint in the room before buying.">
    <TrustNote><strong>Size the rug around the furniture arrangement.</strong> The room sets the outer limit, while sofa legs, pulled-out dining chairs, bed placement, doors, and traffic paths define the useful footprint.</TrustNote>

    <TrustSection title="Start with the arrangement, not a standard rug name">
      <p>Decide which furniture should sit on the rug. In a living room, the rug might hold the complete seating group, the front legs of the sofa and chairs, or only the coffee-table zone. Under a dining table, the useful test is whether chairs remain supported when pulled out. In a bedroom, decide whether the rug runs under the whole bed, begins partway under it, or appears as separate bedside pieces.</p>
      <p>Measure the outside footprint of that furniture group. Then choose an extension on each side. The extension is editable because room size, placement, and the desired look differ.</p>
      <p><strong>Minimum rug width = furniture width + left extension + right extension.</strong></p>
      <p><strong>Minimum rug length = furniture length + top extension + bottom extension.</strong></p>
      <p>These equations produce a furniture-based minimum. A nearby wall, doorway, fireplace, floor vent, or second furniture group can make the result unsuitable even when the arithmetic fits.</p>
    </TrustSection>

    <TrustSection title="Dining room: include pulled-out chairs">
      <p>IKEA&apos;s current Canadian rug guide suggests adding 60–80 centimeters to each side of a dining table so chairs can remain on the rug when pulled out. Its separate dining-room article uses 60–70 centimeters. Those ranges are retailer guidance, not a building standard. Test your own chair depth and how far people pull chairs back.</p>
      <p>For the chosen 180-by-90-centimeter table, adding 60 centimeters on all sides gives 300 by 210 centimeters:</p>
      <p><strong>Length: 180 + 60 + 60 = 300 cm.</strong><br /><strong>Width: 90 + 60 + 60 = 210 cm.</strong></p>
      <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Dining rug clearance comparison" tabIndex={0}>
        <table className="w-full min-w-[38rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Table size</th><th className="p-3" scope="col">Extension per side</th><th className="p-3" scope="col">Calculated minimum rug</th><th className="p-3" scope="col">What to test</th></tr></thead><tbody>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">180 × 90 cm</th><td className="p-3">60 cm</td><td className="p-3">300 × 210 cm</td><td className="p-3">Normal chair pullback</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">180 × 90 cm</th><td className="p-3">70 cm</td><td className="p-3">320 × 230 cm</td><td className="p-3">Larger chairs or more clearance</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">180 × 90 cm</th><td className="p-3">80 cm</td><td className="p-3">340 × 250 cm</td><td className="p-3">Room boundary and traffic path</td></tr>
        </tbody></table>
      </div>
      <p>A low-pile or flatwoven rug can make chair movement and cleaning easier, as IKEA notes. Confirm care instructions, floor compatibility, and an appropriate underlay for the specific product.</p>
    </TrustSection>

    <TrustSection title="Living room: choose the leg relationship">
      <p>Measure the whole seating composition rather than the sofa alone. Include chairs, side tables, and the distance you want around a coffee table. A rug that reaches the sofa but misses an angled chair may make the group feel disconnected and can create an awkward edge in a walking route.</p>
      <TrustList>
        <li><strong>All furniture on:</strong> measure the outside edges of the complete seating group and add the chosen border.</li>
        <li><strong>Front legs on:</strong> mark where each front leg lands and make sure the rug extends beyond the outer seating pieces.</li>
        <li><strong>Coffee-table zone:</strong> keep a deliberate gap between the rug and seating, then test whether feet reach the rug when people sit.</li>
      </TrustList>
      <p>IKEA illustrates both a large rug reaching the sofa and armchairs and a medium rug under front legs. These are layout options. The best choice depends on the measured group and room.</p>
    </TrustSection>

    <TrustSection title="Bedroom: decide how much should show">
      <p>For an under-bed arrangement, measure the bed frame rather than only the mattress. Include projecting headboards, benches, nightstands, and under-bed drawers where they affect placement. IKEA suggests about 50 centimeters of rug visible at the sides for a larger under-bed rug, giving a soft surface beside the bed.</p>
      <p>If the bed frame is 160 centimeters wide and you want 50 centimeters visible on both sides, the furniture-based width is 160 + 50 + 50 = 260 centimeters. The length still depends on whether the rug begins under the headboard, partway down the bed, or only extends beyond the foot. State that placement before calculating.</p>
      <p>Separate bedside rugs avoid the need for one large under-bed size. Check that each piece lies outside drawer travel and the normal route around the bed.</p>
    </TrustSection>

    <TrustSection title="Check the room fit in both orientations">
      <p>Compare the calculated rug width and length with the clear room dimensions. Then rotate the rug 90 degrees and compare again. Rotation can change whether the rug clears a doorway or aligns with the furniture group.</p>
      <p><strong>Width clearance = room width − placed rug width.</strong></p>
      <p><strong>Length clearance = room length − placed rug length.</strong></p>
      <p>A nonnegative result means the rectangles fit. It does not confirm a visually balanced border or a safe walking route. If centering the rug, divide each remaining dimension by two to estimate the border on opposite sides.</p>
    </TrustSection>

    <TrustSection title="Tape the footprint before ordering">
      <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Rug measurement worksheet" tabIndex={0}>
        <table className="w-full min-w-[40rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Record</th><th className="p-3" scope="col">Measurement or choice</th><th className="p-3" scope="col">Physical check</th></tr></thead><tbody>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Furniture group</th><td className="p-3">_____ × _____</td><td className="p-3">Include outer legs and pulled-out chairs</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Extension</th><td className="p-3">_____ per side</td><td className="p-3">Mark the intended border</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Calculated rug</th><td className="p-3">_____ × _____</td><td className="p-3">Compare with an available product size</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Clear room</th><td className="p-3">_____ × _____</td><td className="p-3">Open doors, drawers, and recliners</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Final product</th><td className="p-3">_____ × _____</td><td className="p-3">Confirm pile, care, and underlay</td></tr>
        </tbody></table>
      </div>
      <p>Mark the corners and edges with removable painter&apos;s tape. Pull every dining chair out, open nearby doors and drawers, and walk each route. Leave the tape in place long enough to see the layout in normal use.</p>
    </TrustSection>

    <TrustSection title="Sources, calculator, and limits">
      <TrustList>
        <li><TrustLink external href="https://www.ikea.com/ca/en/product-guides/how-to-choose-the-right-rug-size-pub2e7f9fb0/">IKEA Canada: Complete rug size guide</TrustLink>, for dining extensions, bedroom side exposure, placement choices, pile, and care considerations.</li>
        <li><TrustLink external href="https://www.ikea.com/ca/en/rooms/dining/how-to/how-to-choose-a-rug-for-your-dining-table-pub69273980/">IKEA Canada: Choosing a dining-room rug</TrustLink>, for chair pullback, the 60–70-centimeter range, tape testing, and low-pile guidance.</li>
      </TrustList>
      <p>Use the <TrustLink href="/calculators/rug-size">Rug Size Calculator</TrustLink> to compare the furniture-based footprint with the room in normal and rotated orientations. Read the <TrustLink href="/guides/measuring-rooms-and-furniture">room and furniture measurement guide</TrustLink> before entering room dimensions.</p>
      <p>The numeric examples are planning scenarios, not universal room rules. Product dimensions, floor condition, doors, accessibility needs, and manufacturer instructions control the final choice. Content and sources last reviewed September 15, 2026.</p>
    </TrustSection>
  </TrustPageShell></>;
}
