/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        cyan: "#1098ad",
        blue1: "#1864ab",
        blue2: "#228be6",
        blue3: "#4dabf7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },
    extend: {},
  },
  plugins: [],
}
}
