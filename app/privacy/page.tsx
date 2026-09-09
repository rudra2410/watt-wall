import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "The Watt & Wall privacy policy explains calculator inputs, email, advertising cookies, Google as a third-party vendor, and consent choices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <TrustPageShell category="Your information" path="/privacy" title="Privacy Policy" description="A plain-language explanation of calculator inputs, email enquiries, advertising cookies, Google as a third-party vendor, and consent choices.">
      <TrustNote><strong>Last reviewed: September 9, 2026.</strong> This is product information, not legal advice. Advertising disclosures must match the vendors and CMP configuration active at deployment.</TrustNote>

      <TrustSection title="What the website currently does">
        <p>The calculator widgets process the values you enter in your browser for the current estimate. The site currently has no account, database, calculator submission endpoint, analytics product, newsletter, or advertising tag. Calculator inputs are not uploaded to or stored by Watt & Wall.</p>
      </TrustSection>

      <TrustSection title="Information you choose to send by email">
        <p>If you email <TrustLink href="mailto:wattandwall@gmail.com">wattandwall@gmail.com</TrustLink>, your email provider and the receiving mailbox may process your address, message, attachments, and any information you include. Please do not send sensitive personal, financial, utility-account, or property documents. We use an email only to read and respond to the enquiry when appropriate; there is no website form or automatic response system.</p>
      </TrustSection>

      <TrustSection title="Cookies, local storage, and advertising readiness">
        <p>Google may act as a third-party advertising vendor when AdSense is active. Advertising cookies can be used to serve, measure or personalize ads according to the choices and policies shown by Google. The AdSense script and publisher configuration are part of the deployed site, so this notice describes that processing rather than promising that no advertising tag exists.</p>
        <p>Visitors in the EEA and UK should see the Google-certified consent management message configured for the site before consent-dependent personalized advertising is used. The message provides the available consent, decline and settings choices. Switzerland and other jurisdictions may have additional requirements. This page must be updated if the CMP, vendors or ad settings change.</p>
        <p>See <TrustLink external href="https://support.google.com/adsense/answer/10502938">Google Publisher Policies</TrustLink>, <TrustLink external href="https://support.google.com/adsense/answer/7549925">Google’s AdSense cookie guidance</TrustLink>, and <TrustLink external href="https://support.google.com/adsense/answer/13554116">Google CMP requirements</TrustLink> for the requirements that apply when advertising is configured.</p>
      </TrustSection>

      <TrustSection title="Retention, sharing, and your choices">
        <p>Calculator values have no Watt & Wall retention because they remain in the current browser calculation. Email enquiries are retained only as long as needed to review, respond to, and document the issue under the mailbox provider’s settings and the site owner’s operational needs. We do not sell calculator inputs.</p>
        <TrustList>
          <li>Do not enter sensitive information into a calculator or email message.</li>
          <li>Ask about an email enquiry or a privacy question at <TrustLink href="mailto:wattandwall@gmail.com">wattandwall@gmail.com</TrustLink>.</li>
        </TrustList>
        <p>Privacy information should match actual processing. We review this page when a form, analytics tool, ad partner, cookie, or storage behavior changes.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
