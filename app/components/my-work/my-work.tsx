import React from "react";
import ProjectCard from "./project-card";

const queueSocialItems = [
    {
        title: "MongoDB",
        imgSrc: "/mongo-db-logo.png",
        imgAlt: "MongoDB Logo",
    },
    {
        title: "TailwindCSS",
        imgSrc: "/tailwind-css-logo.png",
        imgAlt: "TailwindCSS Logo",
    },
    {
        title: "NextJS",
        imgSrc: "/next-js-logo.png",
        imgAlt: "NextJS Logo",
    },
    {
        title: "Stripe",
        imgSrc: "/stripe-logo.png",
        imgAlt: "Stripe logo",
    },
    {
        title: "NextAuth",
        imgSrc: "/next-auth-logo.png",
        imgAlt: "NextAuth Logo",
    },
];

const algoDuelsItems = [
    {
        title: "Golang",
        imgSrc: "/golang-gopher.png",
        imgAlt: "Golang Gopher Logo",
    },
    {
        title: "Material UI",
        imgSrc: "/material-ui-logo.png",
        imgAlt: "Material UI Logo",
    },
    {
        title: "PostgreSQL",
        imgSrc: "/postgres-logo.png",
        imgAlt: "PostgreSQL Logo",
    },
    {
        title: "Gorilla Mux",
        imgSrc: "/gorilla-mux-logo.png",
        imgAlt: "Gorilla Mux Logo",
    },
];

const eldenForgeItems = [
    {
        title: "ReactJS",
        imgSrc: "/react-logo.png",
        imgAlt: "ReactJS Logo",
    },
    {
        title: "Google Gemini AI",
        imgSrc: "/google-gemini-logo.png",
        imgAlt: "Gemini logo",
    },
    {
        title: "TailwindCSS",
        imgSrc: "/tailwind-css-logo.png",
        imgAlt: "TailwindCSS Logo",
    },
    {
        title: "NodeJS",
        imgSrc: "/node-js-logo.png",
        imgAlt: "NodeJS Logo",
    },
];

const descriptions = {
    queueSocial:
        "QueueSocial is a social media post scheduler designed to streamline content planning. With an intuitive interface and customizable posting schedules, it helps users automate their social media presence across multiple platforms, ensuring consistent engagement with minimal effort.",
    algoDuels:
        "AlgoDuels is a competitive real-time algorithm duel app where coders face off in head-to-head algorithm battles. Players can test their skills, compete in live coding challenges, and climb the leaderboards to prove their algorithmic prowess in an exciting, dynamic environment.",
    eldenForge:
        "EldenForge is an Elden Ring random build generator, perfect for players seeking a fresh challenge. Create unique builds for your next playthrough, incorporating random weapons, stats, and spells, and experience the game in entirely new ways.",
    rapidABA:
        "RapidABA is an AI-powered session notes generator tailored for ABA therapists. By streamlining the note-taking process, it helps professionals quickly create detailed, accurate session reports, allowing them to focus more on client care and less on paperwork.",
};
export default function MyWork() {
    return (
        <section className="section">
            <h2 className="md:self-start h2">My Work</h2>
            <div className=" max-w-full">
                <ul className="flex flex-col gap-24">
                    <li>
                        <ProjectCard
                            vidSrc="/videos/queue-social.webm"
                            name="QueueSocial"
                            desc={descriptions.queueSocial}
                            items={queueSocialItems}
                            role="Software Engineer / Founder"
                        />
                    </li>
                    <li>
                        <ProjectCard
                            vidSrc="/videos/algoduels.webm"
                            name="AlgoDuels"
                            desc={descriptions.algoDuels}
                            items={algoDuelsItems}
                            role="Full Stack Developer"
                        />
                    </li>
                    <li>
                        <ProjectCard
                            vidSrc="/videos/eldenforge.webm"
                            name="EldenForge"
                            desc={descriptions.eldenForge}
                            items={eldenForgeItems}
                            role="Creator"
                        />
                    </li>
                    {/* <li> */}
                    {/*     <ProjectCard */}
                    {/*         vidSrc="/videos/rapidaba.webm" */}
                    {/*         name="RapidABA" */}
                    {/*         desc={descriptions.rapidABA} */}
                    {/*     /> */}
                    {/* </li> */}
                </ul>
            </div>
        </section>
    );
}
