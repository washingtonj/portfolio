module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    mode: 'layers',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '1xl': '1320px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
