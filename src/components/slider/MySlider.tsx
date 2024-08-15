"use client";
import IndustryCard from "../HomePage/card/IndustryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
interface MySliderProps {
  children?: React.ReactNode
  , slider_settings?: Object, className?: String
}

const MySlider = ({ children, slider_settings, className }: MySliderProps) => {
  const IndustryList = [
    "https://nazmins28.github.io/img/nodejslogo.png",
    "https://nazmins28.github.io/img/React-icon.svg.png",
    "https://nazmins28.github.io/img/htmllogo.png",
    "https://nazmins28.github.io/img/nodejslogo.png",
    "https://nazmins28.github.io/img/React-icon.svg.png",
    "https://nazmins28.github.io/img/nodejslogo.png",
    "https://nazmins28.github.io/img/React-icon.svg.png",
    "https://nazmins28.github.io/img/nodejslogo.png",
    "https://nazmins28.github.io/img/React-icon.svg.png",
  ];

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 8,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          infinite: true,
          initialSlide: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={`relative  ${className} `}>
      <Slider {...slider_settings || sliderSettings}>
        {children
          ? children
          : IndustryList.map((el, index) => (
            <div key={index} className="flex justify-center">
              <IndustryCard data={el} />
            </div>
          ))}
      </Slider>
    </div >
  );
};

export default MySlider;
