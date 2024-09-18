import Link from "next/link";
import React from "react";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <div className="h-16 w-full flex justify-between items-center px-4">
                <div className="text-lg xl:text-3xl font-bold">
                    <span>🐈‍⬛</span>
                    <span className="">Felix</span>
                    <span className="text-green-500">FullStack</span>
                </div>
                <ul className="hidden sm:flex justify-center items-center gap-2 md:gap-8 xl:gap-12 text-xs md:text-base xl:text-lg">
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#about" className="">
                            About
                        </Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#services">Services</Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#my-work">Projects</Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#pricing">Pricing</Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
                <MobileMenu />
            </div>
            <div className="h-[1px] w-full bg-gray"></div>
        </div>
    );
}
