import React from "react";
import Hero from "@/app/components/hero/hero";
import About from "@/app/components/about/about";
import Contact from "@/app/components/contact/contact";
import Services from "@/app/components/services/services";
import Pricing from "@/app/components/pricing/pricing";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Hero />
            <div className="flex justify-center items-center w-full bg-gray-200">
                <About />
            </div>
            <Contact />
            <Services />
            <Pricing />
        </div>
    );
}
