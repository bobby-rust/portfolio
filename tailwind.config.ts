import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                xs: "450px",
                "3xl": "1919px",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "secondary-light": "var(--secondary-light)",
                "secondary-dark": "var(--secondary-dark)",
                accent: "var(--accent)",
                gray: "var(--gray)",
            },
            keyframes: {
                "fade-in-out": {
                    "0%": { opacity: "0" },
                    "50%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
            },
            animation: {
                "fade-in-out": "fade-in-out 0.8s linear infinite",
            },
            backgroundImage: {
                "geometric-mesh": "url('/ccchaos.svg')",
                burst: "url('/burst.svg')",
            },
        },
    },
    plugins: [],
};
export default config;
