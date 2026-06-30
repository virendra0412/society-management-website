"use client";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { localeConfig, LOCALES, type Locale } from "@/lib/i18n/translations";

export default function LangSwitcher({ dark = true }: { dark?: boolean }) {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const current = localeConfig[locale];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors px-2 py-1.5 rounded-lg ${
          dark
            ? "text-white/60 hover:text-white hover:bg-white/10"
            : "text-gray-500 hover:text-navy hover:bg-gray-100"
        }`}
      >
        <Globe size={14} />
        <span className="font-bold tracking-wide">{current.short}</span>
      </button>

      {open && (
        <div
          className={`absolute right-0 top-full mt-2 w-48 rounded-2xl shadow-2xl border overflow-hidden z-[999] ${
            dark ? "bg-[#0a1628] border-white/10" : "bg-white border-gray-100"
          }`}
        >
          <div className={`px-3 py-2 text-[10px] font-bold uppercase tracking-widest ${dark ? "text-white/30" : "text-gray-400"}`}>
            Select Language
          </div>
          {LOCALES.map((code) => {
            const cfg = localeConfig[code as Locale];
            const active = code === locale;
            return (
              <button
                key={code}
                onClick={() => { setLocale(code as Locale); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-teal text-white font-semibold"
                    : dark
                    ? "text-white/70 hover:bg-white/5 hover:text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-navy"
                }`}
              >
                <span className="text-base w-5 text-center font-bold">{cfg.short}</span>
                <span>{cfg.nativeLabel}</span>
                {active && <span className="ml-auto text-xs opacity-70">✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}