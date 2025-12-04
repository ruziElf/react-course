import axios from 'axios';
import {Routes, Route} from 'react-router';
import {useState, useEffect} from 'react';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';  
import { OrderPage } from './pages/orders';
import { TrackingPage } from './pages/tracking';


import './App.css'

function App() {
   const [cart, setCart]=useState([]);
   
   useEffect(()=> {
      axios.get('/api/cart-items?expand=product')
        .then((response) => {
          setCart(response.data);
        
        });
   },[]) ;
    

  return (
    <Routes>
      <Route  index element={ <HomePage  cart= {cart}/> }/>
      <Route path='checkout' element={<CheckoutPage cart={cart}/>}/>
      <Route path='orders' element={<OrderPage/>}/>
      <Route path='tracking' element={<TrackingPage/>}/>
    </Routes>

   
  )
}

export default App
