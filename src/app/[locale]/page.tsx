import Banner from "@/components/banner";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import config from "@/lib/config";
import Constants from "@/lib/constants";
import { generateLanguageUrls } from "@/lib/locale";
import { Metadata } from "next";

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
      <div id="banner">
        <Banner />
      </div>
      <div style={Constants.BACKGROUND_STYLE}>
        <div id="nav">
          <NavBar />
        </div>
        <div id="hero">
          <Hero />
        </div>
      </div>
      <div className="w-full mt-20 flex flex-col space-y-32">
        <div id="features">
          <Features />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
