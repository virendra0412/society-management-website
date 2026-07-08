"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getSupportContent, type SupportArticle, type SupportCategory } from "@/lib/i18n/content/supportContent";

// ─── Content is driven by the locale-aware module below. ───────────────────

// ─── Sub-components ───────────────────────────────────────────────────────────

function ArticleModal({ article, category, onClose }: {
  article: SupportArticle;
  category: SupportCategory;
  onClose: () => void;
}) {
  const { tr } = useTranslation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm p-4 pt-16 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl mb-16">
        {/* Header */}
        <div className="bg-navy rounded-t-3xl px-7 py-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white/60`}>
              {category.icon} {category.label}
            </span>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white text-2xl leading-none transition-colors"
            >
              ×
            </button>
          </div>
          <h2 className="font-display text-2xl font-bold text-white leading-snug">{article.title}</h2>
          <p className="text-white/50 text-sm mt-2">{article.readMins} min read</p>
        </div>

        {/* Body */}
        <div className="px-7 py-7 space-y-4">
          {article.body.map((block, i) => {
            if (block.type === "h3") return (
              <h3 key={i} className="font-display font-bold text-navy text-lg pt-2">{block.text}</h3>
            );
            if (block.type === "tip") return (
              <div key={i} className="bg-teal/8 border border-teal/20 rounded-2xl px-5 py-4 flex gap-3">
                <span className="text-xl flex-shrink-0">💡</span>
                <p className="text-sm text-teal leading-relaxed">{block.text}</p>
              </div>
            );
            return (
              <p key={i} className="text-gray-600 text-[15px] leading-relaxed">{block.text}</p>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-7 pb-7 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">{tr.support_helpful}</p>
            <div className="flex gap-2">
              <button className="px-4 py-1.5 rounded-xl border border-gray-200 text-gray-500 text-sm hover:border-teal hover:text-teal transition-colors">
                {tr.support_yes}
              </button>
              <button className="px-4 py-1.5 rounded-xl border border-gray-200 text-gray-500 text-sm hover:border-red-300 hover:text-red-500 transition-colors">
                {tr.support_no}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HelpCentrePage() {
  const { locale, tr } = useTranslation();
  const supportContent = getSupportContent(locale);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openArticle, setOpenArticle] = useState<SupportArticle | null>(null);
  const [openArticleCategory, setOpenArticleCategory] = useState<SupportCategory | null>(null);

  const categoriesContent = supportContent.categories;
  const flattenedArticles = categoriesContent.flatMap((cat) =>
    cat.articles.map((article) => ({ ...article, category: cat.label, categoryId: cat.id, icon: cat.icon }))
  );

  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return flattenedArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.body.some((b) => b.text?.toLowerCase().includes(q))
    );
  }, [flattenedArticles, search]);

  const displayedCategories = activeCategory
    ? categoriesContent.filter((c) => c.id === activeCategory)
    : categoriesContent;

  const totalArticles = flattenedArticles.length;

  return (
    <>
      <Navbar />

      <main className="bg-light min-h-screen pt-16">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="bg-navy py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-[300px] h-[300px] rounded-full bg-teal/5 blur-[80px] pointer-events-none" />

          <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
              {supportContent.heroBadge}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {supportContent.heroTitle}
            </h1>
            <p className="text-white/60 text-lg mb-8">
              {supportContent.heroSub}
            </p>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveCategory(null);
                }}
                placeholder={tr.support_search_ph}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 pl-12 text-white placeholder-white/40 text-sm focus:outline-none focus:border-teal/70 focus:bg-white/15 transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg">🔍</span>
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 text-lg transition-colors"
                >
                  ×
                </button>
              )}
            </div>

            {/* Quick category pills */}
            {!search && (
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {categoriesContent.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() =>
                      setActiveCategory(activeCategory === cat.id ? null : cat.id)
                    }
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeCategory === cat.id
                        ? "bg-teal text-white"
                        : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 32L1440 32L1440 8C1200 28 720 2 0 18L0 32Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-5 py-4 flex flex-wrap gap-6 justify-center text-center">
            {[
              { value: totalArticles, label: tr.support_stat_guides },
              { value: categoriesContent.length, label: tr.support_stat_categories },
              { value: "< 2h", label: tr.support_stat_response },
              { value: "6", label: tr.support_stat_langs },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-display font-bold text-navy text-lg">{value}</span>
                <span className="text-gray-400 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main content ────────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5 py-12">

          {/* ── Search results ── */}
          {searchResults !== null && (
            <>
              {searchResults.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">🤔</div>
                  <h2 className="font-display font-bold text-navy text-xl mb-2">
                    {supportContent.noResultsTitle.replace('{search}', search)}
                  </h2>
                  <p className="text-gray-500 mb-6">
                    {supportContent.noResultsSub}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setSearch("")}
                      className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:border-teal hover:text-teal transition-colors"
                    >
                      {tr.support_browse_all}
                    </button>
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 rounded-xl bg-teal text-white text-sm font-semibold hover:bg-teal/90 transition-colors"
                    >
                      {tr.support_contact}
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-500 text-sm mb-5">
                    <span className="font-semibold text-navy">{searchResults.length}</span> result
                    {searchResults.length !== 1 && "s"} for &ldquo;{search}&rdquo;
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {searchResults.map((article) => {
                      const cat = categoriesContent.find((c) => c.id === article.categoryId)!;
                      return (
                        <ArticleCard
                          key={article.slug}
                          article={article}
                          category={cat}
                          onOpen={() => {
                            setOpenArticle(article);
                            setOpenArticleCategory(cat);
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── Category grid (no search) ── */}
          {searchResults === null && (
            <>
              {activeCategory && (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="flex items-center gap-1.5 text-teal text-sm font-semibold mb-6 hover:gap-2.5 transition-all"
                >
                  {tr.support_all_cats}
                </button>
              )}

              {displayedCategories.map((cat) => (
                <div key={cat.id} className="mb-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${cat.colour.split(" ")[0]}`}>
                      {cat.icon}
                    </span>
                    <div>
                      <h2 className="font-display font-bold text-navy text-xl">{cat.label}</h2>
                      <p className="text-gray-400 text-xs">
                        {cat.articles.length} guide{cat.articles.length !== 1 && "s"}
                      </p>
                    </div>
                    {!activeCategory && (
                      <button
                        onClick={() => setActiveCategory(cat.id)}
                        className="ml-auto text-teal text-sm font-semibold hover:underline"
                      >
                        {tr.support_see_all}
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.articles.map((article) => (
                      <ArticleCard
                        key={article.slug}
                        article={article}
                        category={cat}
                        onOpen={() => {
                          setOpenArticle(article);
                          setOpenArticleCategory(cat);
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* ── Still need help ── */}
          <div className="mt-8 bg-navy rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {tr.support_not_found_h}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {tr.support_not_found_sub}
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors"
              >
                {tr.support_email_btn}
              </Link>
              <a
                href="https://wa.me/919537495474"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
              >
                {tr.support_whatsapp_btn}
              </a>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-semibold text-sm hover:text-white hover:bg-white/10 transition-colors"
              >
                {tr.support_faq_btn}
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Article modal */}
      {openArticle && openArticleCategory && (
        <ArticleModal
          article={openArticle}
          category={openArticleCategory}
          onClose={() => {
            setOpenArticle(null);
            setOpenArticleCategory(null);
          }}
        />
      )}

      <Footer />
    </>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({
  article,
  category,
  onOpen,
}: {
  article: { title: string; summary: string; readMins: number };
  category: { colour: string; icon: string };
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group text-left bg-white border border-gray-100 rounded-2xl p-5 hover:border-teal/30 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className={`text-2xl`}>{category.icon}</span>
        <span className="text-gray-300 group-hover:text-teal text-lg transition-colors">→</span>
      </div>
      <h3 className="font-display font-semibold text-navy text-sm leading-snug mb-2 group-hover:text-teal transition-colors">
        {article.title}
      </h3>
      <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">{article.summary}</p>
      <span className="text-gray-300 text-xs">{article.readMins} min read</span>
    </button>
  );
}