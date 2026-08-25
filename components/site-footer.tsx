import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SiteLogo } from "@/components/site-logo";
import { Icon } from "@/components/ui/icon";
import { calculators } from "@/data/calculators";
import { footerNavigation, siteConfig } from "@/lib/site";

const footerLinkClassName =
  "inline-flex min-h-11 items-center rounded-md px-1 text-sm font-medium text-muted-foreground outline-none transition-colors duration-150 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-muted motion-reduce:transition-none";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.45fr)_repeat(4,minmax(0,1fr))] lg:gap-12">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <SiteLogo />
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">{siteConfig.footerDescription}</p>
            <div className="mt-5 grid gap-1 text-sm">
              <a
                className={`${footerLinkClassName} gap-2`}
                href={`mailto:${siteConfig.contactEmail}`}
                aria-label={`Email ${siteConfig.contactEmail}`}
              >
                <Icon className="size-4" name="mail" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          <FooterNavigation label="Calculators">
            <li>
              <Link className={footerLinkClassName} href="/calculators" prefetch={false}>
                All calculators
              </Link>
            </li>
            {calculators.map((calculator) => (
              <li key={calculator.slug}>
                <Link className={footerLinkClassName} href={calculator.href} prefetch={false}>
                  {calculator.name}
                </Link>
              </li>
            ))}
          </FooterNavigation>

          {footerNavigation.map((group) => (
            <FooterNavigation key={group.label} label={group.label}>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className={footerLinkClassName} href={link.href} prefetch={false}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </FooterNavigation>
          ))}
        </div>

        <div className="mt-10 flex justify-center pt-5 text-center text-sm leading-6 text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterNavigation({ children, label }: { children: React.ReactNode; label: string }) {
  const headingId = `footer-${label.toLowerCase()}-heading`;

  return (
    <nav aria-labelledby={headingId}>
      <h2 className="text-sm font-semibold text-foreground" id={headingId}>
        {label}
      </h2>
      <ul className="mt-3 space-y-1">{children}</ul>
    </nav>
  );
}
