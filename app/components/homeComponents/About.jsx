import React from "react";

const About = () => {
    return (
        <div>
            <section id="about" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#5D7052] mb-4">
                            About
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            Our story of bringing delicious, fresh wraps to your
                            neighborhood
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <img
                                src="/about/about_fresh_ingredients_1.jpg"
                                alt="Fresh ingredients for our wraps"
                                className="rounded-lg shadow-md w-full h-auto object-cover"
                            />
                        </div>

                        <div className="md:w-1/2 space-y-6">
                            <div>
                                <h3 className="text-3xl font-bold text-[#E07A5F] mb-3">
                                    Our Story
                                </h3>
                                <p className="text-neutral-700">
                                    Founded in 20xx, Wrapsta began with a simple
                                    mission: create delicious, healthy wraps
                                    using locally-sourced ingredients. What
                                    started as a food truck now serves
                                    communities across the city.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#E07A5F] mb-3">
                                    Our Ingredients
                                </h3>
                                <p className="text-neutral-700">
                                    We partner with local farmers to source the
                                    freshest produce, meats, and cheeses.
                                    Quality and sustainability are at the heart
                                    of everything we create.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-[#F2E8CF] p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-[#5D7052] mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="font-bold text-neutral-800">
                                            Fresh Daily
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-600">
                                        We prepare everything fresh each morning
                                    </p>
                                </div>

                                <div className="bg-[#F2E8CF] p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-[#5D7052] mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="font-bold text-neutral-800">
                                            Local Produce
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-600">
                                        Supporting farmers within 50 kilometers
                                    </p>
                                </div>

                                <div className="bg-[#F2E8CF] p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-[#5D7052] mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="font-bold text-neutral-800">
                                            Eco-Friendly
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-600">
                                        Sustainable packaging and practices
                                    </p>
                                </div>

                                <div className="bg-[#F2E8CF] p-4 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-[#5D7052] mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="font-bold text-neutral-800">
                                            Dietary Options
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-600">
                                        Vegan, gluten-free, and keto-friendly
                                        options
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 bg-[#5D7052] text-white rounded-lg p-8">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="mb-6 md:mb-0">
                                <h3 className="text-3xl font-bold mb-3">
                                    Join the Wrapsta Family
                                </h3>
                                <p className="mb-4">
                                    Sign up for our loyalty program and get
                                    rewards with every order!
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Earn points with every purchase
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Free wrap on your birthday
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Exclusive member-only offers
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full md:w-auto">
                                <form className="bg-white p-6 rounded-lg w-full md:w-80">
                                    <h4 className="text-[#5D7052] font-bold text-xl mb-4">
                                        Sign up now!
                                    </h4>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D7052]"
                                            required=""
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full cursor-pointer bg-[#E07A5F] text-white font-bold py-2 px-4 rounded-md hover:bg-red-400 transition duration-300"
                                    >
                                        Join Rewards Program
                                    </button>
                                    <p className="text-neutral-500 text-xs mt-2 text-center">
                                        We respect your privacy and will never
                                        share your information.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
