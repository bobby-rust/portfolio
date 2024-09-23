"use client";

import React, { useEffect, useState } from "react";
import { Highlight } from "../../../components/ui/hero-highlight";

export default function FeaturesHeader() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (!window) return;

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
