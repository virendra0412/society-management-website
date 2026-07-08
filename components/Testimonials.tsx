// components/Testimonials.tsx
"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { getTestimonialsContent } from "@/lib/i18n/content/testimonialsContent";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { tr, locale } = useTranslation();
  const content = getTestimonialsContent(locale);

  const prev = () => setActive((i) => (i === 0 ? content.items.length - 1 : i - 1));
  const next = () => setActive((i) => (i === content.items.length - 1 ? 0 : i + 1));
  const t = content.items[active];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background blur blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-teal/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">
          {tr.home_testimonials_eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-16">
          {tr.home_testimonials_heading}
        </h2>

        {/* Main testimonial card */}
        <div className="relative">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            {/* Quote icon */}
            <Quote size={36} className="text-teal/40 mb-6" />

            {/* Quote text */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Highlight chip */}
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-teal text-xs font-semibold">{t.highlight}</span>
            </div>

            {/* Author row */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-teal/30 border border-teal/40 flex items-center justify-center text-teal font-display font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.title}</p>
                  <p className="text-white/30 text-xs">
                    {t.city} · {t.units}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber text-amber" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {content.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all ${
                    i === active ? "w-6 h-2 bg-teal" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Trust stats row */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
          {[
            { value: "1,200+", label: "Societies onboarded" },
            { value: "85,000+", label: "Residents on platform" },
            { value: "4.8★", label: "Play Store rating" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-teal mb-1">
                {s.value}
              </p>
              <p className="text-white/40 text-xs md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}