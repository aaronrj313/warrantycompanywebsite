import Image from "next/image";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/feature-section";
import ServiceSection from "@/components/services-section";
import { FollowingPointerDemo } from "@/components/following-pointer-demo";


export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center">
        <HeroSection />
      </section>
      <div className="h-48 bg-gradient-to-b from-transparent via-neutral-200 to-black dark:via-neutral-800 dark:to-black"></div>
      <section className="bg-black">
        <FeaturesSection />
      </section>
      <section>
        <div className="min-h-72 bg-gradient-to-b from-transparent via-neutral-900 to-black">
          <ServiceSection />
        </div>
      </section>
      <section className="relative min-h-72 pb-20 overflow-hidden bg-black">
        <div className="relative z-30">
          <FollowingPointerDemo />
        </div>
      </section>
    </div>
  );
}
