export const dynamic = 'force-static'

import { ImageResponse } from "next/og";

export const alt = "Watt & Wall — practical home energy and renovation calculators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#f5f2ea", color: "#514a42", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "72px 84px", width: "100%" }}>
      <div style={{ color: "#c45b36", display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>WATT &amp; WALL</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
        <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>Clearer numbers for home projects.</div>
        <div style={{ color: "#756d62", fontSize: 28, lineHeight: 1.35 }}>Transparent formulas, practical assumptions, and planning calculators.</div>
      </div>
      <div style={{ color: "#c45b36", display: "flex", fontSize: 22 }}>wattandwall.com</div>
    </div>,
    size,
  );
}

