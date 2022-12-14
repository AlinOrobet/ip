/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
