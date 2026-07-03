/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/popup/index.html',
    './src/popup/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        // Dark theme colors from the original design
        bg: {
          primary: '#0F0F14',
          secondary: '#1A1A24',
          tertiary: '#252532',
        },
        brand: {
          primary: '#6366F1',
          'primary-light': '#818CF8',
          secondary: '#8B5CF6',
        }
      },
    },
  },
  plugins: [],
};
