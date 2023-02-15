/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGrayColor: "#f2f2f2",
        mainDarkGrayColor: "#656565",
        mainDarkColor: "#222222",
        mainDarkerColor: "#111111",
      },
      screens: {
        xs: "400px",
        sl: "800px",
      },
    },
  },
  plugins: [],
};
