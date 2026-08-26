import type { Metadata } from "next";
import { Geist_Mono, Outfit } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Watt & Wall",
    template: "%s | Watt & Wall",
  },
  description:
    "Practical home energy, renovation, furniture, and decoration calculators with transparent formulas and clear assumptions.",
  applicationName: siteConfig.name,
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: false },
  icons: {
    icon: "/watt-wall-logo.webp",
    shortcut: "/watt-wall-logo.webp",
    apple: "/watt-wall-logo.webp",
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Watt & Wall practical home calculators" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable} light`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
