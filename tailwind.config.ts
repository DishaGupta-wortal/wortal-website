import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      //till mobile
      md: "768px",
      // till tablet
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
    },
    extend: {
      backgroundImage: {},
    },
    fontFamily: {
      primary: "var(--font-museoModerno)",
      // MuseoModerno: ["MuseoModerno"],
      // Inter: ["inter"],
    },
    colors: {
      primary: "#093E4D",
      accent: "#33a0bf",
      background: "#f9f8f9",
      white: "#ffffff",
      grey: "84849a",
      black: "#333333",
      blue_dark: "#083441",
    },
    important: true,
  },
  plugins: [],
};
export default config;
