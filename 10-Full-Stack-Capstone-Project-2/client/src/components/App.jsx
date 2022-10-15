import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import axios from 'axios';
import '../css/App.css';
import MainSection from './MainSection';
import Cart from './Cart';
import Foods from './Foods';

const serverURL = "http://localhost:5500/";

const api = axios.create({
  baseURL: serverURL,
});

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    fetchData()
    fetchCartData()
  },[]);

  async function fetchData() {
    const res = await api.get("/foods");
    let data = res.data.data;
    setItems(data.results);
    // console.log(data.results)
  }

  async function fetchCartData() {
    const res = await api.get("/cart/allFood");
    let data = res.data;
    setCartItems(data);
    // console.log(data)
  }

  return (
    <Router>
      <header>
      <nav>
          <NavLink className="logo" to="/"><h1>Food Ordering Portal</h1></NavLink>
          <NavLink className="cart-btn" to="/food/cart"><i className="fa-solid fa-shopping-cart"></i>{cartItems.length}</NavLink>
      </nav>
      </header>
      <Routes>
        <Route path='/' element={<MainSection items={items}/>} />
        <Route path='/food/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} fetchCartData={fetchCartData} />} />
        <Route path='/food/:foodId' element={<Foods items={items} setCartItems={setCartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;