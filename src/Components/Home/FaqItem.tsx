/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { ArrowDown, ArrowUp } from '../Icons/Icons'

const FaqItem = ({item,handleToggle,open}:any) => {
  return (
    <div className='my-2'>
            <div onClick={() => handleToggle(item?.id)} className='flex justify-between items-center bg-gray-200 p-4 shadow-md rounded-t-lg'>
                <h1 className=''>{item.question}</h1>
                <div className='text-2xl' onClick={() => handleToggle(item?.id)}>
                    {
                        open === item?.id ?  <ArrowDown /> : <ArrowUp />
                    }
                </div>

            </div>
            {
                open === item?.id &&  <h1 className={` p-4 border-2 shadow rounded-b-lg`}>{item.answer}</h1>
             }
           
        </div>
  )
}

export default FaqItem