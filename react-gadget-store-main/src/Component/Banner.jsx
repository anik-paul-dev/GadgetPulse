import React from 'react';

import img from "../assets/banner.jpg"
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    let nav=useNavigate()


   let handleShop=()=>{
    nav("/dashboard")
   }
    return (
        <div className='relative'>

                <div className="hero bg-[#9538E2] min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-6xl">
                    <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with GadgetPulse Accessories</h1>
                    <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button onClick={handleShop} className="btn btn-[white] text-[blue] font-bold">Shop Now</button>
                    </div>
                </div>
                </div>

                <div className='relative -top-40'>
                        <img className='md:w-1/2 mx-auto rounded-lg' src={img}></img>
                    </div>


                    <h2 className='text-blue-500 text-5xl font-bold text-center mb-20'>Explore Cutting-Edge Gadgets</h2>
            
        </div>
    );
};

export default Banner;