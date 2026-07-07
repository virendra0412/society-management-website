"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getVMContent } from "@/lib/i18n/content/vmContent";

const phoneItems = [
  { name: "Ravi Kumar",   type: "Pre-Approved", time: "10:32 AM", dot: "green",  badge: "OTP ✓"    },
  { name: "Swiggy",       type: "Delivery",     time: "11:05 AM", dot: "amber",  badge: "Auto-exit" },
  { name: "Sunita (Maid)",type: "Trusted",      time: "08:15 AM", dot: "teal",   badge: "Pass ✓"   },
  { name: "Anand Shah",   type: "Walk-In",      time: "02:18 PM", dot: "green",  badge: "Approved"  },
];

const dotColor: Record<string, string> = {
  green: "bg-green", amber: "bg-amber", teal: "bg-teal",
};

export default function VisitorManagementContent() {
  const { locale, tr } = useTranslation();
  const c = getVMContent(locale);

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* ── Hero ── */}
        <section className="bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-6xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-3 py-1.5 mb-6">
                <span className="text-teal text-xs font-bold uppercase tracking-widest">🚪 {c.badge}</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                {c.hero_headline}<br />
                <span className="text-teal">{c.hero_accent}</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-4">{c.hero_sub}</p>
              <p className="text-white/40 text-sm mb-8">{c.hero_note}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/register"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25">
                  {c.cta_setup}
                </Link>
                <Link href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-white/20 text-white/80 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors">
                  {tr.common_view_pricing} →
                </Link>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-72">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur">
                  <div className="text-center mb-5">
                    <div className="text-5xl mb-2">🏠</div>
                    <p className="text-white font-display font-bold text-lg">{c.hero_log_title}</p>
                    <p className="text-white/40 text-xs">{c.hero_log_sub}</p>
                  </div>
                  {phoneItems.map((v, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5 mb-2">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor[v.dot]}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-semibold truncate">{v.name}</p>
                        <p className="text-white/40 text-[10px]">{v.type} · {v.time}</p>
                      </div>
                      <span className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{v.badge}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute -top-4 -right-4 bg-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  No Hardware Needed
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 40L1440 40L1440 10C1200 40 720 0 0 20L0 40Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* ── Problems ── */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-navy mb-3">{c.problem_headline}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{c.problem_sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.problems.map((p, i) => (
              <div key={i} className="bg-white border border-red-100 border-l-4 border-l-red-400 rounded-2xl p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4 Flows ── */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-block bg-teal/10 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                {c.flows_badge}
              </div>
              <h2 className="font-display text-3xl font-bold text-navy mb-3">{c.flows_headline}</h2>
              <p className="text-gray-500 max-w-xl mx-auto">{c.flows_sub}</p>
            </div>

            <div className="space-y-16">
              {c.flows.map((flow, fi) => (
                <div key={flow.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start`}>
                  <div className={fi % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-teal/10 flex items-center justify-center text-xl">{flow.emoji}</div>
                      <div>
                        <div className="text-teal text-xs font-bold uppercase tracking-widest">Flow {flow.id}</div>
                        <h3 className="font-display text-2xl font-bold text-navy">{flow.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-6">{flow.subtitle}</p>
                    <div className="space-y-3">
                      {flow.steps.map((step, si) => (
                        <div key={si} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center text-lg flex-shrink-0">{step.icon}</div>
                            {si < flow.steps.length - 1 && <div className="w-0.5 h-full bg-teal/20 mt-1" />}
                          </div>
                          <div className="pb-4">
                            <p className="font-semibold text-navy text-sm mb-0.5">{step.label}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`${fi % 2 === 1 ? "lg:order-1" : ""} flex justify-center`}>
                    <div className="bg-light rounded-3xl p-6 w-full max-w-sm">
                      <p className="text-navy font-display font-bold text-sm mb-4 flex items-center gap-2">
                        <span>{flow.emoji}</span> Flow {flow.id} — {flow.title}
                      </p>
                      <div className="space-y-2">
                        {flow.steps.map((step, si) => (
                          <div key={si} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                            <div className="w-6 h-6 rounded-full bg-teal text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{si + 1}</div>
                            <span className="text-navy text-sm font-medium">{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Guard View ── */}
        <section className="bg-navy py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                {c.guard_badge}
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-3">{c.guard_headline}</h2>
              <p className="text-white/50 max-w-xl mx-auto">{c.guard_sub}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.guard_features.map((f, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <p className="text-white font-semibold mb-1">{f.label}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">{c.features_headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.features.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-display font-bold text-navy mb-1">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-10">{c.faq_headline}</h2>
            <div className="space-y-4">
              {c.faqs.map((faq, i) => (
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

        {/* ── Related ── */}
        <section className="max-w-6xl mx-auto px-5 py-12">
          <h2 className="font-display text-xl font-bold text-navy mb-6">{c.related_headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {c.related.map((m, i) => (
              <Link key={i} href={m.href}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-teal/30 hover:shadow-md transition-all group">
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className="font-display font-bold text-navy mb-1 group-hover:text-teal transition-colors">{m.title}</h3>
                <p className="text-gray-500 text-sm">{m.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-teal py-16">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{c.cta_headline}</h2>
            <p className="text-white/70 mb-8">{c.cta_sub}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-teal font-bold text-sm hover:bg-white/90 transition-colors">
                {tr.common_register_free} →
              </Link>
              <Link href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold text-sm hover:border-white/80 transition-colors">
                {c.cta_compare}
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
