'use client'
import React, { useEffect, useState } from 'react'
import RecommendsItem from './RecommendsItem'

const Recommends = () => {
    const [menus,setMenus] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenus(data))
    },[])
  return (
    <div>
            {
                menus.map((menu,idx) => <RecommendsItem key={idx} menu={menu}></RecommendsItem>)
            }
    </div>
  )
}

export default Recommends