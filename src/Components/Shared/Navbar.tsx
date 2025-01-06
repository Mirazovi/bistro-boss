import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full z-[999]'>
        <div className='flex justify-between items-center w-[90%] mx-auto bg-gray-200 shadow-lg mt-4 rounded-md'>
            <Image className='w-[150px]' width={200} height={200} src={'/Sultans-Diner-main-logo.png'} alt='logo'/>
            <div className='flex gap-4 items-center  text-xl'>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Our Menu</Link>
                <Link href={'/'}>Order</Link>
                <Link href={'/'}>Contact</Link>
            </div>
            <div>
                <button className='bg-purple-800 text-xl text-white py-6 px-6'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar