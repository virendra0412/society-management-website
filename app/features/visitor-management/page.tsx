// Server Component — exports metadata for SEO.
// All rendering is delegated to VisitorManagementContent (client component).
import type { Metadata } from "next";
import VisitorManagementContent from "@/components/pages/VisitorManagementContent";

export const metadata: Metadata = {
  title: "Visitor Management — SocietyApp",
  description:
    "Gate security without hardware. Pre-approved OTP invites, walk-in logging, trusted visitor passes, and delivery auto-exit — all from one smartphone app.",
};

export default function VisitorManagementPage() {
  return <VisitorManagementContent />;
}
