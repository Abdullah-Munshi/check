import React from "react";
import cardCover from "../assets/branding-bg.png";
import avaterImg from "../assets/upload.jpeg";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/20/solid";
const CardOne = () => {
  return (
    <div className="w-[280px] min-h-[400px] rounded-2xl overflow-hidden">
      <div className="cover-photo relative h-[115px] w-full">
        <img
          className="w-full h-full object-cover object-top"
          src={cardCover}
          alt="cover"
        />
      </div>
      <div className="bg-white relative z-1 rounded-2xl -mt-4">
        <div className="card-avater w-[100px] h-[100px] mx-auto absolute left-0 right-0 -top-[50px]">
          <img
            className="w-full h-full rounded-full"
            src={avaterImg}
            alt="avaater"
          />
        </div>
        <div className="grid grid-cols-[auto_25px] gap-3 px-[18px] pt-16">
          <div>
            <h5 className="text-[#404040] font-bold text-[15px] leading-tight mb-[1px]">
              Mr. Abdullah Munshi Munshi
            </h5>
            <p className="text-[#101010] text-[11px] font-normal">
              Front-end Developer
              <span className="inline text-[#1877db] ml-[6px]">
                @Self-employed
              </span>
            </p>
          </div>
          <a target="_blank" href="tel:+8801785269946" className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 30 31"
              fill="none"
            >
              <circle cx="15" cy="15.1282" r="15" fill="#43B51E"></circle>
              <g filter="url(#filter0_d_445_18)">
                <path
                  d="M18.6154 21.1304C18.0924 21.1304 17.3578 20.9412 16.2578 20.3266C14.9201 19.5765 13.8854 18.8839 12.555 17.557C11.2722 16.275 10.648 15.445 9.77431 13.8552C8.78733 12.0602 8.95557 11.1193 9.14365 10.7172C9.36762 10.2365 9.69823 9.94908 10.1255 9.66375C10.3683 9.50473 10.6251 9.36841 10.8928 9.25652C10.9196 9.245 10.9446 9.23402 10.9668 9.22411C11.0994 9.16436 11.3003 9.07407 11.5549 9.17052C11.7247 9.23429 11.8764 9.36476 12.1137 9.59918C12.6005 10.0793 13.2657 11.1485 13.5111 11.6736C13.6759 12.0275 13.785 12.2612 13.7852 12.5232C13.7852 12.8299 13.6309 13.0665 13.4436 13.3218C13.4085 13.3698 13.3737 13.4156 13.34 13.4601C13.1361 13.728 13.0913 13.8054 13.1208 13.9436C13.1805 14.2215 13.6261 15.0485 14.3583 15.7791C15.0905 16.5097 15.8937 16.9271 16.1726 16.9866C16.3167 17.0174 16.3958 16.9708 16.6722 16.7597C16.7119 16.7294 16.7526 16.698 16.7952 16.6667C17.0808 16.4542 17.3064 16.3039 17.6059 16.3039H17.6075C17.8682 16.3039 18.0914 16.417 18.4611 16.6035C18.9433 16.8467 20.0447 17.5034 20.5278 17.9907C20.7627 18.2276 20.8937 18.3787 20.9578 18.5482C21.0542 18.8036 20.9634 19.0037 20.9042 19.1376C20.8943 19.1599 20.8833 19.1843 20.8718 19.2113C20.759 19.4786 20.6219 19.7349 20.4621 19.977C20.1773 20.403 19.8888 20.7328 19.4071 20.957C19.1597 21.074 18.889 21.1333 18.6154 21.1304Z"
                  fill="#F2F2F2"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_445_18"
                  x="7"
                  y="9.12817"
                  width="16"
                  height="16.0023"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="2"></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_445_18"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_445_18"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </a>
        </div>
        <div className="px-[18px] h-[230px] overflow-y-scroll py-3">
          <div className="text-[#494949] text-xs mb-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deserunt, nostrum illum. Iure, harum magni. In fuga autem
              blanditiis aperiam aliquid vero modi, vel sunt provident animi ex
              odio magnam tempore eligendi itaque. Cumque architecto. eligendi
              itaque. Cumque architecto. eligendi itaque. Cumque architecto.
            </p>
          </div>
          <ul className="ct-list-card space-y-2 mb-3">
            <li>
              <a href="#">
                <GlobeAltIcon className="w-4 h-4 mr-[5px] translate-y-[1px]" />
                www.example.com
              </a>
            </li>
            <li>
              <a href="#">
                <GlobeAltIcon className="w-4 h-4 mr-[5px] translate-y-[1px]" />
                www.example.com
              </a>
            </li>
            <li>
              <a href="#">
                <EnvelopeIcon className="w-4 h-4 mr-[5px] translate-y-[1px]" />
                stackbind@gmail.com
              </a>
            </li>
          </ul>
          <ul className="social-ct-list flex items-center flex-wrap">
            <li>
              <a href="#" className="inline-block w-10 h-10">
                <img
                  className="max-w-full w-full"
                  src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/ksoulgpvqkgenbnvybgt.png"
                />
              </a>
            </li>
            <li>
              <a href="#" className="inline-block w-10 h-10">
                <img
                  className="max-w-full w-full"
                  src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/ksoulgpvqkgenbnvybgt.png"
                />
              </a>
            </li>

            <li>
              <a href="#" className="inline-block w-10 h-10">
                <img
                  className="max-w-full w-full"
                  src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/ksoulgpvqkgenbnvybgt.png"
                />
              </a>
            </li>
            <li>
              <a href="#" className="inline-block w-10 h-10">
                <img
                  className="max-w-full w-full"
                  src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/ksoulgpvqkgenbnvybgt.png"
                />
              </a>
            </li>
            <li>
              <a href="#" className="inline-block w-10 h-10">
                <img
                  className="max-w-full w-full"
                  src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/ksoulgpvqkgenbnvybgt.png"
                />
              </a>
            </li>
          </ul>
        </div>
        <button className="save-card text-white text-sm font-semibold text-center w-full">
          Save Card
        </button>
      </div>
    </div>
  );
};

export default CardOne;
