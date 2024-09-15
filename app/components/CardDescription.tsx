// import { FlipWords } from "@/components/ui/flip-words";
import React from "react";
import Typewriter from "@/app/components/Typewriter";

export default function CardDescription() {
    const words = ["Software Engineer", "Full Stack Developer", "Web Developer", "Problem Solver"];

    return (
        <div className="flex justify-evenly">
            <div className="w-1/8"></div>
            <div className="xs:w-3/4 md:w-full">
                <div className="xs:ml-8 sm:ml-0 md:ml-12 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl min-w-[390px]">
                    I&#39;m a<Typewriter words={words} />
                </div>
                <p className="xs:text-lg sm:text-xl md:text-2xl lg:text-3xl line-clamp-1 xs:text-center sm:text-left md:text-center">
                    👨🏼‍💻 Based in Potsdam, NY📍
                </p>
            </div>
            <div className="w-1/8"></div>
        </div>
    );
}
