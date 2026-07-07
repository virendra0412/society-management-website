// Server Component — exports metadata for SEO.
// All rendering (with locale-aware content) is done in FeaturePageTemplate (client).
import type { Metadata } from "next";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata: Metadata = {
  title: "Community Help — SocietyApp",
  description: "A neighbour-to-neighbour service marketplace inside your society. Find trusted plumbers, maids and tutors recommended by people in your own building.",
};

export default function Page() {
  return <FeaturePageTemplate slug="community-help" />;
}
