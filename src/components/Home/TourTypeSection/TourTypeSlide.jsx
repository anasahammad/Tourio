// src/components/TourTypeSection.js

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tourTypes = [
  { name: 'Hiking', icon: '🥾' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Walking', icon: '🚶' },
  { name: 'Wildlife', icon: '🐻' },
  { name: 'Air Rides', icon: '🎈' },
];

const TourTypeSection = () => {
  const settings = {
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
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#EAEBEE] py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold md:text-4xl mb-4">Tour Type</h2>
        <Slider {...settings}>
          {TourTypes.map((type) => (
            <div key={type.name} className="px-2">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="text-6xl mb-4"><{type?.icon}/></div>
                <h3 className="text-xl font-bold">{type.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TourTypeSL;
