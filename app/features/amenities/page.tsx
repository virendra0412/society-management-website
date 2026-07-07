// Server Component — exports metadata for SEO.
// All rendering (with locale-aware content) is done in FeaturePageTemplate (client).
import type { Metadata } from "next";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata: Metadata = {
  title: "Amenity Booking — SocietyApp",
  description: "Self-service clubhouse, gym and court booking with slot selection, deposit handling, and admin approval flow.",
};

export default function Page() {
  return <FeaturePageTemplate slug="amenities" />;
}
