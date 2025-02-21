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
        backgroundNew: "#EEEDF2",
        navLinkBg: "#C7C4D1",
        sideBarBg: "#DDE4EF",
        primaryNew: "#1C2458",
        mainCardBg: "#DFDDE5",
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
