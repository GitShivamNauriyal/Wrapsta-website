import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/commonComponents/navbar";
import "./globals.css";
import Footer from "./components/commonComponents/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Wrapsta",
    description:
        "Discover Wrapsta's menu of fresh, flavorful rolls and wraps. Customize your order, enjoy special offers, and order online for pickup or delivery.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
