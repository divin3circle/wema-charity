/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "370px",
        xs: "410px",
        ph: '620px',
      },
    },
  },
  plugins: [],
};

