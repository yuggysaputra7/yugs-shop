/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        greenShop: "#00CC99",
        darkMode: "#1d2a35",
        blueCalm: "#abd1c6",
        smooth: "#f3d2c1",
        pink: "#f582ae",
        darkBlue: "#001858",
      },
    },
  },
  plugins: [],
};

module.exports = config;
