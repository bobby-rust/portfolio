"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            duration: 1000,
            offset: 50,
        });
    }, []);
    return null;
}
