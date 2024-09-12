import React from "react";

export default function MobileNavbar() {
    return (
        <div className="h-16 flex justify-center items-center mt-4">
            <ul className="flex text-[#EEEEEE] text-sm z-50 backdrop-blur rounded-full">
                <li className="p-3 hover:cursor-pointer hover:underline">About me</li>
                <li className="p-3 hover:cursor-pointer hover:underline">Services</li>
                <li className="p-3 hover:cursor-pointer hover:underline">Pricing</li>
                <li className="p-3 hover:cursor-pointer hover:underline">Contact</li>
            </ul>
        </div>
    );
}
