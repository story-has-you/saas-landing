import config from "@/lib/config";
export default function sitemap() {
  return [
    {
      url: config.url,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
