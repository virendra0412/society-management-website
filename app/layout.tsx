import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SocietyApp — Society Management Made Simple",
  description:
    "From visitor gate entry to maintenance bills — one app your entire society will actually use. Free tier available. No credit card required.",
  keywords: ["society management app India", "free visitor management", "MyGate alternative", "RWA management software"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
