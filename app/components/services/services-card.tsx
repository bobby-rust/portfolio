import { ReactElement } from "react";

interface ServicesCardProps {
    heading: string;
    icon: ReactElement;
    desc: string;
}

export default function ServicesCard({
    heading,
    icon,
    desc,
}: ServicesCardProps) {
    return (
        <div className="flex bg-white flex-col gap-6 sm:max-w-md justify-evenly border-2 border-gray shadow-xl p-10 rounded-lg h-full min-w-60">
            <div className="self-center">{icon}</div>
            <h3 className="text-xl font-semibold text-primary">{heading}</h3>
            <p className="text-xs sm:text-sm text-secondary-foreground">
                {desc}
            </p>
        </div>
    );
}
