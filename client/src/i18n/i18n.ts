import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en/translation.json';
import nlTranslation from './locales/nl/translation.json';
import frTranslation from './locales/fr/translation.json';

// Configure i18next
i18n
  // Auto-detection is disabled to ensure English is always the default
  // .use(LanguageDetector)
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
    lng: 'en', // Explicitly set English as default
    fallbackLng: 'en', // Fallback language
    debug: false, // Debug mode disabled

    interpolation: {
      escapeValue: false, // Not needed for React
    },

    // Store language preference
    detection: {
      order: ['querystring', 'localStorage', 'cookie'],
      lookupQuerystring: 'lang',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;