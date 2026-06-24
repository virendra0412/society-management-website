// components/Testimonials.tsx
"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    title: "Secretary, Shanti Residency",
    city: "Ahmedabad",
    units: "120 units",
    avatar: "RP",
    rating: 5,
    quote:
      "I was managing 120 flats on WhatsApp. Maintenance dues were a nightmare — I had to message each defaulter personally. SocietyApp gave me the defaulter list in one tap. My collection rate went from 60% to 94% in two months.",
    highlight: "Collection rate: 60% → 94%",
  },
  {
    name: "Ananya Krishnan",
    title: "RWA President, Prestige Palms",
    city: "Bengaluru",
    units: "340 units",
    avatar: "AK",
    rating: 5,
    quote:
      "We switched from MyGate. The per-unit pricing was killing us — ₹18,000 a month for 340 units. SocietyApp costs less than half and does everything our guards need. The OTP entry flow works exactly the way we need it to.",
    highlight: "Saved ₹10,000+/month vs MyGate",
  },
  {
    name: "Priya Mehta",
    title: "Resident, Kalpataru Heights",
    city: "Pune",
    units: "200 units",
    avatar: "PM",
    rating: 5,
    quote:
      "My maid has been coming for 3 years. Every day I used to get a WhatsApp from the guard. Now she has a trusted pass — I get a single evening digest. My phone is quiet, and I still know she arrived. This alone makes the app worth it.",
    highlight: "Zero daily interruptions from gate",
  },
  {
    name: "Suresh Iyer",
    title: "Treasurer, Sai Gardens",
    city: "Chennai",
    units: "85 units",
    avatar: "SI",
    rating: 5,
    quote:
      "Setting up our first bill took me 4 minutes. Residents got a push notification, they could see exactly what they owe and why, and 70% paid within 48 hours. No UPI screenshot chaos in the WhatsApp group anymore.",
    highlight: "70% paid within 48 hours of first bill",
  },
  {
    name: "Meena Agarwal",
    title: "Secretary, Emerald Township",
    city: "Jaipur",
    units: "150 units",
    avatar: "MA",
    rating: 5,
    quote:
      "The Hindi language support made the difference. Our committee members who aren't comfortable in English could finally use the app properly. Our security guard uses it in Hindi too. That's something MyGate never offered us.",
    highlight: "Full Hindi UI for guards & committee",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[active];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background blur blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-teal/5 blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5">
        {/* Heading */}
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">
          Real societies. Real results.
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Trusted by secretaries across India.
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
              {testimonials.map((_, i) => (
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