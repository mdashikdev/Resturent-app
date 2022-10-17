import React, { useContext, useState } from 'react';
import { FoodContext } from '../../App';
import DeliveryCartItem from '../DeliveryCartItem/DeliveryCartItem';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const DeliveryDetails = () => {
    const [foods,setFoods,noti,setNoti,user,setUser,address,setAddress] = useContext(FoodContext);
    const navigate =useNavigate();
    const {values,errors,handleSubmit,handleChange,handleBlur,resetForm} = useFormik({
        initialValues: {
            location:'',
            roadnumber: '',
            flatOrFloor:'',
            business:'',
            instructor:''
        },
        validationSchema: Yup.object({
            location: Yup.string().required('Address Required'),
            roadnumber: Yup.string().required('Road number required'),
          }),
        onSubmit: values => {
            setAddress({
                location:values.location,
                roadnumber:values.roadnumber,
                flatOrFloor:values.flatOrFloor,
                business:values.business,
                instructor:values.instructor
            })
            resetForm();
        }
        
    });
    const total = foods.reduce(((total,pd) => {
        return parseInt(total) + ( parseInt(pd.price) * parseInt(pd.quantity) )
    }),[0])
    const tax = (total / 100) * 8;
    let deliveryFee=0;
    if (total == 0) {
        deliveryFee = 0
    }else if (total > 40) {
        deliveryFee = 0
    }else if(total > 25){
        deliveryFee = 8
    }else{
        deliveryFee = 5
    }

    return (
        <div className='w-full md:py-8 flex justify-center items-center'>
            <div className='w-10/12 max-w-[1240px] flex flex-col md:flex-row lg:flex-row justify-between gap-3'>
                <div className='md:w-5/12 lg:w-5/12 pt-5 pb-5'>
                    <h2 className='text-3xl font-semibold opacity-70 pb-2'>Edit Delivery Details</h2>
                    <hr />
                    <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3 mt-4'>
                        <input type="text" name="location" value={values.location} onChange={handleChange} onBlur={handleBlur} className='inptField px-4 py-2' placeholder='Location' id="" />
                        <p>{errors.location}</p>
                        <input type="text" name="roadnumber" value={values.roadnumber} onChange={handleChange} onBlur={handleBlur} className='inptField px-4 py-2' placeholder='Road number' id="" />
                        <p>{errors.roadnumber}</p>
                        <input type="text" name="flatOrFloor" value={values.flatOrFloor} onChange={handleChange} onBlur={handleBlur} className='inptField px-4 py-2' placeholder='Flat, suite or floor' id="" />
                        <input type="text" name="business" value={values.business} onChange={handleChange} onBlur={handleBlur} className='inptField px-4 py-2' placeholder='Business Name' id="" />
                        <input type="textarea" name="instructor" value={values.instructor} onChange={handleChange} onBlur={handleBlur}  className='inptField px-4 py-2' placeholder='Add delivery instructor' id="" />
                        <input type="submit" className='bg-red-500 cursor-pointer duration-300 hover:ring focus:ring-offset-1 ring-red-300 px-4 py-3 rounded text-white text-lg' value='Save & Continue' />
                    </form>
                </div>
                <div className='md:w-7/12 lg:w-4/12 pb-8'>
                    <div className='mb-3'>
                        <h4 className='text-xl'>
                            From 
                            <strong> {address?.location} </strong>
                        </h4>
                        <p className='text-lg'>Arriving in 20-30 min</p>
                        <p>{address?.roadnumber}</p>
                    </div>
                    <div className='grid gap-3 max-h-72 overflow-auto'>
                        {
                            foods.map(food => <DeliveryCartItem foodInfo={food} key={food.id} /> )
                        }
                    </div>
                    <div className='flex justify-between my-5 font-semibold'>
                        <ul className='leading-7'>
                            <li>Subtotal . {foods.length} item</li>
                            <li>Tax</li>
                            <li>Delivery fee</li>
                            <li>Total</li>
                        </ul>
                        <ul className='leading-7'>
                            <li>${total}</li>
                            <li>${tax}</li>
                            <li>${deliveryFee}</li>
                            <li>${total + tax + deliveryFee}</li>
                        </ul>
                    </div>
                    <button onClick={() => navigate('../deliver')} disabled={ address?.location && foods.length ? false : true } className={address?.location && foods.length >= 1 ? 'bg-red-500 w-full px-4 py-3 rounded hover:bg-red-600 duration-300 text-white' :'w-full px-4 py-3 bg-red-200 text-white'}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryDetails;