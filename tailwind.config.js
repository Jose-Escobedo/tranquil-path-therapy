/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fef9f0',
          100: '#fdf3d9',
          200: '#fae4a4',
          300: '#f7d66e',
          400: '#f4c93a',
          500: '#f2bc08', // main gold color
          600: '#c28e06',
          700: '#8f6804',
          800: '#5c4203',
          900: '#2a2101',
        },
      },
    },
  },
  plugins: [],
};
