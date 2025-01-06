/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react'

const RecommendsItem = ({menu}:any) => {
    const {image,name,recipe} = menu;
    console.log(menu);
  return (
    <div>
        {/* <Image width={300} height={300} src={image} alt='recipe'/> */}
        <h1>{name}</h1>
        <p>{recipe}</p>
        <button>Add To Cart</button>
    </div>
  )
}

export default RecommendsItem