// Server Component — exports metadata for SEO.
// All rendering (with locale-aware content) is done in FeaturePageTemplate (client).
import type { Metadata } from "next";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata: Metadata = {
  title: "Parking Management — SocietyApp",
  description: "Vehicle registry, slot allocation, permit management, and visitor parking — manage your society parking completely from your phone.",
};

export default function Page() {
  return <FeaturePageTemplate slug="parking" />;
}
