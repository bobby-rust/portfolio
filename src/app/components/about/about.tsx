import React from "react";
import EducationCard from "./education-card";
import SkillsCard from "./skills-card";
import Image from "next/image";

export default function About() {
    return (
        <section id="about">
            <div className="w-full h-full flex flex-col items-center lg:items-start gap-4">
                <h2>About Me</h2>
                <div className="flex flex-col gap-24">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <EducationCard />
                        <Image
                            src="/education.png"
                            alt="books laptop education"
                            width={500}
                            height={500}
                            className="md:w-1/2"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <Image
                            src="/computer.png"
                            alt="coding computer"
                            width={570}
                            height={438}
                            className="md:w-1/2"
                        />
                        <SkillsCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
