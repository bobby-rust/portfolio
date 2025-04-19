import React from "react";
import EducationCard from "./education-card";
import SkillsCard from "./skills-card";
import Image from "next/image";

export default function About() {
    return (
        <section data-aos="fade-left" id="about">
            <div className="h-full flex flex-col gap-12 items-center justify-center py-12 lg:px-12">
                <h2 className="w-full">
                    About Me{" "}
                    <Image
                        src="/orange-star.svg"
                        width={100}
                        height={100}
                        alt="an orange star"
                        className="inline absolute top-0 left-20"
                    />
                </h2>
                <div className="flex flex-col gap-24">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <EducationCard />
                        <Image
                            src="/educator.svg"
                            alt="books laptop education"
                            width={500}
                            height={500}
                            className="md:w-1/3"
                        />
                    </div>
                    <div className="flex flex-col gap-10 md:flex-row items-center justify-between">
                        <Image
                            src="/website.svg"
                            alt="coding computer"
                            width={400}
                            height={200}
                            className="md:w-1/3"
                        />
                        <SkillsCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
