/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import FaqItem from './FaqItem';

const FaqSection = () => {
    const Faq = [
        {
          id: 1,
          question: "What is the capital of France?",
          answer:
            "The capital of France is Paris. Located in the north-central part of the country, Paris is not only the political hub of France but also a center for art, culture, and history. It is famous for iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. Paris is often referred to as the 'City of Light' due to its pivotal role in the Age of Enlightenment and its beautifully illuminated streets and monuments."
        },
        {
          id: 2,
          question: "Who wrote the play 'Romeo and Juliet'?",
          answer:
            "The play 'Romeo and Juliet' was written by William Shakespeare. This iconic tragedy tells the story of two young lovers from feuding families, the Montagues and the Capulets. It is one of Shakespeare's most popular works and has been adapted into countless films, plays, and other media."
        },
        {
          id: 3,
          question: "What is the boiling point of water at sea level?",
          answer:
            "The boiling point of water at sea level is 100 degrees Celsius (212 degrees Fahrenheit). At this temperature, water transitions from a liquid to a gas. However, boiling points can vary based on altitude and atmospheric pressure."
        },
        {
          id: 4,
          question: "Which planet is known as the Red Planet?",
          answer:
            "Mars is known as the Red Planet due to its reddish appearance, caused by iron oxide on its surface. It is the fourth planet from the Sun in our solar system."
        }
      ];
      const [open,setOpen] = useState(1)
      const handleToggle = (id:any) =>{
        setOpen(id)
      }
  return (
    <>
    <h1 className='text-3xl font-semibold text-center py-4'>Faqs Section</h1>
    <div className='lg:w-[70%] mx-auto my-10'>
            {
                Faq.map((item,idx) => <FaqItem key={idx} item={item} handleToggle={handleToggle} open={open}></FaqItem>)
            }
    </div>
    </>
  )
}

export default FaqSection