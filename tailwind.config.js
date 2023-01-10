/** @type {import('tailwindcss').Config} */

const THEME_COLORS = {
  primary: "#5856FF",
  black: "#000000",
  "lighten-gray": "#787A8D",
  "light-gray": "#3A3B49",
  gray: "#292934",
  "dark-gray": "#17171C",
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...THEME_COLORS,
      },
      boxShadow: {
        blur: "0px 0px 15px 0px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
