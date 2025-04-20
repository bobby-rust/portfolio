import React from "react";
import ProjectCard from "./project-card";

export interface Project {
    title: string;
    url?: string;
    githubUrl?: string;
    description: string;
    extendedDescription?: string;
    images: string[];
    date: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            title: "QueueSocial",
            url: "https://queuesocial.robrust.dev",
            githubUrl: "https://github.com/bobby-rust/queue-social-api.git",
            description:
                "A social media post scheduler for Facebook built with React & Express",
            extendedDescription: `This artifact is QueueSocial, a social media post scheduler. I first began creating this project about 8 months ago, had it almost complete, but ran into so much technical debt and made so many wrong decisions about technologies and architecture that I decided it was best to just completely rewrite it. This way, I could start fresh and keep it simple using what I learned from my previous attempt. I selected this item because I feel that it is a good project to demonstrate my skills in building real-world applications.\n\n

The project utilizes the Facebook API, which demonstrates that I can work with large production APIs. The front end shows that I’m capable of building clean user interfaces, and the back end shows that I understand how data flows through an application. It also demonstrates modern security best practices by utilizing JWTs for authentication.\n\n

In this milestone, I improved the artifact by implementing the Create Post page on the front end, which has a form for the user to submit text and upload an image for their post. I created an S3 bucket to store the image, where I can then use the URL to upload the image to Facebook. I also created an endpoint to create a post, and two separate functions to handle posts with and without images.\n\n

This is ready to be used, but the application still needs to obtain access tokens and save data to the MongoDB database for it to be working fully. That will be completed in another milestone, and the application will then be fully able to schedule Facebook posts for users.\n\n

I did meet the outcomes I aimed to achieve in this milestone, which include demonstrating security best practices, creating collaborative environments to support organizational decision making, and demonstrating an ability to use innovative technologies to deliver value by accomplishing industry-specific goals.\n\n

I faced many challenges when updating this artifact. It was my first time using any AWS services, so getting the S3 bucket and AWS SDK set up with my credentials took a while. Then, when I was finally able to upload images to the bucket via the SDK, the images were not accessible and were private, so I had to debug that and ended up needing to make them publicly accessible.\n\n

However, after working with AWS S3, I am much more confident in my abilities to utilize AWS services. Truthfully, I thought it would be more complicated than it was. AWS does a very good job in creating their documentation, which was extremely helpful. Other than learning new things, I got to hone my skills and gain more experience in areas I am already familiar with in full-stack development.`,
            images: ["/queuesocial-home.png"],
            date: "March 2025 - April 2025",
        },
        {
            title: "University Course Scheduler",
            githubUrl:
                "https://github.com/bobby-rust/CS-300_Portfolio_Submission.git",
            description:
                "A CLI based tool that uses a directed acyclic graph to generate university course schedules built with C++",

            extendedDescription: `This artifact was created for my data structures and algorithms course that I took about 2 years ago. It is a university course scheduler that uses a CSV file containing courses and their prerequisites and creates a schedule such that no course is taken before all its prerequisites have been met.\n\n

It initially used a binary search tree where the child nodes are dependent on its parent, but this came with the constraint that there can only be one course with no prerequisites, the root node of the tree. It also had many other issues. Consider the two children of the root node. These two children can each only have one prerequisite, and we can have no more than two courses with one prerequisite. In fact, the number of prerequisites each node can have is equivalent to its depth in the tree, and the number of courses that can have that number of prerequisites is constrained to.\n\n

Since we said that the root node has no prerequisites, we could create a binary tree for each course with no prerequisites. But then consider the case that CS300 has prerequisites CS200 and MAT201. The binary trees would then need to be connected, which would form a graph.\n\n

To address these concerns, I have chosen to implement a directed acyclic graph to create university course schedules for students. This way we can use topological sorting to find a valid schedule. I implemented Kahn’s algorithm, which is a topological sorting algorithm for digraphs.\n\n

This algorithm is useful because we know that if the algorithm has finished and there are still nodes in the graph, then there is a cycle in the graph, and we have an invalid input. This enhancement demonstrates a strong understanding of data structures and algorithms by applying theoretical concepts to solve real-world problems effectively and efficiently.\n\n

For this enhancement, I have fulfilled the course outcome “Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices (data structures and algorithms).”\n\n

When fulfilling this outcome, I got more comfortable using my theoretical knowledge of graphs by implementing them in code for the first time. At first, I wasn’t sure how to represent the graph. I had only implemented trees up to this point, and I knew a graph was similar to a tree, so their implementation could be similar.\n\n

I discovered that instead of hard coding a number of nodes that are connected to the node, I could use a vector of nodes to store the node’s dependencies. In this way, the dependencies of a node point to that node.`,
            images: ["/dag-course-scheduler.png"],
            date: "March 2025",
        },
        {
            title: "EldenForge",
            url: "https://eldenforge.vercel.app",
            githubUrl: "https://github.com/bobby-rust/EldenForge.git",
            description:
                "The Elden Ring community's go-to random build generator, maintaining a steady 60+ users per day since its release over 2 years ago, built with React",
            images: ["/eldenforge-build.png"],
            date: "December 2022, June 2023 - January 2024, May 2024 - July 2024 (Full rebuild)",
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
            title: "Pitkit",
            url: "https://github.com/bobby-rust/MXBModManager/releases",
            githubUrl: "https://github.com/bobby-rust/MXBModManager.git",
            description: "A mod manager for MX Bikes built with Electron",
            images: ["/mxb-mod-manager.png"],
            date: "March 2025 - April 2025",
        },
        {
            title: "WeighWise",
            githubUrl: "https://github.com/bobby-rust/WeighWise.git",
            description:
                "A Shopify app allowing stores to sell by weight, developed for 8 O'Clock Ranch & built with Remix",
            images: ["/weighwise-demo.png"],
            date: "December 2024 - January 2025",
        },
    ];
    return (
        <section
            id="projects"
            className="py-10 my-0 flex flex-col gap-2 items-center justify-center"
        >
            <h2 className="text-center w-full lg++:text-left">Selected Work</h2>
            <div className="w-full flex flex-col gap-20">
                {projects.map((project: Project, i: number) => {
                    return (
                        <div key={i}>
                            <ProjectCard
                                title={project.title}
                                url={project.url}
                                githubUrl={project.githubUrl}
                                description={project.description}
                                extendedDescription={
                                    project.extendedDescription
                                }
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
