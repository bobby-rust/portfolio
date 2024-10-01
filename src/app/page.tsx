import React from "react";
import Hero from "@/app/components/hero/hero";
import About from "@/app/components/about/about";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <div className="flex justify-center items-center bg-blurry3 bg-contain bg-top bg-no-repeat w-full"> */}
            <Hero />
            {/* </div> */}
            <About />
        </div>
    );
}
