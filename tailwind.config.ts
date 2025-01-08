import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: "#0F1624",
        customColor1: "#31CBE5",
        customColor2: "#8796EF",
        customColor3: "#B27BF4",
        borderColor1: "#13adc8",
        borderColor2: "#6978d1",
        borderColor3: "#945dd6",
      },
      fontFamily: {
        primary: "Var(--font-jetbrainsMono)",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes:{
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      screens: {
        'xss': '320px',
        'xs': '425',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
} satisfies Config;
