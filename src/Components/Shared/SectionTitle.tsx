/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const SectionTitle = ({heading,subHeading}:any) => {
  return (
    <div className='flex flex-col justify-center items-center w-[30%] mx-auto mt-10'>
            <h1 className='pb-2 text-2xl text-yellow-600'>{heading}</h1>
            <div>
                <h2 className='py-4 border-y-4 text-4xl text-center'>{subHeading}</h2>
            </div>
    </div>
  )
}

export default SectionTitle