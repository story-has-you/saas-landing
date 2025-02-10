"use client";

import { currentLocaleAtom, currentLocaleInfoAtom } from "@/atoms/language";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/routing";
import { languages } from "@/lib/locale";
import "@/styles/language-switcher.css";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

const LanguageSwitcher = () => {
  const serverLocale = useLocale();
  const [currentLocale, setCurrentLocale] = useAtom(currentLocaleAtom);
  const [currentLocaleInfo] = useAtom(currentLocaleInfoAtom);
  const router = useRouter();
  const pathname = usePathname();
  const [isChanging, setIsChanging] = useState(false);

  // 同步服务端语言和客户端状态
  if (serverLocale !== currentLocale) {
    setCurrentLocale(serverLocale as typeof currentLocale);
  }

  const handleLanguageChange = async (value: string) => {
    if (value === currentLocale) return;

    setIsChanging(true);
    try {
      // 更新 jotai 状态
      setCurrentLocale(value as typeof currentLocale);
      // 导航到新的语言路径
      router.replace(pathname, { locale: value });
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <div className="language-switcher">
      <Select value={currentLocale} onValueChange={handleLanguageChange} disabled={isChanging}>
        <SelectTrigger className="language-trigger">
          <div className="language-trigger-content">
            <motion.div animate={{ rotate: isChanging ? 360 : 0 }} transition={{ duration: 1, repeat: isChanging ? Infinity : 0, ease: "linear" }}>
              <Globe className="language-icon" />
            </motion.div>
            <motion.span className="language-text" initial={false} animate={{ opacity: isChanging ? 0.5 : 1 }}>
              {currentLocaleInfo?.language}
            </motion.span>
          </div>
        </SelectTrigger>
        <SelectContent className="language-content" align="end">
          {languages.map((lang) => (
            <SelectItem key={lang.lang} value={lang.lang} className="language-item">
              <motion.div className="language-item-content" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                <span className="language-code">{lang.lang}</span>
                <span className="language-name">{lang.language}</span>
              </motion.div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Loading overlay */}
      <motion.div
        className="loading-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: isChanging ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isChanging ? "auto" : "none" }}
      >
        {isChanging && (
          <motion.div className="loading-spinner" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
        )}
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
