import type { Metadata } from "next";

import { siteConfig } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const shareTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      type: "website",
      siteName: siteConfig.name,
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
