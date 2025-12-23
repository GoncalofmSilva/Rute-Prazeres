/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Garanta que esta linha existe!
    "./src/**/*.{js,ts,jsx,tsx,mdx}",        // E esta se usar a pasta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}