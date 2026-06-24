"use client";
// app/register/page.tsx
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STEPS = ["Society Details", "Admin Contact", "Done"];

interface Form {
  societyName: string; city: string; units: string; address: string;
  name: string; email: string; phone: string; role: string; language: string;
}
const BLANK: Form = { societyName: "", city: "", units: "", address: "", name: "", email: "", phone: "", role: "Secretary", language: "English" };

declare global { interface Window { gtag?: (...args: unknown[]) => void; } }

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(BLANK);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const next = (e: React.FormEvent) => { e.preventDefault(); setStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, email: form.email, phone: form.phone,
          society: `${form.societyName}, ${form.city}`, units: form.units,
          message: `New society registration.\n\nSociety: ${form.societyName}\nCity: ${form.city}\nUnits: ${form.units}\nAddress: ${form.address}\nRole: ${form.role}\nLanguage: ${form.language}`,
          type: "demo",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      if (typeof window !== "undefined" && window.gtag)
        window.gtag("event", "society_registered", { society_name: form.societyName, city: form.city, units: form.units });
      setStep(2); window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.");
    } finally { setLoading(false); }
  };

  const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors bg-white";
  const labelCls = "block text-sm font-semibold text-navy mb-1.5";

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16">
        <section className="bg-navy py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/10 blur-[100px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-5 text-center">
            <div className="inline-block bg-teal/20 text-teal text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">Free — No Credit Card</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Register Your Society</h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Get your society live in under 5 minutes. Free for up to 50 units — forever.</p>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-5 py-12">
          {/* Step indicator */}
          <div className="flex items-center gap-0 mb-10">
            {STEPS.map((label, i) => (
              <div key={label} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${i < step ? "bg-teal border-teal text-white" : i === step ? "bg-white border-teal text-teal" : "bg-white border-gray-200 text-gray-400"}`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className={`text-xs font-semibold mt-1.5 whitespace-nowrap ${i === step ? "text-teal" : "text-gray-400"}`}>{label}</span>
                </div>
                {i < STEPS.length - 1 && <div className={`flex-1 h-0.5 mx-2 mb-5 transition-colors ${i < step ? "bg-teal" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            {step === 0 && (
              <form onSubmit={next} className="space-y-5">
                <h2 className="font-display text-2xl font-bold text-navy mb-1">Tell us about your society</h2>
                <p className="text-gray-500 text-sm mb-6">Basic details about the residential complex you manage.</p>
                <div><label className={labelCls}>Society / Apartment Name *</label><input required value={form.societyName} onChange={set("societyName")} placeholder="e.g. Greenwood Residency" className={inputCls} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelCls}>City *</label><input required value={form.city} onChange={set("city")} placeholder="e.g. Ahmedabad" className={inputCls} /></div>
                  <div><label className={labelCls}>Number of Units *</label><input required type="number" min="1" value={form.units} onChange={set("units")} placeholder="e.g. 120" className={inputCls} /></div>
                </div>
                <div><label className={labelCls}>Society Address</label><input value={form.address} onChange={set("address")} placeholder="e.g. Satellite, Ahmedabad 380015" className={inputCls} /></div>
                <div>
                  <label className={labelCls}>Preferred App Language</label>
                  <select value={form.language} onChange={set("language")} className={inputCls}>
                    {["English","Hindi","Gujarati","Tamil","Marathi","Punjabi"].map(l => <option key={l}>{l}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/20">Continue →</button>
              </form>
            )}

            {step === 1 && (
              <form onSubmit={submit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold text-navy mb-1">Your contact details</h2>
                <p className="text-gray-500 text-sm mb-6">You&apos;ll be the primary admin for {form.societyName}.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className={labelCls}>Your Name *</label><input required value={form.name} onChange={set("name")} placeholder="Rajesh Patel" className={inputCls} /></div>
                  <div>
                    <label className={labelCls}>Your Role *</label>
                    <select required value={form.role} onChange={set("role")} className={inputCls}>
                      {["Secretary","President / Chairman","Treasurer","Committee Member","Owner / Resident"].map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
                <div><label className={labelCls}>Email Address *</label><input required type="email" value={form.email} onChange={set("email")} placeholder="secretary@mysociety.com" className={inputCls} /></div>
                <div><label className={labelCls}>Phone Number *</label><input required value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" className={inputCls} /></div>
                {error && <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>}
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setStep(0)} className="flex-1 py-3.5 rounded-xl border-2 border-gray-200 text-navy font-bold text-sm hover:border-teal transition-colors">← Back</button>
                  <button type="submit" disabled={loading} className="flex-1 py-3.5 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors shadow-lg shadow-teal/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {loading ? <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Submitting…</> : "Register Society →"}
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="text-center py-6">
                <div className="text-6xl mb-5">🎉</div>
                <h2 className="font-display text-2xl font-bold text-navy mb-3">You&apos;re on the list, {form.name.split(" ")[0]}!</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                  Our team has received your request for <strong>{form.societyName}</strong> and will set up your account within a few hours. Check your email at <strong>{form.email}</strong> for next steps.
                </p>
                <div className="bg-teal/5 border border-teal/20 rounded-2xl p-5 mb-8 text-left space-y-3">
                  <p className="font-semibold text-navy text-sm">While we set things up:</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>📱 Download the app — explore as a resident while your admin account is activated</li>
                    <li>📖 Read our <Link href="/blog/visitor-management-without-hardware" className="text-teal font-semibold">visitor management guide</Link></li>
                    <li>💬 Questions? <a href="https://wa.me/919876543210" className="text-teal font-semibold">WhatsApp us</a></li>
                  </ul>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.societymanagementcompany.societyapp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-bold text-sm hover:bg-navy/90 transition-colors">
                  📱 Download SocietyApp
                </a>
              </div>
            )}
          </div>

          {step < 2 && (
            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              {["✅ Free forever up to 50 units","🔒 No credit card needed","⚡ Live in 5 minutes"].map(t => (
                <span key={t} className="text-xs font-semibold text-gray-500">{t}</span>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}