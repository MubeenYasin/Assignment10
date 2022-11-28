/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-bg": '#F9FAFD',
      },
      spacing: {
        '78': '4.875rem',
        '133': '8.3125rem',
      }
    },
    fontFamily:{
      sans : ['Roboto', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}