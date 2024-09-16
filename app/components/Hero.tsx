import React from "react";
import Typewriter from "./Typewriter";
import Image from "next/image";
import Link from "next/link";
import { Download, Phone, Mail } from "lucide-react";

export default function Hero() {
    const words = ["Software Engineer", "Full Stack Developer", "Web Developer", "Problem Solver"];
    return (
        <div className="h-[90vh] w-full flex flex-col items-center">
            <div className="h-full flex justify-center items-center">
                <div className="flex gap-24">
                    <div className="flex flex-col justify-center gap-8">
                        <div className="flex flex-col gap-8">
                            <h1 className="font-bold text-6xl tracking-tighter">
                                👋 Hey, I&#39;m Rob Rust
                            </h1>
                            <div className="text-4xl w-[500px] tracking-tigher">
                                I&#39;m a<Typewriter words={words} /> <br />
                                Based in Potsdam, NY📍
                            </div>
                            <p className="max-w-xl text-secondary-foreground">
                                I specialize in building high-performance web applications that
                                prioritize both user experience and clean code. Let's create
                                something exceptional.
                            </p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button className="inline-flex h-12 animate-shimmer items-center hover:shadow-lg justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,var(--foreground),55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Get Started
                            </button>
                            <button className="bg-white h-12 px-6 rounded-lg border-slate-200 border-2 hover:bg-slate-100 hover:shadow-lg">
                                Learn more
                            </button>
                            <div className="w-[1px] h-10 bg-foreground"></div>
                            <div className="flex justify-center items-center relative">
                                <div className="animate-ping w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 absolute left-0"></div>
                                <span className="ml-5">Currently accepting clients</span>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-6">
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
                                            width={40}
                                            height={40}
                                        />
                                        <p className="">GitHub</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="sms:+3158546698?body=Hello, I%27m%20interested%20in%20your%20services!"
                                        className="flex flex-col justify-center items-center"
                                    >
                                        <Phone size={40} />
                                        <p> Text Me</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="mailto:bobby.rust121@gmail.com"
                                        className="flex flex-col justify-center items-center"
                                    >
                                        <Mail size={40} />
                                        <p>Email</p>
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
                                        <Download size={40} />
                                    </Link>
                                    <p>Resume</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute left-[-5%] top-[-5%] w-10 h-10 rounded-full border-2 border-foreground bg-red-500"></div>
                        <div className="absolute bottom-[5%] right-[5%] border-2 bg-green-500 shadow-xl border-foreground w-10 h-10"></div>
                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polygon
                                points="50,10 90,90 10,90"
                                fill="#10B981" // Tailwind green-500
                                stroke="#333333"
                                strokeWidth="2"
                            />
                        </svg>
                        <div className="relative">
                            <div className="rounded-full shadow-even shadow-black border-0 w-80 h-80 z-10 overflow-hidden">
                                <Image
                                    src="/headshot2.webp"
                                    alt="headshot"
                                    width={378}
                                    height={429}
                                    priority={true}
                                    className="translate-y-[-10%]"
                                />
                                {/* <div className="animate-ping w-5 h-5 rounded-full bg-green-500 absolute top-5 right-5"></div> */}

                                {/* <div className="w-5 h-5 rounded-full bg-green-500 absolute top-5 right-5"></div> */}
                                {/* <span className="">Accepting clients...</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-11/12 bg-slate-300"></div>
        </div>
    );
}
