
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react'

const MenuItem = ({item}:any) => {
    const {image,name,price,recipe} = item;
  return (
    <div>
        {/* <Image width={100} height={100} src={image} alt='popular'></Image> */}
        <div>
            <h1>{name}</h1>
            <p>{recipe}</p>
        </div>
        <p>$ {price}</p>
    </div>
  )
}

export default MenuItem