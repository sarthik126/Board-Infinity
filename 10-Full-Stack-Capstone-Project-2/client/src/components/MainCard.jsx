import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/MainCard.css';

export default function MainCard({subItems,subName,imageURL}) {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/food/${subName}`)} className='main-card'>
        <img src={imageURL} ></img>
        <div className='sub-name'>{subName}</div>
    </div>
  )
}
