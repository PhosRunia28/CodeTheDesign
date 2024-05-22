/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm_sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#00BAC7",
        darkMuted: "#272D3E",
        dark: "#272D3E",
      },
      clipPath: {
        customPolygon: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-custom-polygon": {
          "clip-path": "polygon(0 0, 100% 0, 100% 70%, 0% 100%)",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
