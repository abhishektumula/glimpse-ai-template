import { BackgroundGird } from "@/components/bg/grid";
import { FeatureSection } from "@/components/features";
import { HeroSection } from "@/components/hero-section";
import { IntroSection } from "@/components/intro";
import { NavBar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <NavBar />
      <BackgroundGird className="absolute inset-0 w-full h-[110vh] md:h-[180vh] mask-b-from-70%" />
      {/* <div className="w-full bg-transparent h-20" /> */}
      <div className="relative z-10">
        <HeroSection />
        <hr className="w-full h-px text-neutral-300 dark:text-neutral-700" />
        <IntroSection />
        <hr className="w-full h-px text-neutral-300 dark:text-neutral-700" />
        <FeatureSection />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
