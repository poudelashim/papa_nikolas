// src/pages/MenuPage.js
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import pizzas from "../data/pizza.json";
import specialityPizzas from "../data/specialityPizza.json";
import beverages from "../data/beverages.json";
import desserts from "../data/desserts.json";
import "./MenuPage.css";

const MenuPage = ({ addToCart }) => {
    const [selectedCategory, setSelectedCategory] = useState("Pizza");

    const categories = [
        { name: "Pizza", data: pizzas || [] },
        { name: "Specialty Pizza", data: specialityPizzas || [] },
        { name: "Beverages", data: beverages || [] },
        { name: "Desserts", data: desserts || [] },
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="menu-page">
            <h1 className="menu-title">Menu</h1>
            <div className="category-selector">
                {categories.map((category, idx) => (
                    <button
                        key={idx}
                        className={`category-button ${selectedCategory === category.name ? "active" : ""}`}
                        onClick={() => handleCategoryChange(category.name)}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="category-grid">
                {categories
                    .find((category) => category.name === selectedCategory)
                    ?.data.map((product, idx) => (
                        <ProductCard key={idx} product={product} onAddToCart={addToCart} />
                    ))}
            </div>
        </div>
    );
};

export default MenuPage;
