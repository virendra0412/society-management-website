// home/claude/societyapp-build/app/features/issues/page.tsx 
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata = {
  title: "Issues & Complaints — SocietyApp",
  description: "Replace the WhatsApp complaint chain with a structured ticket system. Residents raise issues, admins assign to vendors, and everyone tracks resolution.",
};

export default function Page() {
  return (
    <FeaturePageTemplate
      badge="Issues & Complaints"
      emoji="🛠️"
      headline="No more complaints lost in"
      headlineAccent="WhatsApp threads. Ever."
      subline="A proper issue tracking system for residential societies. From pothole to plumber — every complaint logged, assigned, and resolved with full transparency."
      problems={[
        { icon: "📱", title: "Complaints die in WhatsApp", desc: "A resident complains about a broken lift in the group. The admin sees it, gets distracted, and forgets. Two weeks later the lift is still broken and the resident is furious." },
        { icon: "🤷", title: "No accountability", desc: "Who was supposed to fix the water pump? Which vendor was called? When? There's no way to trace what happened without scrolling through months of chats." },
        { icon: "⏰", title: "No resolution timeline", desc: "Residents have no idea when their complaint will be fixed. The waiting in the dark creates more frustration than the issue itself." },
      ]}
      flows={[
        { icon: "📝", label: "Resident raises a complaint", detail: "Fills in title, description, category (Electrical / Plumbing / Lift / Common Area / Security), and optional photo." },
        { icon: "🔔", label: "Admin notified instantly", detail: "Admin receives a push notification. The complaint appears in the Issues dashboard with status: Open." },
        { icon: "👷", label: "Admin assigns to vendor or committee", detail: "Admin selects a vendor from the approved list or assigns to a committee member. Sets an estimated resolution date." },
        { icon: "📊", label: "Status updates logged", detail: "As work progresses, status changes: Open → In Progress → Resolved. Each change pushes a notification to the resident." },
        { icon: "⭐", label: "Resident confirms and rates", detail: "On resolution, resident gets a prompt to confirm the fix and rate the resolution from 1–5 stars." },
      ]}
      adminView={{
        title: "⚙️ Admin / Committee View",
        points: [
          "Dashboard showing all open, in-progress, and resolved issues",
          "Filter issues by category, age, or assigned vendor",
          "Assign issues to specific committee members or vendors",
          "Add internal notes visible only to admins",
          "Set estimated resolution dates with resident notification",
          "Monthly resolution rate report for committee review",
        ],
      }}
      residentView={{
        title: "👤 Resident View",
        points: [
          "Raise a complaint with photo in under 60 seconds",
          "Track real-time status: Open → In Progress → Resolved",
          "Receive push notifications on every status change",
          "See who the issue was assigned to and when",
          "Rate the resolution quality after closure",
          "View history of all past complaints and resolutions",
        ],
      }}
      features={[
        { icon: "🏷️", title: "Category tagging", desc: "Electrical, Plumbing, Lift, Common Area, Security, Parking — pre-built categories with icons." },
        { icon: "📸", title: "Photo evidence", desc: "Residents attach photos when raising an issue. Guards can add photos on resolution." },
        { icon: "⚡", title: "Priority levels", desc: "Mark issues as Low, Medium, High, or Urgent. Urgent issues trigger priority alerts to admins." },
        { icon: "👷", title: "Vendor assignment", desc: "Maintain an approved vendor list. Assign issues to the right vendor directly in the app." },
        { icon: "📊", title: "Resolution analytics", desc: "Average resolution time, open issue count, and category trends — monthly report for committee." },
        { icon: "⭐", title: "Resident rating", desc: "Residents rate resolutions from 1–5 stars. A quality score visible to the committee." },
      ]}
      faqs={[
        { q: "Can a resident see other residents' complaints?", a: "Only the admin and committee can see all complaints. Residents see only their own complaints. Common area issues (like a broken lift) are shown to all residents on the community board." },
        { q: "What happens if an issue is reopened after resolution?", a: "The resident can reopen a closed issue within 7 days if the problem persists. The status reverts to 'Reopened' and the admin is notified immediately." },
        { q: "Can I track which vendor has which issues assigned?", a: "Yes. The Vendor View in the admin panel shows all issues assigned to each vendor, their average resolution time, and rating scores." },
        { q: "Is Issues & Complaints available on the Free plan?", a: "Issues & Complaints is available from the Standard plan (₹2,999/month) onwards. The Free plan includes basic notice board and visitor management." },
      ]}
      related={[
        { icon: "📢", title: "Notice Board", href: "/features/notices", desc: "Post tagged notices with push delivery to all residents." },
        { icon: "🏊", title: "Amenity Booking", href: "/features/amenities", desc: "Clubhouse, gym, and court booking with approval flow." },
        { icon: "💸", title: "Maintenance & Billing", href: "/features/maintenance", desc: "Auto-generate bills and track defaulters." },
      ]}
      ctaHeadline="End the WhatsApp complaint chain."
      ctaSub="Issues & Complaints is available from the Standard plan. Start with a free trial."
    />
  );
}