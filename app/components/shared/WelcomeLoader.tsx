"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import WaterfallLoading from "./WaterfallLoading";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return sessionStorage.getItem("welcome_loader_shown") === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false;
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
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoaded]);

  const handleComplete = () => {
    try {
      sessionStorage.setItem("welcome_loader_shown", "true");
    } catch {
      // safe fallback
    }
    document.documentElement.classList.add("loader-seen");
    document.body.style.overflow = "";
    setDone(true);
  };

  return (
    <>
      {!isLoaded && (
        <div id="welcome-loader-root">
          <WaterfallLoading
            brandText="Basunia & Associates"
            subText="Trusted Legal Solutions"
            onComplete={handleComplete}
          />
        </div>
      )}
      <div
        id="welcome-content-root"
        className={!isLoaded ? "pointer-events-none select-none" : ""}
      >
        {children}
      </div>
    </>
  );
}
