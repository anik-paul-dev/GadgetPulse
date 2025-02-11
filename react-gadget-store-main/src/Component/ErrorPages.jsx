import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPages = () => {
    return (
        <div>

            <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
                        <h1 className="text-6xl font-extrabold text-purple-700 mb-4">404</h1>
                        <p className="text-xl font-semibold text-gray-800 mb-4">Oops! Page not found</p>
                        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
                        <Link to="/" className="px-6 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 font-bold">
                            Go Back to Home
                        </Link>
                    </div>

            
            
        </div>
    );
};

export default ErrorPages;