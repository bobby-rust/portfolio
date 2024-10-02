import React from "react";
import Hero from "@/app/components/hero/hero";
import About from "@/app/components/about/about";
import Contact from "@/app/components/contact/contact";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Hero />
            <About />
            <Contact />
        </div>
    );
}
