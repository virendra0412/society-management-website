"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getAboutContent } from "@/lib/i18n/content/aboutContent";

export default function AboutContent() {
  const { tr, locale } = useTranslation();
  const content = getAboutContent(locale);

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* Hero */}
        <section className="bg-navy relative overflow-hidden py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">{tr.about_story_badge}</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {tr.about_mission.split("as good as")[0]}
              <span className="text-teal">as good as the buildings they live in.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {tr.about_intro}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* Mission quote */}
        <section className="max-w-3xl mx-auto px-5 py-16 text-center">
          <div className="text-6xl mb-6">🏘️</div>
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-navy italic leading-relaxed mb-6">
            "{tr.about_mission}"
          </blockquote>
          <p className="text-gray-400 font-semibold">— Arjun Mehta, Co-Founder & CEO</p>
        </section>

        {/* Timeline */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">{tr.about_timeline_title}</h2>
            <div className="space-y-8">
              {content.timeline.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-12 rounded-2xl bg-teal flex items-center justify-center text-white font-display font-bold text-xs text-center flex-shrink-0 leading-tight px-1">
                      {item.year}
                    </div>
                    {i < content.timeline.length - 1 && <div className="w-0.5 flex-1 bg-teal/20 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-display font-bold text-navy text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">{tr.about_values_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.values.map((v, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-4">{tr.about_team_title}</h2>
            <p className="text-gray-500 text-center mb-12">{tr.about_team_sub}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.team.map((member, i) => (
                <div key={i} className="bg-light rounded-2xl p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-navy mx-auto mb-4 flex items-center justify-center text-4xl">{member.emoji}</div>
                  <h3 className="font-display font-bold text-navy text-lg">{member.name}</h3>
                  <p className="text-teal text-sm font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-navy py-16">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {content.stats.map((s, i) => (
                <div key={i}>
                  <p className="font-display text-4xl font-bold text-teal mb-1">{s.num}</p>
                  <p className="text-white/50 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-5 py-16 text-center">
          <h2 className="font-display text-3xl font-bold text-navy mb-3">{tr.about_cta_title}</h2>
          <p className="text-gray-500 mb-8">{tr.hero_badge}.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25">
              {tr.common_register_free} →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-colors">
              {tr.contact_title}
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}