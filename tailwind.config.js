/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      maxWidth: "1250px",
    },
    extend: {
      colors: {
        primary: "#ff9c00",
        secondary: "#f6cd66",
        tertiary: "#f3ca64",
        richBlack: "#01161E",
        greyDark: "rgb(21, 21, 21)",
        lightGreen: "#B5E4CA",
        lightBlue: "#B1E5FC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        primaryGradient_to_right: "linear-gradient(to right, #7DCCFF, #009CFF)",
      },
    },
  },
  plugins: [],
});
