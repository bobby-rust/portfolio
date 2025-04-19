import Link from "next/link";
import React from "react";
import MobileMenu from "./mobile-menu";
import NavButton from "./nav-button";

export default function Navbar() {
    return (
        <nav className="fixed flex mb-20 z-50 h-20 flex-col justify-center items-center w-screen">
            <div className="h-20 w-full flex justify-center items-center px-4 bg-background/60 backdrop-blur-sm">
                <ul className="hidden md:flex px-4 py-2 gap-2 md:gap-8 xl:gap-12 text-xs xl:text-base">
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#about" className="flex">
                            <NavButton text="About" />
                        </Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#projects" className="flex">
                            <NavButton text="Projects" />
                        </Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline w-1/3">
                        <Link href="#services">
                            <NavButton text="Services" />
                        </Link>
                    </li>

                    <li className="hover:cursor-pointer hover:underline">
                        <Link href="#pricing">Pricing</Link>
                    </li>
                    <li className="hover:cursor-pointer hover:underline w-1/3">
                        <Link href="#contact">
                            <NavButton text="Contact" />
                        </Link>
                    </li>
                </ul>
                <MobileMenu />
            </div>
            {/* <div className="h-[1px] w-full bg-gray"></div> */}
        </nav>
    );
}
