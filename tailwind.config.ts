import type { Config } from "tailwindcss";

const themeConfig = {
  colors: {
    primary: "#4A148C", // Dark purple
    secondary: "#311B92", // Indigo
    accent: "#7C4DFF", // Light purple
    background: {
      start: "#1A237E", // Dark blue
      end: "#4A148C", // Dark purple
    },
    text: {
      light: "#E8EAF6", // Very light indigo
      dark: "#1A237E", // Dark blue
    },
  },
};

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        primary: themeConfig.colors.primary,
        secondary: themeConfig.colors.secondary,
        accent: themeConfig.colors.accent,
        background: themeConfig.colors.background,
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"), // Add the aspect-ratio plugin
  ],
} satisfies Config;
