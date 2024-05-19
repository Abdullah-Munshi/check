import React from "react";
import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";
import card4 from "../assets/card-4.png";
import card5 from "../assets/card-5.png";
import card6 from "../assets/card-6.png";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { DataSelected } from "./Utility";
// register Swiper custom elements
register();

const CardCarousel = () => {
  return (
    <div>
      <swiper-container
        slides-per-view="4"
        space-between="20"
        mousewheel-force-to-axis="true"
      >
        <swiper-slide>
          <div className="single-card relative p-3">
            <img
              src={card1}
              alt="card-img block max-w-full w-full rounded-md"
            />
            <DataSelected />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="single-card relative p-3">
            <img
              src={card2}
              alt="card-img block max-w-full w-full rounded-md"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="single-card relative p-3">
            <img
              src={card3}
              alt="card-img block max-w-full w-full rounded-md"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="single-card relative p-3">
            <img
              src={card4}
              alt="card-img block max-w-full w-full rounded-md"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="single-card relative p-3">
            <img
              src={card5}
              alt="card-img block max-w-full w-full rounded-md"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="single-card relative p-3">
            <img
              src={card6}
              alt="card-img block max-w-full w-full rounded-md"
            />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default CardCarousel;
