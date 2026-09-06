"use client";

import { useState, useSyncExternalStore, useEffect } from "react";
import WaterfallLoading from "./WaterfallLoading";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return sessionStorage.getItem("welcome_loader_shown") === "true";
  } catch {
    return true;
  }
}

function getServerSnapshot() {
  return true;
}

export default function WelcomeLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasSeenLoader = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [done, setDone] = useState(false);

  const isLoaded = hasSeenLoader || done;

  useEffect(() => {
    if (!isLoaded) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isLoaded]);

  const handleComplete = () => {
    try {
      sessionStorage.setItem("welcome_loader_shown", "true");
    } catch {
      // safe fallback
    }
    setDone(true);
  };

  if (isLoaded) {
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
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none h-0 max-h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
}
