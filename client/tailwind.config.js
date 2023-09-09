/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#222D44",
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false,
  },
}