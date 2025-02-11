/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({ cartCount, wishlistCount }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/";

    const cart = () => {
        navigate("/dashboard");
    };

    const wishList = () => {
        navigate("/dashboard");
    };

    return (
        <div className={`navbar bg-base-100 ${isHome ? "bg-purple-700 text-white" : ""}`}>
            <div className="navbar-start">
                <h2 className="font-extrabold text-3xl">GadgetPulse</h2>
            </div>
            <div className="navbar-center flex flex-col md:flex-row items-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `btn btn-ghost text-xl font-bold ${isActive ? "font-extrabold text-yellow-500" : ""}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                        `btn btn-ghost text-xl font-bold ${isActive ? "font-extrabold text-yellow-500" : ""}`
                    }
                >
                    Statistics
                </NavLink>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `btn btn-ghost text-xl font-bold ${isActive ? "font-extrabold text-yellow-500" : ""}`
                    }
                >
                    Dashboard
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `btn btn-ghost text-xl font-bold ${isActive ? "font-extrabold text-yellow-500" : ""}`}>
                    Contact Us
                </NavLink>
            </div>
            <div className="navbar-end flex flex-col md:flex-row gap-3 items-center mt-3 md:mt-0">
                <div className="relative inline-block">
                    <button onClick={cart} className="btn btn-ghost btn-circle text-2xl">
                        <FaShoppingCart />
                    </button>
                    <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                    </span>
                </div>

                <button onClick={wishList} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg
                            className="w-6 h-6 text-yellow-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="absolute -top-4 -right-3 bg-red-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {wishlistCount}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
