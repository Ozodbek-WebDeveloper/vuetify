/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#363062',
        'dark-green': '#435585',
        'brend': '#818FB4',
        'light':'#F5E8C7'
      }
    },
  },
  plugins: [],
}
