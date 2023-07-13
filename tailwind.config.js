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
      },
      keyframes: {
        show_it: {
          '0%': {transform: 'translateX(800px)'},
          '100%': {transform: 'translateX(0)'}
        },

        open: {
          '0%': {opacity:0},
          '100%': {opacity:1},
        }
      },
      animation: {
        'show_it': 'show_it 0.5s ease-in',
        'open': 'open 2s ease-in',
      },
      gridTemplateAreas: {
         'layout': [
             'aside header',
             'aside main',
             'aside main',
         ]
      }
    },
    plugins: [
      require('@savvywombat/tailwindcss-grid-areas')
    ],
  }
}

