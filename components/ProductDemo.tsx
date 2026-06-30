// components/ProductDemo.tsx
// 3 scrollable demo sections as per spec:
// Visitor Management / Maintenance / Community
// Each: phone mockup left, feature list right (alternating on desktop)

"use client";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const demos = [
  {
    id: "visitor",
    label: "Visitor Management",
    emoji: "🚪",
    color: "teal",
    headline: "Know who enters before they walk in.",
    sub: "Four gate entry flows that work entirely on smartphones — no hardware, no QR reader device, no installation required.",
    href: "/features/visitor-management",
    features: [
      "OTP-based pre-approved invite — resident shares code with visitor",
      "Walk-in logging with real-time push to resident's phone",
      "Trusted passes for maids, cooks and drivers with schedule",
      "Delivery auto-exit timer — no manual guard follow-up needed",
      "Full chronological gate log with timestamps and approval records",
    ],
    phone: {
      header: { label: "Gate Entry · OTP Verify", sub: "Guard view" },
      card1: { icon: "🔢", title: "Enter visitor OTP", sub: "Ravi Kumar · Flat 204" },
      card2: { icon: "✅", title: "Entry approved", sub: "10:42 AM · 27 Jun" },
      card3: { icon: "🚪", title: "Exit logged", sub: "11:14 AM · 32 min visit" },
      badge: { icon: "🚪", value: "24", label: "Visitors today" },
    },
  },
  {
    id: "maintenance",
    label: "Maintenance & Billing",
    emoji: "💸",
    color: "green",
    headline: "End the monthly fee collection chaos.",
    sub: "Generate maintenance bills once, push to all residents automatically, and track who has paid — with a full defaulter report.",
    href: "/features/maintenance",
    features: [
      "One-click bill generation for all flats or specific wings",
      "Residents see breakdown: base + penalty + discount = total due",
      "Admin marks payment received → receipt generated instantly",
      "Defaulter list with contact info and overdue amount",
      "Bill history with payment method, transaction ID, and receipt",
    ],
    phone: {
      header: { label: "Maintenance Bills", sub: "June 2025" },
      card1: { icon: "💸", title: "₹2,400 due", sub: "June Maintenance · Due 10th" },
      card2: { icon: "✅", title: "₹3,100 collected", sub: "Flat 201 · Paid via UPI" },
      card3: { icon: "⚠️", title: "12 defaulters", sub: "₹28,800 overdue total" },
      badge: { icon: "✅", value: "₹1.2L", label: "This month" },
    },
  },
  {
    id: "community",
    label: "Community & Notices",
    emoji: "📢",
    color: "amber",
    headline: "Replace the WhatsApp group chaos.",
    sub: "Structured notices with tags, polls where residents actually vote, and a community help board — all in one place.",
    href: "/features/notices",
    features: [
      "Tagged notices: Urgent / Finance / Event / Maintenance / General",
      "Pinned notices stay top of the board with admin controls",
      "Push delivery — residents get notified even without opening the app",
      "Community Help: resident-to-resident service requests and offers",
      "Polls with real-time results charts — anonymous or named voting",
    ],
    phone: {
      header: { label: "Notice Board", sub: "All notices" },
      card1: { icon: "📢", title: "Water cut Saturday", sub: "URGENT · Posted by Secretary" },
      card2: { icon: "📊", title: "Parking poll: 84% voted", sub: "Motion passed · 2-wheeler lot" },
      card3: { icon: "🤝", title: "Plumber referral", sub: "Ankit Shah · Flat 302" },
      badge: { icon: "📢", value: "3", label: "New notices" },
    },
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; pill: string }> = {
  teal:  { bg: "bg-teal/10",  text: "text-teal",  border: "border-teal/30",  pill: "bg-teal" },
  green: { bg: "bg-green/10", text: "text-green", border: "border-green/30", pill: "bg-green" },
  amber: { bg: "bg-amber/10", text: "text-amber", border: "border-amber/30", pill: "bg-amber" },
};

export default function ProductDemo() {
  const { tr } = useTranslation();

  return (
    <section className="py-24 bg-light">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">
          {tr.home_product_eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          {tr.home_product_heading}
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-20 leading-relaxed">
          {tr.home_product_sub}
        </p>

        {/* Demo sections */}
        <div className="space-y-32">
          {demos.map((demo, idx) => {
            const c = colorMap[demo.color];
            const isEven = idx % 2 === 0;

            return (
              <div
                key={demo.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Phone mockup */}
                <div className={`flex justify-center ${isEven ? "" : "lg:justify-end"}`}>
                  <div className="relative">
                    <div className="w-64 bg-[#0a1628] rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/30 overflow-hidden p-1.5">
                      {/* Notch */}
                      <div className="flex justify-center mb-2 pt-1">
                        <div className="w-20 h-5 bg-black rounded-full" />
                      </div>

                      {/* App header */}
                      <div className={`${c.pill} mx-1 rounded-xl px-3 py-2.5 mb-2`}>
                        <p className="text-white/70 text-[10px] mb-0.5">{demo.phone.header.sub}</p>
                        <p className="text-white font-display font-bold text-sm">{demo.phone.header.label}</p>
                      </div>

                      {/* Cards */}
                      <div className="space-y-1.5 px-1 pb-2">
                        {[demo.phone.card1, demo.phone.card2, demo.phone.card3].map((card, ci) => (
                          <div key={ci} className="bg-white/5 rounded-xl px-3 py-2.5 flex items-start gap-2.5">
                            <span className="text-lg mt-0.5">{card.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-[11px] font-semibold leading-tight">{card.title}</p>
                              <p className="text-white/40 text-[10px] mt-0.5">{card.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom nav */}
                      <div className="bg-white/5 mx-1 rounded-xl px-2 py-2 flex justify-around">
                        {["🏠", "👁️", "💬", "📋", "⚙️"].map((ic, i) => (
                          <span key={i} className={`text-base ${i === 0 ? "opacity-100" : "opacity-30"}`}>{ic}</span>
                        ))}
                      </div>

                      {/* Home bar */}
                      <div className="flex justify-center mt-2 pb-1">
                        <div className="w-24 h-1 bg-white/20 rounded-full" />
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -right-6 top-16 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2">
                      <span className="text-xl">{demo.phone.badge.icon}</span>
                      <div>
                        <p className="text-navy font-bold text-sm leading-none">{demo.phone.badge.value}</p>
                        <p className="text-gray-400 text-[10px]">{demo.phone.badge.label}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Label */}
                  <div className={`inline-flex items-center gap-2 ${c.bg} border ${c.border} rounded-full px-3 py-1 mb-5`}>
                    <span className="text-base">{demo.emoji}</span>
                    <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>{demo.label}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                    {demo.headline}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8">{demo.sub}</p>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8">
                    {demo.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${c.pill} flex-shrink-0 flex items-center justify-center mt-0.5`}>
                          <Check size={11} className="text-white" />
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={demo.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${c.text} hover:gap-3 transition-all`}
                  >
                    Learn more about {demo.label} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}