"use client";

import { useState, ChangeEvent } from "react";
import { Mail, SendHorizontal } from "lucide-react";
import { useToast } from "@/app/components/toast/toast-context";

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    body: string;
}

export default function Contact() {
    const toast = useToast();

    /* State */
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
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
        e.preventDefault();
        setDisableSubmit(true);
        console.log(form);
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
    }

    return (
        <section id="contact" className="pt-48">
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
                        {/* Name */}
                        <label htmlFor="name" className="font-semibold text-lg">
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
                                className=" flex gap-2 justify-center p-3 bg-secondary-dark w-full sm:w-48 rounded-lg text-background mt-2 border-2 border-gray-400 hover:shadow-md hover:bg-[rgba(107,71,71,0.9)]"
                            >
                                <div className="w-1/4 flex justify-end">
                                    <SendHorizontal />{" "}
                                </div>
                                <span className="w-1/2">Submit</span>{" "}
                                <div className="w-1/4"></div>
                            </button>
                            <button className="hover:underline mt-2 w-full text-center border-2 border-gray-400 p-3 sm:border-none rounded-lg flex justify-center  sm:w-auto gap-2">
                                <Mail /> Send me an email directly
                            </button>
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
