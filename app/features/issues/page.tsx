// Server Component — exports metadata for SEO.
// All rendering (with locale-aware content) is done in FeaturePageTemplate (client).
import type { Metadata } from "next";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata: Metadata = {
  title: "Issues & Complaints — SocietyApp",
  description: "Replace the WhatsApp complaint chain with a structured ticket system. Residents raise issues, admins assign to vendors, everyone tracks resolution.",
};

export default function Page() {
  return <FeaturePageTemplate slug="issues" />;
}
