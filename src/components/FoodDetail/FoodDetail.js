import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FoodContext } from '../../App';
import fakeData from '../../fakeData.json';
import food1 from './fd1.png'
import food2 from './fd2.png'



const FoodDetail = () => {
    const {foodId} = useParams()
    const navigate = useNavigate();

    const food =fakeData.find(fd => fd.id === parseInt(foodId));
    const [foods,setFoods,noti,setNoti] = useContext(FoodContext);
    const [count, setcount] = useState(food.quantity ? `${food.quantity}` : 1 )
    const countInt = parseInt(count);
    const handleCount = (status) => {
        if (status === 'increase') {
            setcount(countInt + 1)
        }else{
            if (countInt > 1) {
                setcount(countInt - 1)
            }else{
                alert('Must 1 food')
            }
        }
    }

    const handleAddProduct = () => {
        const smfd = foods.find(fd => fd.id == food.id);

        let newProduct;
        if (smfd) {
            const filterOthers = foods.filter(fd => fd.id !== food.id);
            smfd.quantity = countInt;
            newProduct=[...filterOthers,smfd]
            setNoti({status:'okay',message:`Your ${countInt} food added on cart`})
        }else{
            food.quantity = countInt;
            newProduct=[...foods,food]
            setNoti({status:'okay',message:`Your ${countInt} food added on cart`})
        }
        setFoods(newProduct);
        navigate('../details')
    }

    return (
        <div className='w-full h-[100vh] flex justify-center  '>
            <div className='max-w-[1240px] flex flex-col md:flex-row lg:flex-row gap-3 m-8 justify-center items-center'>
                <div className='basis-1/2 order-2 md:order-1 lg:order-1 pb-5'>
                    <div className=''>
                        <h2 className='text-4xl font-semibold opacity-75'>{food.title}</h2>
                        <p className='mt-5 w-80 opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, reiciendis enim nihil inventore fugit eligendi amet iure labore? Similique quibusdam iure maiores est exercitationem blanditiis.</p>
                    </div>
                    <div className='flex gap-3 items-center mt-5'>
                        <strong className='text-3xl'>${food.price}</strong>
                        <div className='w-28 flex justify-between border rounded-full px-4 py-2'>
                            <button onClick={() => handleCount('decrease')} className='hover:bg-gray-200 hover:ring duration-700 ring-gray-100 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>
                            <input type='text' disabled value={count} onChange={(e) => setcount(e.target.value)} className='w-5 text-xl focus:outline-none'  />
                            <button onClick={() => handleCount('increase')} className='hover:bg-gray-200 hover:ring duration-700 ring-gray-100 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <button onClick={handleAddProduct} className='bg-red-500 flex gap-2 items-center focus:ring ring-red-300 duration-700 text-white px-5 py-2 rounded-full mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        Add
                    </button>
                    <div className='flex gap-3 mt-5'>
                        <img className='w-24 h-24 object-cover' src={food1} alt="" />
                        <img className='w-24 h-24 object-cover' src={food2} alt="" />
                    </div>
                </div>
                <div className='basis-1/2 order-1 md:order-2 lg:order-2 '>
                    <img src={food.photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;