import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      colors: {
        salmon: '#fa8072',
      },
      backgroundImage: {
        'radial-tl': 'radial-gradient(circle at top left, transparent 17px, #dc143c 17px)',
        'radial-tr': 'radial-gradient(circle at top right, transparent 17px, #dc143c 17px)',
        'radial-bl': 'radial-gradient(circle at bottom left, transparent 17px, #dc143c 17px)',
        'radial-br': 'radial-gradient(circle at bottom right, transparent 17px, #dc143c 17px)',
      },
      boxShadow: {
        'custom': '0 38px 14px -35px rgba(0,0,0,0.3)',
      },
    },
  },
  // prefix: "hs-",
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
} satisfies Config;
