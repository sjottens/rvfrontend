import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#0b0f19",
        surface: "#101725",
        electric: "#4f46e5",
        cyan: "#06b6d4",
        mist: "#dbeafe"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79, 70, 229, 0.3), 0 20px 60px -20px rgba(79, 70, 229, 0.5)"
      },
      backgroundImage: {
        noise: "radial-gradient(circle at 20% 20%, rgba(79,70,229,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.2), transparent 35%), linear-gradient(180deg, #080b12 0%, #0b0f19 100%)"
      }
    }
  },
  plugins: []
};

export default config;
