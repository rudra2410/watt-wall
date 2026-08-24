import { TrustLink, TrustList, TrustNote, TrustPageShell, TrustSection } from "@/components/trust-page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Watt & Wall about calculator sources, accessibility, content corrections, or site feedback.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <TrustPageShell category="Get in touch" path="/contact" title="Contact Watt & Wall" description="Send a clear note about a source, formula, accessibility issue, or piece of site content that needs attention.">
      <TrustNote><strong>Email:</strong> <TrustLink href="mailto:hello@wattandwall.com">hello@wattandwall.com</TrustLink><br />This link opens your email application. The current prototype has no contact form, account system, or message-processing backend.</TrustNote>

      <TrustSection title="Useful reasons to write">
        <TrustList>
          <li>Point out a source link that has moved or no longer supports the stated assumption.</li>
          <li>Explain a calculation or unit issue with the values you entered and the result you saw.</li>
          <li>Report a keyboard, focus, contrast, responsive, or Light/Dark Mode problem.</li>
          <li>Suggest a narrow calculator topic with a clear formula and reliable source.</li>
        </TrustList>
      </TrustSection>

      <TrustSection title="What to include">
        <p>Please include the page URL, the calculator inputs (without personal or sensitive information), your expected behavior, and the browser or device where you noticed the issue. Do not send utility account numbers, property documents, payment information, or other private records.</p>
      </TrustSection>

      <TrustSection title="What happens next">
        <p>Email is handled through your own mail provider and is not submitted to Watt & Wall by a website form. We do not promise a response time or a particular outcome. If we publish a correction, we may update the relevant page, source note, test, or review date.</p>
        <p>For current data handling, read the <TrustLink href="/privacy">Privacy policy</TrustLink>. For formula questions, the <TrustLink href="/methodology">Methodology page</TrustLink> explains the review approach.</p>
      </TrustSection>
    </TrustPageShell>
  );
}
