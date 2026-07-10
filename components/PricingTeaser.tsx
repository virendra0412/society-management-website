"use client";
import Link from "next/link";
import { Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getPricingTeaserContent } from "@/lib/i18n/content/pricingTeaserContent";

const planMeta: Record<string, { price: string; unitKey: string; color: string; badge: string; highlight?: boolean }> = {
  free: { price: "₹0", unitKey: "pricing_forever", color: "border-green", badge: "bg-green/10 text-green" },
  standard: { price: "₹2,999", unitKey: "pricing_per_month", color: "border-teal", badge: "bg-teal/10 text-teal", highlight: true },
  pro: { price: "₹5,999", unitKey: "pricing_per_month", color: "border-navy", badge: "bg-navy/10 text-navy" },
};

export default function PricingTeaser() {
  const { tr, locale } = useTranslation();
  const { plans, mostPopular, needMoreUnits } = getPricingTeaserContent(locale);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">{tr.nav_pricing}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">{tr.pricing_title}</h2>
        <p className="text-gray-500 text-center max-w-lg mx-auto mb-14 leading-relaxed">{tr.pricing_sub}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p) => {
            const meta = planMeta[p.id];
            return (
            <div key={p.id} className={`rounded-2xl border-2 p-6 ${meta.color} ${meta.highlight ? "shadow-xl relative" : ""}`}>
              {meta.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-teal text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">{mostPopular}</span>
                </div>
              )}
              <div className={`text-[11px] font-bold px-2.5 py-1 rounded-full inline-block mb-4 ${meta.badge}`}>{p.name}</div>
              <div className="mb-1">
                <span className="font-display text-3xl font-bold text-navy">{meta.price}</span>
                <span className="text-gray-400 text-sm ml-1">{meta.unitKey === "pricing_forever" ? tr.pricing_forever : tr.pricing_per_month}</span>
              </div>
              <p className="text-gray-400 text-xs mb-5">{p.desc}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-teal flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/register" className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                meta.highlight ? "bg-teal text-white hover:bg-teal/90" : "border border-gray-200 text-navy hover:border-teal hover:text-teal"
              }`}>
                {tr.common_get_started} →
              </Link>
            </div>
            );
          })}
        </div>

        <p className="text-center mt-8 text-sm text-gray-400">
          {needMoreUnits}{" "}
          <Link href="/contact" className="text-teal font-medium hover:underline">{tr.common_contact_sales}</Link>
        </p>
      </div>
    </section>
  );
}