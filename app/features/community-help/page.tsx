// home/claude/societyapp-build/app/features/community-help/page.tsx 
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata = {
  title: "Community Help — SocietyApp",
  description: "A neighbour-to-neighbour service marketplace inside your society. Find a trusted plumber, maid referral, or tutor recommended by people in your own building.",
};

export default function Page() {
  return (
    <FeaturePageTemplate
      badge="Community Help"
      emoji="🤝"
      headline="Need a plumber? Ask your neighbours"
      headlineAccent="not a random app."
      subline="A trust-based service marketplace within your society. Share and discover recommendations for maids, plumbers, tutors, and more — from neighbours you actually know."
      problems={[
        { icon: "🤔", title: "No trusted vendor network in the society", desc: "Every new resident asks the same question in the WhatsApp group: 'Can anyone recommend a good plumber?' Answers get buried and lost." },
        { icon: "📋", title: "No record of past recommendations", desc: "A great recommendation from 2019 is gone. The WhatsApp scroll goes back only so far. New residents always start from scratch." },
        { icon: "⚠️", title: "Unknown vendors from apps are risky", desc: "Booking a stranger from a hyperlocal app is a gamble. Your neighbour's recommendation of someone they've used for years is gold." },
      ]}
      flows={[
        { icon: "✍️", label: "Resident posts a need or offer", detail: "Posts what they need (e.g., 'Looking for a good electrician') or what they offer/recommend (e.g., 'Rajan the plumber — highly reliable, 9876543210')." },
        { icon: "📂", label: "Post categorised automatically", detail: "Categories: Domestic Help, Plumbing, Electrical, Tutoring, Transport, Miscellaneous. Easy to find what you need." },
        { icon: "👍", label: "Neighbours upvote trusted contacts", detail: "Other residents who've used the same vendor can upvote the recommendation. Social proof within the community." },
        { icon: "💬", label: "In-app chat or contact sharing", detail: "Residents can contact the poster or the recommended vendor directly through the app or via phone." },
        { icon: "📊", label: "Most helpful vendors surface to top", detail: "Highest-upvoted recommendations stay visible. Low-quality or outdated posts fade over time." },
      ]}
      adminView={{
        title: "⚙️ Admin / Committee View",
        points: [
          "Moderate posts — approve, reject, or remove inappropriate content",
          "Pin verified society-wide vendor recommendations (e.g., official electrician)",
          "Set posting permissions (all residents or verified only)",
          "View post activity and engagement reports",
          "Create official society vendor directory (Pro plan)",
          "Receive reports of inappropriate vendor contact details",
        ],
      }}
      residentView={{
        title: "👤 Resident View",
        points: [
          "Browse help listings by category without posting",
          "Post a need or share a recommendation in 30 seconds",
          "Upvote vendors you've personally used and trusted",
          "Save contacts of vendors you want to remember",
          "Contact vendors or the recommending resident directly",
          "Set a request as 'Fulfilled' once your need is met",
        ],
      }}
      features={[
        { icon: "⭐", title: "Community upvotes", desc: "Residents upvote trusted recommendations. The most reliable vendors rise to the top organically." },
        { icon: "📂", title: "Smart categories", desc: "Domestic Help, Plumbing, Electrical, AC Repair, Tutoring, Car Wash, Transport, and more." },
        { icon: "🛡️", title: "Society-only visibility", desc: "All posts are visible only to verified residents of your society. No public listing." },
        { icon: "📌", title: "Admin-pinned vendors", desc: "Admins can pin official society vendor recommendations at the top of each category." },
        { icon: "🔍", title: "Search within community", desc: "Search by service type or vendor name. Find any recommendation in seconds." },
        { icon: "✅", title: "Request fulfilment tracking", desc: "Post a need; mark it fulfilled when sorted. Keeps the board clean and current." },
      ]}
      faqs={[
        { q: "Can anyone in the society post a recommendation?", a: "All verified residents can post. Admins can restrict posting to 'admin-approved' if they prefer a curated directory. Upvoting is always open to all residents." },
        { q: "Is this like a public marketplace?", a: "No. Community Help is completely private to your society. Only verified residents with the society's app can see posts. No external access." },
        { q: "Can vendors pay to be featured?", a: "No. SocietyApp is not an advertising platform. Recommendations are organic from residents. Admins can pin official society vendors at no charge." },
        { q: "Is Community Help available on the Free plan?", a: "Yes. Community Help is included in the Free plan for all societies, including those up to 50 units." },
      ]}
      related={[
        { icon: "📢", title: "Notice Board", href: "/features/notices", desc: "Post society-wide notices with push delivery." },
        { icon: "🎉", title: "Events & Polls", href: "/features/events", desc: "Plan and manage society events with RSVP." },
        { icon: "🛠️", title: "Issues & Complaints", href: "/features/issues", desc: "Track complaints from report to resolution." },
      ]}
      ctaHeadline="Build a trusted community, not just a building."
      ctaSub="Community Help is included in the Free plan. No credit card needed."
    />
  );
}