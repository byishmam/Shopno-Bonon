import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Locale, Localized } from "../data/types";
import { translations } from "../data/translations";

interface LanguageContextValue {
  lang: Locale;
  setLang: (lang: Locale) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  tr: (obj: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "shopnobunon-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "bn";
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    return saved === "en" || saved === "bn" ? saved : "bn";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (value: Locale) => setLangState(value);
  const toggleLang = () => setLangState((prev) => (prev === "bn" ? "en" : "bn"));

  const t = (key: string) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang];
  };

  const tr = (obj: Localized) => obj[lang];

  const value = useMemo(() => ({ lang, setLang, toggleLang, t, tr }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
