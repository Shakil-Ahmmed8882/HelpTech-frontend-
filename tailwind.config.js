import { colors, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#239DDF",  // Custom primary color
        darkColor: "#22272E",      // Custom dark color
      },
      fontFamily: {
        sans: ["var(--font-sans)"], // Custom sans font
        mono: ["var(--font-mono)"],   // Custom mono font
      },
    },
  },
  darkMode: "class", // Enable dark mode using a class
  plugins: [
    nextui(), // Add NextUI plugin for Tailwind
  ],
};
