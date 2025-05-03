export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        myGray: '#D9D9D9',
      },
      fontSize: {
        portfolioTitle: 256
      }
    },
  },
  plugins: [],
}