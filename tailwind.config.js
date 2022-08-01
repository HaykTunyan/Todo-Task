/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Nunito Sans", "sans-serif"],
      body: ["Nunito Sans", "sans-serif"],
    },
    boxShadow: {
      alpha: "0px 0px 2px 0px #0000003D",
      beta: "0px 0px 4px 0px #0000001A",
      gamma: "0px 0px 4px -2px #011C2B",
    },
    extend: {
      colors: {
        primary: { DEFAULT: "#2377A4", light: "#00A9E0", lightAlfa: "#79C0D6" },
        yellow: { DEFAULT: "#FFBE03", alfa: "#D5F345" },
        // BLOG
        light: "#FAFBFD",
        dark: "#353638",
        gray: "#6C6B72",
        orange: { DEFAULT: "#FF5720", alft: "#E59313" },
        green: {
          DEFAULT: "#1B715C",
          alfa: "#3BC37B",
          beta: "#5FA1BD",
          secta: "#3BC37B1A",
        },
      },
      screens: {
        xs: "300px",
        ...defaultTheme.screens,
        "2xl": "1440px",
        "3xl": "1536px",
      },
      minWidth: {
        "320px": "320px",
      },
      maxWidth: {
        "1360px": "1360px",
      },
      boxShadow: {
        base: "0px 0px 4px rgba(0, 0, 0, 0.24)",
      },
      spacing: {
        15: "60px",
        17.5: "70px",
        18.75: "300px",
        22: "88px",
        24.375: "390px",
        25: "100px",
        26: "104px",
        30: "120px",
        35: "140px",
        82.5: "330px",
        55: "220px",
        135: "540px",
        36: "580px",
        42: "672px",
        33: "528px",
        69: "1104px",
        113: "113px",
        132.5: "530px",
        62.5: "250px",
        65.5: "262px",
        93: "372px",
        70: "280px",
        115: "460px",
        165: "165px",
        186: "744px",
        223: "892px",
        306: "306px",
        350: "350px",
        359: "359px",
        410: "410px",
        "100%": "100%",
        "150%": "150%",
        // BLOG
        "128px": "128px",
        "244px": "244px",
        "350px": "350px",
        "405px": "405px",
        "450px": "450px",
        "655px": "655px",
        "728px": "728px",
        "740px": "740px",
        "800px": "800px",
        "916px": "916px",
        "1110px": "1110px",
        "1280px": "1280px",
        "1360px": "1360px",
      },

      borderWidth: {
        "1px": "1px",
      },
      borderRadius: {
        "3xl": "36px",
      },
    },
  },
  plugins: [],
};
