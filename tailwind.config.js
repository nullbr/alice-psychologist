/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gray: { 400: "#808080", 500: "#5a5a5a", 600: "#333333" },
        blue: { 500: "#6da7cc", 600: "#3a7ca5", 700: "#0e4872" },
        brown: { 500: "#cca087", 600: "#a5734e" },
      },
      borderRadius: {
        "7xl": "3.5rem",
      },
      fontFamily: {
        garamond: ["eb-garamond", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "outline-pattern": "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
