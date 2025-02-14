import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EEEDF2",
        navLinkBg: "#C7C4D1",
        sideBarBg: "#DDE4EF",
        primary: "#1C2458",
        profileCardBg: "#DFDDE5",
        auditingBg: "#136783",
        leadershipBg: "#874465",
        teamBg: "#E6881B",
        pSolvingBg: "#883039",
        majorBg: "#FF5263",
        highlightBg: "#ECEAF2",
        expertColor: '#B78B23',
        testimonialHighlight: '#8C4569',
      },
      
    },
  },
  plugins: [],
} satisfies Config;
