import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { AddToLocalStorage, AddToLocalStorageW, getItemFromLs ,getItemFromLsW} from './AddToDb';

const Main = () => {

    const [cartCount, setCartCount] = useState(getItemFromLs().length);
    const [wishlistCount, setWishlistCount] = useState(getItemFromLsW().length);

    const handleAddToCart = (id) => {
        AddToLocalStorage(id);
        setCartCount(getItemFromLs().length); 
    };

    const handleAddToWishlist = (id) => {
        AddToLocalStorageW(id);
        setWishlistCount(getItemFromLsW().length);
    };

    useEffect(() => {
        
        setCartCount(getItemFromLs().length);
        setWishlistCount(getItemFromLsW().length);
    }, []);


   
     const resetCounts = () => {
        setCartCount(0);
        setWishlistCount(0);
    };


    
    
    return (
        <div className='overflow-x-hidden'>

           
           <NavBar cartCount={cartCount} wishlistCount={wishlistCount}></NavBar>
          
            <Outlet context={{ handleAddToCart, handleAddToWishlist, resetCounts }} ></Outlet>

            <Footer></Footer>

        

            
            
        </div>
    );
};

export default Main;