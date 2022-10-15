import React from 'react'
import '../css/FoodCard.css';

export default function FoodCard({details,actionFunc,actionName}) {
  return (
    <div className='card'>
        <div className="left">
            <div className="card-name">{details.name}</div>
            <div className="card-price"><span>Rs.</span>{details.price}</div>
            <div className="card-desc">{details.description}</div>
            <button className='btn btn-danger' onClick={()=>actionFunc(details)}>{actionName}</button>
        </div>
        <div className="right"><img src={details.imageURL} alt={details.description} /></div>
    </div>
  )
}
