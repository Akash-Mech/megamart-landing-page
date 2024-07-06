"use client"

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuTitle = [
    {
      title: "Groceries",
    },
    {
      title: "Premium Fruits",
    },
    {
      title: "Home & Kitchen",
    },
    {
      title: "Fashion",
    },
    {
      title: "Electronics",
    },
    {
      title: "Beauty",
    },
    {
      title: "Home Improvement",
    },
    {
      title: "Sports, Toys & Luggage",
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto">
      <ul className="flex items-center justify-between overflow-x-auto gap-2 pb-4 ">
        {menuTitle.map((item, index) => (
          <Link href={"/"}>
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`flex items-center gap-2 py-1 px-2 rounded-[18px] text-heading font-medium w-max ${
                activeIndex === index
                  ? "bg-primary text-white transition-all"
                  : "bg-background text-black"
              }`}
            >
              {item.title}
              <IoIosArrowDown className={`${activeIndex === index ? "text-white" : "text-primary"}`} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
