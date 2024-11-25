"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { IStaticMethods } from "preline/preline";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return; // Guard for SSR

    const loadPreline = async () => {
      const preline = await import("preline/preline");
      window.HSStaticMethods = preline.default.HSStaticMethods;
      window.HSStaticMethods.autoInit();
    };

    loadPreline();
  }, [path]);

  return null;
}
