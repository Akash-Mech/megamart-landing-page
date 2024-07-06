import Image from "next/image";
import React from "react";

function EssentialCard({title, image}) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-[#f5f5f5] rounded-md border p-3 w-32 h-32 flex justify-center">
        <Image src={image} className="object-contain" alt={title} />
      </div>
      <p className="text-base font-semibold text-text py-2">{title}</p>
      <p className="font-bold text-heading text-xl">UP to 50% OFF</p>
    </div>
  );
}

export default EssentialCard;
