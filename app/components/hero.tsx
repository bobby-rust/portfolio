import React from "react";
import Typewriter from "./typewriter";
import Image from "next/image";
import Link from "next/link";
import { Download, Phone, Mail } from "lucide-react";

export default function Hero() {
    const words = [
        "Software Engineer",
        "Full Stack Developer",
        "Web Developer",
        "Problem Solver",
        "Freelance Developer",
    ];

    return (
        <div
            data-aos="fade-up"
            className="z-10 w-full flex flex-col gap-4 justify-center items-center 4xl:max-w-[60vw] max-w-screen pt-20"
        >
            <div className="flex pt-10 2xl:px-32 md:py-20 3xl:w-[70vw] 4xl:max-w-full max-w-full">
                {/* <h1 className="relative font-bold text-xl text-center md:text-left md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-tighter"> */}
                {/* 👋 Hey, I&#39;m Rob Rust */}
                {/*     <span>Modernize Your Business.</span> */}
                {/*     <Image */}
                {/*         src="/marker-underline.png" */}
                {/*         alt="marker underline" */}
                {/*         width={350} */}
                {/*         height={20} */}
                {/*         className="absolute bottom-[-80%] right-[70%] select-none w-[380px] h-20" */}
                {/*     /> */}
                {/* </h1> */}
                <div className="flex gap-4 justify-center items-center w-full">
                    <div className="flex flex-col gap-4 items-center md:w-1/2 2xl:w-full justify-center md:justify-start md:items-start">
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full md:justify-start md:items-start">
                            <div className="flex flex-col gap-4 w-full">
                                <h2 className="font-bold text-2xl text-center md:text-left md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-tighter ">
                                    👋 Hey, I&#39;m Rob Rust.
                                </h2>
                                <div className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center md:text-left tracking-tighter">
                                    I&#39;m a<Typewriter words={words} /> <br />
                                    <span className="text-center">
                                        Based in Potsdam, NY.📍
                                    </span>
                                </div>
                                <p className="w-0 h-0 hidden md:block md:w-full md:h-auto lg:text-lg text-secondary-foreground">
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
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center md:justify-start">
                                    <div className="flex gap-2 sm:min-w-60 md:flex-row">
                                        <button className="inline-flex w-full text-xs lg:text-sm h-12 animate-shimmer items-center hover:shadow-lg justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,var(--foreground),55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                            Hire me
                                        </button>
                                        <button className="bg-white w-full h-12 text-xs lg:text-sm px-6 rounded-lg border-slate-200 border-2 hover:bg-slate-100 hover:shadow-lg">
                                            See my work
                                        </button>
                                    </div>
                                    <div className="h-[1px] w-52 md:w-[1px] md:h-10 bg-gray"></div>
                                    <div className="flex text-sm justify-center items-center relative  md:ml-0">
                                        <div className="animate-ping w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                                        <span className="text-xs text-center md:text-left sm:ml-5 ml-5  md:ml-5 line-clamp-2">
                                            Currently accepting clients
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-72 justify-center md:justify-start text-sm p-2">
                                    <ul className="flex gap-4">
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
                    <div className="h-full 2xl:w-full relative flex justify-center">
                        {/* <Image */}
                        {/*     src="/BlackCatWebDev.png" */}
                        {/*     alt="black cat logo" */}
                        {/*     width={400} */}
                        {/*     height={400} */}
                        {/*     className="h-72 w-60 absolute right-48 bottom-48" */}
                        {/* /> */}
                        <div className="rounded-full shadow-even shadow-black hidden w-0 h-0 md:w-60 md:h-60 lg:w-[300px] lg:h-[300px] 2xl:w-[350px] 2xl:h-[350px] 4xl:w-[400px] 4xl:h-[400px] md:block overflow-hidden z-50">
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
