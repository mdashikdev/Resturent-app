import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FoodContext } from '../../App';

const PrivateRoute = ({children}) => {
    const [foods,setFoods,noti,setNoti,user,setUser] = useContext(FoodContext);
    const location = useLocation();
    const auth =false;

    return (
        user.displayName ? children : <Navigate to='../login' state={{from:location.pathname}} />
    );
};

export default PrivateRoute;