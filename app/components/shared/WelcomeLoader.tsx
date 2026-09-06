"use client";

import { useState, useSyncExternalStore } from "react";
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

  const handleComplete = () => {
    try {
      sessionStorage.setItem("welcome_loader_shown", "true");
    } catch {
      // safe fallback
    }
    setDone(true);
  };

  const isLoaded = hasSeenLoader || done;

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
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </div>
    </>
  );
}
