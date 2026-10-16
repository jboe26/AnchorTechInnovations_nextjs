import Hero from "@/components/home/Hero";
import WhyWorkTogether from "@/components/home/WhyWorkTogether";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Founder from "@/components/home/Founder";
import Pricing from "@/components/home/Pricing";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyWorkTogether />
      <Services />
      <Process />
      <FeaturedProjects />
      <Founder />
      <Pricing />
      <CTABanner />
    </main>
  );
}
