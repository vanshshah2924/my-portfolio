// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: 1 },
          "20%, 22%, 24%, 55%": { opacity: 0.4 },
        },
      },
      animation: {
        flicker: "flicker 2s infinite",
      },
      boxShadow: {
        neon: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
      },
    },
  },
  plugins: [],
};