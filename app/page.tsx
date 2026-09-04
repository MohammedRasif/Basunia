"use client";

import WelcomeLoader from "./components/shared/WelcomeLoader";
import HeroSection from "./components/landing/HeroSection";
import AboutSection from "./components/landing/AboutSection";
import PracticeAreaSection from "./components/landing/PracticeAreaSection";

export default function Home() {
  return (
    <WelcomeLoader>
      <div className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <PracticeAreaSection />
      </div>
    </WelcomeLoader>
  );
}


