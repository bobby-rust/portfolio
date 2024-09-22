import React from "react";
import Typewriter from "./Typewriter";
import Image from "next/image";
import Link from "next/link";
import { Download, Phone, Mail } from "lucide-react";

export default function Hero() {
    const words = [
        "Software Engineer",
        "Full Stack Developer",
        "Web Developer",
        "Problem Solver",
    ];

    return (
        <div className="w-full flex flex-col gap-4 p-5 lg:px-20 py-10 justify-center items-center">
            <div className="h-full w-full flex flex-col gap-24 justify-center p-5 md:px-32 md:py-20 2xl:w-[70vw]">
                <h1 className="relative font-bold text-xl text-center md:text-left md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tighter">
                    {/* 👋 Hey, I&#39;m Rob Rust */}
                    <span>Modernize Your Business.</span>
                    <Image
                        src="/marker-underline.png"
                        alt="marker underline"
                        width={350}
                        height={20}
                        className="absolute bottom-[-80%] right-[70%] select-none w-[380px] h-20"
                    />
                </h1>
                <div className="flex gap-24">
                    <div className="flex flex-col gap-4 items-center justify-center md:justify-start md:items-start md:max-w-[70%]">
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full md:justify-start md:items-start">
                            <div className="flex flex-col gap-4 w-full">
                                <h2 className="font-bold text-lg text-center md:text-left md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tighter ">
                                    👋 Hey, I&#39;m Rob Rust
                                </h2>
                                <div className="md:text-2xl text-center md:text-left tracking-tigher">
                                    I&#39;m a<Typewriter words={words} /> <br />
                                    <span className="text-center">
                                        Based in Potsdam, NY📍
                                    </span>
                                </div>
                                <p className="text-sm w-0 h-0 hidden md:block md:w-full md:h-auto max-w-[80%] text-secondary-foreground">
                                    I specialize in building high-performance
                                    web applications that prioritize both user
                                    experience and clean code. Let&#39;s create
                                    something exceptional.
                                </p>
                            </div>
                            <div className="rounded-full shadow-even shadow-black w-48 h-48 md:w-0 md:h-0 md:hidden overflow-hidden">
                                <Image
                                    src="/headshot2.webp"
                                    alt="headshot"
                                    width={378}
                                    height={429}
                                    priority={true}
                                    className="translate-y-[-10%]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col self-start w-full">
                            <div className="flex flex-col  items-center gap-4">
                                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                                    <div className="flex gap-2 md:flex-row w-52">
                                        <button className="inline-flex w-full text-sm h-12 animate-shimmer items-center hover:shadow-lg justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,var(--foreground),55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                            Book
                                        </button>
                                        <button className="bg-white w-full h-12 text-sm px-6 rounded-lg border-slate-200 border-2 hover:bg-slate-100 hover:shadow-lg">
                                            Learn more
                                        </button>
                                    </div>
                                    <div className="h-[1px] w-full md:w-[1px] md:h-10 bg-gray"></div>
                                    <div className="flex text-sm justify-center items-center relative  md:ml-0">
                                        <div className="animate-ping w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                                        <span className="text-xs text-center md:text-left sm:ml-5 ml-5  md:ml-5 line-clamp-1">
                                            Currently accepting clients
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-center md:justify-start text-sm w-full p-2 pl-5">
                                    <ul className="flex gap-4 items-center">
                                        <li>
                                            <Link
                                                href="https://github.com/bobby-rust"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="flex flex-col justify-center items-center"
                                            >
                                                <Image
                                                    src="/GitHub_Invertocat_Dark.svg"
                                                    alt="GitHub"
                                                    width={30}
                                                    height={30}
                                                />
                                                {/* <p className="">GitHub</p> */}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="sms:+3158546698?body=Hello, I%27m%20interested%20in%20your%20services!"
                                                className="flex flex-col justify-center items-center"
                                            >
                                                <Phone size={30} />
                                                {/* <p> Text Me</p> */}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="mailto:bobby.rust121@gmail.com"
                                                className="flex flex-col justify-center items-center"
                                            >
                                                <Mail size={30} />
                                                {/* <p>Email</p> */}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="flex flex-col justify-center items-center"
                                                href="Resume__LaTeX_.pdf"
                                                target="_blank"
                                                rel="noreferrer"
                                                download
                                            >
                                                {" "}
                                                <Download size={30} />
                                            </Link>
                                            {/* <p>Resume</p> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 h-full relative">
                        <Image
                            src="/BlackCatWebDev.png"
                            alt="black cat logo"
                            width={400}
                            height={400}
                            className="absolute bottom-[-20%] right-[50%]"
                        />
                        <div className="rounded-full shadow-even shadow-black hidden w-0 h-0 md:w-60 md:h-60 lg:w-[400px] lg:h-[400px] md:block overflow-hidden z-50">
                            <Image
                                src="/headshot2.webp"
                                alt="headshot"
                                width={578}
                                height={629}
                                priority={true}
                                className="z-50 translate-y-[-10%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
