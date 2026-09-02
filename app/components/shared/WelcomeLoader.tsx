"use client";

import { useState } from "react";
import WaterfallLoading from "./WaterfallLoading";

export default function WelcomeLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && (
        <WaterfallLoading
          brandText="Basunia & Associates"
          subText="Trusted Legal Solutions"
          onComplete={() => setLoadingComplete(true)}
        />
      )}
      <div
        className={`transition-opacity duration-700 ${loadingComplete ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        {children}
      </div>
    </>
  );
}
