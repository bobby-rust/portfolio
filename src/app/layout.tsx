import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/app/components/toast/toast-context";
import Footer from "./components/footer/footer";
import AOSInit from "@/app/components/aos/aos-init";
import Navbar from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "robrustdev",
    description: "Web development services in Potsdam, New York.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased max-w-screen overflow-x-hidden`}
            >
                <AOSInit />
                <ToastProvider>
                    <Navbar />
                    <main>{children}</main>
                    <footer>
                        <Footer />
                    </footer>
                </ToastProvider>
            </body>
        </html>
    );
}
