// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
  ],
  authors: [{ name: "SocietyApp" }],
  creator: "SocietyApp",
  publisher: "SocietyApp",
  metadataBase: new URL("https://societyapp.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://societyapp.in",
    siteName: "SocietyApp",
    title: "SocietyApp — Society Management Made Simple",
    description:
      "From visitor gate entry to maintenance bills — one app your entire society will actually use. Free for up to 50 units.",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "SocietyApp — Society Management Made Simple",
      },
    ],
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data — Organization + SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://societyapp.in/#organization",
      name: "SocietyApp",
      url: "https://societyapp.in",
      logo: {
        "@type": "ImageObject",
        url: "https://societyapp.in/og/logo.png",
      },
      sameAs: [
        "https://play.google.com/store/apps/details?id=com.societymanagementcompany.societyapp",
      ],
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1200",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://societyapp.in/#website",
      url: "https://societyapp.in",
      name: "SocietyApp",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://societyapp.in/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}