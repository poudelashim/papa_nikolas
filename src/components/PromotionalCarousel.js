// src/components/PromotionalCarousel.js
import React, { useState, useEffect } from 'react';
import './PromotionalCarousel.css';
import promoImage1 from '../assets/promo-image1.jpg';
import promoImage2 from '../assets/promo-image2.jpg';
import promoImage3 from '../assets/promo-image3.jpg';

const PromotionalCarousel = () => {
    const images = [promoImage1, promoImage2, promoImage3];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prev) => prev + 1);
        }, 50);

        if (progress >= 100) {
            setCurrentSlide((prev) => (prev + 1) % images.length);
            setProgress(0);
        }

        return () => clearInterval(intervalId);
    }, [progress, images.length]);

    return (
        <div className="promotional-carousel">
            <div className="carousel-title-box">
                <h2 className="carousel-title">Exclusive Deals</h2>
            </div>
            <div className="carousel-image-container">
                <img
                    src={images[currentSlide]}
                    alt={`Promo ${currentSlide + 1}`}
                    className="carousel-image"
                />
            </div>
            <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default PromotionalCarousel;
