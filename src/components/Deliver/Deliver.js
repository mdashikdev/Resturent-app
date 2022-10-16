import React, { useContext } from 'react';
import map from './map.png';
import bikeIcon from './bike.png'
import icon from './icon.png'
import { FoodContext } from '../../App';


const Deliver = () => {
    const [foods,setFoods,noti,setNoti,user,setUser,address,setAddress] = useContext(FoodContext);
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-10/12 max-w-[1240px] h-screen flex flex-col md:flex-row lg:flex-row gap-5 items-center justify-between'>
                <div className='basis-4/5 flex justify-center mt-5'>
                    <img className='rounded-3xl w-10/12' src={map} alt="" />
                </div>
                <div className='basis-1/4 bg-gray-100 px-5 py-5 rounded-2xl'>
                    <img className='w-20 p-2' src={bikeIcon} alt="" />
                    <div className='bg-white p-4 rounded-2xl'>
                        <div>
                            <h2 className='text-xl font-semibold '>Your Location</h2>
                            <p className='font-semibold text-sm opacity-50'>{address.location}</p>
                        </div>
                        <div className='mt-5'>
                            <h2 className='text-xl font-semibold '>Shop Address</h2>
                            <p className='font-semibold text-sm opacity-50'>{address.roadnumber}</p>
                        </div>
                    </div>
                    <div className='p-3'>
                        <h2 className='text-3xl font-semibold'>09:30</h2>
                        <p className='text-lg opacity-75'>Estimated delivery time</p>
                    </div>
                    <div className='flex gap-3 items-center bg-white p-3 rounded-lg'>
                        <img className='w-16' src={icon} alt="" />
                        <div>
                            <strong>{user.displayName}</strong>
                            <p>Your raider</p>
                        </div>
                    </div>
                    <button className=' w-full rounded-xl text-lg text-white font-semibold py-3 bg-red-500 hover:bg-red-600 focus:ring ring-red-300 duration-500 mt-5'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Deliver;