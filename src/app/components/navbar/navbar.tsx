import Link from "next/link";
import React from "react";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import NavButton from "./nav-button";

export default function Navbar() {
    return (
        <nav className="fixed flex mb-20 z-50 h-20 flex-col justify-center items-center w-screen">
            <div className="h-20 w-full flex justify-between items-center px-4">
                <div className="text-lg xl:text-3xl font-bold flex justify-center items-center">
                    {/* <span>🐈‍⬛</span> */}
                    <Image
                        src="/cat-cloud-logo.png"
                        alt="black cat logo"
                        width={150}
                        height={150}
                        className="absolute top-0 left-0 z-[-1] w-24 h-24 lg:w-36 lg:h-36"
                    />
                </div>
                <ul className="hidden md:flex border-[1px] border-gray-400 bg-black px-4 py-2 rounded-3xl text-[#fafbf6] gap-2 md:gap-8 xl:gap-12 text-xs xl:text-base">
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="/" className="flex">
                            <NavButton text="Home" />
                        </Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#about" className="flex">
                            <NavButton text="About" />
                        </Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline w-1/3">
                        <Link href="#services">
                            <NavButton text="Services" />
                        </Link>
                    </li>
                    {/* <li className="hover:cursor-pointer hover:underline"> */}
                    {/*     <Link href="#projects">Projects</Link> */}
                    {/* </li> */}
                    {/* <li className="hover:cursor-pointer hover:underline"> */}
                    {/*     <Link href="#pricing">Pricing</Link> */}
                    {/* </li> */}
                    <li className="hover:cursor-pointer hover:underline w-1/3">
                        <Link href="#contact">
                            <NavButton text="Contact" />
                        </Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline w-1/3">
                        <Link href="/blog">
                            <NavButton text="Blog" />
                        </Link>
                    </li>
                </ul>
                <div></div>
                <MobileMenu />
            </div>
            {/* <div className="h-[1px] w-full bg-gray"></div> */}
        </nav>
    );
}
