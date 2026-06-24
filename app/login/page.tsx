"use client";
// app/login/page.tsx
// Login redirect page — the actual auth is in the mobile app / backend.
// This page tells web visitors to use the app and gives a deep link.
// When a web portal is built, replace this with real auth.

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleMagicLink = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call /api/magic-link when web portal is ready
    // For now just simulate the sent state
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="bg-light min-h-screen pt-16 flex items-center justify-center px-5">
        <div className="w-full max-w-md">

          {/* Card */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center">
            <div className="text-5xl mb-4">👋</div>
            <h1 className="font-display text-2xl font-bold text-navy mb-2">Welcome back</h1>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              SocietyApp is a mobile-first platform. Use the app on your phone for the best experience.
            </p>

            {/* Primary: Download App */}
            <a
              href="https://play.google.com/store/apps/details?id=com.societymanagementcompany.societyapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-navy text-white font-bold text-sm hover:bg-navy/90 transition-colors mb-3"
            >
              <span className="text-xl">📱</span>
              Open in SocietyApp (Android)
            </a>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-gray-400 font-semibold uppercase tracking-wider">or</span></div>
            </div>

            {/* Secondary: Magic link (placeholder) */}
            {sent ? (
              <div className="bg-teal/5 border border-teal/20 rounded-2xl p-5">
                <div className="text-3xl mb-2">📧</div>
                <p className="font-semibold text-navy text-sm mb-1">Check your email</p>
                <p className="text-gray-500 text-xs">We&apos;ve sent a login link to <strong>{email}</strong>. Click it to sign in to your admin dashboard.</p>
              </div>
            ) : (
              <form onSubmit={handleMagicLink} className="text-left">
                <label className="block text-sm font-semibold text-navy mb-1.5">Sign in via email link</label>
                <div className="flex gap-2">
                  <input
                    type="email" required value={email} onChange={e => setEmail(e.target.value)}
                    placeholder="secretary@mysociety.com"
                    className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal transition-colors"
                  />
                  <button type="submit" className="px-4 py-2.5 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal/90 transition-colors whitespace-nowrap">
                    Send Link
                  </button>
                </div>
                <p className="text-gray-400 text-xs mt-2">We&apos;ll email you a one-click sign-in link. No password needed.</p>
              </form>
            )}
          </div>

          {/* Footer links */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-gray-500 text-sm">
              New to SocietyApp?{" "}
              <Link href="/register" className="text-teal font-semibold hover:underline">Register your society free →</Link>
            </p>
            <p className="text-gray-400 text-xs">
              <Link href="/support" className="hover:text-teal transition-colors">Need help signing in?</Link>
              {" · "}
              <Link href="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}