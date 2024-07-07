import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiLineVerticalThin, PiShoppingCart } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import Link from "next/link";



function Header() {
  return (
    <div className="container mx-auto text-text">
        <div className="flex justify-between items-center gap-1 py-4">
            <div className="flex gap-2 items-center">
                <HiMenuAlt2 className="w-8 h-8 p-1 bg-background text-primary rounded-sm"/>
                <h2 className="text-primary text-xl md:text-4xl font-bold">MegaMart</h2>
            </div>            
            <div className="w-[40%] relative flex items-center lg:w-[50%] rounded-md bg-background">
                <IoIosSearch className="absolute left-0 mx-2 "/>
                <input type="text" className="w-full p-2 mx-5 outline-none bg-background" placeholder="Search essentials, groceries and more..."/>
                <TfiMenuAlt className="absolute right-0 mx-2 "/>
            </div>
            <div className='flex items-center'>
                <Link href={"/"} className='flex gap-1 items-center'>
                    <LuUser className='text-primary w-6 h-6'/>
                    <p className='md:text-[16px] font-bold hidden lg:block'>Sign Up/Sign In</p>
                </Link>
                <div className='hidden lg:block'>
                    <PiLineVerticalThin className="h-6 w-6"/>
                </div>
                <Link href={"/"} className='flex gap-1 items-center'>
                    <PiShoppingCart className='text-primary w-6 h-6'/> 
                    <p className='text-[16px] font-bold hidden lg:block'>Cart</p>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Header;
