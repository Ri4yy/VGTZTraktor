/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./*.{html,js}",
    "./pages/*.{html,js}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'mainRed':'#D53029',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 20px))' },
        }
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
    },
    container: {
      padding: {
        DEFAULT: '16px',
        md: '20px',
        center: true
      },
    }
  },
  plugins: [],
}
