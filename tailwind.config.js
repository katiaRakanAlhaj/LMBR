/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This path is correct for a Vite project
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF5CA2",
      },
    },
  },
  plugins: [],
};