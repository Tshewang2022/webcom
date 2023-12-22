/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080A16",
        blue: "#54DFE4",
        gray: "#D7DAD4",
      },
      fontSize: {
        sm: ["12px"],
        xl: ["16px"],
        lg: ["32px"],
      },
      fontFamily: {
        roboto: ["roboto"],
      },
    },
  },
  plugins: [],
};
