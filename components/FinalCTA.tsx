"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const { tr } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = `/register?email=${encodeURIComponent(email)}`;
  };

  const trustPoints = [tr.cta_trust_1, tr.cta_trust_2, tr.cta_trust_3, tr.cta_trust_4];

  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-teal/20 blur-[120px]" />
      </div>
      <div className="absolute left-0 top-0 h-full w-1 bg-teal" />

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-3.5 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
          <span className="text-teal text-xs font-semibold tracking-wide uppercase">{tr.cta_eyebrow}</span>
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">{tr.cta_headline}</h2>
        <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto">{tr.cta_sub}</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder={tr.cta_email_ph} required
            className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal/60 focus:bg-white/15 transition-all"
          />
          <button type="submit" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/30 whitespace-nowrap">
            {tr.cta_button} <ArrowRight size={15} />
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
          {trustPoints.map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 text-white/40 text-xs">
              <Check size={12} className="text-teal flex-shrink-0" />{p}
            </div>
          ))}
        </div>

        <p className="text-white/30 text-sm">
          {tr.cta_already}{" "}
          <Link href="/login" className="text-teal hover:text-teal/80 font-medium transition-colors">{tr.cta_signin_link}</Link>
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          {[{ icon: "🤖", pre: "Get it on", label: "Google Play" }, { icon: "🍎", pre: "Download on the", label: "App Store" }].map((b) => (
            <div key={b.label} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <span className="text-2xl">{b.icon}</span>
              <div className="text-left">
                <p className="text-white/40 text-[10px]">{b.pre}</p>
                <p className="text-white text-xs font-semibold">{b.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}