// "use client";
// import { useEffect, useState } from "react";

// function useDarkMode() {
//   const [theme, setTheme] = useState<"light" | "dark">(() => {
//     if (typeof window === "undefined") return "light"; // Default for SSR
//     const savedTheme = localStorage.getItem("hs_theme") as "light" | "dark" | null;
//     if (savedTheme) return savedTheme;
//     return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//   });

//   useEffect(() => {
//     const html = document.documentElement;

//     if (theme === "dark") {
//       html.classList.add("dark");
//       html.classList.remove("light");
//     } else {
//       html.classList.add("light");
//       html.classList.remove("dark");
//     }

//     localStorage.setItem("hs_theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   return { theme, toggleTheme };
// }

// export default useDarkMode;

"use client";
import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Default initial value

  useEffect(() => {
    // Safely access localStorage and window for the theme
    const savedTheme = localStorage.getItem("hs_theme") as
      | "light"
      | "dark"
      | null;
    const preferredTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(preferredTheme);

    const html = document.documentElement;
    html.classList.add(preferredTheme);
    html.classList.remove(preferredTheme === "dark" ? "light" : "dark");
  }, []);

  useEffect(() => {
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
