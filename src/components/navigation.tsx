"use client";

import { Logo } from "@/components/icon";
import LanguageSwitcher from "@/components/language-switcher";
import "@/styles/navigation.css";
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
    <nav className="navigation">
      <Logo className="navigation__logo" />

      <div className="navigation__links">
        {links.map((item) => (
          <div key={item.href}>
            <Link href={item.href} target="_blank" className="navigation__link">
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
