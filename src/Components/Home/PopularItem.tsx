'use client'
import React, { useEffect, useState } from 'react'
import SectionTitle from '../Shared/SectionTitle'
import MenuItem from '../Shared/MenuItem'

const PopularItem = () => {

    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const updatedData = data.filter((item) => item.category === 'popular')
            setMenu(updatedData);
        })
    },[])
  return (
    <>
    <div>
        <SectionTitle heading={'Check It Out'} subHeading={'FROM OUR POPULAR MENU'}></SectionTitle>
    </div>
    <div>
        {
            menu.map((item,idx) => <MenuItem key={idx} item={item}></MenuItem>)
        }
    </div>
    </>
  )
}

export default PopularItem