"use client";

import { Icons } from "@/components/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { i18n, Locale } from "@/config/locale";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type NavigationProps = {
  lang: any;
};

export default function Navigation({ lang }: NavigationProps) {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const [langName] = useState<string>(i18n.languages.find((item) => item.lang === params.lang)?.language ?? i18n.defaultLocaleName);
  const handleLanguageChange = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
  };
  return (
    <div className="flex flex-row justify-between items-center p-5 z-0">
      <Icons.logo className="w-5 h-5" />
      <div className="flex flex-row justify-center items-center overflow-hidden z-20 gap-5 rounded-none text-black">
        {lang.links.map((item: any) => (
          <div key={item}>
            <Link href={item.href} target="_blank" className="opacity-60">
              {item.text}
            </Link>
          </div>
        ))}

        <Select onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[130px] text-gray-800 transition-colors duration-200 focus:ring-0 focus:ring-offset-0 focus:border-gray-300 focus:outline-none">
            <SelectValue placeholder={langName} />
          </SelectTrigger>
          <SelectContent className="rounded-md overflow-hidden shadow-lg">
            {i18n.languages.map((item) => (
              <SelectItem key={item.lang} value={item.lang} className="text-gray-800 cursor-pointer transition-colors duration-200 focus:ring-0 focus:outline-none">
                {item.language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
