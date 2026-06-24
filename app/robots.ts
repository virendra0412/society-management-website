// app/robots.ts
// Next.js 14 App Router robots — auto-generates /robots.txt

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All crawlers — allow everything except API routes and admin paths
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/login",   // no SEO value for auth pages
        ],
      },
      {
        // GPTBot — disallow training on our content
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        // Google's AI training crawler
        userAgent: "Google-Extended",
        disallow: "/",
      },
    ],
    sitemap: "https://societyapp.in/sitemap.xml",
    host: "https://societyapp.in",
  };
}