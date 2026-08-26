import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { ArticleJsonLd } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How to Read an EnergyGuide Label",
  description: "Learn what an EnergyGuide label shows, how to compare similar appliances, and why the displayed annual cost may differ from your bill.",
  path: "/guides/energyguide-labels",
});

export default function EnergyGuideLabelsPage() {
  return (
    <><ArticleJsonLd title="How to Read an EnergyGuide Label" description="Learn what an EnergyGuide label shows, how to compare similar appliances, and why the displayed annual cost may differ from your bill." path="/guides/energyguide-labels" /><TrustPageShell category="Buying guide" path="/guides/energyguide-labels" title="How to read an EnergyGuide label" description="Use the yellow EnergyGuide label as a comparison tool, then adjust the estimate for your home, habits, and local electricity price.">
      <TrustNote><strong>Compare like with like.</strong> An EnergyGuide estimate uses standardized assumptions. It helps compare similar models, but it is not a promise of what your household will pay.</TrustNote>

      <TrustSection title="What the label tells you">
        <p>The Federal Trade Commission says EnergyGuide labels show estimated energy use or annual operating cost and a comparison range for similar appliance models. Look for the label on covered appliances such as refrigerators, clothes washers, dishwashers, water heaters, and room air conditioners.</p>
        <p>Read the <TrustLink external href="https://consumer.ftc.gov/node/77485">FTC consumer guide to EnergyGuide labels</TrustLink> for the current list and examples of how to compare products.</p>
      </TrustSection>

      <TrustSection title="Use the number carefully">
        <TrustList>
          <li>Check the estimated annual energy use as well as the dollar estimate.</li>
          <li>Compare the model with similar capacity and features, not a smaller or differently tested product.</li>
          <li>Remember that the label may use a national average energy price and standardized use.</li>
          <li>Use your own local rate and schedule for a household-specific planning estimate.</li>
        </TrustList>
        <p>The FTC notes that actual cost depends on how an appliance is used and the local price of energy. Settings, climate, maintenance, and household size can all move the result.</p>
      </TrustSection>

      <TrustSection title="Compare, then calculate">
        <p>Use the label to shortlist efficient models, then enter the most relevant wattage or annual energy figure in the <TrustLink href="/calculators/appliance-running-cost">Appliance Running Cost Calculator</TrustLink>. Keep the label’s assumptions beside your result so the comparison remains fair.</p>
      </TrustSection>
    </TrustPageShell></>
  );
}
