import React from "react";
import Image from "next/image";
import { IconDownload } from "@tabler/icons-react";
import CardDescription from "./CardDescription";

export default function Card() {
    return (
        <div className="flex flex-col justify-center items-center md:w-1/2 gap-24 text-[#EEEEEE] z-20">
            <div className="flex flex-col gap-8 justify-center items-center">
                <div>
                    <div className="flex rounded-full border-2 m-auto overflow-hidden w-48 h-48">
                        <Image
                            src="/headshot2.webp"
                            alt="headshot"
                            width={378}
                            height={429}
                            priority={true}
                            className="object-cover"
                        />
                    </div>
                    <h1 className="font-bold xs:text-2xl sm:text-3xl md:text-4xl">
                        👋 Hey, I&#39;m Rob Rust
                    </h1>
                </div>
                <CardDescription />
                <ul className="flex gap-8">
                    <li className="text-center flex flex-col justify-center items-center">
                        <Image
                            src="/GitHub_Invertocat_Light.svg"
                            alt="github"
                            width={50}
                            height={50}
                        />
                        <p className="pt-1">GitHub</p>
                    </li>
                    <li className="text-center flex flex-col justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <p className="pt-1">Email</p>
                    </li>
                    <li className="text-center flex flex-col justify-center items-center">
                        <IconDownload size={50} />
                        <p className="pt-1">Resume</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
