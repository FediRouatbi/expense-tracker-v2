/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
