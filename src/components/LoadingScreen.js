// src/components/LoadingScreen.js
import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const funFacts = [
    "About 41% of Americans eat pizza at least once a week, especially on weekends!",
    "The world's most expensive pizza costs $12,000! It’s called the Louis XIII and features lobster, caviar, and edible gold.",
    "The first pizza ordered online was in 1994—a pepperoni and mushroom pizza from Pizza Hut!",
    "New York City is known as the pizza capital of the U.S., with thousands of pizzerias across its boroughs.",
    "The pizza slice emoji 🍕 was added to Unicode in 2010, instantly becoming one of the most popular food emojis.",
    "Frozen pizzas were invented in the 1950s and became a staple in American households.",
    "Thin crust is the most popular style worldwide, but Chicago’s deep-dish remains a unique favorite!",
    "The Teenage Mutant Ninja Turtles helped make pizza a pop culture icon in the '90s.",
    "In 2010, a pizza chain set a world record by delivering 30,000 pizzas to U.S. military personnel in Afghanistan.",
    "The word 'pizza' was first documented in Italy in 997 AD, but its popularity spread worldwide centuries later.",
    "New Year’s Eve, Super Bowl Sunday, Halloween, and Thanksgiving Eve are the busiest pizza days in the U.S.",
    "The gooey cheese pull we all love is due to mozzarella’s high moisture and fat content—perfect for melting!",
    "In Italy, 'pizza al taglio' is baked in large, rectangular trays and served by the slice, often with unique toppings.",
    "Italy has a real 'Pizza University' where aspiring pizzaiolos (pizza chefs) learn the art of pizza-making!",
    "Pizzas aren’t just about tomato sauce; white, pesto, and BBQ sauces are becoming increasingly popular."
];

const LoadingScreen = ({ onComplete }) => {
    const [randomFact, setRandomFact] = useState('');

    useEffect(() => {
        // Select a random fact on component mount
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        setRandomFact(funFacts[randomIndex]);

        // Set a timeout to hide the loading screen after 5 seconds
        const timeout = setTimeout(onComplete, 5000);

        return () => clearTimeout(timeout);
    }, [onComplete]);

    return (
        <div className="loading-screen">
            <div className="welcome-container">
                <h1 className="welcome-message">Welcome to Papa Nikolas Pizza!</h1>
                <p className="fun-fact">{randomFact}</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
