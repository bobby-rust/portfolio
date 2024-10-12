"use client";

import { useState, ChangeEvent } from "react";
import { Mail, SendHorizontal } from "lucide-react";
import { useToast } from "@/app/components/toast/toast-context";
import Link from "next/link";

interface ContactForm {
    name: string;
    email: string;
    pricingPlan: PricingPlan;
    subject: string;
    body: string;
}

enum PricingPlan {
    UNSELECTED = "",
    BASIC = "basic",
    STANDARD = "standard",
    CUSTOM = "custom",
}

export default function Contact() {
    const toast = useToast();

    /* State */
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
        pricingPlan: PricingPlan.UNSELECTED,
        subject: "",
        body: "",
    });
    const [disableSubmit, setDisableSubmit] = useState(false);

    /* Helper Fns */
    function handleFormChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // TODO: Input validation
        e.preventDefault();

        if (form.name.trim() === "") {
            alert("Please enter a name");
            return;
        }
        if (form.subject.trim() === "") {
            alert("Please enter a subject");
            return;
        }
        if (form.body.trim() === "") {
            alert("Please enter a body");
            return;
        }
        if (form.email.trim() === "") {
            alert("Please enter an email");
            return;
        }

        setDisableSubmit(true);

        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });

        if (response.status === 200) {
            toast(
                "Thank you!",
                "Message sent successfully. I will get back to you as soon as possible.",
                true,
            );
        } else {
            toast("Something went wrong", "Please try again.", false);
        }

        setDisableSubmit(false);
        setForm({
            name: "",
            email: "",
            pricingPlan: PricingPlan.UNSELECTED,
            subject: "",
            body: "",
        });
    }

    return (
        <section id="contact" className="pt-48 lg:px-36">
            <div className="w-full h-full flex flex-col items-center lg:items-start gap-4">
                <h2>Contact</h2>
                <p className="text-gray-600 text-lg text-center lg:text-left">
                    Let&apos;s bring your project to life! Whether you need a
                    custom website, tech support, or have a unique challenge,
                    I&apos;m here to help. Drop me a message and let&apos;s
                    chat!
                </p>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col lg:w-2/3 xl:w-1/2">
                            {/* Name */}
                            <label
                                htmlFor="name"
                                className="font-semibold text-lg"
                            >
                                Name
                                <p className="font-normal text-base text-gray-600">
                                    What can I call you?
                                </p>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={handleFormChange}
                                className="border-2 border-gray-400 rounded-lg h-10 p-3 bg-slate-700 text-background"
                            />
                            {/* Email */}
                            <label
                                htmlFor="email"
                                className="font-semibold text-lg"
                            >
                                Email
                                <p className="font-normal text-base text-gray-600">
                                    Where can I get back to you?
                                </p>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleFormChange}
                                className="border-2 border-gray-400 rounded-lg h-10 p-3 bg-slate-700 text-background"
                            />

                            {/* Subject */}
                            <label
                                htmlFor="subject"
                                className="font-semibold text-lg"
                            >
                                Subject
                                <p className="font-normal text-base text-gray-600">
                                    What&apos;s this about?
                                </p>
                            </label>
                            <input
                                name="subject"
                                type="text"
                                placeholder="Enter a subject"
                                value={form.subject}
                                onChange={handleFormChange}
                                className="border-2 border-gray-400 rounded-lg h-10 p-3 bg-slate-700 text-background"
                            />
                        </div>
                        {/* Body */}
                        <label htmlFor="body" className="font-semibold text-lg">
                            Message
                            <p className="font-normal text-base text-gray-600">
                                What can I help you with?
                            </p>
                        </label>
                        <textarea
                            name="body"
                            placeholder="Send a message"
                            value={form.body}
                            onChange={handleFormChange}
                            className="border-2 border-gray-400 rounded-lg h-72 p-3 bg-slate-700 text-background"
                        />

                        {/* Submit */}
                        <div className="flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-between">
                            <button
                                type="submit"
                                disabled={disableSubmit}
                                className={`flex gap-2 justify-center p-3 w-full sm:w-48 rounded-lg text-background mt-2 border-2 border-gray-400 ${disableSubmit ? "bg-gray-400 cursor-not-allowed" : "bg-secondary-dark  hover:shadow-md hover:bg-[rgba(107,71,71,0.9)]"}`}
                            >
                                <div className="w-1/4 flex justify-end">
                                    {disableSubmit ? (
                                        <svg
                                            className="text-gray-300 animate-spin"
                                            viewBox="0 0 64 64"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                        >
                                            <path
                                                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                                                stroke="currentColor"
                                                stroke-width="5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                            <path
                                                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                                                stroke="currentColor"
                                                stroke-width="5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                className="text-gray-900"
                                            ></path>
                                        </svg>
                                    ) : (
                                        <SendHorizontal />
                                    )}
                                </div>
                                <span className="w-1/2">Submit</span>{" "}
                                <div className="w-1/4"></div>
                            </button>
                            <Link
                                href="mailto:bobby.rust121@gmail.com"
                                className="hover:underline mt-2 w-full text-center border-2 border-gray-400 p-3 sm:border-none rounded-lg flex justify-center  sm:w-auto gap-2"
                            >
                                <Mail /> Send me an email directly
                            </Link>
                        </div>
                    </div>
                </form>
                {/********* TESTING TOAST BUTTON ***********/}
                {/* <button */}
                {/*     onClick={() => */}
                {/*         toast( */}
                {/*             "Something went wrong", */}
                {/*             "Please try again.", */}
                {/*             false, */}
                {/*             100000, */}
                {/*         ) */}
                {/*     } */}
                {/* > */}
                {/*     toggle toast */}
                {/* </button> */}
            </div>
        </section>
    );
}
