/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: ['class', '[theme="dark"]'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xss':'470px',
        'lg':'920px',
      },
      colors: {
        primary_dark: '#171717',
        primary_light: '#737373',
        secondary_dark:'#262626',
        secondary_light: '#a3a3a3',
        item_dark:'#737373',
        item_light:'#404040',
        btn_dark:'#737373',
        btn_light:'#262626',
        border_dark: '#737373',
        border_light: '#404040',
        rate_light:'#262626',
        rate_dark:'#525252',
        title: '#f5f5f5',
        text_dark: '#d4d4d4',
        text_light: '#f5f5f5',
        icon_dark: '#fef08a',
        icon_light: '#facc15',
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
      plugin(function({addComponents}) {
        addComponents({
          '.base_container': {
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
          }
        })
      })
    ],
  }
}

