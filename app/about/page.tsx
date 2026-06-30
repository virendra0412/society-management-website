// Server Component — keeps metadata for SEO
// Rendering is delegated to AboutContent (client, has translations)
import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About SocietyApp — Our Mission & Team",
  description: "Built by people who lived in a society and felt the pain. SocietyApp's mission is to give every Indian residential community a management system as good as the buildings they live in.",
};

export default function AboutPage() {
  return <AboutContent />;
}