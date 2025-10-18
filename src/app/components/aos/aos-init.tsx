"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            startEvent: "load",
            easing: "ease-out-cubic",
            once: true,
            duration: 500,
            offset: 10,
        });
    }, []);
    return null;
}
