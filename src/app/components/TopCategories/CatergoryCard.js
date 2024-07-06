import Image from 'next/image'
import React from 'react'

function CatergoryCard({title, image}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='bg-[#f5f5f5] rounded-full border w-32 h-32 flex justify-center'>
            <Image src={image} className='object-contain' alt={title}/>
        </div>
        <p className='text-base font-medium text-heading py-2'>{title}</p>
    </div>
  )
}

export default CatergoryCard