// Server Component — exports metadata for SEO.
// All rendering (with locale-aware content) is done in FeaturePageTemplate (client).
import type { Metadata } from "next";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata: Metadata = {
  title: "Maintenance & Billing — SocietyApp",
  description: "Auto-generate monthly maintenance bills, track payments, identify defaulters, and send receipts — all without a single WhatsApp screenshot.",
};

export default function Page() {
  return <FeaturePageTemplate slug="maintenance" />;
}
