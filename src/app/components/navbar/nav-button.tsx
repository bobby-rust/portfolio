import React from "react";

interface NavButtonProps {
    text: string;
}

export default function NavButton({ text }: NavButtonProps) {
    return <div>{text}</div>;
}
