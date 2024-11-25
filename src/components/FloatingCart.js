// src/components/FloatingCart.js
import React from "react";
import "./FloatingCart.css";
import { FaShoppingCart } from "react-icons/fa";

const FloatingCart = ({ cartItems, onCartClick }) => {
    return (
        <div className="floating-cart" onClick={onCartClick}>
            <FaShoppingCart className="cart-icon" />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
    );
};

export default FloatingCart;
