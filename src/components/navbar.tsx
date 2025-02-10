"use client";

import { Logo } from "@/components/icon";
import LanguageSwitcher from "@/components/language-switcher";
import "@/styles/navbar.css";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface NavLink {
  href: string;
  text: string;
}

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const t = useTranslations("navigation");
  const links = t.raw("links") as NavLink[];

  return (
    <nav className={`navbar ${className || ''}`}>
      <Logo className="navbar-logo" />

      <div className="navbar-links">
        {links.map((item) => (
          <div key={item.href}>
            <Link href={item.href} target="_blank" className="navbar-link">
              {item.text}
            </Link>
          </div>
        ))}

        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
