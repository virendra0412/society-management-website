"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export interface Flow { icon: string; label: string; detail: string; }
export interface FeatureItem { icon: string; title: string; desc: string; }
export interface FaqItem { q: string; a: string; }
export interface RelatedModule { icon: string; title: string; href: string; desc: string; }

export interface FeaturePageProps {
  badge: string; emoji: string;
  headline: string; headlineAccent: string; subline: string;
  problems: { icon: string; title: string; desc: string }[];
  flows: Flow[];
  adminView: { title: string; points: string[] };
  residentView: { title: string; points: string[] };
  features: FeatureItem[];
  faqs: FaqItem[];
  related: RelatedModule[];
  ctaHeadline: string; ctaSub: string;
}

export default function FeaturePageTemplate({
  badge, emoji, headline, headlineAccent, subline,
  problems, flows, adminView, residentView,
  features, faqs, related, ctaHeadline, ctaSub,
}: FeaturePageProps) {
  const { tr } = useTranslation();

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">
        {/* Hero */}
        <section className="bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-5 py-24 text-center">
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-3 py-1.5 mb-6">
              <span className="text-teal text-xs font-bold uppercase tracking-widest">{emoji} {badge}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {headline}<br /><span className="text-teal">{headlineAccent}</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">{subline}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/register" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25">
                {tr.common_register_free} — {tr.common_no_credit_card}
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/20 text-white/80 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors">
                {tr.common_view_pricing} →
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* Problems */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">The problem today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <div key={i} className="bg-white border border-red-100 border-l-4 border-l-red-400 rounded-2xl p-5">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display font-bold text-navy text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">How it works</h2>
            <div className="space-y-4">
              {flows.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-2xl bg-teal flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{i + 1}</div>
                    {i < flows.length - 1 && <div className="w-0.5 flex-1 bg-teal/20 mt-1.5" />}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{step.icon}</span>
                      <p className="font-semibold text-navy">{step.label}</p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admin vs Resident */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">Who uses it and how</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[adminView, residentView].map((view, i) => (
              <div key={i} className={`rounded-2xl p-6 border ${i === 0 ? "bg-navy border-navy/20" : "bg-white border-gray-100"}`}>
                <h3 className={`font-display text-xl font-bold mb-5 ${i === 0 ? "text-white" : "text-navy"}`}>{view.title}</h3>
                <ul className="space-y-3">
                  {view.points.map((pt, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm ${i === 0 ? "text-white/70" : "text-gray-600"}`}>
                      <span className="text-teal font-bold mt-0.5 flex-shrink-0">✓</span>{pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key features */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">Key features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={i} className="bg-light rounded-2xl p-5">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-display font-bold text-navy mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-5 py-16">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-8">Questions about {badge}</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
                <summary className="px-5 py-4 font-semibold text-navy cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>{faq.q}</span>
                  <span className="text-teal text-lg group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="max-w-6xl mx-auto px-5 pb-12">
          <h2 className="font-display text-xl font-bold text-navy mb-5">Related Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((m, i) => (
              <Link key={i} href={m.href} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-teal/30 hover:shadow-md transition-all group">
                <div className="text-3xl mb-2">{m.icon}</div>
                <h3 className="font-display font-bold text-navy mb-1 group-hover:text-teal transition-colors">{m.title}</h3>
                <p className="text-gray-500 text-sm">{m.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal py-16">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{ctaHeadline}</h2>
            <p className="text-white/70 mb-8">{ctaSub}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-teal font-bold text-sm hover:bg-white/90 transition-colors">
                {tr.common_register_free} →
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-sm hover:border-white/80 transition-colors">
                {tr.common_book_demo}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}