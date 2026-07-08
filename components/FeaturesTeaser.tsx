"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getHomeFeaturesContent } from "@/lib/i18n/content/homeFeaturesContent";

const CATS = ["All", "Security", "Finance", "Community", "Facilities", "Admin"];
const CAT_ICONS: Record<string, string> = {
  All: "✦", Security: "🔒", Finance: "💳", Community: "👥", Facilities: "🏢", Admin: "⚙️",
};

export default function FeaturesTeaser() {
  const [active, setActive] = useState("All");
  const { tr, locale } = useTranslation();
  const { modules } = getHomeFeaturesContent(locale);

  const visible = active === "All" ? modules : modules.filter((m) => m.category === active);

  return (
    <section className="py-20 bg-light" id="features">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal text-xs font-bold uppercase tracking-widest mb-3">
            {tr.home_features_eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
            {tr.home_features_heading}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-base">
            {tr.home_features_sub}
          </p>
        </div>

        {/* Category filter strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATS.map((cat) => {
            const isActive = active === cat;
            const count = cat === "All" ? modules.length : modules.filter((m) => m.category === cat).length;
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
                    {tr.common_learn_more} <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 text-sm mb-4">
            {tr.home_features_bottom_sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-colors shadow-lg shadow-navy/20"
            >
              {tr.home_features_cta_primary} <ArrowRight size={15} />
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-teal text-teal font-semibold text-sm hover:bg-teal hover:text-white transition-all"
            >
              {tr.home_features_cta_secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}