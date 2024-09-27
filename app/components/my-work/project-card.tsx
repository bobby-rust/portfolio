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
    role: string;
}

export default function ProjectCard({
    name,
    vidSrc,
    desc,
    items,
    role,
}: ProjectCardProps) {
    return (
        <div className="flex flex-col md:flex-row w-full bg-white p-5 border-2 border-gray rounded-lg shadow-xl sm:max-w-md md:max-w-full">
            <div className="flex flex-col gap-4 md:w-1/2">
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
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold md:text-xl self-start">Preview</h3>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: "100%",
                        height: "auto",
                        justifySelf: "start",
                        alignSelf: "start",
                    }}
                    src={vidSrc}
                ></video>
                <div>
                    <h3 className="font-semibold md:text-xl self-start">
                        Role
                    </h3>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    );
}
