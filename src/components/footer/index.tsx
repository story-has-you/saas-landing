import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Footer({ lang }: { lang: any }) {
  const d = new Date();
  const currentYear = d.getFullYear();
  const author = siteConfig.author;
  return (
    <footer className="bg-black text-gray-400 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* 左侧logo和描述 */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <div className="w-12 h-12 mb-4 bg-purple-600 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded transform rotate-45"></div>
          </div>
          <p className="text-sm max-w-xs">{lang.description}</p>
        </div>

        {/* 右侧链接列表 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
          {/* Product列 */}
          <div>
            <h3 className="text-white font-semibold mb-3">{lang.product.title}</h3>
            <ul className="space-y-2">
              {lang.product.items.map((item: any, index: number) => (
                <li key={index}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company列 */}
          <div>
            <h3 className="text-white font-semibold mb-3">{lang.company.title}</h3>
            <ul className="space-y-2">
              {lang.company.items.map((item: any, index: number) => (
                <li key={index}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources列 */}
          <div>
            <h3 className="text-white font-semibold mb-3">{lang.resources.title}</h3>
            <ul className="space-y-2">
              {lang.resources.items.map((item: any, index: number) => (
                <li key={index}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal列 */}
          <div>
            <h3 className="text-white font-semibold mb-3">{lang.legal.title}</h3>
            <ul className="space-y-2">
              {lang.legal.items.map((item: any, index: number) => (
                <li key={index}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 社交媒体图标 */}
      <div className="mt-12 flex justify-center space-x-6">
        <Link href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">{lang.socialMedia.twitter}</span>
          <Icons.twitter className="h-6 w-6" />
        </Link>

        <Link href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">{lang.socialMedia.instagram}</span>
          <Icons.instagram className="h-6 w-6" />
        </Link>

        <Link href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">{lang.socialMedia.pinterest}</span>
          <Icons.pinterest className="h-6 w-6" />
        </Link>

        <Link href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">{lang.socialMedia.linkedIn}</span>
          <Icons.linkedIn className="h-6 w-6" />
        </Link>

        <Link href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">{lang.socialMedia.tiktok}</span>
          <Icons.tiktok className="h-6 w-6" />
        </Link>

        <Link href="#" className="text-gray-400 hover:text-white">
          <span className="sr-only">{lang.socialMedia.youtube}</span>
          <Icons.youtube className="h-6 w-6" />
        </Link>
      </div>
    </footer>
  );
}
