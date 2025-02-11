/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({gadget}) => {

    let link= useNavigate()

    let handlePages=()=>{
        link(`/item/${gadget.product_id}`)
    }
    return (
        <div >
                <div className="card card-compact bg-base-100 w-96 shadow-xl p-8 flex flex-col max-h-96 ">
            <figure>
                <img className='shadow-lg p-5 bg-gray-600 rounded-lg'
                src={gadget.product_image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{gadget.product_title}</h2>
                <p className='font-bold  flex-grow'>Price: {gadget.price}$</p>
                <div className="card-actions">
                <button onClick={handlePages} className="btn btn-primary">View Details</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Card;