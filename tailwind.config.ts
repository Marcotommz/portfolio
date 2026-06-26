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
        // Near-black navy canvas
        base: "#070a14",
        surface: "#11162a",
        // Cool ink scale (light → dim) for text on the dark canvas
        ink: {
          DEFAULT: "#e8eaf0", // primary text
          200: "#c9cee0", // emphasised body
          400: "#8a93b0", // secondary text
          500: "#6b7290", // tertiary text
          600: "#4a5170", // mono / faint labels
        },
        // Periwinkle accent
        accent: {
          DEFAULT: "#6b8aff", // dot / glow
          soft: "#9ab0e8", // tag text
        },
        online: "#4ade80",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "880px",
      },
      boxShadow: {
        dot: "0 0 12px rgba(107, 138, 255, 0.6)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
