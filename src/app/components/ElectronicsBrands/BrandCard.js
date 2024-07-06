import Image from "next/image";
import React from "react";

function BrandCard({ name, image, icon }) {
  return (
    <div className="px-2 h-52">
      <div className="relative">
        <Image src={image} alt={name} className="w-full h-auto object-cover" />
        <div className="absolute top-3 left-0 w-full pb-4">
          <div className="space-y-3 p-2">
            <h2 className="text-base font-semibold pt-2 text-white bg-[#494949] w-fit p-2 rounded-md">
              {name}
            </h2>
            <Image src={icon} className="text-base text-heading font-bold" />
            <p className="font-semibold text-2xl ">UP to 80% OFF</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandCard;
