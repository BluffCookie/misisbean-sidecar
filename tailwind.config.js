/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        honey: "#F5C63C",
        ink: "#0F172A",
        cloud: "#F9FAFB",
        mist: "#EEF2F7",
        azure: "#3AA6FF",
        teal: "#0EA5A0",
        coral: "#FF6B6B"
      },
      boxShadow: { soft: "0 6px 24px rgba(10,20,30,0.06)" }
    },
  },
  plugins: [],
};
