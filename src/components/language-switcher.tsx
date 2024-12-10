"use client";

import { currentLocaleAtom, currentLocaleInfoAtom } from "@/atoms/language";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/routing";
import { languages } from "@/lib/locale";
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
    <div className="relative">
      <Select value={currentLocale} onValueChange={handleLanguageChange} disabled={isChanging}>
        <SelectTrigger className="w-[140px] h-9 bg-background/50 hover:bg-background/80 transition-colors duration-200 border-primary/20 hover:border-primary/40 rounded-full pl-3 pr-2">
          <div className="flex items-center gap-2">
            <motion.div animate={{ rotate: isChanging ? 360 : 0 }} transition={{ duration: 1, repeat: isChanging ? Infinity : 0, ease: "linear" }}>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </motion.div>
            <motion.span className="text-sm font-medium" initial={false} animate={{ opacity: isChanging ? 0.5 : 1 }}>
              {currentLocaleInfo?.language}
            </motion.span>
          </div>
        </SelectTrigger>
        <SelectContent className="min-w-[140px] bg-background/95 backdrop-blur-sm border-primary/20" align="end">
          {languages.map((lang) => (
            <SelectItem key={lang.lang} value={lang.lang} className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5 transition-colors duration-200">
              <motion.div className="flex items-center gap-2" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                <span className="text-base">{lang.lang}</span>
                <span className="text-sm font-medium">{lang.language}</span>
              </motion.div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Loading overlay */}
      <motion.div
        className="absolute inset-0 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isChanging ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isChanging ? "auto" : "none" }}
      >
        {isChanging && (
          <motion.div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
        )}
      </motion.div>
    </div>
  );
};

export default LanguageSwitcher;
