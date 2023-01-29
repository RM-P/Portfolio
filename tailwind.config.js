/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
],
  theme: {
    extend: {
      fontFamily: {
        custom: "'Russo One', san-serif",
      },
      colors: {
        'primary': '#F4B301',
        'secondary': '#1e2329',
        'tertiary': '#2a2f35',
        'shades': '#3b4046'
      }
    },
  },
  plugins: [],
}
