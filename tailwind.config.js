// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'ABChanel Corpo' - це та сама назва, що й у font-family в CSS
        sans: ['ABChanel Corpo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}