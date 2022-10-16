import React from 'react';
import banner from './bannerbackground.png';

const Hero = () => {
    return (
        <div>
            <div className='z-0'>
                <img className='w-screen h-[50vh] md:h-[80vh] absolute' src={banner} alt="" />
            </div>
            <div className=' z-10 relative h-[60vh] md:h-[80vh] grid items-center justify-center'>
                <div>
                    <h1 className='text-2xl md:text-5xl font-semibold'>Best Food Waiting for you belly</h1>
                    <div className='grid justify-center'>
                        <div className='relative w-[40vh] md:w-[50vh] lg:w-[60vh] flex justify-between bg-white rounded-full mt-8'>
                            <input className='py-3 px-6 rounded-full focus:outline-none placeholder:text-slate-400' type="text" placeholder='Search food items' name="" id="" />
                            <button className='h-full bg-red-500 absolute right-0 hover:bg-red-400 duration-200 focus:ring focus:ring-red-200  text-white px-6 py-2 rounded-full'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;