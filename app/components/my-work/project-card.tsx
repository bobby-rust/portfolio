import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface ProjectCardProps {
    name: string;
    vidSrc: string;
    desc: string;
    items: {
        title: string;
        imgSrc: string;
        imgAlt: string;
    }[];
}

// const items = [
//     {
//         title: "NextJS",
//         imgSrc: "/next-js-logo.png",
//         imgAlt: "NextJS logo",
//     },
//
//     {
//         title: "NextJS",
//         imgSrc: "/next-js-logo.png",
//         imgAlt: "NextJS logo",
//     },
//     {
//         title: "NextJS",
//         imgSrc: "/next-js-logo.png",
//         imgAlt: "NextJS logo",
//     },
//     {
//         title: "NextJS",
//         imgSrc: "/next-js-logo.png",
//         imgAlt: "NextJS logo",
//     },
// ];

export default function ProjectCard({
    name,
    vidSrc,
    desc,
    items,
}: ProjectCardProps) {
    return (
        <div className="flex w-full bg-white p-5 border-2 border-gray rounded-lg shadow-xl sm:max-w-md md:max-w-full">
            <div className="flex flex-col gap-4 w-1/2">
                <div className="">
                    <h3 className="font-semibold md:text-xl">{name}</h3>
                    <p className="text-secondary-foreground tracking-wide leading-relaxed">
                        {desc}
                    </p>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <h3 className="font-semibold md:text-xl self-start">
                        Technologies
                    </h3>
                    <div className="w-2/3 flex justify-center items-center">
                        <InfiniteMovingCards items={items} speed="slow" />
                    </div>
                </div>
            </div>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "auto" }}
                src={vidSrc}
            ></video>
        </div>
    );
}
