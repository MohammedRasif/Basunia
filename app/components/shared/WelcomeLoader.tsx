"use client";

import { useState, useEffect } from "react";
import WaterfallLoading from "./WaterfallLoading";

export default function WelcomeLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingComplete, setLoadingComplete] = useState<boolean>(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const hasSeenLoader = sessionStorage.getItem("welcome_loader_shown");
    if (!hasSeenLoader) {
      setLoadingComplete(false);
    } else {
      setLoadingComplete(true);
    }
  }, []);

  const handleComplete = () => {
    try {
      sessionStorage.setItem("welcome_loader_shown", "true");
    } catch {
      // safe fallback
    }
    setLoadingComplete(true);
  };

  if (!isClient || loadingComplete) {
    return <>{children}</>;
  }

  return (
    <>
      <WaterfallLoading
        brandText="Basunia & Associates"
        subText="Trusted Legal Solutions"
        onComplete={handleComplete}
      />
      <div
        className={`transition-opacity duration-700 ${
          loadingComplete ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </div>
    </>
  );
}


