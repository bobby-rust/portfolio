import React from "react";
import Headshot from "./headshot";
import Typewriter from "./typewriter";
import Link from "next/link";

export default function Hero() {
    const words = [
        "Software Engineer",
        "Full Stack Developer",
        "Web Developer",
        "Problem Solver",
        "Freelance Developer",
        "Tech Support Guru"
    ];
    return (
        <section className="my-5 lg:my-20 w-full">
            <div className="flex items-center gap-12">
                <div className="flex flex-col h-full items-center lg:items-start justify-center gap-4">
                    <p className="text-2xl font-semibold">
                        Welcome to my site!
                    </p>
                    <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl tracking-tighter">
                        👋 <span className="font-bold">Hey, I&apos;m Rob</span>
                    </h1>
                    <div className="relative lg:hidden">
                        <Headshot />
                    </div>
                    <div className="sm:text-4xl pt-4">
                        I&apos;m a<Typewriter words={words} />
                    </div>
                    <p className="text-lg lg:text-xl text-center lg:text-start max-w-xl">
                        I help local businesses thrive online with{" "}
                        <b>custom websites</b> & <b>reliable tech support</b> in
                        Potsdam, New York.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#contact"
                            className="p-4 w-48 sm:w-fit m-auto rounded-lg text-background bg-foreground border-foreground border-[1px] shadow-accent-3d hover:shadow-accent-4d hover:scale-105 hover:bg-[var(--accent)]/60 text-xs xl:text-base text-center"
                        >
                            Let&apos;s Work Together
                        </Link>
                        <div className="relative">
                            <Link
                                href="#projects"
                                className="flex items-center justify-center border-zinc-700 bg-zinc-900 text-slate-300 p-4 w-48 sm:w-fit  rounded-lg border-2 text-xs xl:text-base text-center hover:bg-foreground hover:text-background"
                            >
                                View My Work
                            </Link>
                        </div>
                    </div>
                    <div className="flex text-sm justify-center items-center relative  md:ml-0">
                        <div className="animate-ping w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                        <span className="text-xs text-center md:text-left sm:ml-5 ml-5  md:ml-5 line-clamp-2">
                            Currently accepting clients
                        </span>
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <Headshot />
                </div>
            </div>
        </section>
    );
}
