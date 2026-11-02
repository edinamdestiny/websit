import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('destiny_lang');
      return saved === 'en' ? 'en' : 'ar';
    } catch {
      return 'ar';
    }
  });

  const isAr = lang === 'ar';
  const t = translations[lang] || translations.ar;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('destiny_lang', lang);
    } catch (e) {
      console.warn("Could not save language to localStorage", e);
    }
  }, [lang, isAr]);

  const toggleLang = () => {
    setLangState(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const setLang = (newLang) => {
    if (newLang === 'ar' || newLang === 'en') {
      setLangState(newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, isAr, t, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
