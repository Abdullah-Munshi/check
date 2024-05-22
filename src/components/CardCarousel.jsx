import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataSelected } from "./Utility";
import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";
import card4 from "../assets/card-4.png";
import card5 from "../assets/card-5.png";
import card6 from "../assets/card-6.png";

export default function CardCarousel() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="md:px-3">
        <div className="single-card relative p-3">
          <img src={card1} alt="card-img block max-w-full w-full rounded-md" />
          <DataSelected />
        </div>
      </div>

      <div className="md:px-3">
        <div className="single-card relative p-3">
          <img src={card2} alt="card-img block max-w-full w-full rounded-md" />
        </div>
      </div>
      <div className="md:px-3">
        <div className="single-card relative p-3">
          <img src={card3} alt="card-img block max-w-full w-full rounded-md" />
        </div>
      </div>
      <div className="md:px-3">
        <div className="single-card relative p-3">
          <img src={card4} alt="card-img block max-w-full w-full rounded-md" />
        </div>
      </div>
      <div className="md:px-3">
        <div className="single-card relative p-3">
          <img src={card5} alt="card-img block max-w-full w-full rounded-md" />
        </div>
      </div>
    </Slider>
  );
}
