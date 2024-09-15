"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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

const eldenForgeTestimonials = [
    {
        quote: "[Gifted $2]: Well done sir.",
        title: "ITMagee",
        name: "",
    },
    {
        quote: "This is really killer. I used it for my character to head into the expansion with. After so many playthroughs you just want to try something new and fun.",
        title: "DreBuchanan",
        name: "",
    },
    {
        quote: "Damn, i love it!",
        title: "ThesePhoto3592",
        name: "",
    },
    {
        quote: "I just came across this, thank you so much for making this!! I've been looking for something like this! You are a freaking Chad!!!!! 👍👍💪💪",
        title: "Beguiler13",
        name: "",
    },
    {
        quote: "Thank you for this I’m obsessed!...I’ve just seen the updated ui and it looks great! I did notice that there’s no longer an option to include previously rolled items and I was wondering if you could bring that back?",
        name: "",
        title: "Overall_Character_41",
    },
    {
        quote: "thank yoU!!",
        name: "",
        title: "Firm_Caterpillar9890",
    },
];

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
            <li>
                <h2 className="font-semibold text-xl">Testimonials</h2>
                <InfiniteMovingCards items={eldenForgeTestimonials} direction="left" speed="slow" />
            </li>
        </ul>
    </div>
);

const queueSocialTestimonials = [
    {
        quote: "QueueSocial has revolutionized the way I manage my social media accounts. Scheduling posts in advance has saved me hours each week!",
        name: "Emily R.",
    },
    {
        quote: "As a social media manager, QueueSocial has become an essential tool. It’s simple to use and ensures my content is always posted at the right time.",
        name: "David L.",
    },
    {
        quote: "QueueSocial’s intuitive interface and reliable scheduling have boosted my online presence. I couldn’t be happier with the results.",
        name: "Sarah M.",
    },
    {
        quote: "I love how easy it is to schedule and manage all my posts in one place with QueueSocial. It's a real time-saver!",
        name: "Jason B.",
    },
    {
        quote: "QueueSocial has been a game-changer for my business. My social media is now always active and engaging, without needing constant attention.",
        name: "Rebecca P.",
    },
];

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
            <li>
                <h2 className="font-semibold text-xl">Testimonials</h2>
                <InfiniteMovingCards
                    items={queueSocialTestimonials}
                    direction="right"
                    speed="slow"
                />
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
        title: "",
        description: "",
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
        title: "",
        description: "",
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
