module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'credit-card': 'linear-gradient(50deg, #dc5645, #6063c7 110%)'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
