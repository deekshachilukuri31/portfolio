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
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-bright": "var(--accent-bright)",
        sage: "var(--sage)",
        "sage-ink": "var(--sage-ink)",
        lavender: "var(--lavender)",
        "lavender-ink": "var(--lavender-ink)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-karla)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        glow: "0 0 24px 4px var(--accent)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        "pulse-line": "pulseLine 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
