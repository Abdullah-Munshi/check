import React from "react";
import HeaderBefore from "../layout/HeaderBefore";
import Footer from "../layout/Footer";
import contactBg from "../assets/contact-bg.png";
import patternBg from "../assets/pattern-1.svg";
import in1 from "../assets/in-1.png";
import in2 from "../assets/in-2.png";
import s1 from "../assets/s-1.svg";
import s2 from "../assets/s-2.svg";
import s3 from "../assets/s-3.svg";
import s4 from "../assets/s-4.svg";

const Contact = () => {
  return (
    <>
      <HeaderBefore />
      <div
        className="hero-area type-2 relative h-[350px] md:h-[480px] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="container relative z-20 ">
          <div className="hero-type-2-content text-center">
            <h1 className="text-4xl md:text-[60px] text-white font-poppins mb-1 font-medium leading-tight">
              Contact
            </h1>
            <p className="text-white">
              <a
                href="#"
                className="inline-block text-white text-base font-medium"
              >
                Home
              </a>{" "}
              -{" "}
              <a
                href="#"
                className="inline-block text-white text-base font-medium"
              >
                Contact
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="contact-area bg-repeat rounded-[20px]  -mt-5 relative z-10 bg-[rgb(21,21,21)]"
        style={{ backgroundImage: `url(${patternBg})` }}
      >
        <div className="container">
          <div className="digi-wrapper text-center max-w-[900px] mx-auto">
            <div className="whyus-content plc-2 text-center">
              <h6 className="dash-title both uppercase">
                GET IN TOUCH WITH US
              </h6>
              <h4>We're Always Eager To Hear From You!</h4>
              <p>
                We’d be happy to receive your feedback on our products. It would
                be really appreciable if you could share your experience with
                us. And we assure you that our service is always available to
                enhance your experience.
              </p>
            </div>
          </div>
          <div className="contact-g-wrapper grid grid-col-1 lg:grid-cols-2 gap-10 items-start">
            <form action="" className="contact-form">
              <div className="input-inside">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-inside">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Email"
                />
              </div>
              <div className="input-inside">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Phone"
                />
              </div>
              <div className="input-inside">
                <textarea
                  name=""
                  className="custom-input"
                  id=""
                  placeholder="Message"
                ></textarea>
              </div>
              <button className="box-btn !w-full">Send</button>
            </form>
            <div className="contact-infos">
              <h6 className="text-white uppercase">GET IN TOUCH</h6>
              <h2>Contact Us</h2>
              <p>Why wait? Make your card now and stay updated.</p>
              <ul className="contact-numbers">
                <li>
                  <img src={in1} alt="" />
                  <p>+987 3211 4562</p>
                </li>
                <li>
                  <img src={in2} alt="" />
                  <p>
                    sales@cardconnect.ai <br />
                    info@cardconnect.ai
                  </p>
                </li>
              </ul>
              <ul className="social-icons flex items-center justify-end mt-5 space-x-5">
                <li>
                  {" "}
                  <a href="#" className="inline-block">
                    <img src={s1} alt="" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="inline-block">
                    <img src={s2} alt="" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="inline-block">
                    <img src={s3} alt="" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="inline-block">
                    <img src={s4} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-content type-2 text-center">
            <h2>
              Professionals <span></span> Entrepreneurs <span></span>
              freelancers <span></span>individuals
            </h2>
            <p>
              Card Connect Digital Smart Business cards are useful for anyone
              who convenes a meeting and wishes to make a network.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
