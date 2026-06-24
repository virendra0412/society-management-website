// home/claude/societyapp-build/app/features/notices/page.tsx
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata = {
  title: "Notice Board — SocietyApp",
  description: "Replace the WhatsApp group broadcast with a structured notice board. Tagged notices, push delivery, pinning, and full resident read receipts.",
};

export default function Page() {
  return (
    <FeaturePageTemplate
      badge="Notice Board"
      emoji="📢"
      headline="Stop spamming your WhatsApp group."
      headlineAccent="Notices that actually get read."
      subline="Tagged, push-delivered notices that stay organised. Urgent water cuts, finance reminders, event announcements — each in their own lane."
      problems={[
        { icon: "😵", title: "Notices drown in WhatsApp chats", desc: "Important water cut notices get buried under good morning messages and cricket scores. Residents miss critical information." },
        { icon: "🗂️", title: "No structure or categories", desc: "Finance, events, and urgent alerts all mixed in the same scroll. Impossible to find a notice from last week." },
        { icon: "📵", title: "No proof of delivery", desc: "Admins have no idea if residents actually read the notice. Disputes happen because someone claimed they 'never got it'." },
      ]}
      flows={[
        { icon: "✍️", label: "Admin writes notice", detail: "Enter title, body, and choose a tag: Urgent / Finance / Event / General / Maintenance." },
        { icon: "📌", label: "Pin important notices", detail: "Critical notices (water cuts, emergency) can be pinned to the top of the board so they're always visible." },
        { icon: "🔔", label: "Push notification fires instantly", detail: "All residents receive a push notification immediately. The tag determines the notification sound and priority." },
        { icon: "📖", label: "Residents read and acknowledge", detail: "Residents tap the notification to open the notice. Admins can see read-receipt counts per notice." },
        { icon: "🗃️", label: "Notice archived automatically", detail: "Past notices stay searchable in the archive. Residents can search by keyword or filter by tag." },
      ]}
      adminView={{
        title: "⚙️ Admin / Committee View",
        points: [
          "Post notices with rich text (bold, lists, links)",
          "Choose from 5 tags: Urgent, Finance, Event, General, Maintenance",
          "Pin up to 3 notices to the top of the board",
          "Schedule notices to publish at a future date/time",
          "See read-receipt count per notice",
          "Edit or delete notices after publishing",
        ],
      }}
      residentView={{
        title: "👤 Resident View",
        points: [
          "See all notices with tag colour-coding",
          "Pinned notices always at the top",
          "Filter notices by tag (Finance, Events, etc.)",
          "Full archive searchable by keyword",
          "Get instant push notification for new notices",
          "Share notice via WhatsApp or email",
        ],
      }}
      features={[
        { icon: "🏷️", title: "Tagged notices", desc: "5 standard tags with colour codes — Urgent (red), Finance (amber), Event (teal), General (gray), Maintenance (blue)." },
        { icon: "📌", title: "Pinned notices", desc: "Pin up to 3 critical notices permanently at the top of the board for all residents." },
        { icon: "📅", title: "Scheduled publishing", desc: "Write a notice now, set it to publish at 6 PM today. Perfect for after-hours announcements." },
        { icon: "👁️", title: "Read receipts", desc: "See how many residents have opened each notice. Identify who hasn't read urgent alerts." },
        { icon: "🔍", title: "Searchable archive", desc: "Every notice ever posted is searchable. Find that water schedule from 3 months ago in seconds." },
        { icon: "🌐", title: "Multilingual notices", desc: "Post notices in English, Hindi, Gujarati, or any of the 6 supported languages. Each resident sees it in their preferred language." },
      ]}
      faqs={[
        { q: "Can I post notices in Hindi or Gujarati?", a: "Yes. You can write notices in any of SocietyApp's 6 supported languages. Residents who've set Hindi as their app language will see Hindi notices; English-preference residents see English. The admin chooses the language when posting." },
        { q: "Is there a limit to how many notices I can post?", a: "No limit. Post as many notices as your society needs. Notices are archived automatically after 90 days on the Free plan, and kept indefinitely on paid plans." },
        { q: "Can residents reply to or comment on notices?", a: "On the Standard plan and above, residents can react to notices with emoji reactions (👍, ❤️, etc.). Comments/replies are available on the Pro plan to keep discussions organised." },
        { q: "Can committee members post notices, or only the main admin?", a: "On the Standard plan and above, you can grant committee members the 'Notice Board Editor' permission so they can post and manage notices independently." },
      ]}
      related={[
        { icon: "🎉", title: "Events & Polls", href: "/features/events", desc: "RSVP events, photo galleries, and resident polls." },
        { icon: "🛠️", title: "Issues & Complaints", href: "/features/issues", desc: "Structured complaint lifecycle for residents." },
        { icon: "🤝", title: "Community Help", href: "/features/community-help", desc: "Neighbour-to-neighbour service marketplace." },
      ]}
      ctaHeadline="Give your society a proper notice board."
      ctaSub="Notice Board is included in the Free plan. No WhatsApp group needed."
    />
  );
}