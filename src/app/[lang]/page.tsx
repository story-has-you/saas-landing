import Banner from "@/components/banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Pricing from "@/components/pricing";
import Supplier from "@/components/supplier";
import Testimonials from "@/components/testimonials";
import { generateLanguageUrls, Locale } from "@/config/locale";
import { siteConfig } from "@/config/site";

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

export default async function HomePage() {
  return (
    <div className="absolute w-full flex flex-col">
      <Banner />
      <div
        style={{
          background: `radial-gradient(101.4% 61.3% at 12.4% 100%, #0832bd 0%, rgb(189, 204, 255) 86.293%, rgb(235, 239, 255) 100%)`,
        }}
      >
        <Navigation />
        <Hero />
      </div>
      <div className="mt-20 flex flex-col gap-32">
        <Supplier />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
