"use client";

import React from "react";
import Head from "next/head";
import Hero from "./components/homeComponents/Hero";
import About from "./components/homeComponents/About";
import Menu from "./components/homeComponents/Menu";

<Head>
    <title>Wrapsta - Delicious Rolls & Wraps</title>
    <meta
        name="description"
        content="Wrapsta offers mouthwatering wraps and rolls including chicken rolls, veg rolls, paneer rolls, and more. Order the best wraps today!"
    />
    <meta
        name="keywords"
        content="wrapsta, wraps, rolls, chicken roll, veg roll, paneer roll, chicken wraps, Indian rolls, street food wraps"
    />
    <meta name="author" content="Wrapsta Team" />
</Head>;

const page = () => {
    return (
        <div>
            <div className="pt-16 flex flex-col items-center justify-center min-h-screen">
                <Hero />
                <About />
                <Menu />
            </div>
        </div>
    );
};

export default page;
