"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import FilteredModuleGrid from "@/components/FilteredModuleGrid";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getModulesContent } from "@/lib/i18n/content/modulesContent";

export default function FeaturesPage() {
  const { tr, locale } = useTranslation();
  const content = getModulesContent(locale);

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
              <span className="text-teal text-xs font-bold uppercase tracking-wide">{content.heroBadge}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {content.heroTitle}
              <br />
              <span className="text-teal">{content.heroTitleAccent}</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              {content.heroSub}
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
            <FilteredModuleGrid modules={content.modules} tierLabels={content.tierLabels} />
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