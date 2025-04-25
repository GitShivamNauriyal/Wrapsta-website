"use client";
import { useEffect, useRef, useCallback } from "react";
import { GrFacebookOption, GrInstagram, GrYoutube } from "react-icons/gr";
import { PiXLogo } from "react-icons/pi";

export default function Footer() {
    const backToTopRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (!backToTopRef.current) return;
        const button = backToTopRef.current;
        if (window.pageYOffset > 300) {
            button.classList.remove("opacity-0", "invisible");
            button.classList.add("opacity-100", "visible");
        } else {
            button.classList.add("opacity-0", "invisible");
            button.classList.remove("opacity-100", "visible");
        }
    }, []);

    const handleClick = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const button = backToTopRef.current;
        if (!button) return;

        const anchors = document.querySelectorAll('a[href^="#"]');

        const handleAnchorClick = (e) => {
            const targetId = e.currentTarget.getAttribute("href");
            if (targetId !== "#" && document.querySelector(targetId)) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                const headerOffset = 80;
                const elementPosition =
                    targetElement.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        };

        anchors.forEach((anchor) =>
            anchor.addEventListener("click", handleAnchorClick)
        );
        window.addEventListener("scroll", handleScroll);
        button.addEventListener("click", handleClick);

        return () => {
            anchors.forEach((anchor) =>
                anchor.removeEventListener("click", handleAnchorClick)
            );
            window.removeEventListener("scroll", handleScroll);
            button.removeEventListener("click", handleClick);
        };
    }, [handleClick, handleScroll]);

    return (
        <footer id="footer" className="bg-[#5D7052] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* <!-- Column 1: About & Logo --> */}
                    <div>
                        <div className="mb-4">
                            <h3 className="text-4xl font-bold mb-4">wrapsta</h3>
                            <p className="text-neutral-100 mb-4">
                                Fresh, delicious wraps and rolls made with
                                quality ingredients. Bringing flavor-packed
                                meals to your table since 2018.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            {/* <!-- Social Media Icons --> */}
                            <a
                                href="https://facebook.com"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                            >
                                <GrFacebookOption className="text-xl text-[#5D7052]" />
                            </a>

                            <a
                                href="https://instagram.com"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                            >
                                <GrInstagram className="text-xl text-[#5D7052]" />
                            </a>
                            <a
                                href="https://x.com"
                                aria-label="X"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                            >
                                <PiXLogo className="text-xl text-[#5D7052]" />
                            </a>
                            <a
                                href="https://youtube.com"
                                aria-label="YouTube"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all"
                            >
                                <GrYoutube className="text-xl text-[#5D7052]" />
                            </a>
                        </div>
                    </div>

                    {/* <!-- Column 2: Quick Links --> */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-1">
                            <li>
                                <a
                                    href="#hero"
                                    className="text-neutral-100 hover:text-white hover:underline transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#menu"
                                    className="text-neutral-100 hover:text-white hover:underline transition-colors"
                                >
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="text-neutral-100 hover:text-white hover:underline transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="text-neutral-100 hover:text-white hover:underline transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/privacy"
                                    className="text-neutral-100 hover:text-white hover:underline transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms"
                                    className="text-neutral-100 hover:text-white hover:underline transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Column 3: Opening Hours --> */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Opening Hours
                        </h3>
                        <ul className="space-y-1">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>10:00 AM - 9:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>11:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>11:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                        <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                            <h4 className="font-bold mb-2 text-xl">
                                Contact Us
                            </h4>
                            <p className="text-neutral-100">
                                Phone:{" "}
                                <a
                                    href="tel:+1234567890"
                                    className="hover:underline"
                                >
                                    +91 123 456 7890
                                </a>
                            </p>
                            <p className="text-neutral-100">
                                Email:{" "}
                                <a
                                    href="mailto:info@wrapsta.com"
                                    className="hover:underline"
                                >
                                    info@wrapsta.com
                                </a>
                            </p>
                            <p className="text-neutral-100">
                                Location: 123 Wrap St, New Delhi, India
                            </p>
                        </div>
                    </div>

                    {/* <!-- Column 4: Newsletter or CTA --> */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-neutral-100 mb-4">
                            Sign up for our newsletter to get the latest offers
                            and updates.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="p-2 rounded bg-white text-black placeholder-gray-600 w-full sm:w-auto"
                            />
                            <button
                                type="submit"
                                className="bg-white text-[#5D7052] px-4 py-2 rounded hover:bg-gray-200 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* <!-- Footer Bottom --> */}
                <div className="border-t border-white border-opacity-20 pt-4 text-center text-sm text-neutral-200">
                    &copy; 2025 Wrapsta. All rights reserved.
                </div>
            </div>
            {/* scroll to top button */}
            <button
                ref={backToTopRef}
                className="fixed bottom-6 right-6 bg-yellow-300 text-neutral-700 p-3 rounded-full shadow-lg transition-all duration-300 opacity-100 visible"
                aria-label="Scroll to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 15l7-7 7 7"
                    ></path>
                </svg>
            </button>
        </footer>
    );
}
