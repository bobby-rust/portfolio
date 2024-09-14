import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export function ProjectGrid() {
    return (
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[40rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}
const EldenForgeSkeleton = () => (
    <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto" }}
        src="/videos/eldenforge.webm"
    ></video>
);

const QueueSocialSkeleton = () => (
    <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto" }}
        src="/videos/queue-social.webm"
    ></video>
);

const EldenForgeDescriptionSkeleton = () => (
    <div className="h-full">
        <ul className="flex flex-col h-full gap-8 relative">
            <li>
                <div className="pb-3">
                    <h2 className="font-semibold text-xl">EldenForge</h2>
                    <div className="absolute top-0 right-0 text-sm bg-gray-200 px-4 py-1 font-semibold rounded-full">
                        Web App
                    </div>
                </div>
                <p className=" leading-relaxed tracking-wide">
                    A random build generator for Elden Ring with custom build parameters. Built for
                    the community with hundreds of daily users.
                </p>
            </li>
            <li>
                <div className="absolute left-5 bottom-5 rotate-90">
                    {" "}
                    <Image
                        src="/falling-arrow.png"
                        alt="arrow right"
                        width={200}
                        height={200}
                    />{" "}
                </div>
                <h2 className="font-semibold text-xl">Technologies</h2>
                <ul className="flex gap-4 p-5 justify-center">
                    <li>
                        <Image src="/react-logo.png" width={50} height={50} alt="React.js" />
                    </li>
                    <li>
                        <Image src="/tailwind-css-logo.png" width={60} height={60} alt="Next.js" />
                    </li>
                    <li>
                        <Image
                            src="/google-gemini-logo.png"
                            width={100}
                            height={100}
                            alt="Next.js"
                        />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);

const QueueSocialDescriptionSkeleton = () => (
    <div className="h-full">
        <ul className="flex flex-col h-full gap-8 relative">
            <li>
                <div className="pb-3">
                    <h2 className="font-semibold text-xl">QueueSocial</h2>
                    <div className="absolute top-0 right-0 text-sm bg-gray-200 px-4 py-1 font-semibold rounded-full">
                        Web App
                    </div>
                </div>
                <p className=" leading-relaxed tracking-wide">
                    A social media post scheduler that interacts with the Facebook, Instagram, and
                    Twitter APIs. Designed to allow users to schedule posts across multiple
                    platforms from a single interface, automating the publishing process.
                </p>
            </li>
            <li>
                <div className="absolute right-5 bottom-5">
                    {" "}
                    <Image src="/arrow-right.png" alt="arrow right" width={200} height={200} />{" "}
                </div>
                <h2 className="font-semibold text-xl">Technologies</h2>
                <ul className="flex gap-4 p-5">
                    <li>
                        <Image src="/next-js-logo.png" width={100} height={100} alt="Next.js" />
                    </li>
                    <li>
                        <Image src="/tailwind-css-logo.png" width={70} height={70} alt="Next.js" />
                    </li>
                    <li>
                        <Image src="/mongo-db-logo.png" width={100} height={100} alt="Next.js" />
                    </li>
                    <li>
                        <Image src="/node-js-logo.png" width={100} height={100} alt="Next.js" />
                    </li>
                    <li>
                        <Image src="/express-js-logo.png" width={100} height={100} alt="Next.js" />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);

const items = [
    {
        title: "EldenForge",
        description: "Discover the secrets of the Elden Ring.",
        header: <EldenForgeSkeleton />,
        className: "md:col-span-2",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-dices"
            >
                <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
                <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
                <path d="M6 18h.01" />
                <path d="M10 14h.01" />
                <path d="M15 6h.01" />
                <path d="M18 9h.01" />
            </svg>
        ),
    },
    {
        title: "EldenForge",
        description: "Dive into the transformative power of technology.",
        header: <EldenForgeDescriptionSkeleton />,
        className: "md:col-span-1",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-swords"
            >
                <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
                <line x1="13" x2="19" y1="19" y2="13" />
                <line x1="16" x2="20" y1="16" y2="20" />
                <line x1="19" x2="21" y1="21" y2="19" />
                <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
                <line x1="5" x2="9" y1="14" y2="18" />
                <line x1="7" x2="4" y1="17" y2="20" />
                <line x1="3" x2="5" y1="19" y2="21" />
            </svg>
        ),
    },
    {
        title: "QueueSocial",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <QueueSocialDescriptionSkeleton />,
        className: "md:col-span-1",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-calendar-check"
            >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="m9 16 2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "QueueSocial",
        description: "Understand the impact of effective communication in our lives.",
        header: <QueueSocialSkeleton />,
        className: "md:col-span-2",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chart-no-axes-combined"
            >
                <path d="M12 16v5" />
                <path d="M16 14v7" />
                <path d="M20 10v11" />
                <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                <path d="M4 18v3" />
                <path d="M8 14v7" />
            </svg>
        ),
    },
];
