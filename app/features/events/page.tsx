// home/claude/societyapp-build/app/features/events/page.tsx 
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata = {
  title: "Events & Polls — SocietyApp",
  description: "Plan society events with RSVP, photo galleries, and calendar export. Run anonymous polls to get residents to actually vote on society decisions.",
};

export default function Page() {
  return (
    <FeaturePageTemplate
      badge="Events & Polls"
      emoji="🎉"
      headline="Society events with RSVP."
      headlineAccent="Polls residents actually answer."
      subline="From Diwali celebrations to maintenance levy votes — plan events with RSVP and share memories in a photo gallery. Run polls that are transparent, anonymous, and actually work."
      problems={[
        { icon: "📅", title: "Events announced, attendance unknown", desc: "You post on WhatsApp but have no idea how many people are coming. Catering for 50, but 120 show up (or 15)." },
        { icon: "🗳️", title: "Polls in WhatsApp groups are unreliable", desc: "Members vote multiple times, votes are lost, and the admin isn't even sure if the poll result is valid." },
        { icon: "📷", title: "Event photos scattered across phones", desc: "Society Diwali photos are on three different phones in four different WhatsApp albums. No central gallery." },
      ]}
      flows={[
        { icon: "📅", label: "Admin creates event", detail: "Enter event name, date, time, location, and description. Optionally set max RSVP count." },
        { icon: "🔔", label: "Residents notified", detail: "All residents receive a push notification with event details and RSVP buttons." },
        { icon: "👍", label: "Residents RSVP", detail: "One tap to RSVP as Attending or Not Attending. Admin sees live headcount." },
        { icon: "📸", label: "Photos uploaded after event", detail: "Admin and approved residents can upload event photos to the gallery. All residents can view and download." },
        { icon: "📤", label: "Calendar export", detail: "Residents can add any event to their Google Calendar or Apple Calendar with one tap." },
      ]}
      adminView={{
        title: "⚙️ Admin / Committee View",
        points: [
          "Create events with all details including location map link",
          "See real-time RSVP count and attendee list",
          "Set maximum RSVP capacity with auto-waitlist",
          "Upload event photos to community gallery",
          "Create anonymous or named polls with multiple choice options",
          "See poll results live as votes come in",
        ],
      }}
      residentView={{
        title: "👤 Resident View",
        points: [
          "See all upcoming events in a calendar view",
          "RSVP in one tap from push notification",
          "Add events to personal calendar (Google / Apple)",
          "View event photo gallery and download photos",
          "Vote in society polls — anonymous or named",
          "See poll results after voting or after closing",
        ],
      }}
      features={[
        { icon: "📋", title: "RSVP management", desc: "Live headcount, attendee list export, and optional capacity limit with waitlist." },
        { icon: "🗳️", title: "Anonymous polls", desc: "Votes are counted without revealing who voted for what. Perfect for sensitive society decisions." },
        { icon: "📸", title: "Event photo gallery", desc: "Centralised gallery for each event. Residents can upload, view, and download all photos." },
        { icon: "📅", title: "Calendar export", desc: "One tap to add any event to Google Calendar, Apple Calendar, or Outlook." },
        { icon: "📊", title: "Poll result charts", desc: "Visual pie and bar charts showing voting results in real time." },
        { icon: "🔔", title: "Event reminders", desc: "Automatic push reminder 24 hours and 1 hour before each event." },
      ]}
      faqs={[
        { q: "Can I restrict event RSVP to specific blocks or flats?", a: "Yes. On the Pro plan, you can create events visible only to specific blocks (e.g., Block A Diwali party). Standard plan events are society-wide." },
        { q: "Are poll results anonymous?", a: "You choose when creating the poll. Anonymous polls show only vote counts. Named polls show who voted for what, useful for AGM voting records." },
        { q: "Can residents upload their own photos to the event gallery?", a: "Admins can enable or disable resident photo uploads per event. By default, only admins upload photos, which you can then make downloadable by residents." },
        { q: "Can I export the attendee list for an event?", a: "Yes. Export the RSVP list as CSV with names, flat numbers, and RSVP status. Useful for catering planning and AGM attendance records." },
      ]}
      related={[
        { icon: "📢", title: "Notice Board", href: "/features/notices", desc: "Post tagged notices with push delivery to all residents." },
        { icon: "🏊", title: "Amenity Booking", href: "/features/amenities", desc: "Clubhouse and gym booking with slot selection." },
        { icon: "🤝", title: "Community Help", href: "/features/community-help", desc: "Neighbour-to-neighbour service marketplace." },
      ]}
      ctaHeadline="Plan your next society event the smart way."
      ctaSub="Events & Polls is available from the Standard plan. Free trial available."
    />
  );
}