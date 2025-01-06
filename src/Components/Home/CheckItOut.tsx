import React from 'react'
import TimeManagement from '../Shared/SectionTitle'
import Image from 'next/image'

const CheckItOut = () => {
  return (
    <div className=" bg-[url('/featured.jpg')] h-full object-cover bg-no-repeat bg-fixed w-[90%] mx-auto">
            <div className="my-14 py-8 ">  
            {/* bg-slate-500 opacity-80 */}
                <TimeManagement
                    heading={'---Check it out---'}
                    subHeading={'FROM OUR MENU'}
                ></TimeManagement>

                <div className="lg:flex gap-8 py-16 lg:px-32 items-center text-white">
                    <div className='flex-1'>
                        <Image className='w-full h-full object-cover rounded-xl' width={300} height={300} src={'/featured.jpg'} alt='feature'/>
                    </div>
                    <div className="space-y-2 flex-1">
                        <h1 className="text-2xl">March 20, 2023 </h1>
                        <h1 className="text-2xl">WHERE CAN I GET SOME?</h1>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="py-2 px-4 border-0 border-b-4 rounded-lg text-white bg-green-700 text-xl">Read More</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CheckItOut