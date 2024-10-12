import React from "react";
import Headshot from "./headshot";
import Typewriter from "./typewriter";
import Link from "next/link";

export default function Hero() {
    const words = [
        "Software Engineer",
        "Lifetime Student",
        "Full Stack Developer",
        "Web Developer",
        "Problem Solver",
        "Freelance Developer",
    ];
    return (
        <section data-aos="fade-up" className="mb-20">
            <div className="flex items-center gap-12">
                <div className="flex flex-col h-full items-center lg:items-start justify-center gap-4">
                    {" "}
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl tracking-tighter">
                        👋 Hey, I&apos;m Rob Rust
                    </h1>
                    <div className="lg:hidden">
                        <Headshot />
                    </div>
                    <div className="sm:text-2xl">
                        I&apos;m a<Typewriter words={words} />
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base text-center lg:text-start">
                        I help local businesses thrive online with{" "}
                        <b>custom websites</b> & <b>reliable tech support</b> in
                        Potsdam, New York.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#contact"
                            className="p-4 w-48 sm:w-fit m-auto rounded-lg text-background bg-primary border-foreground border-[1px] hover:shadow-lg hover:bg-[rgba(0,76,76,0.9)] text-xs xl:text-base text-center"
                        >
                            Let&apos;s Work Together
                        </Link>
                        <Link
                            href="#projects"
                            className="p-4 w-48 sm:w-fit rounded-lg border-2 border-gray hover:shadow-lg text-xs xl:text-base text-center"
                        >
                            View My Work
                        </Link>
                    </div>
                    <div className="flex text-sm justify-center items-center relative  md:ml-0">
                        <div className="animate-ping w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                        <span className="text-xs text-center md:text-left sm:ml-5 ml-5  md:ml-5 line-clamp-2">
                            Currently accepting clients
                        </span>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Headshot />
                </div>
            </div>
        </section>
    );
}
