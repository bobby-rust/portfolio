"use client";
import React from "react";
import { BackgroundBeams } from "../../../components/ui/background-beams";
import Card from "../Card";

export function BackgroundBeamsHero() {
    return (
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <Card />
            </div>
            <BackgroundBeams />
        </div>
    );
}
