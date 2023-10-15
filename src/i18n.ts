import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Translations sources
import english_translation from "../src/locales/en/english.json"
import arabic_translation from "../src/locales/ar/arabic.json"

// configure i18next
i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  resources: {
    en: {
      lang: english_translation
    },
    ar: {
      lang:arabic_translation
    },
  }
});


export default i18next