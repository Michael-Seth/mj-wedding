"use client";
import { useEffect, useState } from "react";
import useDarkMode from "./hooks/useDarkMode";

function DarkModeToggler() {
  const { theme, toggleTheme } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark as mounted to avoid SSR issues
  }, []);

  // Avoid rendering theme-dependent content until after hydration
  if (!mounted) return null;

  return (
    <div>
      {theme === "light" ? (
        <button
          type="button"
          onClick={toggleTheme}
          className="font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <span className="group inline-flex shrink-0 justify-center items-center w-9 h-9">
            <svg
              className="shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={toggleTheme}
          className="font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <span className="group inline-flex shrink-0 justify-center items-center w-9 h-9">
            <svg
              className="shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx={12} cy={12} r={4} />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default DarkModeToggler;
