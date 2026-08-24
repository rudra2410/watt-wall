import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "The current Watt & Wall privacy policy explains calculator inputs, theme preferences, email, cookies, and future advertising disclosures.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <TrustPageShell category="Your information" path="/privacy" title="Privacy Policy" description="This plain-language notice describes the current Watt & Wall prototype and the choices you should expect as the site evolves.">
      <TrustNote><strong>Last reviewed: August 24, 2026.</strong> This is product information, not legal advice. Before publishing ads or serving visitors in regulated regions, the site owner should review the notice for the operating jurisdictions and actual vendors in use.</TrustNote>

      <TrustSection title="What the current prototype does">
        <p>The calculator widgets process the values you enter in your browser for the current estimate. The prototype has no account, database, calculator submission endpoint, analytics product, newsletter, or advertising tag. Calculator inputs are not uploaded to or stored by Watt & Wall.</p>
        <p>The site uses a theme preference control. If you choose Light or Dark rather than System, the theme library may store that preference in your browser’s local storage so the choice can be remembered. This is a functional preference, not a calculator record.</p>
      </TrustSection>

      <TrustSection title="Information you choose to send by email">
        <p>If you email <TrustLink href="mailto:hello@wattandwall.com">hello@wattandwall.com</TrustLink>, your email provider and the receiving mailbox may process your address, message, attachments, and any information you include. Please do not send sensitive personal, financial, utility-account, or property documents. We use an email only to read and respond to the enquiry when appropriate; there is no website form or automatic response system in this prototype.</p>
      </TrustSection>

      <TrustSection title="Cookies, local storage, and future ads">
        <p>The current interface does not install an analytics or advertising cookie. A browser may still make ordinary technical requests needed to load the site, fonts, and static assets. The theme preference described above is stored locally by the browser when a visitor chooses an explicit theme.</p>
        <p>If Google AdSense, analytics, a consent tool, or another third-party service is added, this notice must be updated to identify the actual technology, purposes, providers, and controls before that service is used. Google requires publishers to disclose data use and third-party advertising cookies in a privacy policy; see <TrustLink external href="https://support.google.com/adsense/answer/10502938">Google Publisher Policies</TrustLink> and <TrustLink external href="https://support.google.com/adsense/answer/7549925">Google’s AdSense cookie guidance</TrustLink>. Where required for EEA, UK, or Swiss traffic, a certified consent management solution must be configured before personalized ads are served.</p>
      </TrustSection>

      <TrustSection title="Retention, sharing, and your choices">
        <p>Calculator values have no Watt & Wall retention because they remain in the current browser calculation. Email enquiries are retained only as long as needed to review, respond to, and document the issue under the mailbox provider’s settings and the site owner’s operational needs. We do not sell calculator inputs.</p>
        <TrustList>
          <li>Do not enter sensitive information into a calculator or email message.</li>
          <li>Use your browser controls to clear local storage if you want to remove a remembered theme preference.</li>
          <li>Ask about an email enquiry or a privacy question at <TrustLink href="mailto:hello@wattandwall.com">hello@wattandwall.com</TrustLink>.</li>
        </TrustList>
        <p>Privacy information should match actual processing. We review this page when a form, analytics tool, ad partner, cookie, or storage behavior changes.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
