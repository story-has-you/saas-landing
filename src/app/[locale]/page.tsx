import { Banner } from "@/components/banner";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Pricing } from "@/components/pricing";
import { Supplier } from "@/components/supplier";

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
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
