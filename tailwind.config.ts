const config = {
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
        bannerImg: "url('/backgrounds/timer_bg.jpg')",
      },
      fontFamily: {
        bitter: ["Bitter"],
        geist: ["Geist"],
        geistMono: ["GeistMono"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};



export default config;
