/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      purple_opaque: 'rgba(171,73,243,1)',
      purple_transparent: 'rgba(171,73,243,0.7)',
      dark_purple: 'rgba(108,73,168,153)',
      black: 'rgba(36,36,36,1)',
      gray: 'rgba(108,108,108,1)',
      yellow: 'rgba(254,216,49,1)'
    },
    maxWidth: {
      '900': '900px',
    }
    // height: {
    //   '1/10': '10%',
    //   '2/10': '20%',
    //   '3/10': '30%',
    //   '4/10': '40%',
    //   '5/10': '50%',
    //   '6/10': '60%',
    //   '7/10': '70%',
    //   '8/10': '80%',
    //   '9/10': '90%',
    // }
  },
  plugins: [],
}