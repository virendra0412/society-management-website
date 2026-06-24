// home/claude/societyapp-build/app/contact/page.tsx
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", society: "", units: "", message: "", type: "demo" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* ── Hero ── */}
        <section className="bg-navy py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">Get in Touch</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">We'd love to hear from you</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Whether you want a demo, have a question, or want to report an issue — real people respond, usually within a few hours.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        {/* ── Quick contact cards ── */}
        <section className="max-w-6xl mx-auto px-5 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: "💬",
                title: "WhatsApp Chat",
                desc: "Fastest response. Message us and we reply within 2 hours during business hours.",
                cta: "Chat on WhatsApp",
                href: "https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20SocietyApp",
                bg: "bg-green/10 border-green/30",
                color: "text-green",
              },
              {
                icon: "📧",
                title: "Email Us",
                desc: "For detailed queries, partnership proposals, or press enquiries.",
                cta: "hello@societyapp.in",
                href: "mailto:hello@societyapp.in",
                bg: "bg-teal/10 border-teal/30",
                color: "text-teal",
              },
              {
                icon: "📅",
                title: "Book a Demo",
                desc: "15-minute personalised walkthrough with a product specialist. Free of charge.",
                cta: "Book a Free Demo",
                href: "#contact-form",
                bg: "bg-amber/10 border-amber/30",
                color: "text-amber",
              },
            ].map((c, i) => (
              <a key={i} href={c.href} className={`block border ${c.bg} rounded-2xl p-6 hover:shadow-md transition-shadow`}>
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <span className={`text-sm font-semibold ${c.color}`}>{c.cta} →</span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="contact-form">
            {/* Contact form */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">Send us a message</h2>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">Message received!</h3>
                  <p className="text-gray-500">We'll get back to you within 2–4 hours during business hours (Mon–Sat, 9 AM – 7 PM IST).</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Your Name *</label>
                      <input name="name" required value={form.name} onChange={handle} placeholder="Rajesh Patel" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Email *</label>
                      <input name="email" type="email" required value={form.email} onChange={handle} placeholder="secretary@mysociety.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Phone</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">No. of Units</label>
                      <input name="units" value={form.units} onChange={handle} placeholder="e.g. 120" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Society Name</label>
                    <input name="society" value={form.society} onChange={handle} placeholder="e.g. Greenwood Residency, Ahmedabad" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">What can we help with?</label>
                    <select name="type" value={form.type} onChange={handle} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors bg-white">
                      <option value="demo">Book a product demo</option>
                      <option value="pricing">Pricing & plan query</option>
                      <option value="support">Technical support</option>
                      <option value="partnership">Partnership / reseller</option>
                      <option value="press">Press / media enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Message *</label>
                    <textarea name="message" required value={form.message} onChange={handle} rows={4} placeholder="Tell us about your society and what you're looking for..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors resize-none" />
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
                  )}
                  <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {loading ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending…</>
                    ) : "Send Message →"}
                  </button>
                  <p className="text-gray-400 text-xs text-center">We respond within 4 hours on weekdays. Your data is never shared.</p>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-display font-bold text-navy text-lg mb-4">📍 Office Hours</h3>
                <div className="space-y-2">
                  {[
                    ["Mon – Fri", "9:00 AM – 7:00 PM IST"],
                    ["Saturday", "10:00 AM – 5:00 PM IST"],
                    ["Sunday", "Closed (emergency support available)"],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-gray-500">{day}</span>
                      <span className="font-semibold text-navy">{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-display font-bold text-navy text-lg mb-4">🏙️ We serve cities across India</h3>
                <div className="flex flex-wrap gap-2">
                  {["Mumbai", "Pune", "Bengaluru", "Ahmedabad", "Chennai", "Delhi NCR", "Hyderabad", "Surat", "Jaipur", "Kolkata", "Vadodara", "Nagpur"].map(city => (
                    <span key={city} className="bg-light text-navy text-xs font-semibold px-3 py-1.5 rounded-full">{city}</span>
                  ))}
                </div>
              </div>

              <div className="bg-teal rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-display font-bold text-xl mb-2">Prefer WhatsApp?</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">Message us directly on WhatsApp. Our team responds within 2 hours on weekdays. No bots — real product specialists.</p>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20a%20demo%20of%20SocietyApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-teal font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}