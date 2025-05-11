import React, { createContext, useState, useEffect, useContext } from 'react';
import i18n from '../i18n/i18n';

type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
};

const defaultContext: LanguageContextType = {
  currentLanguage: 'en',
  changeLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with stored language or default to English
  const storedLanguage = localStorage.getItem('i18nextLng') || 'en';
  const [currentLanguage, setCurrentLanguage] = useState(storedLanguage);

  // Set the language on first render
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, []);

  const changeLanguage = (language: string) => {
    console.log('Changing language to:', language);
    
    // Store in localStorage
    localStorage.setItem('i18nextLng', language);
    
    // Update i18n
    i18n.changeLanguage(language);
    
    // Update context state
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};s