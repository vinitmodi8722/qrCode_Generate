import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "edu-dots": ['"Edu AU VIC WA NT Dots"', "cursive"],
        "protest-strike": ["Protest Strike", "sans-serif"],
        "text-fade": "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        colorAnimation: {
          "0%": { color: "#044b51" },
          "25%": { color: "#3b5104" },
          "50%": { color: "#510450" },
          "75%": { color: "#510404" },
          "100%": { color: "#044b51" },
        },
        blast: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        blast: "blast 0.6s ease-out forwards",
        colorAnimation: "colorAnimation 3s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
