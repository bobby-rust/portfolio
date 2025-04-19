import React from "react";
import Image from "next/image";

export default function Headshot() {
    return (
        <div className="relative h-60 w-60 2xl:w-96 2xl:h-96 overflow-hidden rounded-3xl border-2 border-accent shadow-xl">
            <Image
                src="/headshot-transparent.png"
                alt="professional headshot"
                priority={true}
                fill // This makes the image fill the container
                style={{
                    objectFit: "cover", // Ensures the image covers the container
                }}
                className="overflow-hidden"
            />
        </div>
    );
}
