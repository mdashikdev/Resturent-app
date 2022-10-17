import React from 'react';
import logo from './logo.png'

const Footer = () => {
    return (
        <div className='flex justify-center py-8 md:py-16 bg-[#1e1e1e]'>
            <div className='w-10/12'>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <img src={logo} className='h-20 mb-3 md:h-12 lg:h-12 object-contain' alt="" />
                    <div className='flex justify-between gap-5 md:gap-28 text-sm md:text-md text-white '>
                        <ul className='leading-5'>
                            <li>About Online food</li>
                            <li>Read our blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>
                        <ul className='leading-5'>
                            <li>Get help</li>
                            <li>Read FAQs</li>
                            <li>View all cities</li>
                            <li>Restaurants near me</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center md:justify-between'>
                    <span className='text-white order-2 md:order-1 opacity-50 text-sm md:text-md text-center mt-5'>Copyright 2022 Online food</span>
                    <ul className='flex justify-between opacity-80 order-1 md:order-2 md:gap-8 mt-5 text-sm md:text-md text-white'>
                        <li>Privary Policy</li>
                        <li>Terms of Use</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;