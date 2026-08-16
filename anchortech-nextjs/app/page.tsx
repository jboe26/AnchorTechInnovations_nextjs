import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Founder from "@/components/home/Founder";
import Pricing from "@/components/home/Pricing";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Founder />
      <Pricing />
      <CTABanner />
    </main>
  );
}
