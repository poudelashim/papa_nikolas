import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState(null); // Track selected size

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to the cart.");
            return;
        }
        onAddToCart({
            name: product.name,
            size: selectedSize.label,
            price: selectedSize.price,
        });
        setSelectedSize(null); // Reset the size after adding to cart
    };

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <select
                className="size-dropdown"
                value={selectedSize ? JSON.stringify(selectedSize) : ""}
                onChange={(e) => setSelectedSize(JSON.parse(e.target.value))}
            >
                <option value="" disabled>
                    Select a size
                </option>
                {product.sizes.map((size, idx) => (
                    <option key={idx} value={JSON.stringify(size)}>
                        {size.label} - ${size.price.toFixed(2)}
                    </option>
                ))}
            </select>
            <button
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!selectedSize} // Disable button if no size is selected
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
