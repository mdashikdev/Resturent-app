import React from 'react';
import image1 from './photo1.png'
import image2 from './photo2.png'
import image3 from './photo3.png'
import icon1 from './train.png'

const ChooseUs = () => {
    return (
        <div>
            <div className='grid justify-center mt-5 pb-5'>
                <div className='ml-5'>
                    <h2 className='text-3xl font-semibold'>Why you choose us</h2>
                    <p className='font-semibold w-8/12 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur doloribus dicta sunt Quibusdam pariatur.</p>
                </div>
                <div className='w-full lg:max-w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    <div className='flex flex-col m-4'>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div>
                        <div className='flex items-start gap-3 mt-5 ml-4'>
                            <img src={icon1} className='w-12 p-4 rounded-full bg-red-500' alt="" />
                            <div>
                                <h1 className='text-2xl font-bold'>Fast Delevery</h1>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in totam maiores repellendus, fugit suscipit.</h2>
                                <button className='flex gap-3 items-center text-blue-500 font-semibold'>
                                    See more
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='flex flex-col m-4 lg:shadow-lg lg:pb-5 rounded-xl'>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                        <div>
                        <div className='flex items-start gap-3 mt-5 ml-4'>
                            <img src={icon1} className='w-12 p-4 rounded-full bg-red-500' alt="" />
                            <div>
                                <h1 className='text-2xl font-bold'>Fast Delevery</h1>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in totam maiores repellendus, fugit suscipit.</h2>
                                <button className='flex gap-3 items-center text-blue-500 font-semibold'>
                                    See more
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='flex flex-col m-4'>
                        <div>
                            <img src={image3} alt="" />
                        </div>
                        <div>
                        <div className='flex items-start gap-3 mt-5 ml-4'>
                            <img src={icon1} className='w-12 p-4 rounded-full bg-red-500' alt="" />
                            <div>
                                <h1 className='text-2xl font-bold'>Fast Delevery</h1>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in totam maiores repellendus, fugit suscipit.</h2>
                                <button className='flex gap-3 items-center text-blue-500 font-semibold'>
                                    See more
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ChooseUs;