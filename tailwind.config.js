/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#be0017",
        "primary-container": "#e5252a",
        "on-primary": "#ffffff",
        secondary: "#3f627a",
        "secondary-container": "#bde1fe",
        "canvas-base": "#FAFBFC",
        surface: "#f7f9ff",
        "surface-container": "#e9eef8",
        "surface-elevated": "#FFFFFF",
        "surface-glass": "rgba(255, 255, 255, 0.72)",
        "on-surface": "#161c23",
        "on-surface-variant": "#4a5568",
        "outline-variant": "#e6bdb8",
        "electric-blue": "#0A84FF",
        "vivid-violet": "#7928CA",
        "energetic-cyan": "#00C7BE",
        "emerald-neon": "#10B981",
        "sunburst-orange": "#FF6B00",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        margin: "3rem",
        "margin-mobile": "1.25rem",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      }
    },
  },
  plugins: [],
};
