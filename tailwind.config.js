/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[theme="dark"]'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}

