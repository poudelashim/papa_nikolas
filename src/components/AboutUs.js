// src/components/AboutUs.js
import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import aboutUsImage from '../assets/about-us-image.jpg';

const AboutUs = () => {
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const revealOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(entry.target.dataset.reveal);
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(revealOnScroll, observerOptions);
        if (contentRef.current) observer.observe(contentRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-us-section">
            <div className="about-us-image" ref={imageRef} data-reveal="reveal-right">
                <img src={aboutUsImage} alt="About Us" />
            </div>
            <div className="about-us-content" ref={contentRef} data-reveal="reveal-left">
                <h2 className="about-us-title">About Us</h2>
                <div className="about-us-box">
                    <p>Welcome to Papa Nikolas Pizza! We take pride in serving authentic, delicious pizzas.</p>
                    <p>Whether you're a fan of classic margherita or spicy toppings, we have something for everyone!</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
