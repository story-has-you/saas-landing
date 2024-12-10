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
import config from "@/lib/config";
import { generateLanguageUrls } from "@/lib/locale";
import { Metadata } from "next";

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

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: config.name,
    description: config.description,
    alternates: {
      canonical: `${config.url}/${locale === "en" ? "" : locale}`,
      languages: {
        "x-default": `${config.url}`,
        ...generateLanguageUrls(),
      },
    },
  };
}

export default async function HomePage() {
  return (
    <div className="absolute w-full flex flex-col">
      <Banner />
      <div style={BACKGROUND_STYLE}>
        <Navigation />
        <Hero />
      </div>
      <div className="w-full mt-20 flex flex-col space-y-32">
        <Supplier />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
