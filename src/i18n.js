import { createI18n } from 'vue-i18n';

// Import locales
import es from './locales/es.json';
import en from './locales/en.json';

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'es', // Default language
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
});

export default i18n;
