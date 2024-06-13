/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightYellow: "#FCE72D",
        gradient1: "#5546FC",
        gradient2: "#6113C3",
      },
      fontFamily: {
        sourceCodePro: ["Source Code Pro", "monospace"],
        IBMPlexMono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
