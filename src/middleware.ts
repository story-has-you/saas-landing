import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

// 更新 matcher 配置以支持语言切换
export const config = {
  matcher: [
    // Match all pathnames except for
    // - … files in the public folder
    // - … while maintaining all locale prefixes
    "/((?!api|_next|.*\\..*).*)",
  ],
};
