import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import { Select } from "@headlessui/react";
import clsx from "clsx";
import {
  ChevronDownIcon,
  PlusIcon,
  MinusIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/CardThree";
import CardFour from "../components/CardFour";
import CardFive from "../components/CardFive";
import CountryDropdownWithPhone from "../components/CountryDropdownWithPhone";
import headingStrip from "../assets/heading-strip.svg";
import upload from "../assets/upload.jpeg";
import lock from "../assets/lock.svg";
import call from "../assets/call.svg";
import users from "../assets/user-icon.svg";
import patternBg from "../assets/pattern-1.svg";
import CardCarousel from "../components/CardCarousel";

const CardMobileView = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <>
      <button onClick={openDrawer} className="mobile-view-button">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 32 32"
          color="#151515"
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 11 10 C 8.800781 10 7 11.800781 7 14 C 7 15.113281 7.476563 16.117188 8.21875 16.84375 C 6.886719 17.746094 6 19.28125 6 21 L 8 21 C 8 19.332031 9.332031 18 11 18 C 12.667969 18 14 19.332031 14 21 L 16 21 C 16 19.28125 15.113281 17.746094 13.78125 16.84375 C 14.523438 16.117188 15 15.113281 15 14 C 15 11.800781 13.199219 10 11 10 Z M 18 11 L 18 13 L 26 13 L 26 11 Z M 11 12 C 12.117188 12 13 12.882813 13 14 C 13 15.117188 12.117188 16 11 16 C 9.882813 16 9 15.117188 9 14 C 9 12.882813 9.882813 12 11 12 Z M 18 15 L 18 17 L 26 17 L 26 15 Z M 18 19 L 18 21 L 23 21 L 23 19 Z"></path>
        </svg>
      </button>
      <div
        className={`${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } card-mobile-view fixed w-full h-screen z-50 top-0 left-0 right-0 bottom-0 bg-[rgb(21,21,21)] p-4 overflow-y-auto transition duration-200`}
      >
        <div
          className="absolute w-full h-full top-0 left-0 right-0"
          style={{ backgroundImage: `url(${patternBg})` }}
        ></div>
        <div className="relative z-10 flex flex-col h-full">
          <div>
            <button
              onClick={closeDrawer}
              className="mobile-panel-close absolute right-0 top-0"
            >
              <XMarkIcon className="w-6 h-6 text-[rgb(21,21,21)]" />
            </button>
            <div className="mb-6">
              <CardOne />
            </div>
          </div>
          <div className="mt-auto">
            <CardCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

const CreateCard = () => {
  return (
    <>
      <CardMobileView />
      <Header />
      <div className="page-self">
        <div className="container">
          <div className="selectCard-page lg:flex items-start">
            <div className="lf flex-1 lg:w-[calc(100%-360px)]">
              <div className="page-header mb-10">
                <nav
                  aria-label="breadcrumb"
                  className="w-max breadcrump-wrap mb-1"
                >
                  <ol className="flex flex-wrap items-center w-full">
                    <li className="flex items-center font-sans text-xs antialiased font-semibold leading-normal  cursor-pointer gradient-text">
                      <a href="#" className="">
                        My Cards
                      </a>
                      <span className="mx-1 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                        >
                      </span>
                    </li>
                    <li className="flex items-center font-sans text-xs antialiased font-semibold leading-normal  cursor-pointer gradient-text">
                      <a href="#" className="">
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
                  <img
                    className="max-w-full mb-[1px]"
                    src={headingStrip}
                    alt="-"
                  />
                  <h3 className="color-theme font-poppins font-bold text-xl">
                    Personal Details
                  </h3>
                </div>
                <div className="field-block mb-10">
                  <div className="drag-box-outer relative">
                    <p className="label-p text-right">Cover Photo</p>
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
                      <span className="user-image-pen absolute w-[44px] h-[44px]  inline-flex items-center justify-center rounded-full">
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
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-[115px_1fr_1fr_115px] md:gap-7">
                    <div className="input-inside">
                      <label htmlFor="">Prefix</label>
                      <div className="relative">
                        <Select
                          className={clsx(
                            "block w-full appearance-none rounded-[4px] border border-[#4e3002] bg-[#222222] py-1.5 px-3 text-sm text-secondary",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                          )}
                        >
                          <option value="Prefix">Prefix</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="Mrs.">Mrs.</option>
                        </Select>
                        <ChevronDownIcon
                          className="group pointer-events-none absolute top-[7px] right-2.5 size-5 fill-[#f6cd66]"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="input-inside">
                      <label htmlFor="">
                        First name{" "}
                        <span className="required-sign inline-block text-[rgb(234,80,68)]">
                          *
                        </span>
                      </label>
                      <input type="text" className="custom-input" />
                    </div>
                    <div className="input-inside">
                      <label htmlFor="">Last name</label>
                      <input type="text" className="custom-input" />
                    </div>
                    <div className="input-inside">
                      <label htmlFor="">Suffix</label>
                      <input type="text" className="custom-input" />
                    </div>
                  </div>
                </div>
                <div className="field-block space-y-6 mb-10">
                  <h5 className="form-field-title flex items-center">
                    <img src={lock} alt="icon" />
                    <span className="border-b border-secondary inline-block ml-2 text-secondary font-medium font-poppins text-sm">
                      Work Details
                    </span>
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                    <div className="input-inside">
                      <label htmlFor="">Designation</label>
                      <input type="text" className="custom-input" />
                    </div>
                    <div className="input-inside">
                      <label htmlFor="">
                        Company
                        <span className="required-sign inline-block text-[rgb(234,80,68)]">
                          *
                        </span>
                      </label>
                      <input type="text" className="custom-input" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-7">
                    <div className="input-inside">
                      <label htmlFor="summary">Summary</label>
                      <textarea
                        name="summary"
                        id="summary"
                        className="custom-input"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="field-block space-y-6 mb-10">
                  <h5 className="form-field-title flex items-center">
                    <img src={call} alt="icon" />
                    <span className="border-b border-secondary inline-block ml-2 text-secondary font-medium font-poppins text-sm">
                      Contact Details
                    </span>
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
                    <div className="input-inside">
                      <label htmlFor="">Phone</label>
                      <CountryDropdownWithPhone />
                    </div>
                    <div className="input-inside">
                      <label htmlFor="">Email address</label>
                      <input type="text" className="custom-input" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="input-inside">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        className="custom-input"
                      />
                    </div>
                  </div>
                  <div className="input-inside">
                    <label htmlFor="custom-links">Custom Links</label>
                    <div className="space-y-[10px] mb-[10px]">
                      <div className="grid grid-cols-[auto_26px] gap-3 items-center">
                        <input type="text" className="custom-input" />
                        <button className="w-[26px] h-[26px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <circle
                              cx="13"
                              cy="13"
                              r="13"
                              fill="#6C1313"
                            ></circle>
                            <path
                              d="M9.88301 17.6783C9.78059 17.7807 9.65899 17.862 9.52516 17.9174C9.39133 17.9728 9.2479 18.0014 9.10304 18.0014C8.95819 18.0014 8.81475 17.9728 8.68093 17.9174C8.5471 17.862 8.4255 17.7807 8.32307 17.6783C8.22065 17.5759 8.1394 17.4543 8.08396 17.3204C8.02853 17.1866 8 17.0432 8 16.8983C8 16.7535 8.02853 16.61 8.08396 16.4762C8.1394 16.3424 8.22065 16.2208 8.32307 16.1184L16.1184 8.32418C16.2207 8.22176 16.3422 8.14049 16.476 8.08503C16.6098 8.02957 16.7531 8.001 16.8979 8.00095C17.0427 8.00089 17.1861 8.02937 17.3199 8.08473C17.4537 8.1401 17.5753 8.22128 17.6777 8.32363C17.7802 8.42598 17.8614 8.54751 17.9169 8.68127C17.9724 8.81503 18.0009 8.95841 18.001 9.10321C18.001 9.24801 17.9726 9.39141 17.9172 9.52521C17.8618 9.65901 17.7806 9.78059 17.6783 9.88302L9.88301 17.6783Z"
                              fill="#FF2222"
                            ></path>
                            <path
                              d="M8.32307 9.88301C8.11621 9.67615 8 9.39559 8 9.10304C8 8.8105 8.11621 8.52993 8.32307 8.32307C8.52993 8.11621 8.8105 8 9.10304 8C9.39559 8 9.67615 8.11621 9.88301 8.32307L17.6772 16.1184C17.7796 16.2207 17.8609 16.3422 17.9163 16.476C17.9718 16.6098 18.0004 16.7531 18.0004 16.8979C18.0005 17.0427 17.972 17.1861 17.9166 17.3199C17.8613 17.4537 17.7801 17.5753 17.6777 17.6777C17.5754 17.7802 17.4539 17.8614 17.3201 17.9169C17.1863 17.9724 17.043 18.0009 16.8982 18.001C16.7534 18.001 16.61 17.9726 16.4762 17.9172C16.3424 17.8618 16.2208 17.7806 16.1184 17.6783L8.32418 9.88301H8.32307Z"
                              fill="#FF2222"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="grid grid-cols-[auto_26px] gap-3 items-center">
                        <input type="text" className="custom-input" />
                        <button className="w-[26px] h-[26px] cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <circle
                              cx="13"
                              cy="13"
                              r="13"
                              fill="#6C1313"
                            ></circle>
                            <path
                              d="M9.88301 17.6783C9.78059 17.7807 9.65899 17.862 9.52516 17.9174C9.39133 17.9728 9.2479 18.0014 9.10304 18.0014C8.95819 18.0014 8.81475 17.9728 8.68093 17.9174C8.5471 17.862 8.4255 17.7807 8.32307 17.6783C8.22065 17.5759 8.1394 17.4543 8.08396 17.3204C8.02853 17.1866 8 17.0432 8 16.8983C8 16.7535 8.02853 16.61 8.08396 16.4762C8.1394 16.3424 8.22065 16.2208 8.32307 16.1184L16.1184 8.32418C16.2207 8.22176 16.3422 8.14049 16.476 8.08503C16.6098 8.02957 16.7531 8.001 16.8979 8.00095C17.0427 8.00089 17.1861 8.02937 17.3199 8.08473C17.4537 8.1401 17.5753 8.22128 17.6777 8.32363C17.7802 8.42598 17.8614 8.54751 17.9169 8.68127C17.9724 8.81503 18.0009 8.95841 18.001 9.10321C18.001 9.24801 17.9726 9.39141 17.9172 9.52521C17.8618 9.65901 17.7806 9.78059 17.6783 9.88302L9.88301 17.6783Z"
                              fill="#FF2222"
                            ></path>
                            <path
                              d="M8.32307 9.88301C8.11621 9.67615 8 9.39559 8 9.10304C8 8.8105 8.11621 8.52993 8.32307 8.32307C8.52993 8.11621 8.8105 8 9.10304 8C9.39559 8 9.67615 8.11621 9.88301 8.32307L17.6772 16.1184C17.7796 16.2207 17.8609 16.3422 17.9163 16.476C17.9718 16.6098 18.0004 16.7531 18.0004 16.8979C18.0005 17.0427 17.972 17.1861 17.9166 17.3199C17.8613 17.4537 17.7801 17.5753 17.6777 17.6777C17.5754 17.7802 17.4539 17.8614 17.3201 17.9169C17.1863 17.9724 17.043 18.0009 16.8982 18.001C16.7534 18.001 16.61 17.9726 16.4762 17.9172C16.3424 17.8618 16.2208 17.7806 16.1184 17.6783L8.32418 9.88301H8.32307Z"
                              fill="#FF2222"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button className="add-more inline-flex items-center">
                      <PlusIcon className="w-4 h-4 mr-1" />
                      Add More
                    </button>
                  </div>
                  <div className="input-inside">
                    <label htmlFor="">Location</label>
                    <input type="text" className="custom-input" />
                  </div>
                </div>
                <div className="field-block space-y-6 mb-10">
                  <h5 className="form-field-title flex items-center">
                    <img src={users} alt="icon" />
                    <span className="border-b border-secondary inline-block ml-2 text-secondary font-medium font-poppins text-sm">
                      Social Links
                    </span>
                  </h5>
                  <div className="social-links-container flex flex-wrap gap-4">
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/wgu1uyyzwjh7krg6oo4z.png"
                        alt="icon"
                      />
                      <div className="social-link-overlay">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="45"
                          height="44"
                          viewBox="0 0 45 44"
                          fill="none"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="43"
                            height="42"
                            rx="12"
                            fill="#FFC832"
                            fillOpacity="0.29"
                            stroke="#F6CD66"
                            strokeWidth="2"
                          ></rect>
                          <path
                            d="M19.9074 29.8167L12 21.9074L14.6352 19.2722L19.9074 24.5426L30.4481 14L33.0852 16.637L19.9074 29.813V29.8167Z"
                            fill="#1F7D00"
                          ></path>
                        </svg>
                      </div>
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/yseji32pybmfcygiqhes.png"
                        alt="icon"
                      />
                      <div className="social-link-overlay">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="45"
                          height="44"
                          viewBox="0 0 45 44"
                          fill="none"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="43"
                            height="42"
                            rx="12"
                            fill="#FFC832"
                            fillOpacity="0.29"
                            stroke="#F6CD66"
                            strokeWidth="2"
                          ></rect>
                          <path
                            d="M19.9074 29.8167L12 21.9074L14.6352 19.2722L19.9074 24.5426L30.4481 14L33.0852 16.637L19.9074 29.813V29.8167Z"
                            fill="#1F7D00"
                          ></path>
                        </svg>
                      </div>
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1693314179/twitter-new_iopewa.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/zpty4iyd35hpns5ciwn6.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/rzctarbbiajqhvytciqq.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/dnbpdtucsaucr6c8jvri.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/vth5rytxkvc39foxv59e.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/onvjx5ole5iuzdvjkmwd.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/frp7yf43efx0mqblcyok.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/rcebhhnu2xfrh13pad70.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/h4vbtwntsnmtneqk0gnb.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/hurwb0wbtfnbvrvp3rb5.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309311/xo8jcqdzioe6cbdu0rcn.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/x8v7fkpldsw9yh2vsoax.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/jvvycr4859etuydzl6gx.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/on0dfbufj2nbzzwinmda.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/pgjzkcf3sjd5uqrswdbh.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/ksoulgpvqkgenbnvybgt.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/iwis3c9mg1essjd5t1v8.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/zniuwkqpi65lxtsr8ykj.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/yt9o9hxfroryqdhgar8i.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/tueqxmfwg0qxyg37yf8w.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1684309312/n3irrmistg4nnkhgrrqg.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1693999783/wikipidea_djqzwa.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1693999783/paytm_m7pf1g.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1693999783/Upi_iq4ntq.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1693999783/chat-gpt_zdf6wi.png"
                        alt="icon"
                      />
                    </button>
                    <button className="social-links">
                      <img
                        src="https://res.cloudinary.com/cardscanner/image/upload/v1693999783/google_remrqh.png"
                        alt="icon"
                      />
                    </button>
                  </div>
                </div>
                <div className="field-block space-y-6">
                  <div className="input-inside">
                    <label>Title font size</label>
                    <div className="count-button inline-flex items-center justify-between">
                      <button className="h-full w-12 inline-flex items-center justify-center">
                        <MinusIcon className="text-secondary w-5 h-5" />
                      </button>
                      <div className="count-input h-full min-w-[48px] border-x border-[#4e3002] inline-flex items-center justify-center text-white text-[13px]">
                        16
                      </div>
                      <button className="h-full w-12 inline-flex items-center justify-center">
                        <PlusIcon className="text-secondary w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <StickyBox
              className="hidden lg:block"
              offsetTop={150}
              offsetBottom={20}
            >
              <div className="w-[360px] ">
                <div className="twin-buttons flex justify-end space-x-[22px] mb-9">
                  <button className="box-btn-2 style-2">
                    <div className="w-full h-full rounded-lg flex items-center justify-center">
                      Cancel
                    </div>
                  </button>
                  <button className="box-btn-2 style-3">
                    {" "}
                    <div className="w-full h-full rounded-lg flex items-center justify-center">
                      Save
                    </div>
                  </button>
                </div>
                <div className="border-l border-[#8d8d8d]">
                  <div className="implemented-card w-[280px] ml-auto text-white">
                    <CardFive />
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

export default CreateCard;
