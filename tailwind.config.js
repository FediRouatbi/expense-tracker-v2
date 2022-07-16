/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        out: "out 1s ease-in-out ",
      },
      keyframes: {
        out: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-50px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
