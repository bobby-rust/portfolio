import React from "react";
import ProjectCard from "./project-card";

export interface Project {
    title: string;
    url: string;
    description: string;
    images: string[];
    date: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "QueueSocial",
            url: "https://queuesocial.robrust.dev",
            description:
                "A simple social media post scheduler for Facebook built with React & Express",
            images: ["/queuesocial-home.png"],
            date: "March 2025 - April 2025",
        },
        {
            title: "Pitkit",
            url: "https://github.com/bobby-rust/MXBModManager/releases",
            description: "A mod manager for MX Bikes built with Electron",
            images: ["/mxb-mod-manager.png"],
            date: "March 2025 - April 2025",
        },
        {
            title: "University Course Scheduler",
            url: "https://github.com/bobby-rust/CS-300_Portfolio_Submission.git",
            description:
                "A CLI based tool that uses a directed acyclic graph to generate university course schedules built with C++",
            images: ["/dag-course-scheduler.png"],
            date: "March 2025",
        },
        {
            title: "8 O'Clock Ranch",
            url: "https://8oclockranch.com",
            description:
                "A Shopify store developed for 8 O'Clock Ranch, a local business",
            images: ["/8or-landing.png", "8or-product.png"],
            date: "October 2024 - January 2025",
        },
        {
            title: "WeighWise",
            url: "https://github.com/bobby-rust/WeighWise.git",
            description:
                "A Shopify app allowing stores to sell by weight, developed for and used by 8 O'Clock Ranch & built with Remix",
            images: ["/weighwise-demo.png"],
            date: "December 2024 - January 2025",
        },
        {
            title: "EldenForge",
            url: "https://eldenforge.vercel.app",
            description:
                "The Elden Ring community's go-to random build generator, maintaining a steady 60+ users per day since its release over 2 years ago, built with React",
            images: ["/eldenforge-build.png"],
            date: "December 2022, June 2023 - January 2024, May 2024 - July 2024 (Full rebuild)",
        },
    ];
    return (
        <section
            id="projects"
            className="py-10 my-0 flex flex-col gap-2 items-center justify-center"
        >
            <h2>Selected Work</h2>
            <div className="w-full flex flex-col gap-5">
                {projects.map((project: Project, i: number) => {
                    return (
                        <div key={i}>
                            <ProjectCard
                                title={project.title}
                                url={project.url}
                                description={project.description}
                                images={project.images}
                                date={project.date}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
