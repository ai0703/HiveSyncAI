import type { Config } from "tailwindcss";

const config: Config = {
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
                primary: {
                    DEFAULT: "#FBC02D", // Honey
                    hover: "#F9A825",
                },
                secondary: {
                    DEFAULT: "#0F172A", // Dark Navy
                },
                accent: {
                    DEFAULT: "#2F67E3", // Tech Blue
                },
                neutral: {
                    50: "#F4F4F5",
                    100: "#F0F0F2",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
