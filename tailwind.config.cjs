/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, css, js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
      colors: {
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
