/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:"burtons",
      },
      colors:
      {
        "color-d":"#1a355b"
      }
    },
  },
  plugins: [],
}

