import React, { useEffect } from 'react';
import Banner from './Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const Home = () => {
    useEffect(() => {
        document.title = "Gadgets | GadgetPulse"; 
      }, []);
    let data= useLoaderData()
        
    return (
        <div>

            <Banner></Banner>

            <div className='md:flex gap-20'>
            <Categories category={data}></Categories>

            <Outlet></Outlet>
            </div>



            
            
        </div>
    );
};

export default Home;