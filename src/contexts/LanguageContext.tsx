import React, { useEffect, useState, createContext, useContext } from "react";
import { translations, Language, getTranslation } from "../translations";
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && (savedLang === "en" || savedLang === "nl")) {
        return savedLang;
      }
      const browserLang = navigator.language.split("-")[0];
      return browserLang === "nl" ? "nl" : "en";
    }
    return "en";
  });
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  const t = (key: string): string => {
    return getTranslation(language, key);
  };
  return <LanguageContext.Provider value={{
    language,
    setLanguage,
    t
  }}>
      {children}
    </LanguageContext.Provider>;
};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};