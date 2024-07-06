import React from 'react'
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { PiLineVerticalThin } from "react-icons/pi";


function HeaderTop() {
  return (
    <div className='container mx-auto  text-text bg-[#F5F5F5]'>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center py-2'>
            <div>
                <p className='font-normal text-[14px]'>Welcome to worldwide Megamart!</p>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0'>
                <div className='flex gap-1 items-center'>
                    <CiLocationOn className='text-primary w-[18px] h-[18px]'/>
                    <p className='text-[14px]'>Deliver to <b>423651</b></p>
                </div>
                <div className='hidden md:block'>
                    <PiLineVerticalThin />
                </div>
                <div className='flex gap-1 items-center'>
                    <CiDeliveryTruck className='text-primary w-[18px] h-[18px]'/> 
                    <p className='text-[14px]'>Track your order</p>
                </div>
                <div className='hidden md:block' >
                    <PiLineVerticalThin />
                </div>
                <div className='flex gap-1 items-center'>
                    <BiSolidOffer className='text-primary w-[18px] h-[18px]'/>
                    <p className='text-[14px]'>All Offers</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop