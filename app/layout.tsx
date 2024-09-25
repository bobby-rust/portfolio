import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "Felix Full-Stack Solutions",
    description:
        "Felix Full-Stack Solutions is your North Country partner in building modern, scalable, and robust web applications. Based in Potsdam, NY and specializing in full-stack development, I provide end-to-end solutions tailored to meet the unique needs of businesses and individuals. Whether you're looking to develop a dynamic website, an efficient backend system, or a seamless mobile app, Felix Full-Stack Solutions offers expertise across front-end and back-end technologies. With a focus on performance, security, and user experience, I bring your digital vision to life, ensuring your project stands out in today’s competitive landscape. Let me help you turn your ideas into reality with custom-built software solutions designed for success.",
    icons: {
        icon: "/felix-tongue.jpg",
    },
    openGraph: {
        title: "Felix Full-Stack Solutions",
        description:
            "Felix Full-Stack Solutions is your North Country partner in building modern, scalable, and robust web applications. Based in Potsdam, NY and specializing in full-stack development, I provide end-to-end solutions tailored to meet the unique needs of businesses and individuals. Whether you're looking to develop a dynamic website, an efficient backend system, or a seamless mobile app, Felix Full-Stack Solutions offers expertise across front-end and back-end technologies. With a focus on performance, security, and user experience, I bring your digital vision to life, ensuring your project stands out in today’s competitive landscape. Let me help you turn your ideas into reality with custom-built software solutions designed for success.",
        images: [
            {
                url: "/felix-computer.jpg",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased w-screen overflow-x-hidden flex flex-col justify-center items-center bg-background text-foreground`}
            >
                {children}
            </body>
        </html>
    );
}
