"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── All 22 modules ───────────────────────────────────────────────────────────
const ALL_MODULES = [
  // SECURITY
  {
    icon: "🚪", title: "Visitor Management", href: "/features/visitor-management",
    category: "Security", tier: "Free",
    badge: "Most Loved", badgeColor: "bg-green/15 text-green",
    desc: "OTP gate entry, pre-approved passes, trusted maids & drivers — full gate log with no hardware.",
    highlights: ["4 visitor flows", "Zero hardware needed", "Auto delivery exit timer"],
  },
  {
    icon: "👮", title: "Security Guard Portal", href: "/features/visitor-management",
    category: "Security", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Dedicated UX for guards — walk-in logging, OTP verify, trusted-pass check-in.",
    highlights: ["Same app as residents", "Walk-in + OTP flows", "Real-time approvals"],
  },
  // FINANCE
  {
    icon: "💸", title: "Maintenance & Billing", href: "/features/maintenance",
    category: "Finance", tier: "Free",
    badge: "Free Tier", badgeColor: "bg-teal/15 text-teal",
    desc: "Auto-generate monthly bills, track payments via UPI/cash/NEFT, identify defaulters.",
    highlights: ["Auto bill generation", "Defaulter report", "Digital receipts"],
  },
  {
    icon: "📊", title: "Payment Analytics", href: "/features/maintenance",
    category: "Finance", tier: "Standard",
    badge: "", badgeColor: "",
    desc: "Collection rates, month-on-month trends, outstanding amounts at a glance.",
    highlights: ["Collection dashboard", "Trend charts", "Export reports"],
  },
  // COMMUNITY
  {
    icon: "📢", title: "Notice Board", href: "/features/notices",
    category: "Community", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Pinned notices with push delivery, category tags (Urgent / Finance / Event), read receipts.",
    highlights: ["Push to all residents", "5 tag types", "Pin & schedule"],
  },
  {
    icon: "🛠️", title: "Issues & Complaints", href: "/features/issues",
    category: "Community", tier: "Standard",
    badge: "", badgeColor: "",
    desc: "Raise complaints with photos, assign to vendors, track status from open to resolved.",
    highlights: ["Photo attachments", "Vendor assignment", "Full audit trail"],
  },
  {
    icon: "🎉", title: "Events & Polls", href: "/features/events",
    category: "Community", tier: "Standard",
    badge: "", badgeColor: "",
    desc: "Society events with RSVP, calendar export, photo galleries, and voting polls.",
    highlights: ["RSVP tracking", "Anonymous polls", "Photo gallery"],
  },
  {
    icon: "🗳️", title: "Community Polls", href: "/features/events",
    category: "Community", tier: "Standard",
    badge: "", badgeColor: "",
    desc: "Put society decisions to a vote — anonymous or named, with live result charts.",
    highlights: ["Anonymous voting", "Live results", "Multiple choice"],
  },
  {
    icon: "🤝", title: "Community Help", href: "/features/community-help",
    category: "Community", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Neighbour-to-neighbour marketplace — share plumbers, tutors, cooks, and more.",
    highlights: ["8 help categories", "Resident reviews", "Post & respond"],
  },
  // FACILITIES
  {
    icon: "🏊", title: "Amenity Booking", href: "/features/amenities",
    category: "Facilities", tier: "Pro",
    badge: "Pro", badgeColor: "bg-amber/15 text-amber",
    desc: "Book clubhouse, gym, or courts with time-slot selection, deposit handling, and admin approval.",
    highlights: ["Slot scheduler", "Deposit collection", "Admin approval flow"],
  },
  {
    icon: "🅿️", title: "Parking Management", href: "/features/parking",
    category: "Facilities", tier: "Standard",
    badge: "", badgeColor: "",
    desc: "Vehicle registry, slot allocation, guest parking permits, two-wheeler records.",
    highlights: ["Slot allocation", "Guest permits", "Vehicle registry"],
  },
  // ADMIN
  {
    icon: "👥", title: "Member Management", href: "/features",
    category: "Admin", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Resident join approval, flat-to-member mapping, multiple members per flat.",
    highlights: ["Approval workflow", "Flat mapping", "Multi-family"],
  },
  {
    icon: "🛡️", title: "Committee RBAC", href: "/features",
    category: "Admin", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Assign fine-grained permissions to Treasurer, Secretary, Security Head — each sees only what they need.",
    highlights: ["6 preset roles", "Module-level permissions", "Custom roles"],
  },
  {
    icon: "🔗", title: "Invite Links & QR", href: "/features",
    category: "Admin", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Share a QR code or link to let residents self-register with society pre-filled. 7-day expiry.",
    highlights: ["QR code + link", "Pre-filled form", "7-day validity"],
  },
  {
    icon: "🏘️", title: "Multi-Society", href: "/features",
    category: "Admin", tier: "Free",
    badge: "", badgeColor: "",
    desc: "One login to manage or live in multiple societies. Switch context with a tap.",
    highlights: ["Instant switch", "Separate permissions", "Unified inbox"],
  },
  {
    icon: "📦", title: "Subscription Plans", href: "/pricing",
    category: "Admin", tier: "All",
    badge: "", badgeColor: "",
    desc: "Free, Standard, Pro, and Enterprise plans — upgrade in-app, no sales call required.",
    highlights: ["Free forever tier", "Monthly billing", "Instant upgrade"],
  },
  {
    icon: "🔔", title: "Push Notifications", href: "/features",
    category: "Admin", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Real-time alerts for visitor arrival, bill due, notice posted, complaint updated.",
    highlights: ["Instant delivery", "Per-event control", "Daily digest"],
  },
  {
    icon: "📋", title: "Audit Log", href: "/features",
    category: "Admin", tier: "Standard",
    badge: "", badgeColor: "",
    desc: "Tamper-evident activity log for every admin action — approve, reject, publish, delete.",
    highlights: ["Immutable log", "Export CSV", "Per-user filter"],
  },
  {
    icon: "🌐", title: "Multilingual UI", href: "/features",
    category: "Admin", tier: "Free",
    badge: "India-first", badgeColor: "bg-amber/15 text-amber",
    desc: "Full app in English, Hindi, Gujarati, Tamil, Marathi, and Punjabi.",
    highlights: ["6 languages", "Instant switch", "RTL-ready"],
  },
  {
    icon: "🏢", title: "Society Registration", href: "/register",
    category: "Admin", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Secretary registers online, superadmin approves, credentials emailed instantly. Live in < 5 min.",
    highlights: ["Online registration", "Auto approval email", "Free to start"],
  },
  {
    icon: "⚙️", title: "Profile & Settings", href: "/features",
    category: "Admin", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Notification preferences, language selector, password change, flat details — all in-app.",
    highlights: ["Notification control", "Language switch", "In-app settings"],
  },
  {
    icon: "📨", title: "Notification Digest", href: "/features",
    category: "Admin", tier: "Free",
    badge: "", badgeColor: "",
    desc: "Daily 9 PM digest for trusted visitor entries — one notification, not ten.",
    highlights: ["9 PM daily", "Trusted visitors only", "Reduces noise"],
  },
];

const CATS = ["All", "Security", "Finance", "Community", "Facilities", "Admin"];
const CAT_ICONS: Record<string, string> = {
  All: "✦", Security: "🔒", Finance: "💳", Community: "👥", Facilities: "🏢", Admin: "⚙️",
};

export default function FeaturesTeaser() {
  const [active, setActive] = useState("All");

  const visible = active === "All" ? ALL_MODULES : ALL_MODULES.filter((m) => m.category === active);

  return (
    <section className="py-20 bg-light" id="features">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal text-xs font-bold uppercase tracking-widest mb-3">
            22 modules · one app
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            Everything your society needs.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-base">
            From the gate to the boardroom — every feature your RWA actually needs,
            built into one mobile-first platform. Browse by category below.
          </p>
        </div>

        {/* Category filter strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATS.map((cat) => {
            const isActive = active === cat;
            const count = cat === "All" ? ALL_MODULES.length : ALL_MODULES.filter((m) => m.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-navy text-white shadow-lg shadow-navy/20"
                    : "bg-white text-gray-500 hover:text-navy border border-gray-200 hover:border-navy/30"
                }`}
              >
                <span className="text-base leading-none">{CAT_ICONS[cat]}</span>
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Module cards grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((m) => (
              <motion.div
                key={m.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ type: "spring", duration: 0.3, bounce: 0.1 }}
              >
                <Link
                  href={m.href}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-teal/40 hover:shadow-lg transition-all flex flex-col h-full"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{m.icon}</span>
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {m.badge && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.badgeColor}`}>
                          {m.badge}
                        </span>
                      )}
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        m.tier === "Free" ? "bg-green/10 text-green" :
                        m.tier === "Standard" ? "bg-teal/10 text-teal" :
                        m.tier === "Pro" ? "bg-amber/10 text-amber" : "bg-gray-100 text-gray-400"
                      }`}>
                        {m.tier}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-navy text-base mb-1.5 group-hover:text-teal transition-colors">
                    {m.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 flex-1">{m.desc}</p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-3">
                    {m.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more */}
                  <div className="flex items-center gap-1 text-teal text-xs font-semibold group-hover:gap-2 transition-all mt-auto">
                    Learn more <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 text-sm mb-4">
            All features work together in one app — no integrations, no extra costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-colors shadow-lg shadow-navy/20"
            >
              Explore all 22 modules <ArrowRight size={15} />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-teal text-teal font-semibold text-sm hover:bg-teal hover:text-white transition-all"
            >
              Start Free — No Credit Card
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}