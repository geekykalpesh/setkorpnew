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
        primary: '#0A1628',
        secondary: '#334155',
        brand: '#E3584D',
        brandhover: '#D94841',
        brandactive: '#C93D35',
        gold: '#F59E0B',
        success: '#10B981',
        alert: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
