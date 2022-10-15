import React from 'react'
import MainCard from './MainCard';

export default function MainSection({items}) {
  return (
    <div>
    <section className="main">
        {items.map((item,index) => <MainCard key={index} subItems={item["subItemsData"]} subName={item["name"]} imageURL={item["imageURL"]} />)}
      </section>
    </div>
  )
}
