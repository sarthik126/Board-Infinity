import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const serverURL = "http://localhost:5500/";
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const api = axios.create({
  baseURL: serverURL,
});

function App() {
  const [items, setItems] = useState([]);
  const [val,setVal] = useState("");

  useEffect(()=>{
    fetchData()
  },[]);

  async function fetchData() {
    const res = await api.get("/grocery/getAll");
    setItems(res.data);
  }

  async function addItem(e) {
    e.preventDefault()
    const res = await api.post("/grocery/add",{groceryItem:val,isPurchased:false});
    
    if(res.data.result === "success") {
      setVal("");
      fetchData()
    } 
  }
  
  async function deleteItem(id){
    const res = await api.post("/grocery/deleteGroceryItem",{id:id});
    if(res.data.result === "success") {
      fetchData()
    } 
  }

  async function purchasedItem(id){
    const res = await api.post("/grocery/updatePurchaseStatus",{id:id,isPurchased:true});
    if(res.data.result === "success") {
      fetchData()
    } 
  }

  return (
    <div>
      <header>
      <nav>
        <div className="nav-text">
          <h1>Monthly Grocery Planning App</h1>
        </div>
      </nav>
      </header>
      <section className="main">
        <div className='section-1'>
          <h2>Plan for the month of {month[new Date().getMonth()]}</h2>
          </div>
        <div className='section-2'>

        <form onSubmit={addItem}>
          <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} placeholder="Add Shopping Item" required></input>
          <button className='add-item'>Add</button>
        </form>

        <div className="content">
          <ul>
            {items.length !==0 && items.map((item, index) => {
              return <li key={item._id}>
                <div className='item-name'>
                  {item.isPurchased ? <strike>{item.groceryItem}</strike>:<span>{item.groceryItem}</span>}
                  </div>
                <div className="btns">
                  <button onClick={() => purchasedItem(item._id)} className="btn">Purchased</button>
                  <button onClick={() => deleteItem(item._id)} className="btn">X</button>
                </div>
              </li>
            })}
          </ul>
        </div>

        </div>
      </section>
    </div>
  );
}

export default App;