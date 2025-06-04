/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'conference-green': 'rgb(100,171,34)',
        'conference-orange': 'rgb(244,113,23)',
        'conference-purple': 'rgb(138,19,102)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      maxWidth: {
        'site': '1200px',
      },
    },
  },
  plugins: [],
};