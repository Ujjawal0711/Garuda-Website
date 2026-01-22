/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#10b981',   // Emerald (replacing Cyan)
  secondary: '#14b8a6', // Teal (replacing Fuchsia)
  accent: '#34d399',    // Mint (replacing Purple)
        },
      },
    },
  },
  plugins: [],
};