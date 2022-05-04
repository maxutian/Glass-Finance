import i18n from 'i18next';
import en from './en.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    en,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['en'],
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
