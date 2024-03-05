/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    extend: {
      boxShadow : {
        main: "0 0px 2px 2px rgba(0,0,0,0.3)"}
    },
  },
  plugins: [],
}

