import Link from "next/link";
import React from "react";
import GalaxyS22 from "../../../../public/images/GalaxyS22.png";
import GalaxyM13 from "../../../../public/images/GalaxyM13.png";
import GalaxyM33 from "../../../../public/images/GalaxyM33.png";
import GalaxyM53 from "../../../../public/images/GalaxyM53.png";
import GalaxyUltra from "../../../../public/images/GalaxyUltra.png";
import PhoneCard from "./PhoneCard";

function Phones() {
  const phones = [
    {
      id: 1,
      image: GalaxyS22,
      name: "Galaxy S22 Ultra",
      price: 32999,
      originalPrice: 74999,
      discountPercentage: "56%",
      savings: 32999,
    },
    {
      id: 2,
      image: GalaxyM13,
      name: "Galaxy M13 (4GB | 64 GB )",
      price: 10499,
      originalPrice: 14999,
      discountPercentage: "56%",
      savings: 4500,
    },
    {
      id: 3,
      image: GalaxyM33,
      name: "Galaxy M33 (4GB | 64 GB )",
      price: 16999,
      originalPrice: 24999,
      discountPercentage: "56%",
      savings: 8000,
    },
    {
      id: 4,
      image: GalaxyM53,
      name: "Galaxy M53 (4GB | 64 GB )",
      price: 31999,
      originalPrice: 40999,
      discountPercentage: "56%",
      savings: 9000,
    },
    {
      id: 5,
      image: GalaxyUltra,
      name: "Galaxy S22 Ultra",
      price: 67999,
      originalPrice: 85999,
      discountPercentage: "56%",
      savings: 18000,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-text text-2xl border-b-2 border-primary pb-1">
              Grab the best deal on{" "}
              <span className="text-primary">Smartphones</span>
            </p>
          </div>

          <Link href={"/"} className="font-medium text-base">
            View All{" "}
            <span className="text-primary text-lg font-extrabold">&#8594;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 py-12 justify-items-center">
          {phones.map((phone) => (
            <div key={phone.id}>
              <PhoneCard
                name={phone.name}
                image={phone.image}
                price={phone.price}
                originalPrice={phone.originalPrice}
                discountPercentage={phone.discountPercentage}
                savings={phone.savings}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Phones;
