"use client";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const phoneScreenItems = [
  { icon: "🚪", label: "Ravi Kumar at Gate 1", sub: "OTP: 4829 · Expires 5 min", dot: "green" },
  { icon: "💸", label: "Maintenance Due – Flat 204", sub: "₹2,400 · Pay before 10th", dot: "amber" },
  { icon: "📢", label: "Society Notice", sub: "Water cut – 9 AM to 12 PM Sat", dot: "teal" },
  { icon: "✅", label: "Deepa Singh approved", sub: "Resident of Block B, Flat 301", dot: "green" },
];

export default function Hero() {
  const { tr } = useTranslation();

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center pt-16">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-[80px] pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-1 bg-teal" />

      <div className="max-w-6xl mx-auto px-5 w-full py-10 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-3.5 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse-dot" />
            <span className="text-teal text-xs font-semibold tracking-wide uppercase">{tr.hero_badge}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5">
            {tr.hero_h1_line1}<br />
            <span className="text-teal">{tr.hero_h1_line2}</span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">{tr.hero_sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/register" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/25">
              {tr.hero_cta_primary}<ArrowRight size={16} />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white/80 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors">
              <Play size={15} className="fill-white/80" />{tr.hero_cta_demo}
            </button>
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex -space-x-2">
              {["R","A","P","S","M"].map((l, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-teal/30 border-2 border-navy flex items-center justify-center text-teal text-xs font-bold">{l}</div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber text-amber" />)}
                <span className="text-white font-semibold text-sm ml-1">4.8</span>
              </div>
              <p className="text-white/40 text-xs">
                <AnimatedCounter value="1,200" /> {tr.hero_societies} · <AnimatedCounter value="85,000" /> {tr.hero_residents}
              </p>
            </div>
          </div>
        </div>

        {/* Right — Phone mockup */}
        <div className="flex justify-center lg:justify-end items-center">
          <div className="animate-float relative mt-8 mb-16 lg:my-0">
            <div className="w-64 bg-[#0a1628] rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/60 overflow-hidden p-1.5">
              <div className="flex justify-center mb-2 pt-1">
                <div className="w-20 h-5 bg-black rounded-full" />
              </div>
              <div className="bg-teal mx-1 rounded-xl px-3 py-2.5 mb-2">
                <p className="text-white/80 text-[10px] mb-0.5">{tr.hero_phone_greeting}</p>
                <p className="text-white font-display font-bold text-sm">{tr.hero_phone_greeting_name}</p>
              </div>
              <div className="space-y-1.5 px-1 pb-2">
                {phoneScreenItems.map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl px-3 py-2 flex items-start gap-2.5">
                    <span className="text-lg mt-0.5">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-[11px] font-semibold leading-tight truncate">{item.label}</p>
                      <p className="text-white/50 text-[10px] mt-0.5 truncate">{item.sub}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${item.dot === "green" ? "bg-green" : item.dot === "amber" ? "bg-amber" : "bg-teal"}`} />
                  </div>
                ))}
              </div>
              <div className="bg-white/5 mx-1 rounded-xl px-2 py-2 flex justify-around">
                {["🏠","👁️","💬","📋","⚙️"].map((ic, i) => (
                  <span key={i} className={`text-base ${i === 0 ? "opacity-100" : "opacity-40"}`}>{ic}</span>
                ))}
              </div>
              <div className="flex justify-center mt-2 pb-1">
                <div className="w-24 h-1 bg-white/20 rounded-full" />
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="absolute -left-14 top-16 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2">
              <span className="text-xl">🚪</span>
              <div>
                <p className="text-navy font-bold text-sm leading-none"><AnimatedCounter value="24" duration={1.2} /></p>
                <p className="text-gray-400 text-[10px]">{tr.hero_visitors_today}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
              className="absolute -right-14 bottom-24 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2">
              <span className="text-xl">✅</span>
              <div>
                <p className="text-green font-bold text-sm leading-none">₹<AnimatedCounter value="1.2" duration={1.2} />L</p>
                <p className="text-gray-400 text-[10px]">{tr.hero_collected}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}