/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      },
      backgroundImage: {
        mainBackground: "url(/assets/background.svg)"
      },
      colors: {
        beige: {
          500: "#f2f2f2"
        }
      }
    },
  },
  plugins: [],
}
