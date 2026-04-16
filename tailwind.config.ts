import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#C4001C", dark: "#820016", light: "#EE001C" },
        gold: { DEFAULT: "#FFC500", light: "#FFB500" },
        surface: {
          DEFAULT: "#130010",
          light: "#1A0012",
          card: "#15000E",
        },
        bgDark: "#07000C",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
