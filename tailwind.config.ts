import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#000000",
        ink: "#e9e9e9",
        accent: {
          DEFAULT: "#2bb3ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-monoton)", "cursive"],
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        arrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        blink: "blink 1.05s steps(1) infinite",
        arrow: "arrow 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
