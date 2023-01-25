/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "410px",
      },
      colors: {
        blog_blue: {
          500: "#201F4C",
          400: "#233C6C",
          300: "#365F97",
          200: "#5393B3",
          100: "#A4CCDD",
          light: {
            500: "#1E264A",
            400: "#3C62A9",
            300: "#3973B0",
            200: "#3688B9",
            100: "#C7E2E6",
          },
        },
      },
    },
  },
  plugins: [],
};
