import React, { useEffect, useState } from 'react';
import { useLoaderData, useOutletContext, useNavigate } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { getItemFromLs, getItemFromLsW, RemoveFromLS } from './AddToDb';
import Cart from './Cart';
import Datawish from './Datawish';
import Modal from './Modal';

const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard | GadgetPulse"; 
      }, []);
    const [showModal, setShowModal] = useState(false); 
    const { resetCounts } = useOutletContext();
    const navigate = useNavigate(); 

    const [price, setPrice] = useState(0);
    const [originalPrice, setOriginalPrice] = useState(0); 
    const [data, setData] = useState([]);
    const [wishList, setWishlist] = useState([]);

    const Ls_data = useLoaderData();

    useEffect(() => {
        const getLsData = getItemFromLs();
        const getWishListData = getItemFromLsW();

        const dataInt = getLsData.map(id => parseInt(id));
        const WishdataInt = getWishListData.map(id => parseInt(id));

        const readBookList = Ls_data.filter(item => dataInt.includes(item.product_id));
        const readWishBookList = Ls_data.filter(item => WishdataInt.includes(item.product_id));

        setData(readBookList);
        setWishlist(readWishBookList);

        // Calculate the total cost
        const totalCost = readBookList.reduce((acc, item) => acc + item.price, 0);
        setPrice(totalCost);
        setOriginalPrice(totalCost); // Set original price
    }, [Ls_data]);

    const sortByPriceDescending = () => {
        const sortedData = [...data].sort((a, b) => b.price - a.price);
        setData(sortedData);
    };

    const handlePurchase = () => {
        setShowModal(true);
    
        localStorage.removeItem("read");
        localStorage.removeItem("WishList");
    
        setData([]);
        setWishlist([]);
        setPrice(0);
    };

    const handleRemove = (id) => {
        RemoveFromLS(id);
        const updatedData = getItemFromLs().map(id => 
            Ls_data.find(item => item.product_id === id)
        ).filter(Boolean);
        setData(updatedData);

         // Calculate new total price
    const newTotalPrice = updatedData.reduce((acc, item) => acc + item.price, 0);
    setPrice(newTotalPrice); 
    };

    
    const handleCloseModal = () => {
        setShowModal(false);
        resetCounts(); 
        navigate('/'); 
    };

    return (
        <div>
            {showModal && (
                <Modal
                    onClose={handleCloseModal}
                    totalPrice={originalPrice} // Show original total price in the modal
                />
            )}

            <div className="hero bg-[#9538E2] min-h-screen relative">
                <div className="hero-content text-center">
                    <div className="max-w-6xl">
                        <h1 className="text-5xl font-bold text-white">Dashboard</h1>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>

            <Tabs>
                <TabList className="flex relative -top-40 justify-center gap-5">
                    <Tab className="btn text-blue-800 font-bold">Cart</Tab>
                    <Tab className="btn text-blue-800 font-bold">Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <div className="md:flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold">Cart</h2>
                        </div>
                        <div className="md:flex gap-10 justify-center items-center">
                            <p className="text-2xl font-bold">Total Cost: ${price}</p>
                           
                           <button onClick={sortByPriceDescending} className="btn btn-outline bg-gray-300 font-bold">Sort by Price</button> <br />
                            <button
                                onClick={handlePurchase}
                                className={`btn bg-blue-600 font-bold ${price === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                                disabled={price === 0} // Disable if total price is 0
                            >
                                Purchase
                            </button>
                          
                        </div>
                    </div>

                    {data.map(cart => <Cart key={cart.product_id} cart={cart} handleRemove={handleRemove} />)}
                </TabPanel>

                <TabPanel>
                    <div>
                        <h2 className="text-2xl font-bold">Wishlist</h2>
                    </div>
                    {wishList.map(wish => <Datawish key={wish.product_id} wish={wish} />)}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;
