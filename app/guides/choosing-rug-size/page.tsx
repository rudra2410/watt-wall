import { ArticleJsonLd } from "@/components/seo/structured-data";
import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

const path = "/guides/choosing-rug-size";
const description = "Choose a rug size for a living room, dining table, or bed by measuring the furniture arrangement and available floor space.";
export const metadata = createPageMetadata({ title: "How to Choose the Right Rug Size", description, path });

export default function RugSizeGuide() {
  return <><ArticleJsonLd title="How to Choose the Right Rug Size" description={description} path={path} /><TrustPageShell category="Decoration planning guide" path={path} title="How to choose the right rug size" description="Start with the furniture arrangement, decide which legs should sit on the rug, and test the footprint in the room before buying.">
    <TrustNote><strong>A rug frames a furniture group.</strong> Room size matters, but placement around the sofa, dining chairs, or bed is the more useful starting point.</TrustNote>
    <TrustSection title="Living room placement"><p>A rug can sit in front of the sofa, under the front legs, or under the complete seating group. Whichever arrangement you choose, keep the composition balanced and make the rug visibly longer than the sofa where space allows.</p></TrustSection>
    <TrustSection title="Dining room clearance"><p>The rug should support every chair while it is pulled out. IKEA recommends allowing roughly 60–80 cm beyond each side of the dining table. A low-pile or flatwoven rug can also make chair movement and cleaning easier.</p></TrustSection>
    <TrustSection title="Bedroom placement"><p>A large rug may sit fully or partially beneath the bed, or smaller rugs can sit beside it. For a larger under-bed rug, IKEA suggests about 50 cm visible at the sides so there is a soft landing beside the bed.</p></TrustSection>
    <TrustSection title="Test the footprint"><TrustList><li>Mark the calculated corners with painter&apos;s tape.</li><li>Walk the traffic path and open nearby doors or drawers.</li><li>Confirm the product&apos;s exact size and use a suitable anti-slip underlay.</li></TrustList><p>Use the <TrustLink href="/calculators/rug-size">Rug Size Calculator</TrustLink> to compare a furniture-based minimum with your room.</p></TrustSection>
    <TrustSection title="Sources"><TrustList><li><TrustLink external href="https://www.ikea.com/ca/en/product-guides/how-to-choose-the-right-rug-size-pub2e7f9fb0/">IKEA: Complete rug size guide</TrustLink></li><li><TrustLink external href="https://www.homedepot.com/c/ai/rug-sizes-for-your-space/9ba683603be9fa5395fab901838423fe">Home Depot: Rug sizes for your space</TrustLink></li></TrustList></TrustSection>
  </TrustPageShell></>;
}

