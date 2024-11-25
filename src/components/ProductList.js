// src/components/ProductList.js
import React from "react";
import ProductCard from "./ProductCard";
import pizzas from "../data/pizza.json";
import specialityPizzas from "../data/specialityPizza.json";
import beverages from "../data/beverages.json";
import desserts from "../data/desserts.json";
import "./ProductList.css";

const ProductList = () => {
    const categories = [
        { name: "Pizza", data: pizzas || [] },
        { name: "Specialty Pizza", data: specialityPizzas || [] },
        { name: "Beverages", data: beverages || [] },
        { name: "Desserts", data: desserts || [] },
    ];

    return (
        <div className="product-list">
            {categories.map((category, idx) => (
                <div key={idx} className="category-section">
                    <h2 className="category-title">{category.name}</h2>
                    <div className="category-grid">
                        {category.data.length > 0 ? (
                            category.data.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        ) : (
                            <p className="no-products">No products available in this category.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
