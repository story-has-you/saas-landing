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
      <div key={groupName}>
        <h3 className="footer-group-title">{t(`${groupName}.title`)}</h3>
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
        {/* Logo and Description */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <div className="footer-logo-inner" />
          </div>
          <p className="footer-description">{t("description")}</p>
        </div>

        {/* Link Groups */}
        <div className="footer-links-grid">{linkGroups.map(renderLinkGroup)}</div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <Link href="#" className="footer-social-link">
          <span className="sr-only">{t("socialMedia.x")}</span>
          <X className="h-6 w-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
