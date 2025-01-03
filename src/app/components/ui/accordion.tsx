"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
    heading: string;
}

export default function Accordion({ heading }: AccordionProps) {
    const [open, setOpen] = useState(false);
    return (
        <div
            onClick={() => setOpen(!open)}
            className={`flex justify-between hover:cursor-pointer ${open ? "animate-open-accordion" : "animate-close-accordion"}`}
        >
            <span>{heading}</span>{" "}
            <ChevronDown
                className={`${open ? "animate-rotate-chevron-up" : "animate-rotate-chevron-down"}`}
            />
        </div>
    );
}
