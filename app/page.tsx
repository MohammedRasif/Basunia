"use client";

import WelcomeLoader from "./components/shared/WelcomeLoader";
import HeroSection from "./components/landing/HeroSection";
import AboutSection from "./components/landing/AboutSection";
import PracticeAreaSection from "./components/landing/PracticeAreaSection";
import WhoWeAreSection from "./components/landing/WhoWeAreSection";
import TeamSection from "./components/landing/TeamSection";
import GallerySection from "./components/landing/GallerySection";
import TrustedBySection from "./components/landing/TrustedBySection";

export default function Home() {
  return (
    <WelcomeLoader>
      <div className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <PracticeAreaSection />
        <WhoWeAreSection />
        <TeamSection />
        <GallerySection />
        <TrustedBySection />
      </div>
    </WelcomeLoader>
  );
}


