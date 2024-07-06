import Link from "next/link";
import React from "react";
import DailyEssentials from "../../../../public/images/DailyEssentials.png";
import Vegitables from "../../../../public/images/Vegitables.png";
import Fruits from "../../../../public/images/Fruits.png";
import Strowberry from "../../../../public/images/Strowberry.png";
import Mango from "../../../../public/images/Mango.png";
import Cherry from "../../../../public/images/Cherry.png";
import EssentialCard from "./EssentialCard";

function Essentials() {
    const essentials = [
        {
            id: 1,
            image: DailyEssentials,
            title: "Daily Essentials",
          },
          {
            id: 2,
            image: Vegitables,
            title: "Vegitables",
          },
          {
            id: 3,
            image: Fruits,
            title: "Fruits",
          },
          {
            id: 4,
            image: Strowberry,
            title: "Strowberry",
          },
          {
            id: 5,
            image: Mango,
            title: "Mango",
          },
          {
            id: 6,
            image: Cherry,
            title: "Cherry",
          },
    ]
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex items-center justify-between py-8 ">
          <div>
            <p className="font-bold text-text text-2xl border-b-2 border-primary pb-1">
              Daily <span className="text-primary">Essentials</span>
            </p>
          </div>

          <Link href={"/"} className="font-medium text-base">
            View All{" "}
            <span className="text-primary text-lg font-extrabold">&#8594;</span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center md:justify-around lg:justify-stretch xl:justify-between  justify-around py-12 ">
          {essentials.map((essential) => (
            <div key={essential.id}>
              <EssentialCard
                title={essential.title}
                image={essential.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Essentials;
