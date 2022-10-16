import React, { useContext } from 'react';
import { FoodContext } from '../../App';

const DeliveryCartItem = ({foodInfo}) => {
    const [foods,setFoods,noti,setNoti,user,setUser] = useContext(FoodContext);


    const handleCount = (status,id) => {
        const targeted = foods.find(fd => fd.id == id)
        const others = foods.filter(fd => fd !== id);

        if (status === 'increase') {
            targeted.quantity = targeted.quantity + 1
            const test =[...others]
            setFoods(test)
        }else{
            if (targeted.quantity > 1) {
                targeted.quantity = targeted.quantity - 1
                const test =[...others]
                setFoods(test)
            }else{
                alert('Must 1 food')
            }
        }
    }
    return (
    <>
        <div className='flex justify-start items-center gap-3 bg-gray-100 p-3 rounded-xl'>
            <img src={foodInfo.photo} className='basis-1/4 w-16 h-16 object-cover' alt="" />
            <div className='basis-3/4'>
                <strong className='leading-3'>{foodInfo.title}</strong>
                <h2 className='text-xl font-bold text-red-500'>${foodInfo.price}</h2>
                <p className='text-gray-400 text-sm'>Delivery free</p>
            </div>
            <div className='basis-2/4'>
                <div className='w-2 flex justify-between gap-1 rounded-full px-4 py-2'>
                    <button onClick={() => handleCount('decrease',foodInfo.id)} className='hover:bg-gray-200 hover:ring duration-700 ring-gray-100 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </button>
                    <span className='text-lg bg-white px-2 py-1 rounded-lg'>{foodInfo.quantity}</span>
                    <button onClick={() => handleCount('increase',foodInfo.id)} className='hover:bg-gray-200 hover:ring duration-700 ring-gray-100 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </>
    );
};

export default DeliveryCartItem;