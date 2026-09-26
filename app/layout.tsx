import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Outfit } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { adsenseConfig, adsenseScriptSrc, analyticsConfig, siteConfig } from "@/lib/site";
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
  other: { "google-adsense-account": adsenseConfig.publisherId },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable} light`} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {/* Keep the publisher loader in the exported HTML for AdSense site verification. */}
        <script
          async
          crossOrigin="anonymous"
          fetchPriority="low"
          src={adsenseScriptSrc}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
      <Script id="google-analytics-loader" strategy="afterInteractive">
        {`(function(){
var loaded=false;
var events=['pointerdown','keydown','scroll'];
window.dataLayer=window.dataLayer||[];
window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
function loadAnalytics(){
  if(loaded)return;
  loaded=true;
  events.forEach(function(eventName){window.removeEventListener(eventName,loadAnalytics);});
  window.gtag('js',new Date());
  window.gtag('config','${analyticsConfig.measurementId}');
  var script=document.createElement('script');
  script.async=true;
  script.src='https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}';
  document.head.appendChild(script);
}
events.forEach(function(eventName){window.addEventListener(eventName,loadAnalytics,{once:true,passive:true});});
window.addEventListener('load',function(){window.setTimeout(loadAnalytics,6000);},{once:true});
})();`}
      </Script>
    </html>
  );
}
