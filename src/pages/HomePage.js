// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import ReviewSection from '../components/ReviewSection';
import BestSellingPizzas from '../components/BestSellingPizzas';
import AboutUs from '../components/AboutUs';
import PromotionalCarousel from '../components/PromotionalCarousel';
import PromotionalModal from '../components/PromotionalModal';
import ExperienceCounter from '../components/ExperienceCounter';
import './HomePage.css';
import EnquiryForm from '../components/EnquiryForm';



const HomePage = () => {
    const [showPromoModal, setShowPromoModal] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowPromoModal(false), 10000); // 10 seconds
        return () => clearTimeout(timer);
    }, []);

    const closePromoModal = () => {
        setShowPromoModal(false);
    };

    return (
        <div className="homepage">
            <AboutUs />
            <PromotionalModal show={showPromoModal} onClose={closePromoModal} />
            <PromotionalCarousel />
            <BestSellingPizzas />
            <ExperienceCounter />
            <ReviewSection /> {/* Add the GoogleReviews component here */}
            <EnquiryForm/>
            
        </div>
    );
};

export default HomePage;
