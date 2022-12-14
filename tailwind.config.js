/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          light: "#f2f2e6",
          dark: "#07020a",
        },
        fiord: {
          50: "#e3d5e1",
          100: "#d0c4d3",
          200: "#a8a3b4",
          300: "#838697",
          400: "#65707c",
          500: "#4a5c63",
          600: "#33484d",
          700: "#20353a",
          800: "#112129",
          900: "#070f19",
        },
        vividVision: {
          50: "#e3d5d5",
          100: "#d3c4c7",
          200: "#b4a3ac",
          300: "#978392",
          400: "#7c657c",
          500: "#5e4a63",
          600: "#45334d",
          700: "#30203a",
          800: "#1f1129",
          900: "#110719",
        },
        scentedClove: {
          50: "#e3e0d5",
          100: "#d3d0c4",
          200: "#b4afa3",
          300: "#978f83",
          400: "#7c7065",
          500: "#63524a",
          600: "#4d3733",
          700: "#3a2021",
          800: "#291117",
          900: "#190710",
        },
        tomThumb: {
          50: "#dae3d5",
          100: "#c8d3c4",
          200: "#a5b4a3",
          300: "#849783",
          400: "#677c65",
          500: "#4e634a",
          600: "#3d4d33",
          700: "#323a20",
          800: "#292811",
          900: "#191007",
        },
      },
    },
  },
  plugins: [],
};
