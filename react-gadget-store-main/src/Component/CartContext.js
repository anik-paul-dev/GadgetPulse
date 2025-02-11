/* eslint-disable react/prop-types */
// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    const addToCart = () => setCartCount(prevCount => prevCount + 1);
    const addToWishlist = () => setWishlistCount(prevCount => prevCount + 1);

    return (
        <CartContext.Provider value={{ cartCount, wishlistCount, addToCart, addToWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
