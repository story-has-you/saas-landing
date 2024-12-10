"use client";

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
        <h3 className="text-white font-semibold mb-3">{t(`${groupName}.title`)}</h3>
        <ul className="space-y-2">
          {items.map((item: string, index: number) => (
            <li key={index}>
              <Link href="#" className="hover:text-white transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-black text-gray-400 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo and Description */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <div className="w-12 h-12 mb-4 bg-purple-600 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded transform rotate-45" />
          </div>
          <p className="text-sm max-w-xs">{t("description")}</p>
        </div>

        {/* Link Groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">{linkGroups.map(renderLinkGroup)}</div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-12 flex justify-center space-x-6">
        <Link href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">{t("socialMedia.x")}</span>
          <X className="h-6 w-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
