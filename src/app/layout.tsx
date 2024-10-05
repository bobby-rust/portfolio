import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar/navbar";
import { ToastProvider } from "@/app/components/toast/toast-context";
import Footer from "./components/footer/footer";

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
                <ToastProvider>
                    <Navbar />
                    <main>{children}</main>
                </ToastProvider>
            </body>
            <footer>
                <Footer />
            </footer>
        </html>
    );
}
