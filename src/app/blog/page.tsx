import React from "react";
import { Courier_Prime } from "next/font/google";
import Link from "next/link";

const courierPrime = Courier_Prime({ subsets: ["latin"], weight: "400" });

export default function Blog() {
    return (
        <div
            className={`min-h-screen flex flex-col items-center py-20 ${courierPrime.className}`}
        >
            <div className="p-10">
                <h1 className="text-3xl font-bold text-center">Blog</h1>
                <p>Semi-coherent ramblings about software I&apos;ve written</p>
            </div>
            <div className="w-2/3">
                <ul className="flex flex-col gap-8">
                    <li>
                        <Link href="/blog/post/rush-terminal-emulator">
                            <h2 className="inline text-2xl font-semibold underline">
                                Rush Terminal Emulator
                            </h2>
                        </Link>
                        <span>
                            : A terminal emulator written in Rust and OpenGL
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
