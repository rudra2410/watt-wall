export const dynamic = 'force-static'

import type { MetadataRoute } from "next";

import { calculators } from "@/data/calculators";
import { siteConfig } from "@/lib/site";

const lastModified = new Date("2026-08-24T00:00:00.000Z");
const revisedPaths = new Set<string>(["/", "/calculators", "/guides", "/how-it-works", "/guides/electricity-costs", "/guides/appliance-energy-use", "/guides/energyguide-labels", "/calculators/appliance-running-cost"]);
const revisedDate = new Date("2026-09-07T00:00:00.000Z");
const staticPaths = ["/", "/calculators", "/guides", "/how-it-works", "/methodology", "/editorial-policy", "/about", "/contact", "/privacy", "/terms", "/disclaimer", "/guides/electricity-costs", "/guides/appliance-energy-use", "/guides/paint-and-flooring-measurements", "/guides/home-energy-audit", "/guides/energyguide-labels", "/guides/measuring-rooms-and-furniture", "/guides/choosing-rug-size", "/guides/measuring-curtains"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...["/guides/fridge-energyguide-cost", "/guides/vaulted-ceiling-paint", "/guides/space-heater-monthly-cost", "/guides/dehumidifier-ief-cost", "/guides/electric-water-heater-use", "/guides/window-ac-cost", "/guides/standby-device-cost", "/guides/tile-waste-boxes"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date("2026-09-09T00:00:00.000Z"), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      lastModified: revisedPaths.has(path) ? revisedDate : lastModified,
      changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...calculators.map((calculator) => ({
      url: `${siteConfig.url}${calculator.href}`,
      lastModified: revisedPaths.has(calculator.href) ? revisedDate : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

