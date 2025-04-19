import React from "react";
import Hero from "@/app/components/hero/hero";
import About from "@/app/components/about/about";
import Contact from "@/app/components/contact/contact";
import Services from "@/app/components/services/services";
import Pricing from "@/app/components/pricing/pricing";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";

export default function Home() {
    return (
        <div className="flex flex-col gap-8 justify-center items-center">
            <div className="h-full w-full flex flex-col items-center">
                <Navbar />
                <Hero />
            </div>
            <div className="flex justify-center items-center w-full h-full bg-cover">
                <About />
            </div>
            <div className="flex justify-center items-center">
                <Projects />
            </div>
            <div className="bg-accent text-background flex justify-center items-center">
                <Services />
            </div>
            <Contact />
            <Pricing />
        </div>
    );
}
