import React from "react";
import EducationCard from "./education-card";
import SkillsCard from "./skills-card";
import { GraduationCap, Laptop } from "lucide-react";

export default function About() {
    return (
        <section data-aos="fade-left" id="about">
            <div className="h-full flex flex-col gap-4 items-center justify-center py-12">
                <h2 className="w-full">About Me</h2>
                <div className="flex flex-col gap-24">
                    <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 lg:gap-32">
                        <EducationCard />
                        {/* <Image */}
                        {/*     src="/education.png" */}
                        {/*     alt="books laptop education" */}
                        {/*     width={500} */}
                        {/*     height={500} */}
                        {/*     className="md:w-1/2" */}
                        {/* /> */}
                        <GraduationCap size={300} className="md:w-1/2" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        {/* <Image */}
                        {/*     src="/computer.png" */}
                        {/*     alt="coding computer" */}
                        {/*     width={570} */}
                        {/*     height={438} */}
                        {/*     className="md:w-1/2" */}
                        {/* /> */}
                        <Laptop size={300} className="md:w-1/2" />
                        <SkillsCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
