/* eslint-disable react/prop-types */
import React from 'react';
import { ImCross } from "react-icons/im";

const Datawish = ({wish}) => {
    return (
        <div>

<div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 max-w-6xl mx-auto my-4 mt-10 gap-10">
      {/* Product Image */} 
      <div className="w-24 h-24 bg-gray-300 rounded-md">
      <img src={wish.product_image} alt="" />
    
      </div>

      {/* Product Details */}
      <div className="flex-1 px-4">
        <h2 className="text-xl font-bold text-gray-800">{wish.product_title}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Description:</span> {wish.description}
        </p>
        <p className="text-gray-800 font-bold">Price: ${wish.price}</p>
      </div>

      {/* Add to Cart and Remove Icon */}
      <div className="flex flex-col items-center">
    
        <button className="text-red-500 hover:text-red-600 text-lg relative -top-10 -right-2">
          <ImCross></ImCross>
        </button>
      </div>
    </div>

            
            
        </div>
    );
};

export default Datawish;