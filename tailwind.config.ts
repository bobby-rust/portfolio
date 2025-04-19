import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			screens: {
				xs: "450px",
				"lg++": "1150px",
				"3xl": "1919px",
			},
			colors: {
				background: "var(--light-background)",
				foreground: "var(--light-foreground)",
				primary: "var(--light-primary)",
				"primary-faded": "var(--primary-faded)",
				"accent-faded": "var(--accent-faded)",
				secondary: "var(--light-secondary)",
				gray: "var(--gray)",
				accent: "var(--accent)",
			},
			boxShadow: {
				even: "0px 0px 0px 0px rgba(0, 0, 0, 0.5)",
				"accent-3d": "3px 3px 2px 2px var(--accent)",
				"accent-4d": "6px 6px 2px 2px var(--accent)",
				gradient: "0 4px 20px rgba(0, 0, 255, 1), 0 6px 50px rgba(255, 0, 0, 1), 0 60px 60px rgba(0, 255, 0, 1)",
				"blue-gradient": "0 4px 20px rgba(0, 0, 255, 1)",
			},
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "1 8px 16px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
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

				"rotate-chevron-up": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(180deg)" },
				},
				"rotate-chevron-down": {
					"0%": { transform: "rotate(180deg)" },
					"100%": { transform: "rotate(0deg)" },
				},
				"open-accordion": {},
				"close-accordion": {},
			},
			animation: {
				"fade-in-out": "fade-in-out 0.8s linear infinite",
				rise: "rise 0.2s ease-out forwards",
				fall: "fall 0.2s ease-out forwards",
				"rotate-chevron-up": "rotate-chevron-up 0.3s ease-out forwards",
				"rotate-chevron-down": "rotate-chevron-down 0.3s ease-out forwards",
				"open-accordion": "open-accordion 0.3s ease-out forwards",
				"close-accordion": "close-accordion 0.3s ease-out forwards",
			},
			backgroundImage: {
				"geometric-mesh": "url('/ccchaos.svg')",
				burst: "url('/burst.svg')",
				blurry: "url('/blurry.svg')",
				blurry2: "url('/blurry2.svg')",
				blurry3: "url('/blurry3.svg')",
				waves: "url('/orange-waves.svg')",
				gradient: "linear-gradient(45deg, rgba(0, 76, 76, 0.7), rgba(255, 169, 63, 0.7))",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value: string) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") }
			);
		}),
	],
};
export default config;
