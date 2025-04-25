"use client";
import React, { useEffect, useRef } from "react";

const Navbar = () => {
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const mobileMenu = menuRef.current;
        const mobileMenuButton = menuButtonRef.current;

        const toggleMenu = () => {
            const isExpanded =
                mobileMenuButton.getAttribute("aria-expanded") === "true";
            mobileMenuButton.setAttribute("aria-expanded", String(!isExpanded));
            mobileMenu.classList.toggle("hidden");

            // Toggle hamburger icon
            const menuIcon = mobileMenuButton.querySelector("svg");
            menuIcon.innerHTML = isExpanded
                ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`
                : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
        };

        const handleLinkClick = () => {
            mobileMenu.classList.add("hidden");
            mobileMenuButton.setAttribute("aria-expanded", "false");

            // Reset icon
            const menuIcon = mobileMenuButton.querySelector("svg");
            menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
        };

        mobileMenuButton.addEventListener("click", toggleMenu);
        const links = mobileMenu.querySelectorAll("a");
        links.forEach((link) =>
            link.addEventListener("click", handleLinkClick)
        );

        // Scroll event
        const handleScroll = () => {
            if (window.scrollY > 10) {
                headerRef.current.classList.add("shadow");
            } else {
                headerRef.current.classList.remove("shadow");
            }
        };
        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            mobileMenuButton.removeEventListener("click", toggleMenu);
            links.forEach((link) =>
                link.removeEventListener("click", handleLinkClick)
            );
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            id="header"
            ref={headerRef}
            className="fixed w-full top-0 z-50 bg-white shadow-sm"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a
                        href="#hero"
                        className="text-2xl font-bold text-[#5D7052]"
                    >
                        wrapsta
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            {[
                                "Home",
                                "Menu",
                                "About",
                                "Special Offers",
                                "Customize",
                                "Testimonials",
                                "Contact",
                            ].map((label) => (
                                <li key={label}>
                                    <a
                                        href={`#${label
                                            .toLowerCase()
                                            .replace(/\s/g, "-")}`}
                                        className="font-Nunito text-neutral-700 hover:text-[#5D7052] transition-colors duration-300"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            ref={menuButtonRef}
                            className="text-neutral-700 focus:outline-none"
                            aria-label="Toggle mobile menu"
                            aria-expanded="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <nav ref={menuRef} className="hidden md:hidden mt-4 pb-2">
                    <ul className="flex flex-col space-y-4">
                        {[
                            "Home",
                            "About",
                            "Menu",
                            "Special Offers",
                            "Customize",
                            "Testimonials",
                            "Contact",
                        ].map((label) => (
                            <li key={label}>
                                <a
                                    href={`#${label
                                        .toLowerCase()
                                        .replace(/\s/g, "-")}`}
                                    className="font-Nunito block text-neutral-700 hover:text-[#5D7052] transition-colors duration-300"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
