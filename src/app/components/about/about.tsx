import React from "react";
import EducationCard from "./education-card";
import SkillsCard from "./skills-card";

export default function About() {
    return (
        <section>
            <div className="w-full h-full flex flex-col items-center lg:items-start gap-4">
                <h2>About Me</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    <EducationCard />
                    <SkillsCard />
                </div>
            </div>
        </section>
    );
}
