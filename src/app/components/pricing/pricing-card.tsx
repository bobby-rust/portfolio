import React from "react";
import { Check } from "lucide-react";
import Tag from "../about/tag";

interface PricingCardProps {
    name: string;
    description: string;
    price: string;
    hourlyRate: number;
    features: string[];
    platforms: string[];
}

export default function PricingCard({
    name,
    description,
    price,
    hourlyRate,
    features,
    platforms,
}: PricingCardProps) {
    return (
        <div className="flex flex-col gap-4 items-center border-2 p-4 rounded-lg h-auto lg++:h-[950px] xl:h-[900px] 2xl:h-[820px] max-w-lg xs:min-w-[350px] shadow-lg">
            <h3 className="text-center">{name}</h3>
            <div className="text-center">
                <p className="font-semibold text-2xl">${price}</p>
                <p>+${hourlyRate}/hr support after completion</p>
                <p className="pt-2 text-gray-700 font-semibold text-center text-sm">
                    {description}
                </p>
            </div>
            <div>
                <p className="font-semibold text-xl text-center">Platforms</p>
                <div className="flex gap-1">
                    {platforms.map((platform: string, i: number) => {
                        return <Tag key={i} tag={platform} />;
                    })}
                </div>
            </div>
            <ul className="h-2/3 flex flex-col gap-4">
                {features.map((feature: string, i: number) => {
                    return (
                        <li key={i} className="flex leading-5 gap-1">
                            <Check className="flex-shrink-0 text-primary" />
                            {feature}
                        </li>
                    );
                })}
            </ul>
            <button className="bg-primary p-2 rounded-lg text-background shadow-lg border-2 border-slate-800">
                Get Started
            </button>
        </div>
    );
}
