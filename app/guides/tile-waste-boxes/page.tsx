import { TrustLink, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

const title = "How to budget tile boxes when cuts and repair spares are separate";
const description = "A chosen 120 square foot floor with a 10% cutting allowance and a separate 10% repair reserve needs 144 square feet when both percentages use the measured area. The allowances are worksheet choices, not universal rates.";
const path = "/guides/tile-waste-boxes";
const metadataDescription = "Calculate tile purchase area when cutting allowance and repair reserve use the measured floor area, then round up to whole boxes.";
export const metadata = createPageMetadata({ title: "Tile Waste, Spare Stock and Box Count", description: metadataDescription, path });

export default function GuidePage() {
 return <><ArticleJsonLd title={title} description={description} path={path} datePublished="2026-09-09" dateModified="2026-09-26" /><TrustPageShell category="Planning guide" title={title} description={description} path={path}>
<p>The <TrustLink href="https://www.daltile.com/how-to/faqs" external>Daltile tile FAQ</TrustLink> recommends approximately 10% extra as attic stock for future replacement. That is a repair-spare recommendation. It should not silently be treated as the cutting waste for every layout.</p>
<TrustSection title="Keep three quantities separate">
<p>Start with measured coverage area. Add a cutting allowance for the layout and room shape. Then decide whether to keep attic stock from the same batch. A diagonal or herringbone pattern can create different offcuts from a straight grid, so the correct allowance depends on the plan and the tile size.</p>
<p>The worksheet formula is:</p>
<p><strong>Purchase area = measured area × (1 + cutting allowance ÷ 100 + repair reserve ÷ 100).</strong></p>
<p>This worksheet defines both allowances as percentages of the measured area. For the chosen 120 square feet, a 10% cutting allowance adds 12 square feet and a 10% repair reserve adds another 12 square feet: 120 × (1 + 0.10 + 0.10) = 144 square feet.</p>
<p>A different policy may define the reserve as a percentage of the waste-adjusted quantity. That method compounds the percentages: 120 × 1.10 × 1.10 = 145.2 square feet. Use it only when the supplier or installer defines the reserve that way. Record the percentage basis so the order can be checked later.</p>
</TrustSection>
<TrustSection title="Convert area to boxes">
<p>Read the coverage printed on the actual box. Suppose a chosen box covers 15 square feet. The 144 square foot planning quantity requires 144 ÷ 15 = 9.6 boxes, so round up to 10 full boxes, covering 150 square feet. The 6 square feet above the worksheet quantity is not guaranteed usable reserve because cuts and defects vary.</p>
<p>The box coverage and 15 square feet are illustrative inputs. Do not copy them to a product without checking its label. Tile sizes, grout joints, pattern repeats and box counts can change the coverage.</p>
</TrustSection>
<TrustSection title="Compare layout scenarios">
<p>These scenarios hold the chosen 120 square foot area and 15 square foot box coverage constant. The percentages are planning inputs to discuss with the installer or supplier.</p>
<div className="overflow-x-auto rounded-lg border border-border" role="region" aria-label="Worked example comparison" tabIndex={0}><table className="w-full min-w-80 text-left text-sm"><thead><tr><th scope="col" className="p-3">Cutting allowance</th><th scope="col" className="p-3">Repair reserve</th><th scope="col" className="p-3">Planning area</th><th scope="col" className="p-3">Boxes at 15 sq ft/box</th></tr></thead><tbody><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">5%</th><td className="p-3">0%</td><td className="p-3">126.0 sq ft</td><td className="p-3">9</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">10%</th><td className="p-3">0%</td><td className="p-3">132.0 sq ft</td><td className="p-3">9</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">10%</th><td className="p-3">10%</td><td className="p-3">144.0 sq ft</td><td className="p-3">10</td></tr><tr className="border-t border-border"><th scope="row" className="p-3 font-medium">15%</th><td className="p-3">10%</td><td className="p-3">150.0 sq ft</td><td className="p-3">10</td></tr></tbody></table></div>
<p>The table does not declare that 5%, 10% or 15% is correct for your room. It shows the consequence of the choice. Keep the layout drawing, tile dimensions and box coverage beside the order.</p>
</TrustSection>
<TrustSection title="Measure the room and obstacles">
<p>Measure each rectangular section and add them. Subtract areas that will not receive tile only when their boundaries are clear. Doorways, columns, angled walls and built-in cabinets can change the cutting pattern even when they barely change the total area.</p>
<p>If the room is not rectangular, divide it into simple shapes. Measure the longest dimensions and check them against the drawing. A small area error repeated across a large order can affect the number of boxes more than a rounding choice.</p>
</TrustSection>
<TrustSection title="Keep the batch information">
<p>Buy enough from one dye lot when possible and save labeled spare tiles. Daltile explains that future batches can vary and describes attic stock as additional tile kept for later replacement. Store boxes where they remain dry and follow the manufacturer&apos;s handling instructions.</p>
<p>The estimate excludes grout, thin-set, trim, shipping damage, color variation and installation labor. It does not guarantee that a tile will be available later. A complex or structural installation needs an experienced installer; this guide does not give cutting or electrical instructions.</p>
<p>Use the <TrustLink href="/calculators/flooring-tile">flooring tile calculator</TrustLink> for its supported rectangular inputs, then add documented layout and reserve decisions. Read <TrustLink href="/guides/paint-and-flooring-measurements">paint and flooring measurements</TrustLink>, <TrustLink href="/guides/measuring-rooms-and-furniture">room and furniture measuring</TrustLink> and <TrustLink href="/guides/vaulted-ceiling-paint">the vaulted-ceiling paint guide</TrustLink> for related measurement context. The final order remains a planning estimate until the product box and layout are confirmed.</p>
</TrustSection>
<TrustSection title="Review the order before purchase">
<p>Put the room sketch, tile dimensions, box coverage, pattern direction and allowance decision on one page. Check whether the supplier sells full boxes and whether a return policy applies to unopened material. A box count rounded up for area can still be wrong if the layout creates narrow cuts or a pattern repeat.</p>
<p>Ask the installer or supplier to review stairs, thresholds, transitions, drains, niches and any diagonal layout. Keep a labeled spare box after installation when storage allows. The calculation helps you explain the quantity decision, while the actual product label and layout determine the order. Do not use an area estimate as installation instructions.</p>
<p>Recalculate if the selected tile or package changes. Two products with the same nominal tile dimensions can have different pieces per box or stated coverage. Save the final product code and box label with the worksheet so a later repair starts from the material actually installed.</p>
</TrustSection>
</TrustPageShell></>;
}
