import React from "react";
import Image from "next/image";
import { FlipWords } from "../../components/ui/flip-words";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

export default function Card() {
    const words = ["Software Engineer", "Full Stack Developer", "Web Developer", "Problem Solver"];
    return (
        <div className="flex flex-col justify-center items-center w-1/2 gap-24 text-[#EEEEEE] z-20">
            <div className="flex gap-12">
                <div className="rounded-full border-2 overflow-hidden w-80 h-80">
                    <Image
                        src="/headshot2.webp"
                        alt="headshot"
                        width={378}
                        height={429}
                        priority={true}
                        className="overflow-hidden translate-y-[-10%]"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col gap-8">
                        <h1 className="font-bold text-5xl">👋 Hey, I&#39;m Rob Rust</h1>
                        <div className="text-4xl w-[500px]">
                            I&#39;m a<FlipWords words={words} />
                        </div>
                        <p className="text-3xl">👨🏼‍💻 Based in Potsdam, NY📍</p>
                        <ul className="flex gap-12">
                            <li className="text-center flex flex-col justify-center items-center cursor-pointer">
                                <Link
                                    href="https://github.com/bobby-rust"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src="/GitHub_Invertocat_Light.svg"
                                        alt="github"
                                        width={50}
                                        height={50}
                                    />
                                    <p className="pt-1">GitHub</p>{" "}
                                </Link>
                            </li>
                            <li className="text-center flex flex-col justify-center items-center">
                                <Link href="mailto:bobby.rust121@gmail.com">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-mail"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    <p className="pt-1">Email</p>
                                </Link>
                            </li>
                            <li className="text-center flex flex-col justify-center items-center">
                                <Link
                                    href="Resume__LaTeX_.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    download
                                >
                                    <IconDownload size={50} />
                                    <p className="pt-1">Resume</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
