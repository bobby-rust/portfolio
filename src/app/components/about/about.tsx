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
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="relative">
                            <div className="absolute -inset-2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-800 to-green-500 opacity-20 blur-sm"></div>
                            <EducationCard />
                        </div>
                        <Image
                            src="/educator.svg"
                            alt="books laptop education"
                            width={500}
                            height={500}
                            className="md:w-1/3"
                        />
                        {/* <GraduationCap size={300} className="md:w-1/2" /> */}
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row items-center justify-between">
                        <Image
                            src="/website.svg"
                            alt="coding computer"
                            width={400}
                            height={200}
                            className="md:w-1/3"
                        />
                        {/* <Laptop size={300} className="md:w-1/2" /> */}
                        <div className="relative">
                            <div className="absolute -inset-2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-500 via-teal-800 to-blue-500 opacity-20 blur-sm"></div>
                            <SkillsCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
