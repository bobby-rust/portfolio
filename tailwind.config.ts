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
                "lg++": "1150px",
                "3xl": "1919px",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "secondary-light": "var(--secondary-light)",
                "secondary-dark": "var(--secondary-dark)",
                accent: "var(--accent)",
                teal: "var(--teal)",
            },
            boxShadow: {
                even: "0px 0px 0px 0px rgba(0, 0, 0, 0.5)",
            },
            keyframes: {
                "fade-in-out": {
                    "0%": { opacity: "0" },
                    "50%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                rise: {
                    "0%": { transform: "translateY(100px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                fall: {
                    "0%": { transform: "translateY(0)", opacity: "1" },
                    "100%": { transform: "translateY(100px)", opacity: "0" },
                },
            },
            animation: {
                "fade-in-out": "fade-in-out 0.8s linear infinite",
                rise: "rise 0.2s ease-out forwards",
                fall: "fall 0.2s ease-out forwards",
            },
            backgroundImage: {
                "geometric-mesh": "url('/ccchaos.svg')",
                burst: "url('/burst.svg')",
                blurry: "url('/blurry.svg')",
                blurry2: "url('/blurry2.svg')",
                blurry3: "url('/blurry3.svg')",
            },
        },
    },
    plugins: [],
};
export default config;
