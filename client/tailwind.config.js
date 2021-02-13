module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      '1/2': '50%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}