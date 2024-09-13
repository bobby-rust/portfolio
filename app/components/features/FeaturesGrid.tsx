import React from "react";
import { useId } from "react";
import FeaturesHeader from "./FeaturesHeader";

export function FeaturesGrid() {
    return (
        <div className="flex flex-col gap-6 py-20 lg:py-40 px-16">
            <div className="">
                <div className="w-full flex flex-col gap-2">
                    <FeaturesHeader />
                    <p className="text-lg leading-relaxed tracking-wide text-neutral-600">
                        I&#39;m a full-stack developer who specializes in building beautiful,
                        performant, and scalable web applications.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
                {grid.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
                    >
                        <Grid size={20} />
                        <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                            {feature.title}
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
const grid = [
    {
        title: "Custom Web Development",
        description:
            "I build fully customized websites and web applications tailored to your specific needs, ensuring a seamless and engaging user experience.",
    },
    {
        title: "E-commerce Solutions",
        description:
            "Specializing in platforms like Shopify and WooCommerce, I create optimized online stores with secure payment integrations and inventory management.",
    },
    {
        title: "WordPress Development",
        description:
            "From custom themes to plugin development, I build responsive, SEO-friendly WordPress websites that are easy to manage and maintain.",
    },
    {
        title: "Search Engine Optimization (SEO)",
        description:
            "Boost your online visibility and rankings with expert SEO services, including keyword optimization, on-page SEO, and technical SEO audits.",
    },
    {
        title: "Full-Stack Development",
        description:
            "Offering full-stack development services, from backend APIs to front-end frameworks, using technologies like Node.js, React, MongoDB, and more.",
    },
    {
        title: "Web Performance Optimization",
        description:
            "I optimize your website's speed and performance, ensuring fast load times, reduced bounce rates, and a smooth user experience.",
    },
    {
        title: "API Integration & Development",
        description:
            "Seamlessly integrate third-party APIs or build custom APIs to extend your application's functionality and connect with other platforms.",
    },
    {
        title: "Technical Consulting",
        description:
            "I provide expert consulting services to help you make informed decisions about your tech stack, architecture, and long-term development strategy.",
    },
];

export const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
                />
            </div>
        </div>
    );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: any) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
