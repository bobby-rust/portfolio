import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/navbar/navbar";
import { ToastProvider } from "@/app/components/toast/toast-context";

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
            <body className={`${inter.className} antialiased`}>
                <ToastProvider>
                    <Navbar />
                    <main>{children}</main>
                </ToastProvider>
            </body>
        </html>
    );
}
