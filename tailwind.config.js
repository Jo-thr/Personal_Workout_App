/** @type {import('tailwindcss').Config} */

const THEME_COLORS = {
  black: {
    base: "#161818",
    darken: "#202222",
    dark: "#363939",
    light: "#434849",
    lighten: "#8A8C91",
  },
  white: {
    base: "#FFFFFF",
    light: "#EBEBEB",
  },
  primary: "#00F0C5",
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
      fontFamily: {
        krona: ["Krona One"],
      },
      boxShadow: {
        blur: "0px 0px 15px 0px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
