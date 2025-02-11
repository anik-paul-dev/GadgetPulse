import React from 'react';

const Footer = () => {
    return (
        <div>

<footer className="bg-gray-200 text-black py-8 mt-20 rounded-lg">
            <div className="container mx-auto >
 px-4">
                <div className="">
                  <div className="mx-auto text-center">
                        <h2 className="text-3xl font-extrabold mb-4">GadgetPulse</h2>
                        <p className='text-[#09080F99] font-bold'>Leading the way in cutting-edge technology and innovation.</p>
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-around text-center mt-10 '>


                    <div className="">
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Product Support</a></li>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Order Tracking</a></li>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Returns</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold mb-4">Company</h3>
                        <ul>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">About Us</a></li>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Careers</a></li>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Contact</a></li>

                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-bold mb-4">Legal</h3>
                        <ul>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline text-[#09080F99] font-bold">Cookie Policy</a></li>
                        </ul>
                    </div>



                    </div>
                   
                </div>
                <div className="mx-auto text-center text-[#09080F99] font-bold ">
                      <p>&copy;2024, December | This Website is Developed by ANIK PAUL for the purpose of (I027- Front end ReactJS Course) | All Rights Reserved.</p>
                    </div>
            </div>
        </footer>
            
        </div>
    );
};

export default Footer;