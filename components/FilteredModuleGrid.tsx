// components/FilteredModuleGrid.tsx
// Spec 2.2 Features Overview — Category Filter Strip:
// "Pill filter bar. Smooth grid re-sort animation on filter click (Framer Motion)."
// Spec 4.4: "FILTER PILLS: Grid re-sorts with Framer Motion layout animation
// (300ms spring)."
"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export type Module = {
  icon: string;
  title: string;
  href: string;
  tag: string;
  tagColor: string;
  tier: string;
  tierColor: string;
  category: string;
  desc: string;
  highlights: string[];
};

export default function FilteredModuleGrid({ modules }: { modules: Module[] }) {
  const { tr } = useTranslation();
  const categories = [
    { id: "all", label: tr.cat_all },
    { id: "Security", label: tr.cat_security },
    { id: "Finance", label: tr.cat_finance },
    { id: "Community", label: tr.cat_community },
    { id: "Facilities", label: tr.cat_facilities },
    { id: "Admin", label: tr.cat_admin },
  ];
  const [active, setActive] = useState("all");

  const visible = active === "all" ? modules : modules.filter((m) => m.category === active);

  return (
    <div>
      {/* Filter pill strip */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = active === cat.id;
          const count = cat.id === "all" ? modules.length : modules.filter((m) => m.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                isActive ? "text-white" : "text-gray-500 hover:text-navy"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-filter-pill"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat.label}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Module cards grid — re-sorts with a 300ms spring layout animation
          whenever the filter pill selection changes. */}
      <LayoutGroup>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((m) => (
              <motion.div
                key={m.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", duration: 0.3, bounce: 0.15 }}
              >
                <Link
                  href={m.href}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-teal/30 hover:shadow-lg transition-all flex flex-col h-full"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{m.icon}</span>
                    <div className="flex items-center gap-2">
                      {m.tag && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.tagColor}`}>
                          {m.tag}
                        </span>
                      )}
                      <span className={`text-[10px] font-semibold ${m.tierColor}`}>{m.tier}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-teal transition-colors">
                    {m.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{m.desc}</p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-4">
                    {m.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1 text-teal text-xs font-semibold group-hover:gap-2 transition-all">
                    {tr.common_learn_more} <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {visible.length === 0 && (
        <div className="text-center py-16 text-gray-400 text-sm">
          {tr.cat_empty}
        </div>
      )}
    </div>
  );
}