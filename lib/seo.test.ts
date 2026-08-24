import { describe, expect, it } from "vitest";

import { createPageMetadata } from "./seo";

describe("createPageMetadata", () => {
  it("keeps each page canonical and shareable", () => {
    const metadata = createPageMetadata({
      title: "Example Calculator",
      description: "A useful example description.",
      path: "/calculators/example",
    });

    expect(metadata.alternates?.canonical).toBe("/calculators/example");
    expect(metadata.openGraph).toMatchObject({
      title: "Example Calculator | Watt & Wall",
      url: "/calculators/example",
      type: "website",
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: ["/twitter-image"],
    });
  });
});
