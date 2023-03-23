/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'sans-serif']
      },
      screens: {
        'sm-360': {'max': '360px'},
      }
    },
  },
  plugins: [],
}