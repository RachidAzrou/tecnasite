import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en/translation.json';
import nlTranslation from './locales/nl/translation.json';
import frTranslation from './locales/fr/translation.json';

// Configure i18next
i18n
  // Enable language detector to use localStorage
  .use(LanguageDetector)
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      nl: {
        translation: nlTranslation
      },
      fr: {
        translation: frTranslation
      }
    },
    fallbackLng: 'en', // Fallback language
    debug: false, // Debug mode disabled

    interpolation: {
      escapeValue: false, // Not needed for React
    },

    // Store language preference
    detection: {
      order: ['localStorage', 'navigator'], // First check localStorage, then browser settings
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'], // Save to localStorage for persistence
    }
  });

export default i18n;