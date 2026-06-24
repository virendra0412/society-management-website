// app/layout.tsx
// Root layout — GA4 + Microsoft Clarity + JSON-LD structured data
//
// Required env vars (set in Vercel dashboard or .env.local):
//   NEXT_PUBLIC_GA_ID      — e.g. G-XXXXXXXXXX   (Google Analytics 4 Measurement ID)
//   NEXT_PUBLIC_CLARITY_ID — e.g. abcde12345      (Microsoft Clarity project ID)
//
// Both vars are NEXT_PUBLIC_ so they are inlined at build time for the client.
// If either is missing the script tag is simply omitted — no runtime errors.

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "SocietyApp — Society Management Made Simple",
    template: "%s | SocietyApp",
  },
  description:
    "From visitor gate entry to maintenance bills — one app your entire society will actually use. Free for up to 50 units. No credit card required.",
  keywords: [
    "society management app India",
    "free visitor management apartments",
    "MyGate alternative free",
    "RWA management software",
    "apartment maintenance app India",
    "society notice board app",
    "residential society management system",
    "free society app for secretary",
  ],
  authors: [{ name: "SocietyApp" }],
  creator: "SocietyApp",
  publisher: "SocietyApp",
  metadataBase: new URL("https://societyapp.in"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://societyapp.in",
    siteName: "SocietyApp",
    title: "SocietyApp — Society Management Made Simple",
    description:
      "From visitor gate entry to maintenance bills — one app your entire society will actually use. Free for up to 50 units.",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "SocietyApp — Society Management Made Simple" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SocietyApp — Society Management Made Simple",
    description: "Free visitor management, maintenance billing, and community tools for Indian societies.",
    images: ["/og/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// ── JSON-LD structured data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://societyapp.in/#organization",
      name: "SocietyApp",
      url: "https://societyapp.in",
      logo: { "@type": "ImageObject", url: "https://societyapp.in/og/logo.png" },
      sameAs: ["https://play.google.com/store/apps/details?id=com.societymanagementcompany.societyapp"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@societyapp.in",
        availableLanguage: ["English", "Hindi", "Gujarati", "Tamil", "Marathi", "Punjabi"],
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://societyapp.in/#software",
      name: "SocietyApp",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        description: "Free tier available for societies up to 50 units",
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
    },
    {
      "@type": "WebSite",
      "@id": "https://societyapp.in/#website",
      url: "https://societyapp.in",
      name: "SocietyApp",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://societyapp.in/search?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

// ── Analytics helpers ─────────────────────────────────────────────────────────
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Google Analytics 4 ────────────────────────────────────────────
            Strategy: next/script with strategy="afterInteractive" so it never
            blocks render. The gtag config fires automatically on page load.
            For SPA navigation, add a useEffect in a client component if needed. */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                  // Redact any PII that might end up in URLs
                  cookie_flags: 'SameSite=None;Secure',
                });
              `}
            </Script>
          </>
        )}

        {/* ── Microsoft Clarity ─────────────────────────────────────────────
            Clarity records sessions and generates heatmaps automatically.
            No additional configuration needed — just the project ID. */}
        {CLARITY_ID && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}