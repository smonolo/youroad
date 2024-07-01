/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    fontFamily: {
      display: ['Switzer', 'sans-serif']
    },
    extend: {
      colors: {
        'yr-brand': '#FF4D5D'
      }
    }
  },
  plugins: []
}
