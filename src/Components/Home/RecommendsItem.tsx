/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react'

const RecommendsItem = ({menu}:any) => {
    const {image,name,recipe} = menu;
    console.log(menu);
  return (
    <div className=''>
        <Image className='w-full' width={300} height={300} src={image} alt='recipe'/>
        <div className='bg-gray-200 py-2 text-center'>

        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className=' font-semibold'>{recipe}</p>
        <div className='flex justify-center items-center'>

        <button className='py-2 px-6 rounded-lg text-xl text-white bg-gray-300 '>Add To Cart</button>
        </div>
        </div>
    </div>
  )
}

export default RecommendsItem