import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      ru: {
        "app.components.LeftMenu.navbrand.title": "Панель",
        "Auth.form.welcome.title": "Добро пожаловать!",
        "Auth.form.welcome.subtitle": "Пожалуйста, войдите в свою учётную запись",
      },
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "Auth.form.welcome.title": "Welcome!",
        "Auth.form.welcome.subtitle": "Please login to your account",
      },
    },
    notifications: {
      releases: false,
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
