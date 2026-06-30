"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { t, type Locale, type Translations, localeConfig, LOCALES } from "./translations";

interface LangCtx { locale: Locale; setLocale: (l: Locale) => void; tr: Translations; }

const LanguageContext = createContext<LangCtx>({ locale: "en", setLocale: () => {}, tr: t.en });

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("sa_locale") as Locale | null;
  if (saved && LOCALES.includes(saved)) return saved;
  const b = navigator.language.toLowerCase();
  if (b.startsWith("hi")) return "hi";
  if (b.startsWith("gu")) return "gu";
  if (b.startsWith("ta")) return "ta";
  if (b.startsWith("mr")) return "mr";
  if (b.startsWith("pa")) return "pa";
  return "en";
}

function loadFont(name: string) {
  const id = `sa-font-${name}`;
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id; link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${name}:wght@400;600;700&display=swap`;
  document.head.appendChild(link);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const applyLocale = useCallback((l: Locale) => {
    const cfg = localeConfig[l];
    document.documentElement.lang = cfg.htmlLang;
    document.documentElement.setAttribute("data-lang", l);
    if (cfg.googleFontName) loadFont(cfg.googleFontName);
    localStorage.setItem("sa_locale", l);
  }, []);

  useEffect(() => {
    const l = detectLocale();
    setLocaleState(l);
    applyLocale(l);
  }, [applyLocale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    applyLocale(l);
  }, [applyLocale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, tr: t[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() { return useContext(LanguageContext); }