/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0284c7',
        secondery: '#64748b',
        dark: '#082f49',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

