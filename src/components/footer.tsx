"use client";

import "@/styles/footer.css";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer: React.FC = () => {
  const t = useTranslations("footer");
  const linkGroups = ["product", "company", "resources", "legal"];

  const renderLinkGroup = (groupName: string) => {
    const items = t.raw(`${groupName}.items`) as string[];

    return (
      <div key={groupName} className="footer-link-group">
        <h3>{t(`${groupName}.title`)}</h3>
        <ul className="footer-link-list">
          {items.map((item: string, index: number) => (
            <li key={index}>
              <Link href="#" className="footer-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-inner" />
          </div>
          <p className="footer-description">{t("description")}</p>
        </div>

        <div className="footer-links">
          {linkGroups.map(renderLinkGroup)}
        </div>
      </div>

      <div className="footer-social">
        <Link href="#" className="social-link">
          <span className="sr-only">{t("socialMedia.x")}</span>
          <X className="social-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
