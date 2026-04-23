import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          bg: "#0a0a14",
          card: "#12121f",
          border: "#2d1b69",
          gold: "#c9a84c",
          "gold-light": "#f0d080",
          purple: "#7c3aed",
          "purple-light": "#a855f7",
          text: "#e8e0f0",
          muted: "#8b80a0",
        },
      },
      fontFamily: {
        mystical: ["Cinzel", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(201, 168, 76, 0.3)",
        "purple-glow": "0 0 20px rgba(124, 58, 237, 0.4)",
      },
      backgroundImage: {
        "mystic-gradient": "linear-gradient(135deg, #0a0a14 0%, #1a0a2e 100%)",
        "gold-gradient": "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)",
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
