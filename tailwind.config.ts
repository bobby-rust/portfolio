import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        screens: {
            sm: "450px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1400px",
            "3xl": "1600px",
            "4xl": "1919px",
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            screens: {
                xs: "320px",
                sm: "450px",
            },
            boxShadow: {
                even: "0 0 10px rgba(0, 0, 0, 0.5)",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "var(--background)",
                foreground: "var(--foreground)",
                gray: "var(--gray)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "var(--secondary-foreground)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                move: {
                    "0%": { transform: "translateX(-200px)" },
                    "100%": { transform: "translateX(200px)" },
                },
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
                shimmer: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
                "fade-in-out": {
                    "0%": { opacity: "0" },
                    "50%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                move: "move 5s linear infinite",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
                shimmer: "shimmer 2s linear infinite",
                "fade-in-out": "fade-in-out 0.8s linear infinite",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        addVariablesForColors,
        function({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    "bg-dot-thick": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme("backgroundColor")),
                    type: "color",
                },
            );
        },
    ],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}

export default config;
