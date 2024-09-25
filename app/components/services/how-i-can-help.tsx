import React from "react";
import ServicesCard from "./services-card";
import { Hourglass, Globe, Magnet } from "lucide-react";

export default function HowICanHelp() {
    return (
        <section className="section">
            <div>
                <h2 className="h2">Here&apos;s what I can do for you</h2>
                <div className="flex flex-col justify-center">
                    <ul className="flex flex-col xl:flex-row gap-12">
                        <li>
                            <ServicesCard
                                heading="Attract clients in your sleep"
                                icon={<Magnet size={100} />}
                                desc="Imagine your website working 24/7, turning visitors into loyal customers even while you're off the clock. I'll build optimized, lead-generating platforms that do the heavy lifting for you."
                            />
                        </li>
                        <li>
                            <ServicesCard
                                heading="Create a lasting online presence"
                                icon={<Globe size={100} />}
                                desc="Your online presence is more than just a website—it's your digital identity. I'll create a sleek, professional site that leaves a lasting impression and grows with your business."
                            />
                        </li>
                        <li>
                            <ServicesCard
                                heading="Save your time"
                                icon={<Hourglass size={100} />}
                                desc="Focus on what you do best while I handle the technical details. From seamless website management to automating repetitive tasks, I help you save time and run your business efficiently."
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
