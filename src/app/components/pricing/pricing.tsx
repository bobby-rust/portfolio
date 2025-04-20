import Accordion from "../ui/accordion";
import React from "react";

export default function Pricing() {
    return (
        <section data-aos="fade-up">
            <div className="flex flex-col gap-4">
                <h2 className="lg++:text-left text-center">Pricing</h2>
                <h3 className="lg++:text-left text-center">
                    $40/hr Software Development
                </h3>
                <h3 className="lg++:text-left text-center">
                    $30/hr Tech Support
                </h3>
                <h2 className="lg++:text-left text-center">FAQs</h2>
                <div className="flex flex-col gap-5">
                    <Accordion
                        heading="I want a basic website showcasing my business and services"
                        text=""
                    />
                    <Accordion heading="Help! My computer is broken!" text="" />
                </div>
                <p className="text-center font-semibold">
                    Not what you&apos;re looking for?{" "}
                    <a href="#contact" className="underline">
                        Send me an email
                    </a>{" "}
                    to discuss custom options or get a quote
                </p>
            </div>
        </section>
    );
}
