import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../Login/firebaseManager';
import logo from './logo2.png';

const Header = ({loginStatus,setNoti,setUser}) => {
    const navigate = useNavigate()
    const userName = loginStatus.displayName;
    const logout = () => {
        logOut()
        .then(res => {
            setNoti({status:'okay',message:'Logged Out successfull'});
            setUser([]);
            navigate('../');
        })
    }
    return (
        <div className='py-6 px-4 md:px-11 lg:px-32 shadow-md z-20'>
            <div className='flex justify-between'>
                <img onClick={() => navigate('./')} className='w-28 md:w-32 cursor-pointer' src={logo} alt="" />
                <div className='flex items-center gap-3 md:gap-6'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    {
                        userName ? 
                        <>
                            <strong>{userName}</strong>
                            <button onClick={logout} className='bg-red-500 hover:bg-red-400 duration-200 text-white rounded-full px-6 py-2' >Logout</button>
                        </>
                        :
                        <>
                            <button onClick={() => navigate('/login')}>Login</button>
                            <button onClick={() => navigate('/login')} className='bg-red-500 hover:bg-red-400 duration-200 text-white rounded-full px-6 py-2'>Sign up</button>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;