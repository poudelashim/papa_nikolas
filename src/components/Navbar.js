// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import CartModal from "./CartModal";

const Navbar = ({ cartItems }) => {
    const [showCartModal, setShowCartModal] = useState(false);

    // Toggle cart modal visibility
    const toggleCartModal = () => {
        setShowCartModal(!showCartModal);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <ul className="navbar-menu">
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/menu" activeClassName="active">Menu</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">Why Papa Nikolas Pizza</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active">Our Services</NavLink></li>
                    </ul>
                </div>

                {/* Cart Icon with Item Count */}
                <div className="navbar-cart" onClick={toggleCartModal}>
                    <FaShoppingCart className="cart-icon" />
                    {cartItems && cartItems.length > 0 && (
                        <span className="cart-count">{cartItems.length}</span>
                    )}
                </div>
            </nav>

            {/* Display Cart Modal if showCartModal is true */}
            {showCartModal && <CartModal cartItems={cartItems} onClose={toggleCartModal} />}
        </div>
    );
};

export default Navbar;
