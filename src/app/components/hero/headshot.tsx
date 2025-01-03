import React from "react";
import Image from "next/image";

export default function Headshot() {
    return (
        <div className="h-60 w-60 2xl:w-80 2xl:h-80 overflow-hidden rounded-3xl">
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
