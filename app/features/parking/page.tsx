// home/claude/societyapp-build/app/features/parking/page.tsx 
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export const metadata = {
  title: "Parking Management — SocietyApp",
  description: "Vehicle registry, slot allocation, permit management, and visitor parking — manage your society's parking completely from your phone.",
};

export default function Page() {
  return (
    <FeaturePageTemplate
      badge="Parking Management"
      emoji="🅿️"
      headline="Who parked in my spot?"
      headlineAccent="Never ask that question again."
      subline="A complete vehicle and slot management system for residential societies. Register every vehicle, assign every slot, and handle visitor parking — all without a paper register."
      problems={[
        { icon: "🚗", title: "Unknown vehicles in reserved slots", desc: "Residents park in each other's designated spots. There's no easy way for the guard to know who the slot belongs to." },
        { icon: "📋", title: "Vehicle register is a paper notebook", desc: "The society vehicle list is handwritten and out of date. When a new resident moves in, their car details aren't added for months." },
        { icon: "🤷", title: "Visitor parking has no system", desc: "Visitors park wherever, blocking exits and driveways. Guards don't know who to call. Chaos ensues." },
      ]}
      flows={[
        { icon: "🚗", label: "Resident registers vehicle", detail: "Adds vehicle number, type (car/bike/commercial), make, model, and colour. Linked to their flat automatically." },
        { icon: "🅿️", label: "Admin assigns parking slot", detail: "Admin assigns specific slot numbers to flats. If a flat has 2 vehicles, they get 2 slots." },
        { icon: "✅", label: "Guard verifies vehicle at entry", detail: "Guard looks up vehicle number. App shows slot assignment and resident's name. Unknown vehicles flagged." },
        { icon: "🔖", label: "Visitor parking pass issued", detail: "Guard issues a time-limited visitor parking pass (2–24 hours) linked to the host flat." },
        { icon: "📊", label: "Parking violation logged", detail: "If a vehicle is in the wrong slot, guard logs a violation. Admin and resident notified immediately." },
      ]}
      adminView={{
        title: "⚙️ Admin / Committee View",
        points: [
          "View complete vehicle registry with flat-to-vehicle mapping",
          "Assign, reassign, or deactivate parking slots",
          "Set limits on vehicles per flat",
          "View all current visitor parking passes",
          "Log and track parking violations",
          "Export vehicle registry for security audit",
        ],
      }}
      residentView={{
        title: "👤 Resident View",
        points: [
          "Register up to the flat's permitted number of vehicles",
          "See their assigned slot number in the app",
          "Request a visitor parking pass for guests",
          "Get notified if a violation is logged against their slot",
          "Update vehicle details when changing cars",
          "View parking rules and visitor pass policy",
        ],
      }}
      features={[
        { icon: "🚗", title: "Vehicle registry", desc: "Flat-wise vehicle list with number, type, make, and model. Searchable by guard in seconds." },
        { icon: "🅿️", title: "Slot allocation", desc: "Assign specific slot numbers to specific flats. Clear, digital record replaces paper register." },
        { icon: "🔖", title: "Visitor parking pass", desc: "Timed passes (2h to 24h) for visitor vehicles, linked to host flat. Guard issues in 15 seconds." },
        { icon: "⚠️", title: "Violation logging", desc: "Log wrong-slot or unauthorised parking with photo. Admin and violating resident notified." },
        { icon: "📊", title: "Occupancy dashboard", desc: "See which slots are occupied, empty, or reserved at any moment. Helps guards manage overflow." },
        { icon: "🔍", title: "Instant vehicle lookup", desc: "Guard types a plate number and instantly sees the flat, resident, and allocated slot." },
      ]}
      faqs={[
        { q: "Can the guard look up a vehicle number in real time?", a: "Yes. The guard's app has a search bar — type the first 4 characters of a number plate and the vehicle's flat assignment and resident name appear instantly." },
        { q: "What happens when a new resident moves in?", a: "The new resident registers their vehicle during onboarding, or the admin adds it directly. The previous resident's vehicle is automatically removed when their profile is deactivated." },
        { q: "Can I manage bicycle and commercial vehicle parking separately?", a: "Yes. Vehicle type (car, bike, bicycle, commercial) is tracked separately. You can allocate different zones for each vehicle type." },
        { q: "Is Parking Management available on the Free plan?", a: "Parking Management is available from the Standard plan (₹2,999/month). Basic vehicle registration is available on Free." },
      ]}
      related={[
        { icon: "🚪", title: "Visitor Management", href: "/features/visitor-management", desc: "Gate entry logging with OTP and walk-in flows." },
        { icon: "🏊", title: "Amenity Booking", href: "/features/amenities", desc: "Self-service booking for shared facilities." },
        { icon: "🛠️", title: "Issues & Complaints", href: "/features/issues", desc: "Track parking disputes from report to resolution." },
      ]}
      ctaHeadline="A proper parking management system for your society."
      ctaSub="Parking Management is available from the Standard plan. Free trial available."
    />
  );
}