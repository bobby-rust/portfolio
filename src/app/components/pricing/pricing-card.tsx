import React from "react";
import { CircleCheck } from "lucide-react";
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
        <div
            className={`flex flex-col gap-4 items-center p-4 bg-foreground text-background rounded-3xl h-auto lg++:h-[950px] xl:h-[900px] 2xl:h-[830px]  min-w-lg xs:min-w-[350px] shadow-lg ${price === "2500" && "lg++:border-primary lg++:border-2 lg++:shadow-even lg++:shadow-primary lg++:translate-y-[-20px] lg++:scale-105"}`}
        >
            <h3 className="text-center">{name}</h3>
            <div className="text-center">
                <p className="font-semibold text-4xl">${price}</p>
                <p>+${hourlyRate}/hr support after completion</p>
                <p className="pt-2 font-semibold text-center text-sm">
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
                            <CircleCheck className="flex-shrink-0 text-primary" />
                            {feature}
                        </li>
                    );
                })}
            </ul>
            <button className="bg-primary p-2 rounded-lg text-background shadow-even shadow-background  border-[1px] border-background">
                Get Started
            </button>
        </div>
    );
}
