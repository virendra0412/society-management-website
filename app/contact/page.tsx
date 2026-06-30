"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n/LanguageContext";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const { tr } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", society: "", units: "", message: "", type: "demo" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? "Submission failed");
      setStatus("success");
      if (typeof window !== "undefined" && (window as any).saEvent)
        (window as any).saEvent("contact_form_submit", { type: form.type });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp instead.");
      setStatus("error");
    }
  }

  const quickCards = [
    { icon: "💬", title: tr.contact_quick_wapp_title, desc: tr.contact_quick_wapp_desc, cta: tr.contact_quick_wapp_cta, href: "https://wa.me/919876543210", highlight: "bg-green/10 border-green/30 text-green" },
    { icon: "📧", title: tr.contact_quick_email_title, desc: tr.contact_quick_email_desc, cta: tr.contact_quick_email_cta, href: "mailto:hello@societyapp.in", highlight: "bg-teal/10 border-teal/30 text-teal" },
    { icon: "📅", title: tr.contact_quick_demo_title, desc: tr.contact_quick_demo_desc, cta: tr.contact_quick_demo_cta, href: "#contact-form", highlight: "bg-amber/10 border-amber/30 text-amber" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">

        {/* Hero */}
        <section className="bg-navy py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">{tr.contact_badge}</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{tr.contact_title}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{tr.contact_sub}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 30L1440 30L1440 5C1200 25 720 0 0 15L0 30Z" fill="#F4F6F8" />
            </svg>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 py-12">
          {/* Quick cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {quickCards.map((c, i) => (
              <a key={i} href={c.href} className={`block border rounded-2xl p-6 hover:shadow-md transition-shadow ${c.highlight.split(" ").slice(0, 2).join(" ")}`}>
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <span className={`text-sm font-semibold ${c.highlight.split(" ")[2]}`}>{c.cta} →</span>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" id="contact-form">
            {/* Form */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-navy mb-6">{tr.common_send_message}</h2>

              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">{tr.contact_success_title}</h3>
                  <p className="text-gray-500 text-sm">{tr.contact_success_sub}</p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{tr.reg_admin_name}</label>
                      <input name="name" required value={form.name} onChange={handle} placeholder="Rajesh Patel" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{tr.reg_email}</label>
                      <input name="email" type="email" required value={form.email} onChange={handle} placeholder="secretary@society.com" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{tr.reg_phone}</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{tr.reg_units}</label>
                      <input name="units" value={form.units} onChange={handle} placeholder="e.g. 120" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">{tr.reg_society_name}</label>
                    <input name="society" value={form.society} onChange={handle} placeholder="e.g. Greenwood Residency, Ahmedabad" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">{tr.contact_form_help}</label>
                    <select name="type" value={form.type} onChange={handle} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors bg-white">
                      <option value="demo">{tr.common_book_demo}</option>
                      <option value="pricing">{tr.nav_pricing} query</option>
                      <option value="support">Technical support</option>
                      <option value="partnership">Partnership / reseller</option>
                      <option value="press">Press / media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">{tr.contact_message_label}</label>
                    <textarea name="message" required value={form.message} onChange={handle} rows={4}
                      placeholder="Tell us about your society and what you're looking for…"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors resize-none" />
                  </div>
                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">{errorMsg}</div>
                  )}
                  <button type="submit" disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/20 disabled:opacity-60 flex items-center justify-center gap-2">
                    {status === "loading"
                      ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{tr.common_loading}</>
                      : `${tr.common_send_message} →`}
                  </button>
                  <p className="text-gray-400 text-xs text-center">{tr.contact_response_note}</p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-display font-bold text-navy text-lg mb-4">📍 {tr.contact_sidebar_hours}</h3>
                <div className="space-y-2">
                  {[["Mon – Fri","9:00 AM – 7:00 PM IST"],["Saturday","10:00 AM – 5:00 PM IST"],["Sunday","Closed (emergency support available)"]].map(([d,t]) => (
                    <div key={d} className="flex justify-between text-sm">
                      <span className="text-gray-500">{d}</span>
                      <span className="font-semibold text-navy">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-display font-bold text-navy text-lg mb-4">🏙️ {tr.contact_sidebar_cities}</h3>
                <div className="flex flex-wrap gap-2">
                  {["Mumbai","Pune","Bengaluru","Ahmedabad","Chennai","Delhi NCR","Hyderabad","Surat","Jaipur","Kolkata","Vadodara","Nagpur"].map((c) => (
                    <span key={c} className="bg-light text-navy text-xs font-semibold px-3 py-1.5 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
              <div className="bg-teal rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-display font-bold text-xl mb-2">{tr.contact_sidebar_pref}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{tr.contact_sidebar_pref_desc}</p>
                <a href="https://wa.me/919876543210?text=Hi%2C%20I'd%20like%20a%20demo%20of%20SocietyApp" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-teal font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors">
                  💬 {tr.contact_sidebar_cta}
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