import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ThreeDCard } from "./3DCard";

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

const EldenForgeDescriptionSkeleton = () => <ThreeDCard />;
{
    /* <div> */
}
{
    /*     <ul className="flex flex-col gap-4"> */
}
{
    /*         <li> */
}
{
    /*             <h2 className="font-semibold text-lg">Project Overview</h2> */
}
{
    /*             <ul> */
}
{
    /*                 <li> */
}
{
    /*                     <p> */
}
{
    /*                         An AI-powered build generator for Elden Ring that customizes character */
}
{
    /*                         builds based on player preferences. */
}
{
    /*                     </p> */
}
{
    /*                 </li> */
}
{
    /*                 <li> */
}
{
    /*                     <p> */
}
{
    /*                         Implemented a random build generator for users looking for unique, */
}
{
    /*                         randomized character builds for replayability. */
}
{
    /*                     </p> */
}
{
    /*                 </li> */
}
{
    /*                 <li> */
}
{
    /*                     <p> */
}
{
    /*                         Designed with a clean, intuitive interface, making it easy for users to */
}
{
    /*                         generate builds quickly and efficiently. */
}
{
    /*                     </p> */
}
{
    /*                 </li> */
}
{
    /*             </ul> */
}
{
    /*         </li> */
}
{
    /*         <li> */
}
{
    /*             <h2 className="font-semibold text-lg">Tech Stack</h2> */
}
{
    /*             <p> */
}
{
    /*                 <ul> */
}
{
    /*                     <li> */
}
{
    /*                         <h3>Frontend</h3> */
}
{
    /*                         <ul> */
}
{
    /*                             <li> */
}
{
    /*                                 <p>Next.js</p> */
}
{
    /*                             </li> */
}
{
    /*                             <li> */
}
{
    /*                                 <p>Tailwind CSS</p> */
}
{
    /*                             </li> */
}
{
    /*                         </ul> */
}
{
    /*                     </li> */
}
{
    /*                 </ul> */
}
{
    /*                 Frontend: React, Tailwind CSS Backend: Node.js, Express AI Integration: OpenAI */
}
{
    /*                 API Database: MongoDB */
}
{
    /*             </p> */
}
{
    /*         </li> */
}
{
    /*     </ul> */
}
{
    /* </div> */
}

const QueueSocialDescriptionSkeleton = () => (
    <div>
        <ul className="flex flex-col gap-4">
            <li>
                <h2 className="font-semibold text-lg">Project Overview</h2>
                <p>
                    A social media post scheduler that interacts with the Facebook, Instagram, and
                    Twitter APIs. Designed to allow users to schedule posts across multiple
                    platforms from a single interface, automating the publishing process.
                </p>
            </li>
            <li>
                <h2 className="font-semibold text-lg">Tech Stack</h2>
                <p>
                    Frontend: Next.js, Tailwind CSS Backend: Node.js, Express Scheduling Engine:
                    Agenda.js with MongoDB APIs: Facebook Graph API, Instagram Basic Display API,
                    Twitter API
                </p>
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
        title: "The Digital Revolution",
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
    {
        title: "The Art of Design",
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
