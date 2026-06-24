// home/claude/societyapp-build/app/features/amenities/page.tsx 
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata = {
  title: "Amenity Booking — SocietyApp",
  description: "Book the clubhouse, gym, swimming pool, or badminton court from your phone. Slot selection, deposit handling, and approval flow — no WhatsApp message needed.",
};

export default function Page() {
  return (
    <FeaturePageTemplate
      badge="Amenity Booking"
      emoji="🏊"
      headline="Book the clubhouse from your phone."
      headlineAccent="No call. No WhatsApp. No double-booking."
      subline="Self-service amenity booking with real-time slot availability, deposit collection, and admin approval flow. Residents book in 30 seconds. Admins manage everything in one view."
      problems={[
        { icon: "📞", title: "Booking via phone call to secretary", desc: "Residents call the secretary to book the clubhouse. The secretary keeps a manual diary that gets lost or double-booked." },
        { icon: "💬", title: "Confirmation on WhatsApp", desc: "Confirmation is a WhatsApp text. No receipt. No reminder. Resident forgets, slot is wasted." },
        { icon: "💸", title: "Deposit tracking in a notebook", desc: "Security deposits for amenity bookings noted in a register. Disputes happen when the notebook is unclear or missing." },
      ]}
      flows={[
        { icon: "🏊", label: "Resident selects amenity", detail: "Opens Amenities screen, selects the facility (Clubhouse, Gym, Pool, Court), and picks a date." },
        { icon: "🕐", label: "Chooses available slot", detail: "Time slots shown in real time. Already-booked slots are greyed out. No double-booking possible." },
        { icon: "💳", label: "Pays deposit (if required)", detail: "Deposit amount configured by admin per amenity. Resident records payment method in app. Admin confirms." },
        { icon: "✅", label: "Admin approves booking", detail: "Admin receives notification and approves or rejects with a reason. Resident notified immediately." },
        { icon: "🔔", label: "Reminder sent 1 hour before", detail: "Automatic push reminder 1 hour before booking. Admin notified if booking expires unused." },
      ]}
      adminView={{
        title: "⚙️ Admin / Committee View",
        points: [
          "Configure amenities with name, capacity, and allowed hours",
          "Set slot duration (30 min, 1 hour, 2 hours)",
          "Set deposit amounts and refund policies per amenity",
          "View all upcoming bookings in a calendar view",
          "Approve or reject bookings with one tap",
          "Block amenity for cleaning or maintenance periods",
        ],
      }}
      residentView={{
        title: "👤 Resident View",
        points: [
          "Browse all available amenities with photos and rules",
          "See real-time slot availability for any date",
          "Book a slot in under 30 seconds",
          "Receive push confirmation and booking receipt",
          "Get a reminder 1 hour before the booking",
          "Cancel up to the admin-defined deadline for refund",
        ],
      }}
      features={[
        { icon: "📅", title: "Real-time slot availability", desc: "Live calendar showing booked and available slots. Prevents double-booking automatically." },
        { icon: "💰", title: "Deposit management", desc: "Per-amenity deposit amounts. Resident logs payment; admin confirms and tracks refunds." },
        { icon: "⏰", title: "Configurable slots", desc: "Set slot duration, opening hours, max bookings per resident per week — fully customisable." },
        { icon: "🚫", title: "Blackout dates", desc: "Block amenities for cleaning, maintenance, or special events so they can't be booked during those periods." },
        { icon: "📊", title: "Utilisation report", desc: "See which amenities are most used, peak hours, and revenue from deposits — monthly report." },
        { icon: "🔔", title: "Smart reminders", desc: "Booking confirmation, 1-hour-before reminder, and cancellation notification — all automated." },
      ]}
      faqs={[
        { q: "How many amenities can I set up?", a: "Unlimited amenities on Pro and Enterprise plans. You can set up separate booking systems for Clubhouse, Gym, Swimming Pool, Badminton Court, Party Hall, and any other facility." },
        { q: "Can I charge different rates for weekends?", a: "Yes. You can configure weekday and weekend deposit amounts separately for each amenity on the Pro plan." },
        { q: "What happens to unclaimed deposits if a booking is cancelled?", a: "The admin controls the refund policy per amenity. Cancellations before a defined cutoff get a full refund; late cancellations can be set to forfeit the deposit." },
        { q: "Can only the resident who booked use the amenity, or can they bring guests?", a: "This is configurable. You can set max guest count per booking. The resident remains responsible for the amenity during their slot." },
      ]}
      related={[
        { icon: "🅿️", title: "Parking Management", href: "/features/parking", desc: "Vehicle registry, slot allocation, and visitor parking." },
        { icon: "🎉", title: "Events & Polls", href: "/features/events", desc: "Plan society events with RSVP and photo galleries." },
        { icon: "🛠️", title: "Issues & Complaints", href: "/features/issues", desc: "Residents raise and track complaints to resolution." },
      ]}
      ctaHeadline="Self-service amenity booking for your society."
      ctaSub="Amenity Booking is available on the Pro plan. Free demo available."
    />
  );
}