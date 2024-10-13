import React from "react";
import Image from "next/image";

export default function Headshot() {
    return (
        <div className="h-60 w-60 2xl:w-80 2xl:h-80 relative overflow-hidden  rounded-3xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-800 to-green-500">
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
