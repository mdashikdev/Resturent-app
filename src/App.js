import { createContext, useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Deliver from './components/Deliver/Deliver';
import DeliveryDetails from './components/DeliveryDetails/DeliveryDetails';
import FoodDetail from './components/FoodDetail/FoodDetail';
import Header from './components/Header/Header'
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const FoodContext = createContext();

function App() {
  const [foods,setFoods] = useState([]);
  const [noti,setNoti] = useState({});
  const [user,setUser] = useState([]);
  const [address,setAddress] = useState();

  if (noti.message) {
    setTimeout(() => {
      setNoti({});
    }, 1500);
  }

  return (
    <FoodContext.Provider value={[foods,setFoods,noti,setNoti,user,setUser,address,setAddress]}>
      <Header loginStatus={user} setNoti={setNoti} setUser={setUser} />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />

        <Route path='/details' element={<PrivateRoute><DeliveryDetails/></PrivateRoute>} />
        <Route path='/deliver' element={<Deliver/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/food/detail/:foodId' element={<FoodDetail/>} />
      </Routes>
      {
        noti.status && 
            <div id='notification' className={noti.status === 'error' ? 'bg-red-500 fixed p-3 rounded-xl top-16 shadow-lg right-3 z-20 text-white' : 'bg-green-500 fixed p-3 rounded-xl top-16 shadow-lg right-3 z-20 text-white'}>
              {noti.message}
            </div>
      }
    </FoodContext.Provider>
  );
}

export default App;
