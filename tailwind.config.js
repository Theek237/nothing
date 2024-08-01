/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-orange": "#E7A53B",
        "main-black": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
