import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="h-16 w-full flex justify-between items-center p-4">
                <div className="w-1/4 text-4xl font-bold p-12">
                    <span>🐈‍⬛Felix</span>
                    <span className="text-green-500">FullStack</span>
                </div>
                <ul className="flex justify-center items-center gap-12 w-1/2 p-4">
                    <li className="p-3 hover:cursor-pointer hover:underline">
                        <Link href="#about" className="w-full">
                            About Me
                        </Link>
                    </li>
                    <li className="p-3 hover:cursor-pointer hover:underline">
                        <Link href="#services">Services</Link>
                    </li>
                    <li className="p-3 hover:cursor-pointer hover:underline">
                        <Link href="#my-work">My Work</Link>
                    </li>
                    <li className="p-3 hover:cursor-pointer hover:underline">
                        <Link href="#pricing">Pricing</Link>
                    </li>
                    <li className="p-3 hover:cursor-pointer hover:underline">
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
                <div className="w-1/4"></div>
            </div>
            <div className="h-[1px] w-full bg-slate-300"></div>
        </div>
    );
}
