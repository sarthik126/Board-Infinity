import React from 'react'
import '../css/Foods.css';
import '../css/Cart.css';
import FoodCard from './FoodCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const serverURL = "http://localhost:5500/";

const api = axios.create({
  baseURL: serverURL,
});

export default function Cart({cartItems,setCartItems,fetchCartData}) {
  let navigate = useNavigate()

  async function removeFromCart(details) {
    const res = await api.delete("/cart/deleteFood",{data:{id:details._id}});

    if(res.data.result === "success") {
      fetchCartData();
    } 
  }

  async function clearCart() {
    const res = await api.delete("/cart/deleteAllFood");

    if(res.data.result === "success") {
      alert("Your order has been placed successfully!")
      setCartItems([]);
      navigate("/");
    } 
  }

  return (
    <div className='cart-main'>
    <h2 className='cart-logo-text'>You Have Ordered:</h2>
    <section className="all-foods cart-food">
        {cartItems.map((item,index)=> <FoodCard key={index} details={item} actionFunc={removeFromCart} actionName={"Remove"} />)}
    </section>
    <div className='place-order'>
    {cartItems.length !== 0 ? <button className='btn btn-danger' onClick={()=>clearCart()}>Place Order</button> : ""}
    </div>
    </div>
  )
}
