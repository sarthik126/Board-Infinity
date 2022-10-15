import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Foods.css';
import { useParams } from 'react-router-dom';
import FoodCard from './FoodCard';

const serverURL = "http://localhost:5500/";

const api = axios.create({
  baseURL: serverURL,
});

function Foods({items,setCartItems}) {

  const [subItemsData, setSubItemsData] = useState([]);
  const {foodId} = useParams()

  useEffect(()=>{
    filterData()
  },[foodId,items]);

  async function filterData() {
    items.forEach(item => {
      if(item["name"] === foodId)
      setSubItemsData(item["subItemsData"])
    });
  }

  async function addToCart(details) {
    const res = await api.post("/cart/addFood",details);
    let data = res.data;
    
    if(res.data.result === "success") {
      // console.log("ADD")
      // console.log(data.data)
      setCartItems(prev => [...prev,data.data])
    } 
  }

  return (
    <div>
      <h2 className='foods-header'>{subItemsData.name}</h2>
      <section className="all-foods">
        {subItemsData?.subItems?.map((item,index)=> <FoodCard key={index} details={item} actionFunc={addToCart} actionName={"Order Now"} />)}
      </section>
    </div>
  );
}

export default Foods;