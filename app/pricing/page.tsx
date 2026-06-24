//app/pricing/page.tsx

"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: { monthly: 0, annual: 0 },
    units: "Up to 50 units",
    badge: null,
    color: "border-gray-200",
    cta: { label: "Get Started Free", href: "/register", style: "border border-navy text-navy hover:bg-navy hover:text-white" },
    features: [
      "✅ Visitor Management (all 4 flows)",
      "✅ Notice Board",
      "✅ Community Help",
      "✅ Basic Maintenance billing",
      "✅ 1 Admin account",
      "✅ Push notifications",
      "✅ 6 Indian language UI",
      "❌ Issues & Complaints",
      "❌ Events & Polls",
      "❌ Parking Management",
    ],
  },
  {
    name: "Standard",
    price: { monthly: 2999, annual: 2499 },
    units: "Up to 200 units",
    badge: "Most Popular",
    color: "border-teal ring-2 ring-teal",
    cta: { label: "Start Standard Trial", href: "/register?plan=standard", style: "bg-teal text-white hover:bg-teal/90" },
    features: [
      "✅ Everything in Free",
      "✅ Issues & Complaints",
      "✅ Events & Polls",
      "✅ Parking Management",
      "✅ 3 Committee role accounts",
      "✅ Email notifications",
      "✅ Payment defaulter reports",
      "✅ Priority email support",
      "❌ Amenity Booking",
      "❌ Advanced Analytics",
    ],
  },
  {
    name: "Pro",
    price: { monthly: 5999, annual: 4999 },
    units: "Up to 500 units",
    badge: null,
    color: "border-gray-200",
    cta: { label: "Start Pro Trial", href: "/register?plan=pro", style: "bg-navy text-white hover:bg-navy/90" },
    features: [
      "✅ Everything in Standard",
      "✅ Amenity Booking",
      "✅ Advanced Analytics dashboard",
      "✅ Priority support (phone + email)",
      "✅ Unlimited Committee members",
      "✅ Custom branding (logo + colors)",
      "✅ API Access",
      "✅ Audit logs",
      "✅ Custom notification templates",
      "✅ Multi-society admin",
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    units: "500+ units",
    badge: null,
    color: "border-gray-200",
    cta: { label: "Contact Sales", href: "/contact", style: "border border-navy text-navy hover:bg-navy hover:text-white" },
    features: [
      "✅ Everything in Pro",
      "✅ Dedicated server infrastructure",
      "✅ White-label app (your branding)",
      "✅ SLA guarantee (99.9% uptime)",
      "✅ Onboarding manager",
      "✅ Custom integrations",
      "✅ VAPT security audit",
      "✅ Custom payment gateway",
      "✅ On-site training sessions",
      "✅ Quarterly business reviews",
    ],
  },
];

const faqs = [
  { q: "Is the Free plan really free forever?", a: "Yes. The Free plan has no expiry date and no credit card required. You get Visitor Management, Notice Board, Community Help, and Basic Maintenance for up to 50 units — permanently free." },
  { q: "Can I upgrade or downgrade mid-month?", a: "You can upgrade anytime and your new features are available immediately. Downgrades take effect at the end of your current billing cycle. You'll never lose data when downgrading." },
  { q: "Do you charge per unit / per flat?", a: "No per-unit pricing below 200 units. Standard covers up to 200 units for a flat ₹2,999/month regardless of how many residents you have. Pro covers up to 500 units." },
  { q: "What payment methods do you accept?", a: "We accept UPI (Google Pay, PhonePe, Paytm), all major credit/debit cards (Visa, Mastercard, RuPay), and NEFT/RTGS for annual plans. Invoice billing available for Enterprise." },
  { q: "Is there a contract or lock-in period?", a: "No lock-in on monthly plans. Annual plans offer 2 months free and are billed once per year. You can cancel anytime with a 30-day money-back guarantee on all paid plans." },
  { q: "What happens if my society grows beyond my plan's unit limit?", a: "You'll get an in-app notification 30 days before hitting the limit. You can upgrade in one tap. Your data and settings are fully preserved during upgrades." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* ── Hero ── */}
        <section className="bg-navy relative overflow-hidden py-20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">Transparent Pricing</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Simple plans, genuine value</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">Start free. Upgrade only when your society needs more. No per-unit fees, no hidden costs, no hardware bills.</p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
              <span className={`text-sm font-semibold ${!annual ? "text-white" : "text-white/40"}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-teal" : "bg-white/20"}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${annual ? "translate-x-7" : "translate-x-1"}`} />
              </button>
              <span className={`text-sm font-semibold ${annual ? "text-white" : "text-white/40"}`}>
                Annual <span className="text-amber font-bold text-xs">Save 2 months</span>
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* ── Plans Grid ── */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-3xl border-2 ${plan.color} p-6 flex flex-col relative shadow-sm`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-5">
                  <p className="font-display font-bold text-navy text-xl mb-1">{plan.name}</p>
                  <p className="text-gray-400 text-xs mb-4">{plan.units}</p>
                  {plan.price.monthly !== null ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-display font-bold text-navy">
                        ₹{annual ? plan.price.annual?.toLocaleString("en-IN") : plan.price.monthly?.toLocaleString("en-IN")}
                      </span>
                      {plan.price.monthly > 0 && <span className="text-gray-400 text-sm mb-1.5">/month</span>}
                      {plan.price.monthly === 0 && <span className="text-gray-400 text-sm mb-1.5">forever</span>}
                    </div>
                  ) : (
                    <div className="text-3xl font-display font-bold text-navy">Custom</div>
                  )}
                  {annual && plan.price.monthly !== null && plan.price.monthly > 0 && (
                    <p className="text-amber text-xs font-semibold mt-1">
                      Billed ₹{((plan.price.annual ?? 0) * 12).toLocaleString("en-IN")}/year
                    </p>
                  )}
                </div>

                <Link
                  href={plan.cta.href}
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors mb-5 ${plan.cta.style}`}
                >
                  {plan.cta.label}
                </Link>

                <ul className="space-y-2 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className={`text-xs leading-relaxed flex gap-2 ${f.startsWith("❌") ? "text-gray-300" : "text-gray-600"}`}>
                      <span className="flex-shrink-0">{f.substring(0, 2)}</span>
                      <span>{f.substring(2).trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Trust strip ── */}
        <section className="max-w-6xl mx-auto px-5 pb-12">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center shadow-sm">
            {[
              { icon: "🔒", label: "30-Day Money-Back Guarantee", sub: "On all paid plans, no questions asked." },
              { icon: "🛡️", label: "SOC-2 Compliant Infrastructure", sub: "Your data is encrypted and secure." },
              { icon: "🇮🇳", label: "GDPR & Indian Data Laws", sub: "Data stored on servers within India." },
              { icon: "📞", label: "Real Humans in Support", sub: "Not just bots. Phone + WhatsApp + email." },
            ].map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-3xl">{t.icon}</span>
                <p className="font-semibold text-navy text-sm">{t.label}</p>
                <p className="text-gray-400 text-xs">{t.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section className="max-w-6xl mx-auto px-5 pb-16">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">Full feature comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium w-1/3">Feature</th>
                  {["Free", "Standard", "Pro", "Enterprise"].map(p => (
                    <th key={p} className="px-4 py-4 text-navy font-display font-bold text-center">{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["Unit limit", "50", "200", "500", "Unlimited"],
                  ["Visitor Management", "✅", "✅", "✅", "✅"],
                  ["Notice Board", "✅", "✅", "✅", "✅"],
                  ["Basic Maintenance", "✅", "✅", "✅", "✅"],
                  ["Community Help", "✅", "✅", "✅", "✅"],
                  ["Issues & Complaints", "❌", "✅", "✅", "✅"],
                  ["Events & Polls", "❌", "✅", "✅", "✅"],
                  ["Parking Management", "❌", "✅", "✅", "✅"],
                  ["Amenity Booking", "❌", "❌", "✅", "✅"],
                  ["Advanced Analytics", "❌", "❌", "✅", "✅"],
                  ["API Access", "❌", "❌", "✅", "✅"],
                  ["Custom Branding", "❌", "❌", "✅", "✅"],
                  ["White-label App", "❌", "❌", "❌", "✅"],
                  ["Dedicated Server", "❌", "❌", "❌", "✅"],
                  ["SLA Guarantee", "❌", "❌", "❌", "✅"],
                  ["Admin accounts", "1", "3", "Unlimited", "Unlimited"],
                  ["6-language UI", "✅", "✅", "✅", "✅"],
                  ["Push notifications", "✅", "✅", "✅", "✅"],
                  ["Support", "Community", "Email", "Phone + Email", "Dedicated manager"],
                ].map(([feat, ...vals]) => (
                  <tr key={feat} className="hover:bg-light/50 transition-colors">
                    <td className="px-6 py-3 text-gray-600 font-medium">{feat}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={`px-4 py-3 text-center ${v === "✅" ? "text-green" : v === "❌" ? "text-gray-200" : "text-navy font-semibold"}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">Pricing FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-100 rounded-2xl bg-light overflow-hidden">
                  <summary className="px-5 py-4 font-semibold text-navy cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="text-teal text-lg group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-display text-3xl font-bold text-navy mb-3">Start free. No credit card.</h2>
            <p className="text-gray-500 mb-8">Join 1,200+ societies already using SocietyApp. Upgrade when you're ready.</p>
            <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25">
              Register Your Society Free →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}