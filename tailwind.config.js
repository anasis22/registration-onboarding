/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tOrange: '#DE6944',
        tWhiteF: '#FFFFFF',
        tBlueF:'#1565D8',
        tGreyF: '#8692A6',
        tBlack: '#000000',
        tLblue: '#00DAF7',
        tGreen: '#08AD36',
        tBlueH: '#1565D8',
        tRose: '#E82965',
        tWhiteBH: '#F5F9FF',
        tGreyFM: '#696F79',
        tWhiteHL: '#F5F5F5',
        tBlueFM: '#1976D2',
        tBlackL: '#494949',
        tGreenL: '#4CAF50',
        tLGrey1: '#BABABA',
        tLGrey2: '#BDBDBD',
        
      },
      fontFamily:{
        tInterFont: "'Inter', sans-serif",
        tAmarnatFont: "'Amaranth', sans-serif",
        tGayathriFont: "'Gayathri', sans-serif"
      },
      backgroundImage: {
        'building': "url('./src/assets/images/building.jpeg')",
        'individual' : "url('./src/assets/icons/individual.png')",
        'business' : "url('./src/assets/icons/business.png')",
        'background-image': "linear-gradient(rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.9)), url('./src/assets/images/building.jpeg')",
      },
      fontSize:{
         tGayathriSize: '6rem',
         t20px: '1.18rem',
         t18px: '1rem',
         tJoinUs: '1.8rem',
         tNormalHead: '1.110rem',
         tNormalHead: '1.020rem',
         tNormalMin: '.8rem',
         tMin: '.7rem'
      },
      width:{
        logoNormalW: '2.725rem',
        tScreenBW: '45%',
        tScreenWW: '55%',
        individualPW: '3.25rem'
      },
      height:{
        logoNormalH: '1.875rem',
        individualPH: '3.25rem'
      },
      margin:{
        mlForOasisL: '5.125rem',
        mlForOasisT: '3.375rem'
      },
      lineHeight:{
        tParaLH: '33px'
      },
      borderWidth:{
        bw: '1.4px',
      },
      keyframes:{
        borderTransition : {
          '0%' : {borderWidth : '1px'},
          '100%' : {borderWidth : '0px',borderColor: "none"}
        },
      },
      animation:{
        borderTransition: 'borderTransition .2s ease-in forwards' 
      }
    },
  },
  plugins: [],
}