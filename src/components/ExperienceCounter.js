// src/components/ExperienceCounter.js
import React, { useEffect, useState } from 'react';
import './ExperienceCounter.css';

const ExperienceCounter = () => {
    const [years, setYears] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('experience-counter');
            if (element && element.getBoundingClientRect().top <= window.innerHeight) {
                startCounting();
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const startCounting = () => {
        const yearsTarget = 15;
        const customersTarget = 100;
        const satisfactionTarget = 100;

        const yearsInterval = setInterval(() => {
            setYears((prev) => {
                if (prev >= yearsTarget) {
                    clearInterval(yearsInterval);
                    return yearsTarget;
                }
                return prev + 1;
            });
        }, 100);

        const customersInterval = setInterval(() => {
            setCustomers((prev) => {
                if (prev >= customersTarget) {
                    clearInterval(customersInterval);
                    return customersTarget;
                }
                return prev + 2;
            });
        }, 50);

        const satisfactionInterval = setInterval(() => {
            setSatisfaction((prev) => {
                if (prev >= satisfactionTarget) {
                    clearInterval(satisfactionInterval);
                    return satisfactionTarget;
                }
                return prev + 1;
            });
        }, 80);
    };

    return (
        <div id="experience-counter" className="experience-counter">
            <div className="counter-item">
                <span className="count">{years}+</span>
                <p>Years of Great Pizza Experience</p>
            </div>
            <div className="counter-item">
                <span className="count">{customers}+</span>
                <p>Increasing Happy Customers</p>
            </div>
            <div className="counter-item">
                <span className="count">{satisfaction}%</span>
                <p>Customer Satisfaction</p>
            </div>
        </div>
    );
};

export default ExperienceCounter;
