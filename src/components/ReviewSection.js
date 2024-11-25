// src/components/ReviewSection.js
import React, { useState } from 'react';
import './ReviewSection.css';

const ReviewSection = () => {
    const [reviews, setReviews] = useState([
        {
            name: "John Doe",
            rating: 5,
            text: "Amazing pizza! The crust was perfectly crispy, and the toppings were fresh and flavorful.",
        },
        {
            name: "Jane Smith",
            rating: 4,
            text: "Great experience! The staff was friendly and the pizza was fantastic. Highly recommend.",
        },
        {
            name: "Michael Brown",
            rating: 5,
            text: "Best pizza in town! Love the authentic flavors and cozy atmosphere.",
        },
        {
            name: "Emily White",
            rating: 5,
            text: "Delicious pizza and fast delivery! Will definitely order again.",
        },
    ]);

    const [newReview, setNewReview] = useState({
        name: "",
        rating: 0,
        text: "",
    });

    const handleStarHover = (index) => {
        setNewReview({ ...newReview, rating: index + 1 });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.text) {
            setReviews([newReview, ...reviews]);
            setNewReview({ name: "", rating: 0, text: "" });
            alert("Thank you for your review!");
        }
    };

    return (
        <div className="review-section">
            <h2 className="review-section-title">Customer Reviews</h2>
            <div className="review-cards-container">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="review-card-inner">
                            {/* Front side of the card */}
                            <div className="review-card-front">
                                <h3 className="reviewer-name">{review.name}</h3>
                                <div className="review-separator"></div> {/* Separator Line */}
                                <div className="review-rating">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className={`star ${i < review.rating ? 'active' : ''}`}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                            {/* Back side of the card */}
                            <div className="review-card-back">
                                <p className="review-text">{review.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="submit-review">
                <h3>Submit Your Review</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={newReview.name}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="text"
                        placeholder="Your Review"
                        value={newReview.text}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <div className="star-rating">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className={`star ${index < newReview.rating ? 'active' : ''}`}
                                onMouseEnter={() => handleStarHover(index)}
                                onClick={() => handleStarHover(index)}
                            ></span>
                        ))}
                    </div>
                    <button type="submit" className="submit-review-button">
                        Submit Review
                    </button>
                </form>
            </div>

            {/* Page Break */}
            <div className="page-break"></div>
        </div>
    );
};

export default ReviewSection;
