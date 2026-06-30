"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n/LanguageContext";

type Step = 1 | 2 | 3;

interface Form {
  societyName: string; city: string; state: string; units: string;
  adminName: string; email: string; phone: string; role: string;
  password: string; confirm: string; agree: boolean;
}

const INITIAL: Form = {
  societyName: "", city: "", state: "", units: "",
  adminName: "", email: "", phone: "", role: "secretary",
  password: "", confirm: "", agree: false,
};

const STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan",
  "Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Delhi","Chandigarh","Puducherry",
];

export default function RegisterPage() {
  const { tr } = useTranslation();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<Form>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value }));

  function validate(s: Step) {
    const errs: Partial<Record<keyof Form, string>> = {};
    if (s === 1) {
      if (!form.societyName.trim()) errs.societyName = "Required";
      if (!form.city.trim()) errs.city = "Required";
      if (!form.state) errs.state = "Required";
      if (!form.units || Number(form.units) < 1) errs.units = "Enter a valid unit count";
    }
    if (s === 2) {
      if (!form.adminName.trim()) errs.adminName = "Required";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
      if (!form.phone.trim() || !/^\+?[\d\s-]{8,}$/.test(form.phone)) errs.phone = "Valid phone required";
    }
    if (s === 3) {
      if (form.password.length < 8) errs.password = "Min 8 characters";
      if (form.password !== form.confirm) errs.confirm = "Passwords don't match";
      if (!form.agree) errs.agree = "You must agree to continue";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const next = () => { if (validate(step)) setStep((s) => (s < 3 ? (s + 1) as Step : s)); };
  const back = () => setStep((s) => (s > 1 ? (s - 1) as Step : s));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate(3)) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setDone(true);
    if (typeof window !== "undefined" && (window as any).saEvent) {
      (window as any).saEvent("society_registered", { plan: "free", units: form.units });
    }
  }

  const stepLabels = [tr.reg_step1, tr.reg_step2, tr.reg_step3];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light pt-16">
        <div className="max-w-lg mx-auto px-5 py-16">

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal text-3xl mb-4">🏘️</div>
            <h1 className="font-display text-3xl font-bold text-navy mb-1">{tr.reg_title}</h1>
            <p className="text-gray-500 text-sm">{tr.reg_subtitle}</p>
          </div>

          {done ? (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">
              <div className="text-6xl mb-5">🎉</div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">{tr.reg_success_title}</h2>
              <p className="text-gray-500 mb-2">
                <strong className="text-navy">{form.societyName}</strong> {tr.reg_success_sub}
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Credentials sent to <strong>{form.email}</strong>.
              </p>
              <div className="space-y-3">
                <Link href="/" className="block w-full py-3 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors">{tr.register_success_home}</Link>
                <Link href="/features/visitor-management" className="block w-full py-3 rounded-xl border border-gray-200 text-navy font-semibold text-sm hover:border-teal/30 transition-colors">
                  {tr.register_explore_vm}
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Step indicator */}
              <div className="flex items-center gap-2 mb-6">
                {stepLabels.map((label, i) => {
                  const n = (i + 1) as Step;
                  const isDone = step > n;
                  const isActive = step === n;
                  return (
                    <div key={n} className="flex items-center gap-2 flex-1">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                        isDone ? "bg-teal text-white" : isActive ? "bg-navy text-white" : "bg-gray-200 text-gray-500"}`}>
                        {isDone ? "✓" : n}
                      </div>
                      <span className={`text-xs font-semibold hidden sm:block truncate ${isActive ? "text-navy" : "text-gray-400"}`}>{label}</span>
                      {i < stepLabels.length - 1 && <div className={`h-px flex-1 transition-colors ${isDone ? "bg-teal" : "bg-gray-200"}`} />}
                    </div>
                  );
                })}
              </div>

              <form onSubmit={submit} noValidate>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-5">

                  {/* Step 1 */}
                  {step === 1 && (
                    <>
                      <h2 className="font-display font-bold text-navy text-xl mb-1">{tr.reg_step1}</h2>
                      <F label={tr.reg_society_name} error={errors.societyName}>
                        <input value={form.societyName} onChange={set("societyName")} placeholder="e.g. Greenwood Residency" className={inp(!!errors.societyName)} />
                      </F>
                      <div className="grid grid-cols-2 gap-4">
                        <F label={tr.reg_city} error={errors.city}>
                          <input value={form.city} onChange={set("city")} placeholder="e.g. Ahmedabad" className={inp(!!errors.city)} />
                        </F>
                        <F label={tr.reg_state} error={errors.state}>
                          <select value={form.state} onChange={set("state")} className={inp(!!errors.state)}>
                            <option value="">Select state</option>
                            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </F>
                      </div>
                      <F label={tr.reg_units} error={errors.units}>
                        <input type="number" min="1" value={form.units} onChange={set("units")} placeholder="e.g. 120" className={inp(!!errors.units)} />
                        <p className="text-xs text-gray-400 mt-1">{tr.reg_units_hint}</p>
                      </F>
                      <div className="bg-teal/5 border border-teal/20 rounded-2xl p-4">
                        <p className="text-teal text-xs font-semibold mb-1">✅ {tr.cta_trust_1}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">Visitor Management · Notice Board · Community Help · Basic Maintenance billing</p>
                      </div>
                    </>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <>
                      <h2 className="font-display font-bold text-navy text-xl mb-1">{tr.reg_step2}</h2>
                      <p className="text-gray-400 text-sm mb-2">{tr.register_primary_admin} <strong className="text-navy">{form.societyName}</strong></p>
                      <F label={tr.reg_admin_name} error={errors.adminName}>
                        <input value={form.adminName} onChange={set("adminName")} placeholder="e.g. Rajesh Patel" className={inp(!!errors.adminName)} />
                      </F>
                      <F label={tr.reg_role}>
                        <select value={form.role} onChange={set("role")} className={inp(false)}>
                          <option value="secretary">Secretary</option>
                          <option value="chairman">Chairman / President</option>
                          <option value="treasurer">Treasurer</option>
                          <option value="committee">Committee Member</option>
                          <option value="owner">Owner / Developer</option>
                        </select>
                      </F>
                      <F label={tr.reg_email} error={errors.email}>
                        <input type="email" value={form.email} onChange={set("email")} placeholder="secretary@example.com" className={inp(!!errors.email)} />
                      </F>
                      <F label={tr.reg_phone} error={errors.phone}>
                        <input type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98765 43210" className={inp(!!errors.phone)} />
                      </F>
                    </>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <>
                      <h2 className="font-display font-bold text-navy text-xl mb-1">{tr.reg_step3}</h2>
                      <F label={tr.reg_password} error={errors.password}>
                        <input type="password" value={form.password} onChange={set("password")} placeholder="Min 8 characters" className={inp(!!errors.password)} autoComplete="new-password" />
                      </F>
                      <F label={tr.reg_confirm_pwd} error={errors.confirm}>
                        <input type="password" value={form.confirm} onChange={set("confirm")} placeholder="Repeat password" className={inp(!!errors.confirm)} autoComplete="new-password" />
                      </F>
                      <div className="bg-light rounded-2xl p-4 text-sm">
                        <p className="font-semibold text-navy mb-1">{form.societyName} · {form.city}, {form.state}</p>
                        <p className="text-gray-500">{form.units} units · {form.adminName} · {form.email}</p>
                        <p className="text-gray-400 text-xs mt-2">{tr.register_summary_note}</p>
                      </div>
                      <label className={`flex items-start gap-3 cursor-pointer ${errors.agree ? "text-red-500" : "text-gray-600"}`}>
                        <input type="checkbox" checked={form.agree} onChange={set("agree")} className="mt-1 w-4 h-4 accent-teal flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {tr.reg_agree_pre}{" "}
                          <Link href="/terms" target="_blank" className="text-teal hover:underline">{tr.reg_agree_terms}</Link>
                          {" "}{tr.reg_agree_and}{" "}
                          <Link href="/privacy" target="_blank" className="text-teal hover:underline">{tr.reg_agree_privacy}</Link>.
                        </span>
                      </label>
                      {errors.agree && <p className="text-red-500 text-xs">{errors.agree}</p>}
                    </>
                  )}

                  <div className="flex gap-3 pt-2">
                    {step > 1 && (
                      <button type="button" onClick={back} className="flex-1 py-3 rounded-xl border border-gray-200 text-navy font-semibold text-sm hover:border-teal/40 transition-colors">
                        ← {tr.common_back}
                      </button>
                    )}
                    {step < 3 ? (
                      <button type="button" onClick={next} className="flex-1 py-3 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors">
                        {tr.reg_continue}
                      </button>
                    ) : (
                      <button type="submit" disabled={loading} className="flex-1 py-3 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                        {loading
                          ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{tr.reg_submitting}</>
                          : tr.reg_submit}
                      </button>
                    )}
                  </div>
                </div>
              </form>

              <p className="text-center text-gray-400 text-xs mt-5">
                {tr.reg_have_account}{" "}
                <Link href="/login" className="text-teal font-semibold hover:underline">{tr.reg_signin_link}</Link>
              </p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

const inp = (err: boolean) =>
  `w-full border ${err ? "border-red-400 bg-red-50" : "border-gray-200"} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors bg-white`;

function F({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}