/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],mode: 'jit',
  
  theme: {
    extend: {
      zIndex: {
        '100000': 100000,
      },
      fontFamily: {
        'galano-grotesque-demo': ['Galano Grotesque DEMO', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        IBN : 'IBM Plex Sans Condensed',
        PlusJakartaSans : 'Plus Jakarta Sans',

      },
    },
  },
  plugins: [

  ],
};
