"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { StaggerGroup, StaggerItem } from "./ScrollReveal";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getProblemContent } from "@/lib/i18n/content/problemContent";

const problemMeta: Record<string, { emoji: string; href: string }> = {
  visitor: { emoji: "😤", href: "/features/visitor-management" },
  maintenance: { emoji: "📱", href: "/features/maintenance" },
  issues: { emoji: "🗂️", href: "/features/issues" },
};

export default function ProblemSection() {
  const { tr, locale } = useTranslation();
  const { problems } = getProblemContent(locale);
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">{tr.home_problem_eyebrow}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          {tr.home_problem_heading}
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-14 leading-relaxed">
          {tr.home_problem_sub}
        </p>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <StaggerItem key={p.id}>
              <div className="group h-full rounded-2xl border border-gray-100 border-l-4 border-l-red-400 p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{problemMeta[p.id].emoji}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{p.title}</h3>
                <p className="relative text-gray-400 text-sm leading-relaxed mb-4">
                  {p.desc}
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: reduceMotion ? 0 : 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: "easeInOut" }}
                    style={{ originX: 0 }}
                    className="absolute left-0 top-1/2 h-[1.5px] w-full bg-red-400/70"
                  />
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-teal uppercase tracking-wide mb-1">{tr.home_problem_fix_label}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.fix}</p>
                  <Link href={problemMeta[p.id].href} className="text-teal text-xs font-semibold hover:underline">
                    {tr.common_learn_more} →
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}