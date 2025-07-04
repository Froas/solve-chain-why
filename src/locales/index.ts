import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';

const resources = {
    'en-US': { translation: en },
};

const appLocale = '{{APP_LOCALE}}';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';

const findMatchingLocale = (locale: string) => {
    if (resources[locale as keyof typeof resources]) return locale;
    const lang = locale.split('-')[0];
    const match = Object.keys(resources).find(key => key.startsWith(lang + '-'));
    return match || 'en-US';
};

const locale = (appLocale !== '{{APP_LOCALE}}') ? 
    findMatchingLocale(appLocale) : 
    findMatchingLocale(browserLocale);

    i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: locale,
        fallbackLng: 'en-US',
        interpolation: {
        escapeValue: false
        }
    });

export default i18n;