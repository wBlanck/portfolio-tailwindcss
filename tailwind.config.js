module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("../imgs/headerbg.jpg")'
      },
      fontSize: {
        sm: ['15px', '30px']
      },
      fontFamily: {
        'monts': 'Montserrat',
        'mulish': 'Mulish',
        'rob': 'Roboto'
      },
      maxWidth: {
        '70px': '70px'
      },
      colors: {
        'black': '#000',
        'gray':'#767676',
        'white': '#fff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
