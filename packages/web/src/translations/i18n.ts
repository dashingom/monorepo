import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishTranslations from './english';
import frenchTranslations from './french';
import { frCA, enUS } from 'date-fns/locale';
import { translations } from '@brightlayer-ui/react-auth-workflow';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: englishTranslations,
      fr: frenchTranslations,
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

const getDateLocale = (): Locale => {
  switch (i18n.language) {
    case 'fr':
      return frCA;
    default:
      return enUS;
  }
};

export const dateLocale = getDateLocale();

export default i18n;

i18n.addResourceBundle('en', 'blui', translations.english.translation, true, true);
i18n.addResourceBundle('fr', 'blui', translations.french.translation, true, true);
