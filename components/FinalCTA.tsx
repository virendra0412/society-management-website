// components/FinalCTA.tsx
// Full-width navy section with teal glow — spec: "Your society is waiting."
// Includes email input + Register button

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const trustPoints = [
  "Free forever for up to 50 units",
  "No credit card required",
  "Live in under 5 minutes",
  "6 Indian languages supported",
];

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Redirect to register page with email pre-filled
    window.location.href = `/register?email=${encodeURIComponent(email)}`;
  };

  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      {/* Teal glow — spec requirement */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-teal/20 blur-[120px]" />
      </div>

      {/* Left accent */}
      <div className="absolute left-0 top-0 h-full w-1 bg-teal" />

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-3.5 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
          <span className="text-teal text-xs font-semibold tracking-wide uppercase">
            Join 1,200+ societies across India
          </span>
        </div>

        {/* Main headline — spec: "Your society is waiting." */}
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Your society is waiting.
        </h2>

        <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Get your gate secured, bills collected, and residents informed — in one app your entire society will actually use.
        </p>

        {/* Email + CTA form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-teal/60 focus:bg-white/15 transition-all"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/30 whitespace-nowrap"
            >
              Register Free <ArrowRight size={15} />
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-2 bg-green/20 border border-green/30 rounded-xl px-6 py-4 mb-8 text-green font-semibold">
            <Check size={18} />
            You&rsquo;re on the way! Redirecting to registration…
          </div>
        )}

        {/* Trust points row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
          {trustPoints.map((p, i) => (
            <div key={i} className="flex items-center gap-1.5 text-white/40 text-xs">
              <Check size={12} className="text-teal flex-shrink-0" />
              {p}
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <p className="text-white/30 text-sm">
          Already registered?{" "}
          <Link href="/login" className="text-teal hover:text-teal/80 font-medium transition-colors">
            Sign in →
          </Link>
        </p>

        {/* App store badges */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-2xl">🤖</span>
            <div className="text-left">
              <p className="text-white/40 text-[10px]">Get it on</p>
              <p className="text-white text-xs font-semibold">Google Play</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-2xl">🍎</span>
            <div className="text-left">
              <p className="text-white/40 text-[10px]">Download on the</p>
              <p className="text-white text-xs font-semibold">App Store</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}