"use client";

import { Logo } from "@/components/icon";
import LanguageSwitcher from "@/components/language-switcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavLink {
  href: string;
  text: string;
}

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const t = useTranslations("navigation");
  const links = t.raw("links") as NavLink[];

  return (
    <nav className="flex flex-row justify-between items-center p-5 z-0">
      <Logo className="w-5 h-5" />

      <div className="flex flex-row justify-center items-center overflow-hidden z-20 gap-5 rounded-none text-black">
        {links.map((item) => (
          <div key={item.href}>
            <Link href={item.href} target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
              {item.text}
            </Link>
          </div>
        ))}

        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;
