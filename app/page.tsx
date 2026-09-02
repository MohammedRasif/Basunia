"use client";

import WelcomeLoader from "./components/shared/WelcomeLoader";
import HeroSection from "./components/landing/HeroSection";

export default function Home() {
  return (
    <WelcomeLoader>
      <div className="overflow-x-hidden">
        <HeroSection />
      </div>
    </WelcomeLoader>
  );
}
