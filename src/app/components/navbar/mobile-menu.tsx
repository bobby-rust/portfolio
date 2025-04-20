"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    return (
        <div className="md:hidden md:w-0 flex justify-center">
            <button onClick={() => setOpen(true)}>
                <Menu size={30} />
            </button>
            {open && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-background">
                    <button onClick={() => setOpen(false)}>
                        <X className="absolute top-3 right-3" size={30} />
                    </button>
                    <ul className="flex flex-col justify-center gap-4 border-t-2 border-b-2 border-gray p-5 mt-6">
                        <Link href="#about">About</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#pricing">Pricing</Link>
                        <Link href="#contact">Contact</Link>
                    </ul>
                </div>
            )}
        </div>
    );
}
