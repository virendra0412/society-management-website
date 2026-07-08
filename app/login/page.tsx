"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/lib/i18n/LanguageContext";

type Mode = "login" | "forgot";

export default function LoginPage() {
  const { tr } = useTranslation();
  const [mode, setMode] = useState<Mode>("login");
  const [form, setForm] = useState({ email: "", password: "" });
  const [forgotEmail, setForgotEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) { setError("Email and password are required."); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setError("Invalid email or password. Please try again.");
  }

  async function handleForgot(e: React.FormEvent) {
    e.preventDefault();
    if (!forgotEmail) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setForgotSent(true);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-light pt-16">
        <div className="max-w-md mx-auto px-5 py-16">

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy text-3xl mb-4">🔐</div>
            <h1 className="font-display text-3xl font-bold text-navy mb-1">
              {mode === "login" ? tr.login_title : tr.login_reset_title}
            </h1>
            <p className="text-gray-500 text-sm">
              {mode === "login" ? tr.login_subtitle : tr.login_reset_sub}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">

            {/* Login form */}
            {mode === "login" && (
              <form onSubmit={handleLogin} noValidate className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-navy mb-1.5">{tr.login_email}</label>
                  <input type="email" value={form.email} onChange={set("email")} required
                    placeholder="secretary@mysociety.com" autoComplete="email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-semibold text-navy">{tr.login_password}</label>
                    <button type="button" onClick={() => { setMode("forgot"); setError(""); }}
                      className="text-teal text-xs font-semibold hover:underline">{tr.login_forgot}</button>
                  </div>
                  <input type="password" value={form.password} onChange={set("password")} required
                    placeholder="Your password" autoComplete="current-password"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">{error}</div>
                )}

                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-navy text-white font-bold text-sm hover:bg-navy/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {loading
                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{tr.login_loading}</>
                    : tr.login_cta}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
                  <div className="relative text-center"><span className="bg-white px-3 text-gray-400 text-xs">or</span></div>
                </div>

                <a href="https://wa.me/9537495474?text=Hi%2C%20I%20need%20help%20logging%20in"
                  target="_blank" rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:border-teal/40 transition-colors flex items-center justify-center gap-2">
                  💬 {tr.login_help_whatsapp}
                </a>

                <p className="text-center text-gray-400 text-xs">
                  {tr.login_no_account}{" "}
                  <Link href="/register" className="text-teal font-semibold hover:underline">{tr.login_register_link}</Link>
                </p>
              </form>
            )}

            {/* Forgot password */}
            {mode === "forgot" && (
              <>
                <button onClick={() => { setMode("login"); setForgotSent(false); }}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-navy text-sm mb-6 transition-colors">
                  ← {tr.login_reset_back}
                </button>

                {forgotSent ? (
                  <div className="text-center py-6">
                    <div className="text-5xl mb-4">📧</div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2">{tr.login_reset_success_title}</h3>
                    <p className="text-gray-500 text-sm mb-6">
                      {tr.login_reset_success_desc.replace("{email}", forgotEmail)}
                    </p>
                    <button onClick={() => { setMode("login"); setForgotSent(false); setForgotEmail(""); }}
                      className="text-teal text-sm font-semibold hover:underline">
                      ← {tr.login_cta}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleForgot} noValidate className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">{tr.login_email}</label>
                      <input type="email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} required
                        placeholder="secretary@mysociety.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors" />
                    </div>
                    <button type="submit" disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                      {loading
                        ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
                        : tr.login_reset_send}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-6 mt-6">
            {["🔒 SSL Encrypted", "🇮🇳 Data in India", "✅ SOC-2 Compliant"].map((t) => (
              <span key={t} className="text-gray-400 text-xs">{t}</span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}