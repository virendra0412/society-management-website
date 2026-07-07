// Server Component — exports metadata for SEO.
// All rendering (with locale-aware content) is done in FeaturePageTemplate (client).
import type { Metadata } from "next";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata: Metadata = {
  title: "Events & Polls — SocietyApp",
  description: "Plan society events with RSVP, photo galleries, and calendar export. Run anonymous polls to get residents to actually vote on society decisions.",
};

export default function Page() {
  return <FeaturePageTemplate slug="events" />;
}
