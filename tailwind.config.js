module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
     fontFamily: {
        montserrat: ['Montserrat'],
     },
     boxShadow: {
        'custom-light': ' 0 0 10px #313131',
        'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px 10px #14161c',
     },
     extend: {
        //TODO add pouple
        colors: {
         pouple: {
              DEFAULT: '#590767',
           },
           //TODO change to dark and light
           black: {
              DEFAULT: '#010101',
              100: '#0a0b0e',
              300: '#0f1115',
              500: '#16181D',
              700: '#202125',
           },
           black2: {
              DEFAULT: '#16181D',
           },
        },
     },
  },
  variants: {
     extend: {
        boxShadow: ['dark'],
     },
  },
  plugins: [],
}
