import React from "react";
import cardCover from "../assets/branding-bg.png";
import avaterImg from "../assets/upload.jpeg";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/20/solid";
const CardTwo = () => {
  return (
    <div className="w-[280px] min-h-[400px] rounded-2xl overflow-hidden">
      <div className="cover-photo relative h-[115px] w-full bg-white after:content-none">
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
      <div className="bg-white relative z-1 rounded-2xl -mt-4">
        <div className="card-avater w-[100px] h-[100px] mx-auto absolute left-0 right-0 -top-[60px]">
          <img
            className="w-full h-full rounded-full border-2 border-[#f6cd66]"
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
          <div class="styles_TruncateSocialItemContainer__+JFFu flex items-center justify-end">
            <div class="styles_TruncateSocialItemWrapper__d2EPp flex items-center mr-[5px] cursor-pointer relative group">
              <div class="styles_TruncateSocialItem__PpzL5">
                <img src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/ksoulgpvqkgenbnvybgt.png" />
              </div>
              <div class="styles_TruncateSocialItem__PpzL5">
                <img src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/n3irrmistg4nnkhgrrqg.png" />
              </div>
              <div class="styles_TruncateSocialItem__PpzL5">
                <img src="https://res.cloudinary.com/cardscanner/image/upload/v1693999783/wikipidea_djqzwa.png" />
              </div>

              <div class="styles_DropdownItemContainer__-RA5C absolute top-[30px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:top-[20px] invisible group-hover:visible">
                <a
                  class="styles_DropdownItem__JQAsG bg-[rgba(40,191,1,0.1)]"
                  href="https://cashapp.com/sdfsdf"
                  id="links"
                  target="_blank"
                >
                  <div class="styles_Logo__sQgAR">
                    <img
                      src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/ksoulgpvqkgenbnvybgt.png"
                      alt=""
                    />
                  </div>
                  <p>CashApp</p>
                </a>
                <a
                  class="styles_DropdownItem__JQAsG bg-[rgba(66,103,178,0.1)]"
                  href="https://custom url.com/sdfsdfsdf"
                  id="links"
                  target="_blank"
                >
                  <div class="styles_Logo__sQgAR">
                    <img
                      src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/n3irrmistg4nnkhgrrqg.png"
                      alt=""
                    />
                  </div>
                  <p>Custom URL</p>
                </a>
                <a
                  class="styles_DropdownItem__JQAsG bg-[rgba(172,193,210,0.1)]"
                  href="https://wikipedia.com/sfsdf"
                  id="links"
                  target="_blank"
                >
                  <div class="styles_Logo__sQgAR">
                    <img
                      src="https://res.cloudinary.com/cardscanner/image/upload/v1693999783/wikipidea_djqzwa.png"
                      alt=""
                    />
                  </div>
                  <p>Wikipedia</p>
                </a>
              </div>
            </div>
            <div class="styles_TruncateItemCount__jGiyw">
              <p className="text-[#3771c8] text-[10px] font-semibold leading-[100%]">
                +0
              </p>
            </div>
          </div>
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
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="22"
                  height="22"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fff"
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                  ></path>
                  <path
                    fill="#40c351"
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                01785269946
              </a>
            </li>
          </ul>
        </div>
        <button className="save-card bg-white text-[#7b510e] text-sm font-semibold text-center w-full ">
          Save Card
        </button>
      </div>
    </div>
  );
};

export default CardTwo;
