"use client";

import { useState, useEffect } from "react";
import WaterfallLoading from "./WaterfallLoading";

const LOADER_SESSION_KEY = "basunia_loader_shown";

export default function WelcomeLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  // null = not yet determined (SSR safe), true = show loader, false = skip loader
  const [shouldShowLoader, setShouldShowLoader] = useState<boolean | null>(null);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Only runs in the browser (client side)
    const alreadyShown = sessionStorage.getItem(LOADER_SESSION_KEY);

    if (alreadyShown) {
      // Already shown this session — skip loader immediately
      setShouldShowLoader(false);
      setLoadingComplete(true);
    } else {
      // First visit this session — show the loader
      setShouldShowLoader(true);
    }
  }, []);

  // While we're determining (SSR / first paint) — render nothing to avoid flash
  if (shouldShowLoader === null) return null;

  return (
    <>
      {shouldShowLoader && !loadingComplete && (
        <WaterfallLoading
          brandText="Basunia & Associates"
          subText="Trusted Legal Solutions"
          onComplete={() => {
            // Mark as shown in sessionStorage so subsequent navigations skip it
            sessionStorage.setItem(LOADER_SESSION_KEY, "true");
            setLoadingComplete(true);
          }}
        />
      )}
      <div
        className={`transition-opacity duration-700 ${
          loadingComplete || !shouldShowLoader
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </div>
    </>
  );
}
