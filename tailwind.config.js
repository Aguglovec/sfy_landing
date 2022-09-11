/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      container: {
        center:true,
      },
      colors: {
        base: '#EEFFFE',
        title: '#0F6B55',
        heroMain: '#054032',
        formText: '#06392D',
        formPlaceholder: '#283D2A',

      },

      backgroundImage: {
        heroBgLeft: "url('../dist/img/bg_left.png') ",
        heroBgRight: "url('../dist/img/bg_right.png') ",

      }
    },
  },
  plugins: [],
}
