import i18n from "i18next";
import { initReactI18next } from 'react-i18next'
import LngDetector from 'i18next-browser-languagedetector';


import fr from './translations/fr_FR.json';
import en from './translations/en_US.json';



const resources = {
  en_US: {
    translation: en
  },
  fr_FR: {
    translation: fr
  }
};



i18n
  .use(LngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "en_US",
    fallbackLng: "en_US", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n