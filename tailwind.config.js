/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        greenShop: "#078080",
        darkMode: "#1d2a35",
        blueCalm: "#abd1c6",
      },
    },
  },
  plugins: [],
};

module.exports = config;
