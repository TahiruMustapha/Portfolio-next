import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/assets/me.png')",
        "contact-image": "url('/assets/bg-con.png')",
      },

      colors: { designColors: "#F7D449", textColor: "#aeaeae" },
      boxShadow: { cardShadwo: "0px,0px, rgba(0,0,0,0.10)" },
    },
  },
  plugins: [],
};
export default config;
