/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
        'inter' : ['Inter', 'sans-serif']
      },
      colors: {
        'orangePrimary' : '#e26b13',
        'orangeSecondary' : '#b9580e',
        'greenPrimary' : '#16423C',
        'greenSecondary' : '#1a4b45',
        'black': '#1C2434',
      }
    },
  },
  plugins: [],
}

