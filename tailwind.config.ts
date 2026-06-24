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
        navy:   "#0F2040",
        teal:   "#0D7377",
        amber:  "#F59E0B",
        light:  "#F4F6F8",
        green:  "#10B981",
      },
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
