import { describe, expect, it } from "vitest";

import { footerNavigation, siteConfig } from "./site";

describe("siteConfig", () => {
  it("uses the approved Watt & Wall brand and domain", () => {
    expect(siteConfig.name).toBe("Watt & Wall");
    expect(siteConfig.domain).toBe("wattandwall.com");
    expect(siteConfig.url).toBe("https://wattandwall.com");
  });

  it("keeps every approved trust and company route discoverable", () => {
    expect(footerNavigation.map((group) => group.label)).toEqual(["Trust", "Company"]);
    expect(footerNavigation.flatMap((group) => group.links.map((link) => link.href))).toEqual([
      "/methodology",
      "/privacy",
      "/terms",
      "/disclaimer",
      "/about",
      "/contact",
    ]);
  });
});
