import React from "react";
import Image from "next/image";

function PhoneCard({name, image, price, originalPrice, discountPercentage, savings}) {
  return (
    <div>
      <div className="border w-[230px] rounded-lg">
        <div className="relative flex justify-center bg-[#f5f5f5] py-2">
          <Image src={image} alt={name} className="object-contain"/>
          <div className="absolute -top-0 right-0 bg-primary px-[3px] py-2 rounded text-white">
            <p className="text-sm">
              {discountPercentage} <br></br>OFF
            </p>
          </div>
        </div>
        <div className="space-y-2 px-3">
          <h2 className="text-base text-heading font-semibold pt-2">
            {name}
          </h2>
          <p className="text-base text-heading font-bold">
            ₹{price}{" "}
            <del className="text-text">₹{originalPrice}</del>
          </p>
          <hr />
          <p className="text-[#249B3E] text-base font-semibold pb-2">
            Save - ₹{savings}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhoneCard;
