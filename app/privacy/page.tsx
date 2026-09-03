import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How Watt & Wall handles browser-only calculator inputs, email enquiries, Google Analytics, cookies, consent, and advertising.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <TrustPageShell category="Your information" path="/privacy" title="Privacy Policy" description="A plain-language explanation of calculator inputs, email enquiries, Google Analytics, cookies, consent, and advertising choices.">
      <TrustNote><strong>Last reviewed: September 3, 2026.</strong> This is product information, not legal advice. It describes the services currently used on Watt & Wall and must be reviewed if those services or the jurisdictions reached by the site change.</TrustNote>

      <TrustSection title="What the website currently does">
        <p>The calculator widgets process the values you enter in your browser for the current estimate. The site has no account, database, calculator submission endpoint, or newsletter. Calculator inputs and calculated results are not uploaded to or stored by Watt & Wall, and they are not sent to Google Analytics.</p>
        <p>Watt & Wall uses Google Analytics 4 to understand site traffic and engagement. We also load Google AdSense code for site review and potential advertising. Ads are only shown when Google enables them for the site.</p>
      </TrustSection>

      <TrustSection title="Information you choose to send by email">
        <p>If you email <TrustLink href="mailto:wattandwall@gmail.com">wattandwall@gmail.com</TrustLink>, your email provider and the receiving mailbox may process your address, message, attachments, and any information you include. Please do not send sensitive personal, financial, utility-account, or property documents. We use an email only to read and respond to the enquiry when appropriate; there is no website form or automatic response system.</p>
      </TrustSection>

      <TrustSection title="Analytics, cookies, and advertising">
        <p>Google Analytics may process page URLs and titles, referring pages, browser and device information, approximate location, and engagement such as page views, scrolls, and outbound clicks. When you use a calculator, Watt & Wall may also record only the calculator&apos;s identifier and whether a result was copied or reset. We do not send the measurements, prices, other values, or calculated result you enter.</p>
        <p>Google Analytics and Google AdSense can use cookies or similar identifiers. Google AdSense may process data to deliver, measure, and personalize ads where permitted by your choices and applicable law. See Google&apos;s <TrustLink external href="https://policies.google.com/technologies/partner-sites">information for partner sites and apps</TrustLink> for details of Google&apos;s processing.</p>
        <p>For visitors in the EEA, United Kingdom, and Switzerland, Watt & Wall uses Google&apos;s Privacy &amp; messaging consent flow. It provides consent, refusal, and preference-management choices before covered storage or personalized advertising is used. Where the message applies, use its Privacy and cookie settings link to revisit your choice.</p>
        <p>See <TrustLink external href="https://support.google.com/analytics/answer/7318509">Google Analytics privacy disclosures</TrustLink>, <TrustLink external href="https://support.google.com/adsense/answer/7549925">Google&apos;s AdSense cookie guidance</TrustLink>, and <TrustLink external href="https://support.google.com/adsense/answer/13554116">Google CMP requirements</TrustLink>.</p>
      </TrustSection>

      <TrustSection title="Retention, sharing, and your choices">
        <p>Calculator values have no Watt & Wall retention because they remain in the current browser calculation. Google Analytics and AdSense process their data under the settings and policies that apply to those services. Email enquiries are retained only as long as needed to review, respond to, and document the issue under the mailbox provider&apos;s settings and the site owner&apos;s operational needs. We do not sell calculator inputs.</p>
        <TrustList>
          <li>Do not enter sensitive information into a calculator or email message.</li>
          <li>Use the consent message&apos;s Privacy and cookie settings link, where available, to change your advertising and analytics choices.</li>
          <li>You can use Google&apos;s <TrustLink external href="https://tools.google.com/dlpage/gaoptout">Analytics opt-out browser add-on</TrustLink> to prevent Analytics measurement across websites.</li>
          <li>Ask about an email enquiry or a privacy question at <TrustLink href="mailto:wattandwall@gmail.com">wattandwall@gmail.com</TrustLink>.</li>
        </TrustList>
        <p>Privacy information should match actual processing. We review this page when a form, analytics tool, ad partner, cookie, or storage behavior changes.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
