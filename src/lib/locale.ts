import config from "@/lib/config";
import { Pathnames } from "next-intl/routing";

interface Language {
  code: string;
  lang: string;
  language: string;
}

export const languages: Array<Language> = [
  {
    code: "en-US",
    lang: "en",
    language: "English",
  },
  {
    code: "zh-CN",
    lang: "zh",
    language: "简体中文",
  },
  // {
  //   code: "ru-RU",
  //   lang: "ru",
  //   language: "Русский",
  // },
  // {
  //   code: "ja-JP",
  //   lang: "ja",
  //   language: "日本語",
  // },
  // {
  //   code: "de-DE",
  //   lang: "de",
  //   language: "Deutsch",
  // },
  // {
  //   code: "pt-BR",
  //   lang: "pt",
  //   language: "Português",
  // },
  // {
  //   code: "fr-FR",
  //   lang: "fr",
  //   language: "Français",
  // },
  // {
  //   code: "ar-SA",
  //   lang: "ar",
  //   language: "العربية",
  // },
  // {
  //   code: "in-ID",
  //   lang: "in",
  //   language: "Bahasa Indonesia",
  // },
];

export const locales = languages.map((item) => item.lang);

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const generateLanguageUrls = () => {
  return locales.reduce((acc, lang) => {
    acc[lang] = `${config.url}/${lang}`;
    return acc;
  }, {} as Record<string, string>);
};
