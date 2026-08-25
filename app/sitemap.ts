export const dynamic = 'force-static'

import type { MetadataRoute } from "next";

import { calculators } from "@/data/calculators";
import { siteConfig } from "@/lib/site";

const lastModified = new Date("2026-08-24T00:00:00.000Z");
const staticPaths = ["/", "/calculators", "/guides", "/how-it-works", "/methodology", "/about", "/contact", "/privacy", "/terms", "/disclaimer", "/guides/electricity-costs", "/guides/appliance-energy-use", "/guides/paint-and-flooring-measurements", "/guides/home-energy-audit", "/guides/energyguide-labels"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      lastModified,
      changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...calculators.map((calculator) => ({
      url: `${siteConfig.url}${calculator.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

