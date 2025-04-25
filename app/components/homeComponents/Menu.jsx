import React, { useState } from "react";
import { FaClock, FaUser, FaEye, FaShoppingCart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Category Buttons
const categories = [
    { label: "All Items", value: "all" },
    { label: "Signature Wraps", value: "signature" },
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Protein Packed", value: "protein" },
    { label: "Sides & Extras", value: "sides" },
];

// Menu Items
const menuItems = [
    {
        id: 1,
        title: "Mediterranean Delight",
        price: "₹449",
        description:
            "Grilled chicken, hummus, feta cheese, olives, cucumber, tomatoes, and tzatziki sauce in a spinach wrap.",
        prepTime: "5 min",
        serves: 1,
        category: "signature",
        image: "https://images.unsplash.com/photo-1631898039984-fd5f61fe8732",
        tag: "Bestseller",
        tagColor: "#E07A5F",
    },
    {
        id: 2,
        title: "Grilled Chicken Avocado",
        price: "₹459",
        description:
            "Grilled chicken breast, avocado, bacon, lettuce, tomato and ranch dressing in a whole wheat wrap.",
        prepTime: "6 min",
        serves: 1,
        category: "protein",
        image: "https://images.unsplash.com/photo-1600850056064-a8b380df8395",
    },
    {
        id: 3,
        title: "Veggie Delight",
        price: "₹389",
        description:
            "Roasted vegetables, hummus, avocado, mixed greens, and balsamic glaze in a spinach wrap.",
        prepTime: "4 min",
        serves: 1,
        category: "vegetarian",
        image: "https://images.unsplash.com/photo-1539252554935-80c8cab33d8c",
        tag: "Vegan",
        tagColor: "#16a34a",
    },
    {
        id: 4,
        title: "Spicy Chicken",
        price: "₹449",
        description:
            "Crispy chicken, blue cheese dressing, lettuce, and diced celery in a tomato wrap.",
        prepTime: "5 min",
        serves: 1,
        category: "signature",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1603046891744-1f76eb10aec7",
        tag: null,
    },
    {
        id: 5,
        title: "Grilled Chicken & Cheese",
        price: "₹399",
        description:
            "Grilled chicken, melted provolone, sautéed peppers and onions, with chipotle mayo in a flour wrap.",
        prepTime: "7 min",
        serves: 1,
        category: "protein",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1588167783966-3ce5d0c67f3f",
        tag: null,
    },
    {
        id: 6,
        title: "Lamb Wrap",
        price: "₹319",
        description:
            "Grilled lamb, fresh veggies, hummus, tahini sauce, cucumber, tomatoes, and pickled turnips in a whole wheat wrap.",
        prepTime: "6 min",
        serves: 1,
        category: "protein",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
    {
        id: 7,
        title: "Paneer Tikka Wrap",
        price: "₹399",
        description:
            "Grilled paneer, marinated in spices, with onions, bell peppers, and mint chutney in a whole wheat wrap.",
        prepTime: "5 min",
        serves: 1,
        category: "vegetarian",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
    {
        id: 8,
        title: "Falafel Wrap",
        price: "₹349",
        description:
            "Crispy falafel, lettuce, tomatoes, cucumbers, and tahini sauce in a pita wrap.",
        prepTime: "4 min",
        serves: 1,
        category: "vegetarian",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
    {
        id: 9,
        title: "BBQ Chicken Wrap",
        price: "₹459",
        description:
            "Grilled chicken, BBQ sauce, coleslaw, and pickles in a tomato wrap.",
        prepTime: "6 min",
        serves: 1,
        category: "signature",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
    // Sides & Extras
    {
        id: 10,
        title: "Garlic Breadsticks",
        price: "₹149",
        description:
            "Warm and buttery breadsticks served with marinara sauce for dipping.",
        prepTime: "4 min",
        serves: 2,
        category: "sides",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1622451836519-2f9fa575fa5c",
        tag: null,
    },
    {
        id: 11,
        title: "Crispy Fries",
        price: "₹129",
        description: "Golden, crispy fries with a side of ketchup.",
        prepTime: "3 min",
        serves: 2,
        category: "sides",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
    {
        id: 12,
        title: "Onion Rings",
        price: "₹179",
        description:
            "Crispy battered onion rings served with tangy dipping sauce.",
        prepTime: "5 min",
        serves: 2,
        category: "sides",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
    {
        id: 13,
        title: "Coleslaw",
        price: "₹99",
        description:
            "Creamy and tangy coleslaw with shredded cabbage and carrots.",
        prepTime: "3 min",
        serves: 1,
        category: "sides",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
    {
        id: 14,
        title: "Sweet Potato Fries",
        price: "₹179",
        description: "Sweet potato fries with a hint of cinnamon and sugar.",
        prepTime: "4 min",
        serves: 2,
        category: "sides",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
    {
        id: 15,
        title: "Hummus & Pita",
        price: "₹199",
        description: "Creamy hummus served with soft pita bread for dipping.",
        prepTime: "5 min",
        serves: 2,
        category: "sides",
        image: "./Wrapsta - Delicious Fresh Rolls &amp; Wraps _ Order Online_files/photo-1615870216519-2f9fa575fa5c",
        tag: null,
    },
];
const Menu = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [visibleItems, setVisibleItems] = useState(6);

    const filteredMenuItems =
        activeCategory === "all"
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setVisibleItems(6); // Reset to show 6 items for each category
    };

    const handleLoadMore = () => {
        setVisibleItems((prev) => prev + 6); // Show 6 more items
    };

    return (
        <section id="menu" className="py-16 bg-[#F2E8CF] bg-opacity-30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#5D7052] mb-4">
                        Menu
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto">
                        Explore our selection of freshly made wraps and rolls
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            className={`category-btn ${
                                cat.value === activeCategory
                                    ? "bg-[#5D7052] text-white"
                                    : "bg-white text-[#5D7052] border border-[#5D7052]"
                            } px-6 py-2 rounded-full font-medium cursor-pointer transition duration-300 hover:bg-[#5D7052] hover:text-white`}
                            onClick={() => handleCategoryChange(cat.value)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Menu Grid with Animation */}
                <AnimatePresence initial={false}>
                    <motion.div
                        key={activeCategory}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        layout
                        transition={{ duration: 0.5 }}
                    >
                        {filteredMenuItems
                            .slice(0, visibleItems)
                            .map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="menu-item bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 transition-transform hover:shadow-md hover:-translate-y-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative overflow-hidden h-56 cursor-pointer">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform hover:scale-110"
                                        />
                                        {item.tag && (
                                            <div
                                                className="absolute top-2 right-2 text-white text-sm py-1 px-3 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        item.tagColor,
                                                }}
                                            >
                                                {item.tag}
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-neutral-800">
                                                {item.title}
                                            </h3>
                                            <span className="text-lg font-bold text-[#5D7052]">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-neutral-600 text-sm mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-sm text-neutral-500 mb-4">
                                            <span className="flex items-center mr-4">
                                                <FaClock className="mr-1" />
                                                Prep: {item.prepTime}
                                            </span>
                                            <span className="flex items-center">
                                                <FaUser className="mr-1" />
                                                Serves: {item.serves}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <button className="cursor-pointer quick-view-btn text-[#5D7052] text-sm font-medium flex items-center">
                                                <FaEye className="mr-2" />
                                                Quick View
                                            </button>
                                            <button className="cursor-pointer add-to-cart-btn bg-[#5D7052] text-white px-4 py-2 rounded-lg flex items-center hover:bg-opacity-90 transition">
                                                <FaShoppingCart className="mr-2" />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </motion.div>
                </AnimatePresence>

                {/* Load More */}
                <div className="text-center mt-12">
                    <button
                        id="load-more"
                        className="px-8 py-3 bg-white border border-[#5D7052] text-[#5D7052] font-bold rounded-lg hover:bg-[#5D7052] hover:text-white transition duration-300"
                        onClick={handleLoadMore}
                    >
                        Load More Items
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
