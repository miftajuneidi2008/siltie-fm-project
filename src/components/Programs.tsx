"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { programmes } from "./data";
import Image from "next/image";

const Programs = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mx-auto max-w-[80vw] dark:text-white">
      <Slider {...settings}>
        {programmes.map((program) => (
          <div
            key={program.name}
            className="group relative mx-2 my-6 h-32 w-[300px] cursor-pointer rounded-md"
          >
            <Image
              src={program.image}
              width={400}
              height={400}
              alt={program.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black/60 text-white">
              <p className="text-xl font-semibold transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:text-slate-300">
                {program.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Programs;
