import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations } from "../i18n/translations";
import type { LangCode, Translation } from "../i18n/types";
import { LANGUAGES } from "../data/site";

const STORAGE_KEY = "gk_lang";

function isLangCode(value: string | null): value is LangCode {
  return !!value && LANGUAGES.some((l) => l.code === value);
}

// Saved choice wins; otherwise auto-detect from the browser locale.
function detectLang(): LangCode {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLangCode(saved)) return saved;
  } catch {
    /* localStorage unavailable */
  }
  try {
    const navs = (navigator.languages || [navigator.language || "en"]).map(
      (s) => (s || "").toLowerCase(),
    );
    for (const n of navs) {
      if (n.startsWith("ru")) return "ru";
      if (n.startsWith("tk")) return "tk";
      if (n.startsWith("tr")) return "tr";
      if (n.startsWith("en")) return "en";
    }
  } catch {
    /* navigator unavailable */
  }
  return "en";
}

interface LanguageContextValue {
  lang: LangCode;
  t: Translation;
  setLang: (code: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(detectLang);

  const setLang = useCallback((code: LangCode) => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
    setLangState(code);
  }, []);

  // Keep the document language attribute in sync for a11y / SEO.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: translations[lang], setLang }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
