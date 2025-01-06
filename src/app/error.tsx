"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <Image className='w-[500px]' width={300} height={300} src={'/notFound.png'} alt='notFound'/>
      <p className='text-5xl text-gray-600 font-semibold py-4'>Opps Page Not Found</p>
      <Link href={'/'} className='py-2 px-4 bg-purple-700 text-xl mt-4 rounded-md text-white'>Back to home</Link>
    </div>
  )
}

export default error