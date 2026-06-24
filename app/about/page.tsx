//app/about/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About SocietyApp — Our Mission & Team",
  description: "Built by people who lived in a society and felt the pain. SocietyApp's mission is to give every Indian residential community a management system as good as the buildings they live in.",
};

const values = [
  { icon: "🔍", title: "Transparency", desc: "Every rupee tracked. Every entry logged. Admins and residents always on the same page." },
  { icon: "✨", title: "Simplicity", desc: "If a 55-year-old secretary can't use it in 5 minutes, we haven't done our job right." },
  { icon: "🗣️", title: "Respect for Local Language", desc: "India has dozens of languages. We support 6 — and we're not done." },
  { icon: "🔐", title: "Privacy First", desc: "Resident data is never sold. Society data stays within the society's control." },
];

const timeline = [
  { year: "2022", title: "The problem discovered", desc: "Our founders lived in a gated society in Ahmedabad. The secretary was managing 180 units with WhatsApp groups and a paper register. A robbery happened because the gate log was missing for three days." },
  { year: "2023 Q1", title: "Research phase begins", desc: "18 months of conversations with 200+ RWA presidents across Mumbai, Pune, Bengaluru, Ahmedabad, and Chennai. Every pain point documented." },
  { year: "2023 Q3", title: "First prototype built", desc: "A basic visitor management MVP tested with 12 pilot societies. Feedback was overwhelming — they wanted billing, notices, and more." },
  { year: "2024 Q1", title: "SocietyApp v1.0 launched", desc: "22 modules. Free tier with real visitor management. React Native apps for iOS and Android. Multilingual UI in 6 languages." },
  { year: "2024", title: "Growing rapidly", desc: "1,200+ societies onboarded. 85,000+ residents on the platform. MyGate secretaries switching for the free tier." },
];

const team = [
  { name: "Arjun Mehta", title: "Co-Founder & CEO", emoji: "👨‍💼", bio: "Former RWA secretary. Built SocietyApp after managing his own society manually for 3 years." },
  { name: "Priya Nair", title: "Co-Founder & CTO", emoji: "👩‍💻", bio: "Ex-Flipkart senior engineer. Leads the React Native and backend engineering teams." },
  { name: "Vikram Shah", title: "Head of Product", emoji: "👨‍🎨", bio: "10 years in B2B SaaS product. Obsessed with reducing time-to-value for first-time users." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* ── Hero ── */}
        <section className="bg-navy relative overflow-hidden py-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">Our Story</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We believe every Indian society deserves a management system as good as
              <span className="text-teal"> the buildings they live in.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              SocietyApp was born from a real problem. Not a business idea whiteboard — an actual robbery that happened because a gate log was missing for three days.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* ── Mission quote ── */}
        <section className="max-w-3xl mx-auto px-5 py-16 text-center">
          <div className="text-6xl mb-6">🏘️</div>
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-navy italic leading-relaxed mb-6">
            "WhatsApp groups aren't a management system. Paper registers aren't accountable. India's residential societies deserve better — and they deserve it free."
          </blockquote>
          <p className="text-gray-400 font-semibold">— Arjun Mehta, Co-Founder & CEO</p>
        </section>

        {/* ── Timeline ── */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">How we got here</h2>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-teal flex items-center justify-center text-white font-display font-bold text-xs text-center flex-shrink-0 leading-tight px-1">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-teal/20 mt-2" />}
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

        {/* ── Values ── */}
        <section className="max-w-6xl mx-auto px-5 py-16">
          <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-4">The team</h2>
            <p className="text-gray-500 text-center mb-12">Built by people who've lived the problem — and won't stop until it's solved for every society in India.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
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

        {/* ── Stats ── */}
        <section className="bg-navy py-16">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "1,200+", label: "Societies onboarded" },
                { num: "85,000+", label: "Residents on platform" },
                { num: "22", label: "Modules built" },
                { num: "6", label: "Indian languages" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-display text-4xl font-bold text-teal mb-1">{s.num}</p>
                  <p className="text-white/50 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-3xl mx-auto px-5 py-16 text-center">
          <h2 className="font-display text-3xl font-bold text-navy mb-3">Ready to join the movement?</h2>
          <p className="text-gray-500 mb-8">Get your society live in under 5 minutes. Free for up to 50 units.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25">
              Register Your Society Free →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-navy text-navy font-semibold text-sm hover:bg-navy hover:text-white transition-colors">
              Talk to Us
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}