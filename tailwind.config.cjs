/** @type {import('tailwindcss').Config} */
module.exports = {
  // This line tells VS Code to use Tailwind's IntelliSense features
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // The accent color
        accent: "#FB2F3E",
        // The base color
        base: {
          dark: "#fff",
          light: "#f1f1fc7e",
        },
        main: {
          dark: "#84AEE1",
          light: "#D9F3FF",
        },
        // The black color
        black: "#050505",
        secondary: "#707070",
      },
      backdropBlur: {
        glass: "blur(4px)",
      },
    },
  },
  // These are the Tailwind plugins
  plugins: [],
};
