// Server Component — exports metadata for SEO.
// All rendering (with locale-aware content) is done in FeaturePageTemplate (client).
import type { Metadata } from "next";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata: Metadata = {
  title: "Notice Board — SocietyApp",
  description: "Replace the WhatsApp group broadcast with a structured, searchable, push-delivered digital notice board.",
};

export default function Page() {
  return <FeaturePageTemplate slug="notices" />;
}
