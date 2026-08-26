import { ArticleJsonLd } from "@/components/seo/structured-data";
import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

const path = "/guides/measuring-curtains";
const description = "Measure curtain rod width, panel fullness, and finished drop before ordering ready-made curtain panels.";
export const metadata = createPageMetadata({ title: "How to Measure for Curtains", description, path });

export default function CurtainMeasurementGuide() {
  return <><ArticleJsonLd title="How to Measure for Curtains" description={description} path={path} /><TrustPageShell category="Window decoration guide" path={path} title="How to measure for curtains" description="Choose the mounting position first, measure the full rod and finished drop, then translate the required fullness into whole ready-made panels.">
    <TrustNote><strong>Measure the rod, not only the glass.</strong> Curtain fullness is based on the complete installed rod length, including any extension beyond the window.</TrustNote>
    <TrustSection title="Choose inside or outside mounting"><p>An inside-mounted tension rod uses the clear width within the frame. An outside-mounted decorative rod extends beyond the trim. Home Depot suggests about 8–10 inches beyond each side as a starting range, subject to wall space and hardware instructions.</p></TrustSection>
    <TrustSection title="Plan fullness"><p>Panels equal to the rod width will hang nearly flat. A combined width around two to three times the rod width creates gathering; fabric weight, header style, and the intended look influence the final choice.</p></TrustSection>
    <TrustSection title="Measure the finished drop"><p>Measure from the actual rod, hook, or bottom of the ring to the desired hem position. Decide whether the curtain ends at the sill, apron, floor, or with extra fabric before choosing a packaged length.</p></TrustSection>
    <TrustSection title="Check the package before ordering"><TrustList><li>Confirm whether the listed width is for one panel or a pair.</li><li>Allow for headers, hems, rings, pattern matching, and shrinkage.</li><li>Check radiators, handles, furniture, and floor clearance.</li></TrustList><p>Use the <TrustLink href="/calculators/curtain-measurement">Curtain Measurement Calculator</TrustLink> to estimate rod width, fullness, and whole panel count.</p></TrustSection>
    <TrustSection title="Source"><TrustLink external href="https://www.homedepot.com/c/ah/how-to-measure-curtains/9ba683603be9fa5395fab90a2ca03be">Home Depot: How to measure curtains</TrustLink></TrustSection>
  </TrustPageShell></>;
}
