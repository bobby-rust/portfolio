"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
    heading: string;
    text: string;
}

export default function Accordion({ heading, text }: AccordionProps) {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col border-t-2 border-b-2 border-slate-500 p-5">
            <div
                onClick={() => setOpen(!open)}
                className="flex justify-between hover:underline hover:cursor-pointer items-center"
            >
                <h3>{heading}</h3>{" "}
                <ChevronDown
                    className={`${open ? "animate-rotate-chevron-up" : "animate-rotate-chevron-down"}`}
                />
            </div>
            <div
                className={`overflow-hidden ${open ? "animate-open-accordion" : "animate-close-accordion"}`}
            >
                {text?.split("\n\n").map((paragraph: string, i: number) => {
                    return (
                        <p key={i} className="leading-loose tracking-wide">
                            {paragraph}
                            <br />
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
