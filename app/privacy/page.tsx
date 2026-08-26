import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "The current Watt & Wall privacy policy explains calculator inputs, email, cookies, and future advertising disclosures.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <TrustPageShell category="Your information" path="/privacy" title="Privacy Policy" description="A plain-language explanation of calculator inputs, email enquiries, cookies, and the advertising choices Watt & Wall will provide before ads are enabled.">
      <TrustNote><strong>Last reviewed: August 24, 2026.</strong> This is product information, not legal advice. The notice must be reviewed against the actual vendors and jurisdictions before advertising or analytics are enabled.</TrustNote>

      <TrustSection title="What the website currently does">
        <p>The calculator widgets process the values you enter in your browser for the current estimate. The site currently has no account, database, calculator submission endpoint, analytics product, newsletter, or advertising tag. Calculator inputs are not uploaded to or stored by Watt & Wall.</p>
      </TrustSection>

      <TrustSection title="Information you choose to send by email">
        <p>If you email <TrustLink href="mailto:wattandwall@gmail.com">wattandwall@gmail.com</TrustLink>, your email provider and the receiving mailbox may process your address, message, attachments, and any information you include. Please do not send sensitive personal, financial, utility-account, or property documents. We use an email only to read and respond to the enquiry when appropriate; there is no website form or automatic response system.</p>
      </TrustSection>

      <TrustSection title="Cookies, local storage, and advertising readiness">
        <p>The current interface does not install an analytics or advertising cookie or intentionally store a display preference. A browser may still make ordinary technical requests needed to load the site, fonts, and static assets.</p>
        <p>Before Google AdSense or another advertising service is enabled, this page will identify the actual providers, cookie purposes, personalized and non-personalized ad choices, and opt-out controls. For EEA, UK, and Swiss visitors, a Google-certified consent management platform configured for the IAB Transparency and Consent Framework must be in place before personalized ads are served. No placeholder publisher ID or advertising tag is used today.</p>
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
