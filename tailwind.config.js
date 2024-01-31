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
        tWhiteH: '#F5F9FF',
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
        tAmarnatFont: "'Amaranth', sans-serif"
      }
    },
  },
  plugins: [],
}