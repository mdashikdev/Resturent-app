import React, { useContext, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import fakeData from '../../fakeData.json';
import { findByAltText } from '@testing-library/react';
import { FoodContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const CategoryProduct = () => {
    const [tab,setTab] = useState('lunch');
    const filteredFoods = fakeData.filter(fd => fd.category.toLowerCase() == tab);
    const [foods,setFoods] = useContext(FoodContext);
    const navigate = useNavigate();


    return (
        <div>
            <ul className='w-full flex justify-center md:pt-8 lg:pt-8 gap-5 font-semibold cursor-pointer'>
                <li onClick={() => setTab('breakfast')} className={tab === 'breakfast' ? 'active border-b-2 border-red-500' : ''} >Breakfast</li>
                <li onClick={() => setTab('lunch')} className={tab === 'lunch' ? 'active border-b-2 border-red-500' : ''}>Lunch</li>
                <li onClick={() => setTab('dinner')} className={tab === 'dinner' ? 'active border-b-2 border-red-500' : ''}>Dinner</li>
            </ul>
            <div className='grid justify-center mt-5'>
                <div className='w-full lg:max-w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        filteredFoods.map(fd => <SingleFood foodInfo={fd} key={fd.id} />)
                    }
                </div>
                <div className='w-full flex justify-center mb-8'>
                    <button onClick={() => navigate('./details')} disabled={foods.length >= 1 ? false : true } disable='disabled' className={!foods ? 'bg-slate-400':'w-fit text-white px-8 py-2 rounded bg-slate-500'}>Checkout Your Food</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;