import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import { Select } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import headingStrip from "../assets/heading-strip.svg";
import upload from "../assets/upload.jpeg";
import lock from "../assets/lock.svg";
import call from "../assets/call.svg";
import users from "../assets/user-icon.svg";
import CardCarousel from "../components/CardCarousel";
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/CardThree";
import CardFour from "../components/CardFour";
import CardFive from "../components/CardFive";

const SelectCard = () => {
  const [flag, setFlag] = useState("IN");
  const handleFlag = (el) => {
    setFlag(el.target.value);
    console.log(el);
    console.log(el.target.value);
  };
  return (
    <>
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
                          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
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
                      <div className="grid grid-cols-[100px_auto]">
                        <div className="relative">
                          <div className="flag-dropdown !flex items-center justify-between cursor-pointer">
                            <img
                              className="w-5 block"
                              alt="India"
                              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${flag}.svg`}
                            />
                          </div>
                          <div className="absolute top-0 w-full h-full left-0 opacity-0  cursor-pointer">
                            <Select
                              onChange={handleFlag}
                              className={clsx(
                                "block w-full appearance-none rounded-[4px] border border-[#4e3002] bg-[#222222] py-1.5 px-3 text-sm text-secondary",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                              )}
                            >
                              <option value="ZZ">International</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AX">Åland Islands</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AS">American Samoa</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AC">Ascension Island</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BQ">
                                Bonaire, Sint Eustatius and Saba
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="BN">Brunei Darussalam</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo</option>
                              <option value="CD">
                                Congo, Democratic Republic of the
                              </option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="CI">Cote d'Ivoire</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">Curaçao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">Falkland Islands</option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FM">
                                Federated States of Micronesia
                              </option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GU">Guam</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="VA">
                                Holy See (Vatican City State)
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">Iran</option>
                              <option value="IQ">Iraq</option>
                              <option value="IE">Ireland</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="XK">Kosovo</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Laos</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="MD">Moldova</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="KP">North Korea</option>
                              <option value="MK">North Macedonia</option>
                              <option value="MP">
                                Northern Mariana Islands
                              </option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PW">Palau</option>
                              <option value="PS">Palestine</option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="PR">Puerto Rico</option>
                              <option value="QA">Qatar</option>
                              <option value="RE">Reunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russia</option>
                              <option value="RW">Rwanda</option>
                              <option value="BL">Saint Barthélemy</option>
                              <option value="SH">Saint Helena</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="MF">
                                Saint Martin (French Part)
                              </option>
                              <option value="PM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SX">Sint Maarten</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="KR">South Korea</option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syria</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">Tanzania</option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TA">Tristan da Cunha</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom</option>
                              <option value="US">United States</option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="VG">
                                Virgin Islands, British
                              </option>
                              <option value="VI">Virgin Islands, U.S.</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </Select>
                            <ChevronDownIcon
                              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        <input type="text" className="custom-input" />
                      </div>
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
                <div className="border-l border-[#e5e7eb]">
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

export default SelectCard;
