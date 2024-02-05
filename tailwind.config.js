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
        tLWhite: '#ededed',
        
      },
      fontFamily:{
        tInterFont: "'Inter', sans-serif",
        tAmarnatFont: "'Amaranth', sans-serif",
        tGayathriFont: "'Gayathri', sans-serif"
      },
      backgroundImage: {
        'building': "linear-gradient(rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.9)), url('/src/assets/images/building.jpeg')",
      },
      fontSize:{
         tGayathriSize: '6rem',
         tGayathriSizeTab: '4rem',
         tGayathriSizeMobile: '3rem',
         t20px: '1.18rem',
         t18px: '1rem',
         t16px: '.9rem',
         t15px: '.8rem',
         t14px: '.7',
         t12px: '.6',
         t30px: '1.875',
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
        individualPW: '3.25rem',
        seventyPercent: '67%',
        eightyPercent: '78%'
        
      },
      height:{
        logoNormalH: '1.875rem',
        individualPH: '3.25rem',
        mobileWhitesideH: '80%' 
      },
      margin:{
        mlForOasisL: '5.125rem',
        mlForOasisT: '3.375rem'
      },
      lineHeight:{
        tParaLH: '33px',
        tParaLHMobile: '28px',
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
      },
      screens:{
        mobile: '300px',
        tablet: '640px',
        ipad: '768px',
        laptop: '1024px',
        desktop: '1280px',
      }
    },
  },
  plugins: [],
}