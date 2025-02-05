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
        background: "#E7E6ED",
        navLinkBg: "#C7C4D1",
        sideBarBg: "#DDE4EF",
        primary: "#1C2458",
        profileCardBg: "#DFDDE5",
        auditingBg: "#136783",
        leadershipBg: "#874465",
        teamBg: "#E6881B",
        pSolvingBg: "#883039",
        majorBg: "#FF5263",
        labelColor1: "#C57315",
        labelColor2: "#EC671F",
        labelColor3: "#E90017",
        descriptionHeadBg: "#DBD8E4",
        errorTextColor: "#FF8C97",
        successTextColor: "#18B755",
        partialTextColor: "#F1BC7E",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
