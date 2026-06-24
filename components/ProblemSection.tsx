// components/ProblemSection.tsx
// Spec 2.1 Homepage — Problem Statement:
// "Cards with red left-border accent, crossout animation on scroll to show
//  SocietyApp solves each."
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { StaggerGroup, StaggerItem } from "./ScrollReveal"

const problems = [
  {
    emoji: "😤",
    title: "Security chaos at the gate",
    desc: "Guards with paper registers, residents complaining about unknown visitors, no OTP flow, no accountability.",
    fix: "Visitor Management with OTP entry, pre-approved passes, and a full log.",
  },
  {
    emoji: "📱",
    title: "WhatsApp maintenance fights",
    desc: "300 people in one group, fee disputes, no receipts, chasing defaulters every month manually.",
    fix: "Automated bills, UPI payment links, defaulter list at a glance.",
  },
  {
    emoji: "🗂️",
    title: "Complaints go nowhere",
    desc: "Issues raised on WhatsApp get buried. No tracking, no resolution timeline, no accountability.",
    fix: "Complaint ticketing with assigned owners, status updates, and closure photos.",
  },
];

export default function ProblemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Label */}
        <p className="text-teal text-xs font-bold uppercase tracking-widest text-center mb-3">
          Sound familiar?
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Society management is broken.
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-14 leading-relaxed">
          Most societies still rely on WhatsApp groups, paper registers, and
          Excel sheets. SocietyApp fixes all of it.
        </p>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <StaggerItem key={i}>
              <div className="group h-full rounded-2xl border border-gray-100 border-l-4 border-l-red-400 p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{p.emoji}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{p.title}</h3>

                {/* Crossout-on-scroll: the strike line draws itself in as the
                    card enters the viewport, signalling "this problem is solved". */}
                <p className="relative text-gray-400 text-sm leading-relaxed mb-4">
                  {p.desc}
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: reduceMotion ? 0 : 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: "easeInOut" }}
                    style={{ originX: 0 }}
                    className="absolute left-0 top-1/2 h-[1.5px] w-full bg-red-400/70"
                  />
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-teal uppercase tracking-wide mb-1">
                    SocietyApp fixes this
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.fix}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}