// components/ProductDemo.tsx
// 3 scrollable demo sections as per spec:
// Visitor Management / Maintenance / Community
// Each: phone mockup left, feature list right (alternating on desktop)

"use client";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getProductDemoContent } from "@/lib/i18n/content/productDemoContent";

const demoMeta: Record<string, { emoji: string; color: string; href: string; cardIcons: [string, string, string]; badgeIcon: string }> = {
  visitor: { emoji: "🚪", color: "teal", href: "/features/visitor-management", cardIcons: ["🔢", "✅", "🚪"], badgeIcon: "🚪" },
  maintenance: { emoji: "💸", color: "green", href: "/features/maintenance", cardIcons: ["💸", "✅", "⚠️"], badgeIcon: "✅" },
  community: { emoji: "📢", color: "amber", href: "/features/notices", cardIcons: ["📢", "📊", "🤝"], badgeIcon: "📢" },
};

const colorMap: Record<string, { bg: string; text: string; border: string; pill: string }> = {
  teal:  { bg: "bg-teal/10",  text: "text-teal",  border: "border-teal/30",  pill: "bg-teal" },
  green: { bg: "bg-green/10", text: "text-green", border: "border-green/30", pill: "bg-green" },
  amber: { bg: "bg-amber/10", text: "text-amber", border: "border-amber/30", pill: "bg-amber" },
};

export default function ProductDemo() {
  const { tr, locale } = useTranslation();
  const { demos, learn_more } = getProductDemoContent(locale);

  return (
    <section className="py-24 bg-light">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section header */}
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">
          {tr.home_product_eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          {tr.home_product_heading}
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-20 leading-relaxed">
          {tr.home_product_sub}
        </p>

        {/* Demo sections */}
        <div className="space-y-32">
          {demos.map((demo, idx) => {
            const meta = demoMeta[demo.id];
            const c = colorMap[meta.color];
            const isEven = idx % 2 === 0;

            return (
              <div
                key={demo.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Phone mockup */}
                <div className={`flex justify-center ${isEven ? "" : "lg:justify-end"}`}>
                  <div className="relative">
                    <div className="w-64 bg-[#0a1628] rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/30 overflow-hidden p-1.5">
                      {/* Notch */}
                      <div className="flex justify-center mb-2 pt-1">
                        <div className="w-20 h-5 bg-black rounded-full" />
                      </div>

                      {/* App header */}
                      <div className={`${c.pill} mx-1 rounded-xl px-3 py-2.5 mb-2`}>
                        <p className="text-white/70 text-[10px] mb-0.5">{demo.phone.header.sub}</p>
                        <p className="text-white font-display font-bold text-sm">{demo.phone.header.label}</p>
                      </div>

                      {/* Cards */}
                      <div className="space-y-1.5 px-1 pb-2">
                        {[demo.phone.card1, demo.phone.card2, demo.phone.card3].map((card, ci) => (
                          <div key={ci} className="bg-white/5 rounded-xl px-3 py-2.5 flex items-start gap-2.5">
                            <span className="text-lg mt-0.5">{meta.cardIcons[ci]}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-[11px] font-semibold leading-tight">{card.title}</p>
                              <p className="text-white/40 text-[10px] mt-0.5">{card.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bottom nav */}
                      <div className="bg-white/5 mx-1 rounded-xl px-2 py-2 flex justify-around">
                        {["🏠", "👁️", "💬", "📋", "⚙️"].map((ic, i) => (
                          <span key={i} className={`text-base ${i === 0 ? "opacity-100" : "opacity-30"}`}>{ic}</span>
                        ))}
                      </div>

                      {/* Home bar */}
                      <div className="flex justify-center mt-2 pb-1">
                        <div className="w-24 h-1 bg-white/20 rounded-full" />
                      </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -right-6 top-16 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2">
                      <span className="text-xl">{meta.badgeIcon}</span>
                      <div>
                        <p className="text-navy font-bold text-sm leading-none">{demo.phone.badge.value}</p>
                        <p className="text-gray-400 text-[10px]">{demo.phone.badge.label}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Label */}
                  <div className={`inline-flex items-center gap-2 ${c.bg} border ${c.border} rounded-full px-3 py-1 mb-5`}>
                    <span className="text-base">{meta.emoji}</span>
                    <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>{demo.label}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
                    {demo.headline}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8">{demo.sub}</p>

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8">
                    {demo.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${c.pill} flex-shrink-0 flex items-center justify-center mt-0.5`}>
                          <Check size={11} className="text-white" />
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={meta.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${c.text} hover:gap-3 transition-all`}
                  >
                    {learn_more} {demo.label} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}