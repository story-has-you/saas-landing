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
import { getServerUser } from "@/lib/user";

// 提取常量
const BACKGROUND_STYLE = {
  background: `radial-gradient(101.4% 61.3% at 12.4% 100%, #0832bd 0%, rgb(189, 204, 255) 86.293%, rgb(235, 239, 255) 100%)`,
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
  const components = ["banner", "navigation", "hero", "supplier", "features", "testimonials", "pricing", "faq", "cta","footer"];

  const languageData: LanguageData = Object.fromEntries(await Promise.all(components.map(async (component) => [component, await dictionary(lang, component)])));

  const user = await getServerUser();

  return (
    <div className="absolute w-full flex flex-col">
      <Banner lang={languageData.banner} />
      <div style={BACKGROUND_STYLE}>
        <Navigation lang={languageData.navigation} user={user} />
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
