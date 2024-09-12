"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Card from "../components/Card";
import Navbar from "../components/navbar/Navbar";

export function BackgroundBoxesHero() {
    return (
        <div className="h-[80vh] relative w-full overflow-hidden bg-slate-900">
            <div className="h-1/3">
                <Navbar />
            </div>
            <div className="flex flex-col items-center justify-center h-1/3">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <Boxes />
                <Card />
            </div>
            <div className="h-1/3"></div>
        </div>
    );
}
