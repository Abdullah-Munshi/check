import React from "react";
import cardCover from "../assets/branding-bg.png";
import avaterImg from "../assets/upload.jpeg";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/20/solid";
const CardFive = () => {
  return (
    <div className="cdc w-[280px] min-h-[400px] rounded-2xl overflow-hidden">
      <div className="cover-photo relative h-[140px] w-full">
        <img
          className="w-full h-full object-cover object-top"
          src={cardCover}
          alt="cover"
        />
        <button className="absolute right-3 top-3 z-10 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="32"
            viewBox="0 0 30 32"
            fill="none"
          >
            <ellipse
              opacity="0.3"
              cx="15"
              cy="16.1898"
              rx="15"
              ry="15.5577"
              fill="black"
            ></ellipse>
            <path
              d="M18.4091 13.9671H15.4545V17.9955C15.4545 18.1134 15.4067 18.2265 15.3214 18.3098C15.2362 18.3932 15.1206 18.44 15 18.44C14.8794 18.44 14.7638 18.3932 14.6786 18.3098C14.5933 18.2265 14.5455 18.1134 14.5455 17.9955V13.9671H11.5909C11.1691 13.9675 10.7647 14.1316 10.4665 14.4233C10.1682 14.7149 10.0005 15.1104 10 15.5229V20.8571C10.0005 21.2695 10.1682 21.665 10.4665 21.9567C10.7647 22.2484 11.1691 22.4124 11.5909 22.4129H18.4091C18.8309 22.4124 19.2353 22.2484 19.5335 21.9567C19.8318 21.665 19.9995 21.2695 20 20.8571V15.5229C19.9995 15.1104 19.8318 14.7149 19.5335 14.4233C19.2353 14.1316 18.8309 13.9675 18.4091 13.9671ZM15.4545 11.4842L16.9514 12.9478C17.0374 13.0276 17.1518 13.0715 17.2703 13.07C17.3888 13.0685 17.5021 13.0218 17.5859 12.9398C17.6697 12.8579 17.7175 12.7471 17.719 12.6312C17.7205 12.5153 17.6757 12.4034 17.594 12.3193L15.3213 10.0968C15.2361 10.0135 15.1205 9.96667 15 9.96667C14.8795 9.96667 14.7639 10.0135 14.6787 10.0968L12.406 12.3193C12.3243 12.4034 12.2795 12.5153 12.281 12.6312C12.2825 12.7471 12.3303 12.8579 12.4141 12.9398C12.4979 13.0218 12.6112 13.0685 12.7297 13.07C12.8482 13.0715 12.9626 13.0276 13.0486 12.9478L14.5455 11.4842V13.9671H15.4545V11.4842Z"
              fill="white"
            ></path>
          </svg>
        </button>
      </div>
      <div className="bg-white relative z-1  -mt-4">
        <div className="card-avater w-[100px] h-[100px] mr-auto absolute left-[18px] right-0 -top-[90px]">
          <img
            className="w-full h-full rounded-full border-2 border-white"
            src={avaterImg}
            alt="avaater"
          />
        </div>
        <div className="grid grid-cols-[auto_25px] gap-3 px-[18px] pt-7">
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
        <div className="px-[18px] h-[243px] overflow-y-scroll py-3">
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
        <button className="save-card bg-white text-[#7b510e] text-sm font-semibold text-center w-full">
          Save Card
        </button>
      </div>
    </div>
  );
};

export default CardFive;
