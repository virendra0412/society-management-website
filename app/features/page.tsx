"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import FilteredModuleGrid from "@/components/FilteredModuleGrid";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const modules = [
  {
    icon: "🚪",
    title: "Visitor Management",
    href: "/features/visitor-management",
    tag: "Most loved",
    tagColor: "bg-green/10 text-green",
    tier: "Free",
    tierColor: "text-green",
    category: "Security",
    desc: "OTP-based gate entry, pre-approved visitor passes, trusted visitor list for maids and cooks, full chronological gate log with photos.",
    highlights: ["OTP entry flow", "Pre-approved passes", "Trusted visitors (maids, cooks)", "Guard mobile app", "Full gate log"],
  },
  {
    icon: "💸",
    title: "Maintenance & Billing",
    href: "/features/maintenance",
    tag: "Free tier",
    tagColor: "bg-teal/10 text-teal",
    tier: "Free",
    tierColor: "text-green",
    category: "Finance",
    desc: "Auto-generate monthly bills, send UPI payment links to residents, track defaulters, and issue digital receipts instantly.",
    highlights: ["Auto bill generation", "UPI payment links", "Defaulter dashboard", "Digital receipts", "Payment reminders"],
  },
  {
    icon: "📢",
    title: "Notice Board",
    href: "/features/notices",
    tag: "",
    tagColor: "",
    tier: "Free",
    tierColor: "text-green",
    category: "Community",
    desc: "Post pinned notices with push notifications, category tags (urgent, water, electricity, event), and read-receipt confirmation.",
    highlights: ["Push notifications", "Category tags", "Pin important notices", "Read receipts", "Scheduled notices"],
  },
  {
    icon: "🛠️",
    title: "Issues & Complaints",
    href: "/features/issues",
    tag: "",
    tagColor: "",
    tier: "Standard",
    tierColor: "text-teal",
    category: "Admin",
    desc: "Residents raise complaints with photos. Committee assigns to vendors. Everyone tracks status from open to closed with timestamps.",
    highlights: ["Photo attachments", "Vendor assignment", "Status tracking", "Resolution timeline", "Closure photos"],
  },
  {
    icon: "🎉",
    title: "Events & Polls",
    href: "/features/events",
    tag: "",
    tagColor: "",
    tier: "Standard",
    tierColor: "text-teal",
    category: "Community",
    desc: "Create society events with RSVP, collect poll votes, share photo galleries after events, and export to calendar.",
    highlights: ["RSVP management", "Community polls", "Photo galleries", "Calendar export", "Attendance tracking"],
  },
  {
    icon: "🏊",
    title: "Amenity Booking",
    href: "/features/amenities",
    tag: "Pro",
    tagColor: "bg-navy/10 text-navy",
    tier: "Pro",
    tierColor: "text-navy",
    category: "Facilities",
    desc: "Residents book clubhouse, gym, rooftop, or pool with time slots. Committee approves, collects deposits, manages conflicts.",
    highlights: ["Time slot booking", "Deposit collection", "Committee approval", "Conflict prevention", "Booking history"],
  },
  {
    icon: "🤝",
    title: "Community Help",
    href: "/features/community-help",
    tag: "",
    tagColor: "",
    tier: "Free",
    tierColor: "text-green",
    category: "Community",
    desc: "Neighbour-to-neighbour service marketplace. Residents offer and request help — from tutoring to tool lending.",
    highlights: ["Service listings", "Request & offer", "Rating system", "In-app chat", "Category browse"],
  },
  {
    icon: "🅿️",
    title: "Parking Management",
    href: "/features/parking",
    tag: "",
    tagColor: "",
    tier: "Standard",
    tierColor: "text-teal",
    category: "Facilities",
    desc: "Maintain a slot registry, issue guest parking permits, manage two-wheeler and four-wheeler records per flat.",
    highlights: ["Slot registry", "Guest permits", "Vehicle records", "Permit expiry alerts", "Flat-wise view"],
  },
  {
    icon: "🌐",
    title: "Multilingual UI",
    href: "/features",
    tag: "Industry first",
    tagColor: "bg-amber/10 text-amber",
    tier: "All plans",
    tierColor: "text-amber",
    category: "Admin",
    desc: "Full UI in Hindi, Gujarati, Tamil, Marathi, Punjabi, and English — every resident can use the app in their language.",
    highlights: ["6 Indian languages", "Per-user preference", "Auto-detect option", "RTL support planned", "Secretary can set default"],
  },
  {
    icon: "📊",
    title: "Analytics & Reports",
    href: "/features",
    tag: "",
    tagColor: "",
    tier: "Pro",
    tierColor: "text-navy",
    category: "Admin",
    desc: "Society health dashboard — maintenance collection rate, visitor trends, complaint resolution time, amenity utilisation.",
    highlights: ["Collection rate chart", "Defaulter trend", "Complaint heatmap", "Amenity utilisation", "Exportable CSV"],
  },
  {
    icon: "💬",
    title: "Resident Directory",
    href: "/features",
    tag: "",
    tagColor: "",
    tier: "Free",
    tierColor: "text-green",
    category: "Community",
    desc: "Verified resident list with flat numbers, family members, vehicle details, and emergency contacts — all in one searchable directory.",
    highlights: ["Flat-wise view", "Family members", "Vehicle details", "Emergency contacts", "Role-based access"],
  },
  {
    icon: "🔔",
    title: "Notifications Engine",
    href: "/features",
    tag: "",
    tagColor: "",
    tier: "All plans",
    tierColor: "text-amber",
    category: "Security",
    desc: "Push, SMS, and WhatsApp notifications for every event — visitor arrival, payment due, notice posted, complaint updated.",
    highlights: ["Push notifications", "SMS fallback", "WhatsApp alerts", "Per-user preferences", "Do not disturb hours"],
  },
];

export default function FeaturesPage() {
  const { tr } = useTranslation();

  const stats = [
    { value: "22", label: tr.features_stat_modules },
    { value: "6", label: tr.features_stat_languages },
    { value: "85K+", label: tr.features_stat_residents },
    { value: "4.8★", label: tr.features_stat_rating },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-navy py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-[100px]" />
          <div className="absolute left-0 h-full w-1 bg-teal top-0" />
          <div className="max-w-6xl mx-auto px-5 text-center relative">
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-3.5 py-1.5 mb-6">
              <span className="text-teal text-xs font-bold uppercase tracking-wide">22 modules · one platform</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Everything your society needs.
              <br />
              <span className="text-teal">Nothing it doesn't.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              From visitor gate entry to maintenance bills — every feature built for
              Indian residential communities. Modular pricing means you only pay for
              what you use.
            </p>

            {/* Stats row */}
            <div className="flex justify-center gap-10 flex-wrap mb-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-white">
                    <AnimatedCounter value={s.value} />
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25"
            >
              {tr.common_register_free} — {tr.common_no_credit_card} <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* Tier legend */}
        <section className="bg-white border-b border-gray-100 py-3">
          <div className="max-w-6xl mx-auto px-5 flex items-center justify-center gap-6 flex-wrap">
            <span className="text-gray-400 text-xs font-medium">{tr.features_tier_label}</span>
            {[
              { label: "Free", color: "bg-green/10 text-green" },
              { label: "Standard", color: "bg-teal/10 text-teal" },
              { label: "Pro", color: "bg-navy/10 text-navy" },
              { label: "All Plans", color: "bg-amber/10 text-amber" },
            ].map((t) => (
              <span key={t.label} className={`text-xs font-semibold px-3 py-1 rounded-full ${t.color}`}>
                {t.label}
              </span>
            ))}
          </div>
        </section>

        {/* Modules grid */}
        <section className="py-16 bg-light">
          <div className="max-w-6xl mx-auto px-5">
            <FilteredModuleGrid modules={modules} />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-navy text-center relative overflow-hidden">
          <div className="absolute left-0 h-full w-1 bg-teal top-0" />
          <div className="max-w-xl mx-auto px-5 relative">
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              {tr.features_bottom_h}
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              {tr.features_bottom_sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/register"
                className="px-6 py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25"
              >
                {tr.common_register_free} →
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-xl border border-white/20 text-white/80 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors"
              >
                {tr.common_view_pricing}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}