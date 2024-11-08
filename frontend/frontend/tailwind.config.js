/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        nsw: '#E8F2F4',
        blbnsw:'#CEE2F7',
        lbnsw:'#B5D4F4',
        dbnsw:'#B5D4F4',
        gold:'#e6b71dd2',
        truegold:'#E6B81D'
      },
    },
  },
  plugins: [],
}
