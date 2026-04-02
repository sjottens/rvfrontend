"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { LANG_COOKIE, normalizeLanguage, type Language } from "@/lib/language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (nextLanguage: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: React.ReactNode;
  initialLanguage: Language;
};

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return initialLanguage;
    }

    const storedLanguage = window.localStorage.getItem(LANG_COOKIE);

    if (!storedLanguage) {
      return initialLanguage;
    }

    return normalizeLanguage(storedLanguage);
  });

  function setLanguage(nextLanguage: Language) {
    if (typeof window !== "undefined") {
      document.cookie = `${LANG_COOKIE}=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
      window.localStorage.setItem(LANG_COOKIE, nextLanguage);
      document.documentElement.lang = nextLanguage;
    }

    setLanguageState(nextLanguage);
  }

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
