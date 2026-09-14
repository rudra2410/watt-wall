import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

import { adsenseConfig, adsenseScriptSrc, analyticsConfig, footerNavigation, guideCategories, guideNavigation, primaryNavigation, siteConfig } from "./site";

describe("siteConfig", () => {
  it("uses the approved Watt & Wall brand and domain", () => {
    expect(siteConfig.name).toBe("Watt & Wall");
    expect(siteConfig.domain).toBe("wattandwall.com");
    expect(siteConfig.url).toBe("https://wattandwall.com");
  });

  it("keeps every approved trust and company route discoverable", () => {
    expect(footerNavigation.map((group) => group.label)).toEqual(["Trust", "Company"]);
    expect(footerNavigation.flatMap((group) => group.links.map((link) => link.href))).toEqual([
      "/how-it-works",
      "/methodology",
      "/editorial-policy",
      "/privacy",
      "/terms",
      "/disclaimer",
      "/about",
      "/contact",
    ]);
  });

  it("keeps every guide assigned to a directory category", () => {
    expect(guideCategories.map((category) => category.slug)).toEqual(["energy", "renovation", "furniture-decor"]);
    expect(guideNavigation).toHaveLength(16);
    expect(new Set(guideNavigation.map((guide) => guide.href)).size).toBe(guideNavigation.length);
    expect(guideNavigation.every((guide) => String(guide.directoryDescription) !== String(guide.description))).toBe(true);
    expect(guideNavigation.every((guide) => guideCategories.some((category) => category.name === guide.category))).toBe(true);
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

describe("adsenseConfig", () => {
  it("uses the same publisher id for the meta tag, the loader script, and ads.txt", () => {
    const adsTxt = readFileSync(new URL("../public/ads.txt", import.meta.url), "utf8").trim();

    expect(adsenseConfig.publisherId).toMatch(/^ca-pub-\d{16}$/);
    expect(adsenseScriptSrc).toBe(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.publisherId}`);
    expect(adsTxt).toBe(`google.com, ${adsenseConfig.publisherId.replace("ca-", "")}, DIRECT, f08c47fec0942fa0`);
  });
});

describe("analyticsConfig", () => {
  it("uses the Watt & Wall GA4 measurement id", () => {
    expect(analyticsConfig.measurementId).toBe("G-79MBBEXME0");
    expect(analyticsConfig.measurementId).toMatch(/^G-[A-Z0-9]+$/);
  });
});
