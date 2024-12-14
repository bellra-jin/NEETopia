/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: "#B7BF96",
        amazon: "#436B5C",
        aztecgold: "#BF9550",
        palechestnut: "#E6B5A6",
        chinesewhite: "#E8E2DB",
        carminepink: "#E25439",
        linen: "#F9EEEA",
        darkgreen: "#1D2622",
        darklava: "#4A4133",
        lightgray: "#D6D6D6",
        philippinegray: "#928D85",
      },
      maxWidth: {
        1200: "75rem",
      },
      fontFamily: {
        pre: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
}
