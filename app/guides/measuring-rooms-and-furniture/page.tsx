import { ArticleJsonLd } from "@/components/seo/structured-data";
import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

const path = "/guides/measuring-rooms-and-furniture";
const title = "How to measure a room for furniture";
const description = "Measure usable room space, furniture footprints, doors, hallways, stairs, elevators, and turning points before ordering furniture.";

export const metadata = createPageMetadata({ title: "How to Measure a Room for Furniture", description, path });

export default function FurnitureMeasurementGuide() {
  return <><ArticleJsonLd title="How to Measure a Room for Furniture" description={description} path={path} datePublished="2026-08-26" dateModified="2026-09-15" /><TrustPageShell category="Furniture planning guide" path={path} title={title} description="A 144-by-168-inch room can contain an 84-by-38-inch sofa footprint, but that rectangle alone does not prove comfortable clearance or a workable delivery path. Measure the room, the item, and every opening separately.">
    <TrustNote><strong>Use finished clear dimensions.</strong> Baseboards, trim, handles, door stops, radiators, sloped ceilings, and tight turns can reduce the space that an advertised room or doorway measurement appears to provide.</TrustNote>

    <TrustSection title="Draw the room as it exists">
      <p>Make a simple overhead sketch. Label every wall and measure wall to wall near the floor, at furniture height, and again where an uneven room may change width. Record the smallest usable dimension for planning. Keep all numbers in one unit system.</p>
      <TrustList>
        <li>Mark doors and the complete swing arc, including handles and door stops.</li>
        <li>Record window width, sill height, trim projection, and the space needed for curtains or blinds.</li>
        <li>Add fireplaces, hearths, columns, steps, built-ins, radiators, vents, outlets, switches, and floor transitions.</li>
        <li>Measure sloped ceilings at the point where the furniture reaches its maximum height.</li>
        <li>Photograph each wall and give the sketch a date so later changes are clear.</li>
      </TrustList>
      <p>IKEA&apos;s room-measurement guide uses a room drawing with wall lengths, ceiling height, doors, windows, and fixed features. That approach produces more useful inputs than relying on a listing&apos;s rounded room dimensions.</p>
    </TrustSection>

    <TrustSection title="Measure the furniture footprint">
      <p>Use the assembled item&apos;s maximum width, depth, and height from a current product diagram. Include arms, curved backs, projecting feet, handles, loose cushions, and recliner travel where they extend beyond the main frame. Record the dimensions of any removable parts separately.</p>
      <p>For a rectangular preliminary fit check:</p>
      <p><strong>Remaining width = room width − placed furniture width.</strong></p>
      <p><strong>Remaining depth = room depth − placed furniture depth.</strong></p>
      <p>If the item is centered, divide each remaining dimension by two to estimate equal clearance on both sides. For the chosen 144-by-168-inch room and an 84-by-38-inch sofa placed with its 84-inch side across the 144-inch wall, 60 inches remain across that wall and 130 inches remain in the other direction. Centering would divide those amounts into 30 and 65 inches. This only describes rectangles; it does not judge whether the layout is comfortable.</p>
      <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Furniture orientation comparison" tabIndex={0}>
        <table className="w-full min-w-[38rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Orientation</th><th className="p-3" scope="col">Placed footprint</th><th className="p-3" scope="col">Width remaining</th><th className="p-3" scope="col">Depth remaining</th><th className="p-3" scope="col">Preliminary result</th></tr></thead><tbody>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Standard</th><td className="p-3">84 × 38 in</td><td className="p-3">60 in</td><td className="p-3">130 in</td><td className="p-3">Rectangle fits</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Rotated</th><td className="p-3">38 × 84 in</td><td className="p-3">106 in</td><td className="p-3">84 in</td><td className="p-3">Rectangle fits</td></tr>
        </tbody></table>
      </div>
    </TrustSection>

    <TrustSection title="Test the layout at full scale">
      <p>Mark the footprint with removable painter&apos;s tape or flattened cardboard. Then use the room normally. Open doors, drawers, appliances, and recliners. Walk the route between entries and the seating area. Check sightlines, floor vents, outlets, lamps, side tables, and the space needed to clean around the item.</p>
      <p>A taped rectangle can reveal a blocked swing or awkward corner that a numeric fit result misses. If several items share the room, mark them together rather than approving each one in isolation.</p>
    </TrustSection>

    <TrustSection title="Map the delivery path separately">
      <p>Start outside and follow the item to its final position. Measure the clear width and height of building entrances, gates, hallways, doorways, elevators, stair flights, and landings. Remove the effect of trim, handrails, light fixtures, door closers, and open doors from the clear measurement.</p>
      <p>IKEA&apos;s US delivery terms tell customers to consider a safe path through hallways, staircases, and elevators and warn that a delivery company may refuse a room when an item does not fit or cannot be delivered safely. Ask the seller which packaging remains during delivery, which parts can be removed, and who makes the final delivery decision.</p>
      <p>A rectangular opening check compares furniture width and height with opening width and height, including a 90-degree rotated orientation. It cannot model diagonal movement, pivoting on a landing, three-dimensional rotation, flexible upholstery, or the workers&apos; safe handling space.</p>
    </TrustSection>

    <TrustSection title="Use a delivery measurement worksheet">
      <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Furniture delivery path worksheet" tabIndex={0}>
        <table className="w-full min-w-[44rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Checkpoint</th><th className="p-3" scope="col">Clear width</th><th className="p-3" scope="col">Clear height</th><th className="p-3" scope="col">Turn or obstacle</th><th className="p-3" scope="col">Photo or note</th></tr></thead><tbody>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Exterior entrance</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Hall or elevator</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Stairs and landing</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Room doorway</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Final placement</th><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td><td className="p-3">_____</td></tr>
        </tbody></table>
      </div>
      <p>Write measurements beside each checkpoint rather than keeping only the smallest opening. A narrow straight door and a wider door followed by a tight turn create different delivery problems.</p>
    </TrustSection>

    <TrustSection title="Check the order one last time">
      <TrustList>
        <li>Match the product code on the dimension drawing with the exact item in the cart.</li>
        <li>Confirm whether measurements describe assembled furniture, packaging, or both.</li>
        <li>Ask which parts can be removed without affecting the product or warranty.</li>
        <li>Send the delivery team the floor, elevator, stair, parking, and access notes they request.</li>
        <li>Keep a copy of the room sketch and delivery path with the order.</li>
      </TrustList>
      <p>Use the <TrustLink href="/calculators/furniture-fit">Furniture Fit Calculator</TrustLink> to compare standard and rotated rectangular footprints with the room and one opening. Use the <TrustLink href="/calculators/rug-size">Rug Size Calculator</TrustLink> when the same layout needs a rug footprint.</p>
    </TrustSection>

    <TrustSection title="Sources and limits">
      <TrustList>
        <li><TrustLink external href="https://www.ikea.com/in/en/files/pdf/ac/c1/acc1f97f/ikea-measurement-guide.pdf">IKEA: Guidelines to measure your room</TrustLink>, for drawing wall dimensions, ceiling height, doors, windows, and fixed room features.</li>
        <li><TrustLink external href="https://www.ikea.com/us/en/customer-service/terms-conditions/delivery-terms-and-conditions-pub7aa7b291/">IKEA US delivery terms</TrustLink>, for checking the safe path through rooms, hallways, staircases, and elevators.</li>
      </TrustList>
      <p>The formulas and table above are preliminary rectangular checks. The seller or delivery team should confirm difficult routes. Content and sources last reviewed September 14, 2026.</p>
    </TrustSection>
  </TrustPageShell></>;
}
