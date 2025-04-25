import React from "react";

const Hero = () => {
    return (
        <div id="root">
            <section
                id="hero"
                className="pt-8 pb-16 md:pt-10 md:pb-16 bg-[#F2E8CF]"
            >
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* <!-- Hero content --> */}
                        <div className="md:w-2/3 mb-10 md:mb-0 md:pr-32">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D7052] mb-4">
                                Fresh Wraps{" "}
                                <span className="text-[#E07A5F]">
                                    Delivered{" "}
                                </span>
                                Daily
                            </h1>
                            <p className="text-lg md:text-xl text-neutral-700 mb-8">
                                Handcrafted wraps and rolls with quality
                                ingredients, perfectly balanced flavors for a
                                satisfying meal on the go.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wrapstatc8a.rollout.site/#menu"
                                    className="inline-block py-3 px-8 bg-[#5D7052] text-white font-bold rounded-lg transition-transform hover:scale-105 text-center"
                                >
                                    Order Now
                                </a>
                                <a
                                    href="https://wrapstatc8a.rollout.site/#customize"
                                    className="inline-block py-3 px-8 border border-[#5D7052] text-[#5D7052] font-bold rounded-lg transition-transform hover:scale-105 text-center"
                                >
                                    Customize Your Wrap
                                </a>
                            </div>
                        </div>

                        {/* <!-- Hero image --> */}
                        <div className="md:w-1/3 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/hero/hero_wrap_1.jpeg"
                                    alt="Delicious wrap with fresh ingredients"
                                    className="w-full h-auto rounded-2xl object-cover"
                                />
                            </div>

                            {/* <!-- Featured badge --> */}
                            <div className="absolute -top-4 -right-4 bg-[#E07A5F] text-white px-6 py-2 rounded-full transform rotate-12 shadow-md">
                                <p className="font-bold text-sm">
                                    Today's Special
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Quick highlights --> */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center p-8 bg-white rounded-lg shadow-sm">
                            <div className="mr-4 bg-[#5D7052] p-3 rounded-full text-white">
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
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-800">
                                    Quick Prep
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Ready in 5 minutes or less
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center p-8 bg-white rounded-lg shadow-sm">
                            <div className="mr-4 bg-[#5D7052] p-3 rounded-full text-white">
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
                                        strokeWidth={2}
                                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-800">
                                    Fresh Ingredients
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Locally sourced and organic
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center p-8 bg-white rounded-lg shadow-sm">
                            <div className="mr-4 bg-[#5D7052] p-3 rounded-full text-white">
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
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-800">
                                    Fast Delivery
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    To your door in 30 minutes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
