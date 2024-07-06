"use client";

import Link from "next/link";
import React from "react";
import Iphone from "../../../../public/images/IphoneBg.png";
import Realme from "../../../../public/images/Realme.png";
import Xiaomi from "../../../../public/images/Xiaomi.png";
import IphoneIcon from "../../../../public/images/IphoneIcon.png";
import RealmeIcon from "../../../../public/images/RealmeIcon.png";
import XiaomiIcon from "../../../../public/images/XiaomiIcon.png";
import Image from "next/image";
import BrandCard from "./BrandCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Electronics() {
  const brands = [
    {
      id: 1,
      name: "IPHONE",
      image: Iphone,
      icon: IphoneIcon,
    },
    {
      id: 2,
      name: "REALME",
      image: Realme,
      icon: RealmeIcon,
    },
    {
      id: 3,
      name: "XIAOMI",
      image: Xiaomi,
      icon: XiaomiIcon,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container mx-auto">
      <div className="py-4">
        <div className="flex items-center justify-between pb-8">
          <div>
            <p className="font-bold text-text text-2xl border-b-2 border-primary pb-1">
              Top <span className="text-primary">Electronics Brands</span>
            </p>
          </div>

          <Link href={"/"} className="font-medium text-base">
            View All{" "}
            <span className="text-primary text-lg font-extrabold">&#8594;</span>
          </Link>
        </div>

        <div className="slider-container gap-2 space-x-2">
          <Slider {...settings}>
            {brands.map((brand) => (
              <div key={brand.id}>
                <BrandCard
                  name={brand.name}
                  image={brand.image}
                  icon={brand.icon}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Electronics;
