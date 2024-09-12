"use client";

import React, { useEffect, useState } from "react";
import { Highlight } from "../../../components/ui/hero-highlight";

type Props = {};

export default function FeaturesHeader({}: Props) {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener("resize", () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        });

        return () => {
            window.removeEventListener("resize", () => {});
        };
    }, []);

    return (
        <h2 className="font-semibold text-4xl leading-tight tracking-tight">
            Bring your vision to life with {windowSize.width < 972 ? <br /> : ""}
            <Highlight>custom web solutions.</Highlight>
        </h2>
    );
}
