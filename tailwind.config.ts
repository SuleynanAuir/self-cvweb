import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        surface: "hsl(var(--surface))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        violet: "hsl(var(--violet))",
        cyan: "hsl(var(--cyan))",
      },
      boxShadow: {
        soft: "0 18px 70px rgba(15, 23, 42, 0.08)",
      },
      keyframes: {
        "edge-flow": {
          "0%": { strokeDashoffset: "42" },
          "100%": { strokeDashoffset: "0" },
        },
        "slow-drift": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "edge-flow": "edge-flow 8s linear infinite",
        "slow-drift": "slow-drift 8s ease-in-out infinite",
        "soft-pulse": "soft-pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
