import Banner from "@/components/banner";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Pricing from "@/components/pricing";
import Supplier from "@/components/supplier";
import Testimonials from "@/components/testimonials";
import { dictionary, generateLanguageUrls, Locale } from "@/config/locale";
import { siteConfig } from "@/config/site";

// 提取常量
const BACKGROUND_STYLE = {
  backgroundColor: "hsla(204, 0%, 100%, 1)",
  backgroundImage: `
    radial-gradient(circle at 0% 0%, hsla(295.99999999999994, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
    radial-gradient(circle at 20% 0%, hsla(236.91176470588243, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
    radial-gradient(circle at 40% 0%, hsla(186.61764705882354, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
    radial-gradient(circle at 60% 0%, hsla(127.0588235294118, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
    radial-gradient(circle at 80% 0%, hsla(62.20588235294117, 77%, 74%, 0.35) 3.1210986267166043%, transparent 40%),
    radial-gradient(circle at 100% 0%, hsla(23.823529411764703, 77%, 74%, 0.35) 3%, transparent 40%)
  `,
  backgroundBlendMode: "normal, normal, normal, normal, normal, normal",
};

const CONTENT_STYLE = "mt-20 flex flex-col space-y-32";

type LanguageData = {
  [key: string]: Record<string, any>;
};

export async function generateMetadata({ params }: { params: { slug: string; lang: Locale } }) {
  return {
    title: siteConfig.name,
    description: siteConfig.description,
    alternates: {
      canonical: `https://${siteConfig.domain}/${params.lang}`,
      languages: {
        "x-default": `${siteConfig.domain}`,
        ...generateLanguageUrls(),
      },
    },
  };
}

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
  // 优化异步数据获取
  const components = ["banner", "navigation", "hero", "supplier", "features", "testimonials", "pricing", "faq", "cta", "footer", "login"];

  const languageData: LanguageData = Object.fromEntries(await Promise.all(components.map(async (component) => [component, await dictionary(lang, component)])));

  return (
    <div className="absolute w-full flex flex-col">
      <Banner lang={languageData.banner} />
      <div style={BACKGROUND_STYLE}>
        <Navigation lang={languageData.navigation} />
        <Hero lang={languageData.hero} />
      </div>
      <div className={CONTENT_STYLE}>
        <Supplier lang={languageData.supplier} />
        <Features lang={languageData.features} />
        <Testimonials lang={languageData.testimonials} />
        <Pricing lang={languageData.pricing} />
        <FAQ lang={languageData.faq} />
        <div>
          <CTA lang={languageData.cta} />
          <Footer lang={languageData.footer} />
        </div>
      </div>
    </div>
  );
}
