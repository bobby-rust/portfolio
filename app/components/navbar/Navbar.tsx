import React from "react";

export default function Navbar() {
    return (
        <div className="h-16 flex justify-center items-center p-4 mt-4">
            <ul className="flex gap-12 text-[#EEEEEE] z-50 backdrop-blur rounded-full p-4">
                <li className="p-3 hover:cursor-pointer hover:underline">About me</li>
                <li className="p-3 hover:cursor-pointer hover:underline">Services</li>
                <li className="p-3 hover:cursor-pointer hover:underline">Pricing</li>
                <li className="p-3 hover:cursor-pointer hover:underline">Contact</li>
            </ul>
        </div>
    );
}
