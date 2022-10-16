import React, { useContext, useState } from 'react';
import banner from './loginbanner.png'
import logo from './logo2.png'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPass, loginUser, updateName } from './firebaseManager';
import { FoodContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginsts,setloginsts] = useState(true);
    const [foods,setFoods,noti,setNoti,user,setUser] = useContext(FoodContext);
    const navigate = useNavigate();
    const history = useLocation();
    const redirect = history?.state ? `${history?.state?.from}` : `../` ;

    const {values,errors,handleSubmit,handleChange,handleBlur,resetForm} = useFormik({
        initialValues: {
            name:'',
            email: '',
            pass:'',
            confirmPass:''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            pass: Yup.string().min(6).required('Invalid Password'),
          }),
        onSubmit: values => {
        setNoti({status:'okay',message:'loading'})
          if (loginsts) {
            //Login User

            loginUser(values.email,values.pass)
            .then(res => {
                setNoti({status:'okay',message:'Logged In'});
                navigate(redirect);
                setUser(res)
            })
            .catch(err => {
                setNoti({status:'error',message:`Failed`})
                console.log(err)
            })

          }else{
            //Register user

            createUserWithEmailAndPass(values.email,values.pass)
            .then(res => {
                updateName(values.name)
                .then(res => {
                    setNoti({status:'okay',message:'Your Account Created! You can login now.'});
                    navigate(redirect);
                    setUser(res);
                })
                .catch(err => {
                    setNoti({status:'err',message:'Account Created but name cant updated'})
                })
            })
            .catch(err => {
                setNoti({status:'error',message:'Failed'})
            })
          }

          resetForm();
        }

      });
      
    return (
        <div>
            <div>
                <img src={banner} className='w-screen h-screen absolute z-1' alt="" />
            </div>
            <div className='z-10  relative w-full h-screen flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                <img src={logo} className='w-52' alt="" />
                <form action="" className='w-2/4 md:w-2/4 lg:w-1/4 flex flex-col gap-4 mt-12'>
                    {
                        !loginsts &&
                        <div className='w-full'>
                            <input className='inptField px-4 py-2' onChange={handleChange} required onBlur={handleBlur} value={values.name} type="text" placeholder='Name' name="name" id="" />
                            <p className='text-red-500'>{errors.name}</p>
                        </div>
                    }
                    <div>
                        <input className='inptField px-4 py-2' onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" placeholder='Email' name="email" id="" />
                        <p className='text-red-500'>{errors.email}</p>
                    </div>
                    <div>
                        <input className='inptField px-4 py-2' onChange={handleChange} onBlur={handleBlur} value={values.pass} type="passwprd" placeholder='Password' name="pass" id="" />
                        <p className='text-red-500'>{errors.pass}</p>
                    </div>
                    {
                        !loginsts &&
                        <div className='w-full'>
                            <input className='inptField px-4 py-2' required type="password" onChange={handleChange} onBlur={handleBlur} value={values.confirmPass} placeholder='Confirm password' name="confirmPass" id="" />
                            <p className='text-red-500'>{errors.confirmPass}</p>
                        </div>
                    }
                    <input className='bg-red-500 cursor-pointer duration-300 hover:ring focus:ring-offset-1 ring-red-300 px-4 py-2 rounded text-white' type="submit" value={loginsts ? 'Login' : 'Register'} />
                </form>
                {
                    !loginsts ?
                        <p className='text-red-500 mt-4 cursor-pointer' onClick={() => setloginsts(!loginsts)}>Already have an account?</p>
                    :
                        <p className='text-red-500 mt-4 cursor-pointer' onClick={() => setloginsts(!loginsts)}>Not an account?</p>
                }
            </div>
        </div>
    );
};

export default Login;