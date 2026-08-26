import { describe, expect, it } from "vitest";

import { footerNavigation, primaryNavigation, siteConfig } from "./site";

describe("siteConfig", () => {
  it("uses the approved Watt & Wall brand and domain", () => {
    expect(siteConfig.name).toBe("Watt & Wall");
    expect(siteConfig.domain).toBe("wattandwall.com");
    expect(siteConfig.url).toBe("https://wattandwall.com");
  });

  it("keeps every approved trust and company route discoverable", () => {
    expect(footerNavigation.map((group) => group.label)).toEqual(["Trust", "Company", "Guides"]);
    expect(footerNavigation.flatMap((group) => group.links.map((link) => link.href))).toEqual([
      "/how-it-works",
      "/methodology",
      "/editorial-policy",
      "/privacy",
      "/terms",
      "/disclaimer",
      "/about",
      "/contact",
      "/guides/electricity-costs",
      "/guides/appliance-energy-use",
      "/guides/paint-and-flooring-measurements",
      "/guides/home-energy-audit",
      "/guides/energyguide-labels",
    ]);
  });

  it("keeps the complete primary navigation available", () => {
    expect(primaryNavigation).toEqual([
      { label: "Home", href: "/" },
      { label: "Calculators", href: "/calculators" },
      { label: "Guides", href: "/guides" },
      { label: "How it works", href: "/how-it-works" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ]);
  });
});
