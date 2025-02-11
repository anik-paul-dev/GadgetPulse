/* eslint-disable react/prop-types */
import React from 'react';

const Modal = ({ onClose, totalPrice }) => {
    return (
        <div className="z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
                {/* Success Icon */}
                <div className="flex justify-center mb-4">
                    <div className="bg-yellow-500 p-4 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2l4 -4"
                            />
                        </svg>
                    </div>
                </div>
                {/* Title */}
                <h2 className="text-xl font-bold mb-2">Payment Successfully</h2>
                {/* Message and Total */}
                <p className="text-gray-600 mb-4 font-bold">
                    Thanks for purchasing.
                    <br />
                    Total: {totalPrice.toFixed(2)}
                </p>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="mt-4 w-full py-2 text-white bg-yellow-300 rounded-full hover:bg-gray-400 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
