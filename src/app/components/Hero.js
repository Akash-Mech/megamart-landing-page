"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

function Hero() {
  const customPrevArrow = (onClickHandler, hasPrev, label) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full text-black"
      style={{ zIndex: 10 }}
    >
      <MdArrowBack size={32} />
    </button>
  );

  const customNextArrow = (onClickHandler, hasNext, label) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-50 rounded-full text-black"
      style={{ zIndex: 10 }}
    >
      <MdArrowForward size={32} />
    </button>
  );

  return (
    <div className=" container  mx-auto">
      <Carousel
        renderArrowPrev={customPrevArrow}
        renderArrowNext={customNextArrow}
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
      >
        <div className="relative">
          <div className="text-white first-slide py-12 space-y-4 px-10 flex flex-col items-start">
            <p className="font-semibold text-base text-start lg:text-2xl">
              Best Deal Online on smart watches
            </p>
            <p className="lg:text-6xl font-bold">SMART WEARABLE.</p>
            <p className="font-semibold lg:text-2xl">UP to 80% OFF</p>
          </div>
        </div>
        <div className="relative">
          <div className="text-white second-slide py-12 space-y-4 px-10 flex flex-col items-start">
            <p className="font-semibold text-base text-start lg:text-2xl">
              Best Deal Online on smart watches
            </p>
            <p className="lg:text-6xl font-bold">SMART WEARABLE.</p>
            <p className="font-semibold lg:text-2xl">UP to 80% OFF</p>
          </div>
        </div>
        <div className="relative">
          <div className="text-white first-slide py-12 space-y-4 px-10 flex flex-col items-start">
            <p className="font-semibold text-base text-start lg:text-2xl">
              Best Deal Online on smart watches
            </p>
            <p className="lg:text-6xl font-bold">SMART WEARABLE.</p>
            <p className="font-semibold lg:text-2xl">UP to 80% OFF</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
