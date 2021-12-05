const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["basier_circle", "san-serif"],
      },
      colors: {
        gray: colors.trueGray,
      },
      boxShadow: {
        subtle:
          "0 4px 8px 0 rgb(0 0 0 / 6%), 0 8px 16px 0 rgb(0 0 0 / 4%), 0 0 0 1px rgb(0 0 0 / 8%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
