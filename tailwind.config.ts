import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import colors from "tailwindcss/colors";

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
            "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        bannerImg: "url('/timer_bg.jpg')",
      },
      fontFamily: {
        bitter: ["Bitter"],
        geist: ["Geist"],
        geistMono: ["GeistMono"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


export default config;
