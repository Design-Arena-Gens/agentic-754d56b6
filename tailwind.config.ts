import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#0B1620",
          900: "#111F2C",
          800: "#1F2E3D",
          700: "#2B3D51"
        },
        accent: {
          500: "#00BFA6",
          400: "#19D4BA",
          300: "#4FE2CA"
        }
      },
      boxShadow: {
        glow: "0 20px 45px -15px rgba(0, 191, 166, 0.45)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};

export default config;
