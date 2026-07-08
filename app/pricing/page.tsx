"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getPricingContent } from "@/lib/i18n/content/pricingContent";

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const { tr, locale } = useTranslation();
  const pricingContent = getPricingContent(locale);
  const plans = pricingContent.plans;
  const faqItems = pricingContent.faqItems;
  const trustItems = pricingContent.trustItems;
  const comparisonRows = pricingContent.comparisonRows;

  const ctaLabel = (key: string) => {
    if (key === "get_started") return tr.common_get_started;
    if (key === "contact_sales") return tr.common_contact_sales;
    return tr.common_get_started;
  };

  const getPlanHref = (plan: (typeof plans)[number]) => {
    if (plan.ctaKey === "get_started") return "/register";
    if (plan.ctaKey === "contact_sales") return "/contact";
    return "/register?plan=standard";
  };

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* Hero */}
        <section className="bg-navy relative overflow-hidden py-20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              {tr.nav_pricing}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{tr.pricing_title}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">{tr.pricing_sub}</p>

            {/* Monthly / Annual toggle */}
            <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
              <span className={`text-sm font-semibold transition-colors ${!annual ? "text-white" : "text-white/40"}`}>{tr.pricing_monthly}</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-teal" : "bg-white/20"}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${annual ? "translate-x-7" : "translate-x-1"}`} />
              </button>
              <span className={`text-sm font-semibold transition-colors ${annual ? "text-white" : "text-white/40"}`}>
                {tr.pricing_annual} <span className="text-amber font-bold text-xs">{tr.pricing_save}</span>
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* Plans grid */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-3xl border-2 ${plan.color} p-6 flex flex-col relative shadow-sm`}>
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
                      {plan.price.monthly === 0
                        ? <span className="text-gray-400 text-sm mb-1.5">{tr.pricing_forever}</span>
                        : <span className="text-gray-400 text-sm mb-1.5">{tr.pricing_per_month}</span>}
                    </div>
                  ) : (
                    <div className="text-3xl font-display font-bold text-navy">{tr.pricing_custom}</div>
                  )}
                  {annual && plan.price.monthly !== null && plan.price.monthly > 0 && (
                    <p className="text-amber text-xs font-semibold mt-1">
                      Billed ₹{((plan.price.annual ?? 0) * 12).toLocaleString("en-IN")}/year
                    </p>
                  )}
                </div>

                <Link href={getPlanHref(plan)}
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors mb-5 ${plan.ctaStyle}`}>
                  {ctaLabel(plan.ctaKey)}
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

        {/* Trust strip */}
        <section className="max-w-6xl mx-auto px-5 pb-12">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center shadow-sm">
            {trustItems.map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-3xl">{t.icon}</span>
                <p className="font-semibold text-navy text-sm">{t.label}</p>
                <p className="text-gray-400 text-xs">{t.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section className="max-w-6xl mx-auto px-5 pb-16">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">{tr.pricing_compare_title}</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-gray-500 font-medium w-1/3">Feature</th>
                  {["Free", "Standard", "Pro", "Enterprise"].map((p) => (
                    <th key={p} className="px-4 py-4 text-navy font-display font-bold text-center">{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {comparisonRows.map(([feat, ...vals]) => (
                  <tr key={feat} className="hover:bg-light/50 transition-colors">
                    <td className="px-6 py-3 text-gray-600 font-medium">{feat}</td>
                    {vals.map((v, i) => (
                      <td key={i} className={`px-4 py-3 text-center ${v === "✅" ? "text-green" : v === "❌" ? "text-gray-200" : "text-navy font-semibold"}`}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">{tr.pricing_faq_title}</h2>
            <div className="space-y-4">
              {faqItems.map((faq, i) => (
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

        {/* Final CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-display text-3xl font-bold text-navy mb-3">{tr.hero_badge}.</h2>
            <p className="text-gray-500 mb-8">{tr.pricing_final_sub}</p>
            <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25">
              {tr.common_register_free} →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}