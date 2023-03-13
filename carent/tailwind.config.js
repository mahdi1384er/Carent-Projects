/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "custom": '0 50px 25px -24px rgb(0 0 0 / 0.3)'
      }
    },
  },
  plugins: [],
}
