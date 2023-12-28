/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['CircularFont', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
}