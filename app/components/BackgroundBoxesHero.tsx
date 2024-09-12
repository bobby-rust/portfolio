"use client";

import React, { useEffect, useState } from "react";
import { Boxes } from "../../components/ui/background-boxes";
import Card from "../components/Card";
import Navbar from "../components/navbar/Navbar";
import MobileCard from "./MobileCard";
import MobileNavbar from "./navbar/MobileNavbar";

export function BackgroundBoxesHero() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    useEffect(() => {
        if (typeof window === "undefined") return;
        window.addEventListener("resize", () => setWidth(window.innerWidth));

        return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <div className="h-[90vh] relative w-full overflow-hidden bg-slate-900">
            <div className="h-1/3">{width < 560 ? <MobileNavbar /> : <Navbar />}</div>
            <div className="flex flex-col items-center justify-center h-1/3">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <Boxes />
                {width < 1024 ? <MobileCard /> : <Card />}
            </div>
            <div className="h-1/3"></div>
        </div>
    );
}
