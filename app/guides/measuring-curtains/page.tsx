import { ArticleJsonLd } from "@/components/seo/structured-data";
import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

const path = "/guides/measuring-curtains";
const title = "How to measure for curtains";
const description = "Measure window width, rod extension, curtain fullness, finished drop, and whole panel count with a worked curtain-sizing worksheet.";

export const metadata = createPageMetadata({ title: "How to Measure for Curtains", description, path });

export default function CurtainMeasurementGuide() {
  return <><ArticleJsonLd title="How to Measure for Curtains" description={description} path={path} datePublished="2026-08-26" dateModified="2026-09-26" /><TrustPageShell category="Window decoration guide" path={path} title={title} description="For a 60-inch window with 6 inches of rod extension on each side, plan a 72-inch rod. At 2× fullness, three 52-inch panels provide at least the required 144 inches of fabric width.">
    <TrustNote><strong>Choose the hardware position before measuring fabric.</strong> Rod width, mounting height, rings, header style, and the desired hem position all affect the size you order.</TrustNote>

    <TrustSection title="Measure the window and available wall">
      <p>Measure the outside width of the window frame at the top. Then record the clear wall space on the left and right. Check nearby corners, cabinets, switches, vents, and other windows before deciding how far the rod can extend.</p>
      <p>IKEA&apos;s US curtain-planning guide says to add at least 6 inches on each side for fabric curtains so they cover the window and can open more fully. Treat that as product guidance for the illustrated IKEA system, not a rule for every room or hardware set. Your rod instructions and available wall space control the final placement.</p>
      <p>Use this formula for an outside-mounted rod:</p>
      <p><strong>Rod width = window-frame width + left extension + right extension.</strong></p>
      <p>For the 60-inch example, 60 + 6 + 6 = 72 inches. An inside-mounted tension rod uses the clear inside width instead, so the side extensions are zero.</p>
    </TrustSection>

    <TrustSection title="Convert rod width into fabric fullness">
      <p>Fullness compares the combined flat width of all curtain panels with the rod width. A 1× arrangement has almost no gathering when closed. IKEA&apos;s measurement guide uses 2× width and suggests 2.5× for a fuller appearance.</p>
      <p><strong>Required combined panel width = rod width × fullness.</strong></p>
      <p><strong>Panel count = required combined width ÷ listed width of one panel, rounded up.</strong></p>
      <p>With a 72-inch rod and 2× fullness, the required width is 144 inches. If one packaged panel is 52 inches wide, 144 ÷ 52 = 2.77, so you need three individual panels. Three panels provide 156 inches, slightly above the target.</p>
      <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Curtain fullness and panel comparison" tabIndex={0}>
        <table className="w-full min-w-[38rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Rod width</th><th className="p-3" scope="col">Fullness</th><th className="p-3" scope="col">Required fabric width</th><th className="p-3" scope="col">52-inch panels</th><th className="p-3" scope="col">Width supplied</th></tr></thead><tbody>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">72 in</th><td className="p-3">1×</td><td className="p-3">72 in</td><td className="p-3">2</td><td className="p-3">104 in</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">72 in</th><td className="p-3">2×</td><td className="p-3">144 in</td><td className="p-3">3</td><td className="p-3">156 in</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">72 in</th><td className="p-3">2.5×</td><td className="p-3">180 in</td><td className="p-3">4</td><td className="p-3">208 in</td></tr>
        </tbody></table>
      </div>
      <p>Package wording matters. Some packages contain one panel and others contain a pair. Use the width of one physical panel in the formula, then confirm the quantity included before ordering.</p>
    </TrustSection>

    <TrustSection title="Measure the finished curtain drop">
      <p>Decide where the top of the fabric will sit. A curtain attached with rings can begin below the rod, while a rod-pocket or tab-top panel has a different relationship to the hardware. Measure from the actual hook, ring, rail, or rod position specified by the product to the desired hem.</p>
      <p>Record three vertical measurements when the floor or ceiling may be uneven: left, center, and right. Decide whether the hem should stop at the sill, below the apron, just above the floor, touch the floor, or extend onto it. Keep radiators, baseboard heaters, air vents, handles, and furniture clear according to product and building requirements.</p>
      <p>Ready-made curtains come in fixed lengths. The listed length may include the heading in a way that depends on the product. Check the product diagram before treating a package length as the installed drop.</p>
    </TrustSection>

    <TrustSection title="Complete this measurement worksheet">
      <div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Curtain measurement worksheet" tabIndex={0}>
        <table className="w-full min-w-[40rem] text-left text-sm"><thead><tr><th className="p-3" scope="col">Input</th><th className="p-3" scope="col">Measurement</th><th className="p-3" scope="col">Check before ordering</th></tr></thead><tbody>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Window outside width</th><td className="p-3">_____</td><td className="p-3">Measure frame edge to frame edge</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Left and right extension</th><td className="p-3">_____ / _____</td><td className="p-3">Confirm clear wall and bracket positions</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Installed rod width</th><td className="p-3">_____</td><td className="p-3">Include only the span used by curtains</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Fullness factor</th><td className="p-3">_____</td><td className="p-3">Match the header and desired appearance</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Panel width and package quantity</th><td className="p-3">_____</td><td className="p-3">Distinguish one panel from one pair</td></tr>
          <tr className="border-t border-border"><th className="p-3 font-medium" scope="row">Finished drop</th><td className="p-3">_____</td><td className="p-3">Measure from the actual attachment point</td></tr>
        </tbody></table>
      </div>
    </TrustSection>

    <TrustSection title="Account for hardware and fabric details">
      <TrustList>
        <li>Use the rod or rail manufacturer&apos;s bracket spacing and load instructions, especially for long spans or heavy fabric.</li>
        <li>Confirm whether finials change the total hardware width without changing the usable curtain span.</li>
        <li>Allow for pattern matching, hems, heading tape, returns at the wall, and any stated shrinkage when sewing or altering panels.</li>
        <li>Check how a pair meets at the center and whether an odd panel count suits the opening.</li>
        <li>Measure each window. Two openings that look identical can have different trim or wall clearances.</li>
      </TrustList>
      <p>The <TrustLink href="/calculators/curtain-measurement">Curtain Measurement Calculator</TrustLink> models an outside-mounted rod and applies rod extension, fullness, panel width, and whole-panel rounding. It does not calculate an inside-mounted tension rod, select anchors, verify wall structure, or determine safe hardware loads.</p>
    </TrustSection>

    <TrustSection title="Sources and related guides">
      <TrustList>
        <li><TrustLink external href="https://www.ikea.com/us/en/files/pdf/c9/ee/c9ee9195/betydlig_racka_hugad_apr2025.pdf">IKEA: How to measure and plan your curtain solution</TrustLink>, for measuring frame width, adding at least 6 inches per side, and planning brackets for its illustrated system.</li>
        <li><TrustLink external href="https://www.ikea.com/us/en/files/pdf/45/80/4580665c/betydlig_racka_hugad_oct_2022.pdf">IKEA: Measure your window</TrustLink>, for the 2× and 2.5× fullness examples and whole-panel calculation.</li>
      </TrustList>
      <p>Read <TrustLink href="/guides/measuring-rooms-and-furniture">how to measure rooms and furniture</TrustLink> when curtains must clear furniture, doors, or a delivery path. The numbers above are chosen planning examples. Product instructions and actual site conditions control the installation. Content and sources last reviewed September 26, 2026.</p>
    </TrustSection>
  </TrustPageShell></>;
}
