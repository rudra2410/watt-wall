import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/mobile-navigation";
import { NavigationLinks } from "@/components/navigation-links";
import { SiteLogo } from "@/components/site-logo";
import { ThemeSelect } from "@/components/theme-select";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-border bg-background">
      <Container className="flex min-h-[4.5rem] items-center justify-between gap-4">
        <SiteLogo />

        <div className="hidden items-center gap-3 lg:flex">
          <nav aria-label="Primary">
            <NavigationLinks className="items-center gap-1" />
          </nav>
          <ThemeSelect compact id="theme-preference-desktop" />
          <Link className={buttonVariants()} href="/calculators">
            Browse calculators
          </Link>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
