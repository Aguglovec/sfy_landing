/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      container: {
        center:true,
      },
      colors: {
        baseC: '#EEFFFE',
        title: '#0F6B55',
        heroMain: '#054032',
        textMaim: '#423A2E',
        formText: '#06392D',
        formPlaceholder: '#283D2A',
        serumBg: '#B0F69752',

      },

      backgroundImage: {
        heroBgLeft: "url('../dist/img/bg_left.png') ",
        heroBgRight: "url('../dist/img/bg_right.png') ",

      },

      backgroundSize: {
        '100%': '100%',
        '40%': '40%',
        '50%': '50%',
        '33%': '33%',
      },

    
    },
  },
  plugins: [],
}
