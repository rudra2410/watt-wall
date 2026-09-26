export const dynamic = 'force-static'

import type { MetadataRoute } from "next";

import { calculators } from "@/data/calculators";
import { siteConfig } from "@/lib/site";

const lastModified = new Date("2026-08-24T00:00:00.000Z");
const revisedDate = new Date("2026-09-07T00:00:00.000Z");
const revisedPaths = new Set<string>(["/guides/electricity-costs", "/guides/appliance-energy-use", "/guides/energyguide-labels", "/calculators/appliance-running-cost"]);
const latestRevisedDate = new Date("2026-09-14T00:00:00.000Z");
const latestRevisedPaths = new Set<string>(["/", "/calculators", "/guides", "/how-it-works", "/methodology", "/calculators/electricity-cost"]);
const newGuideDate = new Date("2026-09-09T00:00:00.000Z");
const newGuidePaths = new Set<string>(["/guides/fridge-energyguide-cost", "/guides/vaulted-ceiling-paint", "/guides/space-heater-monthly-cost", "/guides/dehumidifier-ief-cost", "/guides/electric-water-heater-use", "/guides/window-ac-cost", "/guides/standby-device-cost", "/guides/tile-waste-boxes"]);
const guideExpansionDate = new Date("2026-09-15T00:00:00.000Z");
const expandedGuidePaths = new Set<string>(["/privacy", "/guides/paint-and-flooring-measurements", "/guides/home-energy-audit", "/guides/energyguide-labels", "/guides/measuring-rooms-and-furniture", "/guides/choosing-rug-size", "/guides/measuring-curtains", "/guides/dehumidifier-ief-cost", "/guides/electric-water-heater-use", "/guides/space-heater-monthly-cost", "/guides/standby-device-cost", "/guides/tile-waste-boxes", "/guides/window-ac-cost"]);
const editorialReviewDate = new Date("2026-09-25T00:00:00.000Z");
const currentEditorialPaths = new Set<string>(["/guides/window-ac-cost", "/guides/space-heater-monthly-cost", "/guides/electric-water-heater-use", "/guides/dehumidifier-ief-cost", "/guides/standby-device-cost", "/guides/home-energy-audit", "/calculators/furniture-fit", "/calculators/rug-size", "/calculators/curtain-measurement", "/methodology"]);
const staticPaths = ["/", "/calculators", "/guides", "/how-it-works", "/methodology", "/editorial-policy", "/about", "/contact", "/privacy", "/terms", "/disclaimer", "/guides/electricity-costs", "/guides/appliance-energy-use", "/guides/paint-and-flooring-measurements", "/guides/home-energy-audit", "/guides/energyguide-labels", "/guides/measuring-rooms-and-furniture", "/guides/choosing-rug-size", "/guides/measuring-curtains"] as const;

function getLastModified(path: string) {
  if (path === "/guides/window-ac-cost") return new Date("2026-09-26T00:00:00.000Z");
  if (currentEditorialPaths.has(path)) return editorialReviewDate;
  if (expandedGuidePaths.has(path)) return guideExpansionDate;
  if (latestRevisedPaths.has(path)) return latestRevisedDate;
  if (newGuidePaths.has(path)) return newGuideDate;
  if (revisedPaths.has(path)) return revisedDate;
  return lastModified;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...[...newGuidePaths].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: getLastModified(path), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      lastModified: getLastModified(path),
      changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...calculators.map((calculator) => ({
      url: `${siteConfig.url}${calculator.href}`,
      lastModified: getLastModified(calculator.href),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

