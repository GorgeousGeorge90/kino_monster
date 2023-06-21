/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[theme="dark"]'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'black',
      },
      fontFamily: {
        'sans-serif': ['Alegreya Sans SC', 'sans-serif'],
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}

