import I18n from 'i18n-js';

import en from './locales/en';
import ja from './locales/ja';
import vi from './locales/vi';

I18n.fallbacks = true;
I18n.defaultLocale = 'vi';

I18n.translations = {
  vi,
  en,
  ja,
};

I18n.locale = 'vi';
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
