import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home as HomeIcon } from "@mui/icons-material";
import Navbar from "./components/Navbar";
import FloatingCart from "./components/FloatingCart";
import CartModal from "./components/CartModal";
import MenuPage from "./pages/MenuPage";
import HomePage from "./pages/HomePage";
import "./App.css";

const App = () => {
    const [cart, setCart] = useState([]);
    const [showCartModal, setShowCartModal] = useState(false);
    const [showHomeIcon, setShowHomeIcon] = useState(true);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    useEffect(() => {
        const handleScroll = () => {
            // Show home icon only when the user is at the top of the page
            setShowHomeIcon(window.scrollY < 50); // Threshold for visibility
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Router>
            <Routes>
                {/* Menu Page */}
                <Route
                    path="/menu"
                    element={
                        <div>
                            {/* Home Icon */}
                            {showHomeIcon && (
                                <Link to="/" className="home-icon">
                                    <HomeIcon style={{ fontSize: 30 }} />
                                </Link>
                            )}
                            <FloatingCart
                                cartItems={cart}
                                onCartClick={() => setShowCartModal(true)}
                            />
                            <CartModal
                                show={showCartModal}
                                onClose={() => setShowCartModal(false)}
                                cart={cart}
                                removeFromCart={removeFromCart}
                            />
                            <MenuPage addToCart={addToCart} />
                        </div>
                    }
                />
                {/* Other Routes */}
                <Route
                    path="*"
                    element={
                        <>
                            <Navbar />
                            <FloatingCart
                                cartItems={cart}
                                onCartClick={() => setShowCartModal(true)}
                            />
                            <CartModal
                                show={showCartModal}
                                onClose={() => setShowCartModal(false)}
                                cart={cart}
                                removeFromCart={removeFromCart}
                            />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                            </Routes>
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
