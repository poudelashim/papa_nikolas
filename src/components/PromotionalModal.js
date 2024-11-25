// src/components/PromotionalModal.js
import React from "react";
import { FaTimes } from "react-icons/fa";
import "./PromotionalModal.css";

const PromotionalModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    <FaTimes />
                </button>
                <h2 className="modal-title">Exclusive Offer!</h2>
                <p className="modal-text">
                    Get 20% off on all orders placed this week! Don’t miss out on this limited-time offer.
                </p>
            </div>
        </div>
    );
};

export default PromotionalModal;
