import React from "react";

export default function CodeReview() {
    return (
        <section
            data-aos="fade-up"
            id="projects"
            className="py-10 my-0 flex flex-col gap-2 items-center justify-center"
        >
            <h2 className="w-full lg++:text-left">Code Review</h2>
            <p className="lg++:text-left w-full text-gray">
                This is a mid-development code review for QueueSocial which I
                chose for my capstone project to complete my B.Sc. in Computer
                Science at Southern New Hampshire University
            </p>
            <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/0dMTxqOzWIg"
                className="w-full"
            />
        </section>
    );
}
