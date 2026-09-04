"use client";

import WelcomeLoader from "./components/shared/WelcomeLoader";
import HeroSection from "./components/landing/HeroSection";
import AboutSection from "./components/landing/AboutSection";
import PracticeAreaSection from "./components/landing/PracticeAreaSection";
import WhoWeAreSection from "./components/landing/WhoWeAreSection";
import TeamSection from "./components/landing/TeamSection";

export default function Home() {
  return (
    <WelcomeLoader>
      <div className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <PracticeAreaSection />
        <WhoWeAreSection />
        <TeamSection />
      </div>
    </WelcomeLoader>
  );
}


