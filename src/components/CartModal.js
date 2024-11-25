// src/components/CartModal.js
import React from "react";
import "./CartModal.css";

const CartModal = ({ show, onClose, cart, removeFromCart }) => {
    if (!show) return null;

    return (
        <div className="cart-modal-overlay" onClick={onClose}>
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                <h2 className="cart-modal-title">Your Cart</h2>
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <p>{item.name} - {item.size} - ${item.price.toFixed(2)}</p>
                                <button className="remove-button" onClick={() => removeFromCart(index)}>
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <button className="proceed-to-checkout" onClick={() => alert("Proceed to checkout")}>
                    Proceed to Checkout
                </button>
                <button className="close-cart" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default CartModal;
