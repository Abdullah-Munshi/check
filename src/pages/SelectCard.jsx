import React from "react";
import StickyBox from "react-sticky-box";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import headingStrip from "../assets/heading-strip.svg";
import upload from "../assets/upload.jpeg";
import CardCarousel from "../components/CardCarousel";

const SelectCard = () => {
  return (
    <>
      <Header />

      <div className="page-self">
        <div className="container">
          <div
            className="selectCard-page"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <div className="lf flex-1 w-[calc(100%-360px)]">
              <div className="page-header mb-10">
                <nav aria-label="breadcrumb" class="w-max breadcrump-wrap mb-1">
                  <ol class="flex flex-wrap items-center w-full">
                    <li class="flex items-center font-sans text-xs antialiased font-semibold leading-normal  cursor-pointer gradient-text">
                      <a href="#" class="">
                        My Cards
                      </a>
                      <span class="mx-1 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                        >
                      </span>
                    </li>
                    <li class="flex items-center font-sans text-xs antialiased font-semibold leading-normal  cursor-pointer gradient-text">
                      <a href="#" class="">
                        Create New card
                      </a>
                    </li>
                  </ol>
                </nav>
                <h1 className="page-title gradient-text">Create New Card</h1>
              </div>
              <div className="template-carousel-content mb-10">
                <h3 className="color-theme font-medium text-3xl mb-5">
                  Select a template
                </h3>
                <div>
                  <CardCarousel />
                </div>
              </div>
              <div className="personal-details-wrapper">
                <div className="title-3 mb-4">
                  <img src={headingStrip} alt="-" />
                  <h3 className="color-theme font-poppins font-bold text-xl">
                    Personal Details
                  </h3>
                </div>
                <div className="drag-box-outer relative">
                  <div className="drag-box">
                    <label className="drag-container border-2 border-dashed border-secondary h-[133px] rounded-lg flex items-center justify-center w-full cursor-pointer">
                      <p className="text-center">
                        Drag & drop to Upload
                        <span>or browse</span>
                      </p>
                    </label>
                  </div>
                  <label
                    htmlFor="upload-image"
                    className="user-image cursor-pointer relative"
                  >
                    <input
                      type="file"
                      id="upload-image"
                      className="max-w-0 max-h-0 absolute"
                    />
                    <img
                      src={upload}
                      alt="upload"
                      className="w-full h-full rounded-full"
                    />
                    <span class="user-image-pen absolute w-[44px] h-[44px]  inline-flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                      >
                        <path
                          d="M18.3011 2.31205H15.643L14.336 0.412922C14.266 0.31123 14.1711 0.227843 14.0599 0.170147C13.9487 0.11245 13.8245 0.0822267 13.6983 0.0821533H7.56134C7.43517 0.0822267 7.31097 0.11245 7.19974 0.170147C7.08851 0.227843 6.99369 0.31123 6.92366 0.412922L5.61572 2.31205H2.9586C2.34824 2.31205 1.76287 2.54699 1.33128 2.96517C0.899692 3.38336 0.657227 3.95054 0.657227 4.54195V14.9481C0.657227 15.5395 0.899692 16.1067 1.33128 16.5249C1.76287 16.9431 2.34824 17.178 2.9586 17.178H18.3011C18.9114 17.178 19.4968 16.9431 19.9284 16.5249C20.36 16.1067 20.6024 15.5395 20.6024 14.9481V4.54195C20.6024 3.95054 20.36 3.38336 19.9284 2.96517C19.4968 2.54699 18.9114 2.31205 18.3011 2.31205ZM14.0819 9.3734C14.0819 10.0349 13.8794 10.6816 13.5001 11.2317C13.1208 11.7818 12.5817 12.2105 11.9509 12.4636C11.3201 12.7168 10.626 12.783 9.95637 12.654C9.28673 12.5249 8.67164 12.2063 8.18886 11.7386C7.70608 11.2708 7.3773 10.6748 7.2441 10.0259C7.11091 9.37711 7.17927 8.70457 7.44055 8.09338C7.70182 7.48219 8.14428 6.95979 8.71197 6.59226C9.27966 6.22472 9.94708 6.02855 10.6298 6.02855C11.5454 6.02855 12.4234 6.38095 13.0708 7.00823C13.7182 7.63551 14.0819 8.48629 14.0819 9.3734Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <h1 className="text-center m-6 my-24 text-white text-4xl">
                Under Development...
              </h1>
            </div>
            <StickyBox offsetTop={200} offsetBottom={20}>
              <div className="w-[360px] ">
                <div className="twin-buttons flex justify-end space-x-[22px] mb-9">
                  <button className="box-btn">Cancel</button>
                  <button className="box-btn">Save</button>
                </div>
                <div className="border-l border-[#e5e7eb]">
                  <div className="implemented-card w-[280px] ml-auto text-white">
                    <h1>Card</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    rerum vitae nesciunt porro, ratione veniam.
                  </div>
                </div>
              </div>
            </StickyBox>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SelectCard;
