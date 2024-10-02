"use client";

import { useState, ChangeEvent } from "react";
import { Mail, SendHorizontal } from "lucide-react";

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    body: string;
}

export default function Contact() {
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
        subject: "",
        body: "",
    });

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
        console.log(form);
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });
        const json = await response.json();
        console.log(json);
    }

    return (
        <section id="contact" className="pt-48">
            <div className="w-full h-full flex flex-col items-center lg:items-start gap-4">
                <h2>Contact</h2>
                <p className="text-gray-600 text-lg">
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
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={handleFormChange}
                            className="border-2 border-gray-400 rounded-lg h-10 p-3 bg-slate-700 text-background"
                        />
                        {/* email */}
                        <label
                            htmlFor="email"
                            className="font-semibold text-lg"
                        >
                            Email
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
                        </label>
                        <textarea
                            name="body"
                            placeholder="Send a message"
                            value={form.body}
                            onChange={handleFormChange}
                            className="border-2 border-gray-400 rounded-lg h-72 p-3 bg-slate-700 text-background"
                        />
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className=" flex gap-2 justify-center p-3 bg-secondary-dark rounded-lg text-background w-48 mt-2 border-2 border-gray-400 hover:shadow-md hover:bg-[rgba(107,71,71,0.9)]"
                            >
                                <div className="w-1/4 flex justify-center items-center">
                                    <SendHorizontal />{" "}
                                </div>
                                <span className="w-1/2">Submit</span>{" "}
                                <div className="w-1/4"></div>
                            </button>
                            <button className="hover:underline mt-2 flex gap-2">
                                <Mail /> Send me an email directly
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
