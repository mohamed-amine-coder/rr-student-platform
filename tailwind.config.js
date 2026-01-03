/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // هنا سمينا الخط 'tajawal' و عطيناه البدائل إيلا ما شار جاش
        'tajawal': ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}