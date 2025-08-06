/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // for your app folder (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}",   // in case you have pages folder
    "./components/**/*.{js,ts,jsx,tsx}" // for components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
