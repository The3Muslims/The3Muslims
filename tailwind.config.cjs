/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    "./src/**/**/*.svelte",
    "./src/**/**/**/*.svelte",
    "./src/**/**/**/**/*.svelte",
  ],
  theme: {
    extend: {
      colors: {
        "background": "rgb(68,42,41)",
        "foreground": "rgb(238,219,165)",
      }
    },
  },
  plugins: [],
}