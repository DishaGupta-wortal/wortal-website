import { MuseoModerno } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
    },
    fontFamily: {
      MuseoModerno: ["MuseoModerno"],
      Inter: ["inter"],
    },
    colors: {
      primary: "#093E4D",
    },
  },
  plugins: [],
};
export default config;
