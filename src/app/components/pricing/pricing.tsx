import Accordion from "../ui/accordion";
import React from "react";

export default function Pricing() {
    return (
        <section data-aos="fade-up">
            <div className="flex flex-col gap-4">
                <h2 className="lg++:text-left text-center">Pricing</h2>
                <h3 className="text-center">$40/hr</h3>
                <h3 className="text-center">FAQs</h3>
                <div>
                    <Accordion heading="I want a basic website showcasing my business and services" />
                </div>
                <p className="text-center font-semibold">
                    Not what you&apos;re looking for?{" "}
                    <a href="#contact" className="underline">
                        Send me an email
                    </a>{" "}
                    to discuss custom options.
                </p>
            </div>
        </section>
    );
}
