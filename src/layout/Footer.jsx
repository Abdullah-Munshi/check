import React from "react";
import logo from "../assets/logo.png";
import ftSign from "../assets/ft-sign.svg";
const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="branding-box-outer">
          <div>
            <img className="mx-auto my-[57px]" src={ftSign} alt="icon" />
          </div>
          <div className="branding-box rounded-[30px] relative overflow-hidden">
            <div class="styles_row_your_card__LauG9">
              <h1>Elevate your Brand</h1>
              <p>With Card Connect</p>
              <a className="box-btn" href="/select-card">
                Get started
              </a>
            </div>
          </div>
        </div>
        <div className="ft-g-wrapper md:grid grid-cols-2 gap-6">
          <div className="ft-lf">
            <a href="#" className="inline-block">
              <img className="w-[180px] block" src={logo} alt="logo" />
            </a>
            <p class="styles_tagLineText__ytNOD leading-tight -mt-[5px]">
              Card connect connecting minds
            </p>
            <p class="styles_footer_logo_text__FTFNz">
              We value you. Stay connected with us for the latest <br /> update
              from Card Connect
            </p>
            <div className="md:grid grid-cols-2 gap-4 mt-5">
              <div className="ft-widget type-2">
                <h4>Get In Touch</h4>
                <ul className="ft-links">
                  <li>
                    <a href="#">sales@cardconnect.ai</a>
                  </li>
                  <li>
                    <a href="#">info@cardconnect.ai</a>
                  </li>
                </ul>
              </div>
              <div className="ft-widget type-2">
                <h4>Call us</h4>
                <ul className="ft-links">
                  <li>
                    <a href="#">+987 3211 4562</a>
                  </li>
                  <li>
                    <a href="#">9am to 6pm IST</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ft-lr">
            <div className="ft-widget">
              <h4>Quick links</h4>
              <ul className="ft-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Create your card</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="styles_copyright__bLknF">
          <div class="styles_copyright_text__U57Gd">
            Copyright © 2023 Card Connect
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="156"
              height="6"
              viewBox="0 0 156 6"
              fill="none"
            >
              <path
                d="M80.8867 3L78 0.113249L75.1133 3L78 5.88675L80.8867 3ZM0 3.5L78 3.5V2.5L0 2.5L0 3.5Z"
                fill="#E6AC26"
              ></path>
              <path
                d="M75.1132 3L78 5.88675L80.8868 3L78 0.113249L75.1132 3ZM78 3.5L156 3.5V2.5L78 2.5V3.5Z"
                fill="#E6AC26"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
