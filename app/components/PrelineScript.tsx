"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    // Check if running in the browser and guard against SSR
    if (typeof window === "undefined") return;

    const loadPreline = async () => {
      const preline = await import("preline/preline"); // Dynamic import ensures this runs only on client
      window.HSStaticMethods = preline.default.HSStaticMethods;
      window.HSStaticMethods.autoInit();
    };

    loadPreline();
  }, [path]);

  return null;
}
