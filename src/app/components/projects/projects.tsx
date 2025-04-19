import React from "react";
import ProjectCard from "./project-card";

export interface Project {
    title: string;
    url: string;
    description: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "QueueSocial",
            url: "https://queuesocial.robrust.dev",
            description: "A simple social media post scheduler for Facebook",
        },
        {
            title: "MX Bikes Mod Manager",
            url: "https://github.com/bobby-rust/MXBModManager/releases",
            description: "A mod manager for MX Bikes",
        },
        {
            title: "University Course Scheduler",
            url: "https://github.com/bobby-rust/CS-300_Portfolio_Submission.git",
            description:
                "A directed acyclic graph-based university course schedule generator",
        },
        {
            title: "8 O'Clock Ranch",
            url: "https://8oclockranch.com",
            description:
                "A Shopify store developed to replace a local business' WooCommerce store, increasing sales by 33%",
        },
        {
            title: "WeighWise",
            url: "https://github.com/bobby-rust/WeighWise.git",
            description:
                "A Shopify app allowing stores to sell by weight, developed for and used by 8 O'Clock Ranch",
        },
        {
            title: "EldenForge",
            url: "https://eldenforge.vercel.app",
            description:
                "The Elden Ring community's go-to random build generator, maintaining a steady 60+ users per day since its release 2 years ago",
        },
    ];
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div className="w-full flex flex-col gap-5">
                {projects.map((project: Project, i: number) => {
                    return (
                        <div key={i}>
                            <ProjectCard
                                title={project.title}
                                url={project.url}
                                description={project.description}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
