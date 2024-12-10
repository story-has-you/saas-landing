import config from "@/lib/config";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${config.url}/sitemap.xml`,
  };
}
