import React from 'react';
import style from './style.css';
import {useNavigate} from 'react-router-dom'

const SingleFood = ({foodInfo}) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/food/detail/${foodInfo.id}`) } className='basis-3/4 prd cursor-pointer hover:bg-slate-200 duration-200 bg-white rounded-lg flex flex-col md:m-[50px] lg:m-[50px] py-7 px-7 items-center'>
            <img className='w-48' src={foodInfo.photo} alt="" />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl font-semibold'>{foodInfo.title}</h1>
                <p>{foodInfo.title.slice(0,45)}</p>
                <h3 className='text-2xl font-semibold'>${foodInfo.price}</h3>
            </div>
        </div>
    );
};

export default SingleFood;