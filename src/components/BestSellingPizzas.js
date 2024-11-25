// src/components/BestSellingPizzas.js
import React from 'react';
import { motion } from 'framer-motion';
import './BestSellingPizzas.css';
import margheritaImg from '../assets/margherita.jpg';
import pepperoniImg from '../assets/pepperoni.jpg';
import veggieImg from '../assets/veggie.jpg';
import bbqImg from '../assets/bbq.jpg';

const bestSellingPizzas = [
    { name: "Margherita", price: 12.99, img: margheritaImg },
    { name: "Pepperoni", price: 14.99, img: pepperoniImg },
    { name: "Veggie Supreme", price: 13.99, img: veggieImg },
    { name: "BBQ Chicken", price: 15.99, img: bbqImg },
];

const BestSellingPizzas = ({ addToCart }) => {
    return (
        <div className="container">
            <h2>Best-Selling Pizzas</h2>
            <div className="pizza-grid">
                {bestSellingPizzas.map((pizza, index) => (
                    <motion.div
                        key={index}
                        className="pizza-card"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <img src={pizza.img} alt={pizza.name} />
                        <div className="pizza-overlay">
                            <span className="pizza-price">${pizza.price.toFixed(2)}</span>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => addToCart(pizza)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BestSellingPizzas;
