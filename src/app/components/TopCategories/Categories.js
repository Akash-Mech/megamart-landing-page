import Link from "next/link";
import React from "react";
import MobileCategory from "../../../../public/images/MobileCategory.png";
import Cosmetics from "../../../../public/images/Cosmetics.png";
import Electronics from "../../../../public/images/Electronics.png";
import Furniture from "../../../../public/images/Furniture.png";
import Watches from "../../../../public/images/Watches.png";
import Decor from "../../../../public/images/Decor.png";
import Accessories from "../../../../public/images/Accessories.png";
import CatergoryCard from "./CatergoryCard";

function Categories() {
  const categories = [
    {
      id: 1,
      image: MobileCategory,
      title: "Mobile",
    },
    {
      id: 2,
      image: Cosmetics,
      title: "Cosmetics",
    },
    {
      id: 3,
      image: Electronics,
      title: "Electronics",
    },
    {
      id: 4,
      image: Furniture,
      title: "Furniture",
    },
    {
      id: 5,
      image: Watches,
      title: "Watches",
    },
    {
      id: 6,
      image: Decor,
      title: "Decor",
    },
    {
      id: 7,
      image: Accessories,
      title: "Accessories",
    },
  ];
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-text text-2xl border-b-2 border-primary pb-1">
              Shop From <span className="text-primary">Top Categories</span>
            </p>
          </div>

          <Link href={"/"} className="font-medium text-base">
            View All{" "}
            <span className="text-primary text-lg font-extrabold">&#8594;</span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center md:justify-around lg:justify-stretch xl:justify-between gap-6 justify-around py-12 ">
          {categories.map((category) => (
            <div key={category.id}>
              <CatergoryCard
                title={category.title}
                image={category.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
