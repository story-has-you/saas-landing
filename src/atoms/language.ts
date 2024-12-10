import { languages, locales } from "@/lib/locale";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Locale = (typeof locales)[number];

// 持久化存储当前语言设置
export const currentLocaleAtom = atomWithStorage<Locale>("language", "en");

// 衍生原子 - 获取当前语言的显示信息
export const currentLocaleInfoAtom = atom((get) => {
  const locale = get(currentLocaleAtom);
  return languages.find((lang) => lang.lang === locale);
});
