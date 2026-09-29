/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        line: "hsl(var(--line))",
        ink: "hsl(var(--ink))",
        "ink-elevated": "hsl(var(--ink-elevated))",
        "ink-inverse": "hsl(var(--ink-inverse))",
        muted: "hsl(var(--muted))",
        primary: "hsl(var(--primary))",
        "primary-soft": "hsl(var(--primary-soft))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      boxShadow: { lift: "var(--shadow-lift)" },
    },
  },
  plugins: [],
};
