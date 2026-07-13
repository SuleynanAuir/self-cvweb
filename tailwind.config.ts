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
        "accent-soft": "hsl(var(--accent-soft))",
        violet: "hsl(var(--violet))",
        cyan: "hsl(var(--cyan))",
        green: "hsl(var(--green))",
        amber: "hsl(var(--amber))",
      },
      boxShadow: {
        soft: "0 18px 70px rgba(72, 56, 31, 0.08)",
        "material-sm": "0 1px 2px rgba(72, 56, 31, 0.12), 0 1px 3px rgba(72, 56, 31, 0.10)",
        "material-md": "0 4px 14px rgba(72, 56, 31, 0.12), 0 1px 4px rgba(72, 56, 31, 0.08)",
        "material-lg": "0 18px 44px rgba(72, 56, 31, 0.14), 0 4px 12px rgba(72, 56, 31, 0.08)",
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
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "progress-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(220%)" },
        },
        "node-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(104, 125, 69, 0.20)" },
          "50%": { boxShadow: "0 0 0 12px rgba(104, 125, 69, 0)" },
        },
      },
      animation: {
        "edge-flow": "edge-flow 8s linear infinite",
        "slow-drift": "slow-drift 8s ease-in-out infinite",
        "soft-pulse": "soft-pulse 4s ease-in-out infinite",
        "fade-up": "fade-up 0.55s ease-out both",
        "scale-in": "scale-in 0.42s ease-out both",
        "progress-sweep": "progress-sweep 2.4s ease-in-out infinite",
        "node-pulse": "node-pulse 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
