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
        <section data-aos="fade-up" className="my-5 lg:my-20">
            <div className="flex items-center gap-12">
                <div className="flex flex-col h-full items-center lg:items-start justify-center gap-4">
                    <p className="text-xl font-semibold">Welcome to my site!</p>
                    <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl tracking-tighter">
                        👋 <span className="font-bold">Hey, I&apos;m </span>
                        <span className="font-bold bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-800 to-green-500 bg-clip-text text-transparent">
                            Rob Rust
                        </span>
                        <span className="absolute top-0 right-0 blur-md z-[-1] font-bold bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-800 to-green-500 bg-clip-text text-transparent">
                            Rob Rust
                        </span>
                    </h1>
                    <div className="relative lg:hidden">
                        <div className="absolute -inset-2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-800 to-green-500 opacity-75 blur-md overflow-hidden"></div>
                        <Headshot />
                    </div>
                    <div className="sm:text-2xl pt-4">
                        I&apos;m a<Typewriter words={words} />
                    </div>
                    <p className="text-sm lg:text-base text-center lg:text-start">
                        I help local businesses thrive online with{" "}
                        <b>custom websites</b> & <b>reliable tech support</b> in
                        Potsdam, New York.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#contact"
                            className="p-4 w-48 sm:w-fit m-auto rounded-lg text-background bg-primary border-foreground border-[1px] shadow-green-3d hover:bg-[rgba(0,76,76,0.9)] text-xs xl:text-base text-center"
                        >
                            Let&apos;s Work Together
                        </Link>
                        <div className="relative">
                            <div className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-600 via-cyan-600 to-blue-600 opacity-60 blur-md"></div>
                            <Link
                                href="#projects"
                                className="relative flex items-center justify-center border-zinc-700 bg-zinc-900 text-slate-300 p-4 w-48 sm:w-fit  rounded-lg border-2 text-xs xl:text-base text-center hover:bg-foreground hover:text-background"
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
                    <div className="absolute -inset-2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-800 to-green-500 opacity-75 blur overflow-hidden"></div>
                    <Headshot />
                </div>
            </div>
        </section>
    );
}
