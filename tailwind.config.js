const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Montserrat',
      'display': 'Montserrat',
      'body': 'Montserrat',
    },
    colors: {
      secondary: "#42a6f5",
      textHeading: "#6b7280",
      lightgrayText: "#fbfbfc",
      spanColor: "#FAAB60",
      transparent: "transparent",
      white: "#FFFFFF"
    },
    extend: {
      backgroundImage: (theme) => ({
        "klinkerwork-pattern":
          "url('/technical-support-guys-working-removebg-preview.png')",
      }),

      animation: {
        slide: "slide 10s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { left: 0 },
          "100%": { left: "-10%" },
        },
      },
    },
    screens: {
      md: "800px",
      sm: "769px",
    },
  },
  variants: {
    extend: { zIndex: ["hover", "active"] },
  },
  plugins: [],
};
