/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[theme="dark"]'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: 'black',
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}

