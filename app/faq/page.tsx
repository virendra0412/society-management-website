"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFaqContent } from "@/lib/i18n/content/faqContent";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function FaqPage() {
  const { tr, locale } = useTranslation();
  const faqContent = getFaqContent(locale);
  const categories = faqContent.categories;
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("getting-started");

  const filtered = categories.map((cat) => ({
    ...cat,
    faqs: cat.faqs.filter((f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.faqs.length > 0);

  const displayed = search ? filtered : categories.filter((c) => c.id === activeCategory);

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* Hero */}
        <section className="bg-navy py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">{tr.faq_badge}</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{tr.faq_title}</h1>
            <p className="text-white/60 text-lg mb-8">{tr.faq_sub}</p>
            <div className="relative">
              <input
                type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder={tr.faq_search_ph}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-white/40 text-sm focus:outline-none focus:border-teal transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xl">🔍</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 py-12">
          {/* Category pills */}
          {!search && (
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === cat.id ? "bg-teal text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-teal/40"
                  }`}>
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {search && filtered.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🤔</div>
              <p className="text-navy font-display font-bold text-xl mb-2">{tr.faq_no_results.replace("{query}", search)}</p>
              <button onClick={() => setSearch("")} className="text-teal font-semibold text-sm hover:underline">{tr.faq_clear_search}</button>
            </div>
          )}

          {/* FAQ items */}
          {displayed.map((cat) => (
            <div key={cat.id} className="mb-8">
              {search && <h2 className="font-display font-bold text-navy text-xl mb-4 flex items-center gap-2">{cat.icon} {cat.label}</h2>}
              <div className="space-y-3">
                {cat.faqs.map((faq, i) => (
                  <details key={i} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <summary className="px-5 py-4 font-semibold text-navy cursor-pointer list-none flex items-start justify-between gap-3">
                      <span className="leading-relaxed">{faq.q}</span>
                      <span className="text-teal text-xl group-open:rotate-45 transition-transform flex-shrink-0 mt-0.5">+</span>
                    </summary>
                    <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="mt-12 bg-navy rounded-3xl p-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">{tr.faq_still_questions}</h3>
            <p className="text-white/50 mb-6">{tr.faq_still_sub}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors">
                {tr.faq_cta_contact}
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors">
                💬 {tr.faq_cta_whatsapp}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}