"use client";
import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Default initial value

  useEffect(() => {
    // Check if running in the browser (client-side)
    if (typeof window === "undefined") return;

    // Use localStorage and matchMedia only in the client
    const savedTheme = localStorage.getItem("hs_theme") as "light" | "dark" | null;
    const preferredTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(preferredTheme);

    const html = document.documentElement;
    html.classList.add(preferredTheme);
    html.classList.remove(preferredTheme === "dark" ? "light" : "dark");
  }, []); // Empty dependency array ensures this runs only once on mount (client side)

  useEffect(() => {
    if (typeof window === "undefined") return; // Guard against SSR

    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }

    localStorage.setItem("hs_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}

export default useDarkMode;
