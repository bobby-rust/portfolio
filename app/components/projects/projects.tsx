import React from "react";
import { ProjectGrid } from "./project-grid";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Projects() {
    return (
        <div
            id="my-work"
            className="flex flex-col justify-center items-center px-10 md:px-20 gap-4"
        >
            <div className="w-full">
                <h1 className="text-4xl font-semibold tracking-tight leading-tight">
                    Explore My Work
                </h1>
                <p className="text-lg leading-relaxed tracking-wide text-neutral-600">
                    From innovative full-stack solutions to cutting-edge web
                    development, my projects demonstrate a deep commitment to
                    crafting high-quality digital experiences.
                </p>
            </div>
            <ProjectGrid />
            <h2>
                Want to see more? Check out all of my code on my{" "}
                <LinkPreview
                    url="https://github.com/bobby-rust"
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                    GitHub profile
                </LinkPreview>
                .
            </h2>
        </div>
    );
}
