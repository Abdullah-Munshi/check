import React from "react";
import heroBg from "../assets/about-bg.png";
import HeaderBefore from "../layout/HeaderBefore";
import patternBg from "../assets/pattern-1.svg";
import collection from "../assets/collection.png";
import w1 from "../assets/w-1.png";
import w2 from "../assets/w-2.png";
import w3 from "../assets/w-3.svg";
import qr from "../assets/qr.png";
import qr2 from "../assets/qr-2.png";
import infoBg from "../assets/info-bg.png";
import t1 from "../assets/t-1.png";
import t2 from "../assets/t-2.png";
import cardImg from "../assets/card-img.png";
import Footer from "../layout/Footer";

const AboutUs = () => {
  return (
    <>
      <HeaderBefore />
      <div
        className="hero-area type-2 relative h-[350px] md:h-[480px] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container relative z-20 ">
          <div className="hero-type-2-content text-center">
            <h1 className="text-4xl md:text-[60px] text-white font-poppins mb-1 font-medium leading-tight">
              About Us
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
                About Us
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        className="about-area bg-repeat rounded-[20px]  -mt-5 relative z-10 bg-[rgb(21,21,21)]"
        style={{ backgroundImage: `url(${patternBg})` }}
      >
        <div className="container space-y-20 lg:space-y-28">
          <div className="about-card-wrapper items-center">
            <div className="whyus-content plc-2">
              <h6 className="dash-title">About Card Connect</h6>
              <h4>Simplify Your Lives With Innovative Technology</h4>
              <p>
                Our mission is to empower individuals and businesses with
                innovative technology solutions that simplify and enhance their
                daily lives. We have developed a range of digital card products
                that seamlessly integrate with your digital presence, making it
                easier than ever to share your contact details, social media
                profiles, and website with others.
              </p>
              <p>
                Card Connect solutions are customizable and come in a variety of
                designs, allowing you to showcase your brand's identity and
                values. It is our mission to help businesses and individuals
                succeed in the digital age.
              </p>
            </div>
            <div className="qc-img">
              <img src={w3} alt="" />
            </div>
          </div>
          <div className="digi-wrapper text-center max-w-[900px] mx-auto">
            <div className="whyus-content plc-2">
              <h6 className="dash-title both">Our Cards</h6>
              <h4>Well-crafted Digital Business Cards</h4>
              <p>
                Card Connect Smart Business Cards are available in three
                variants. You can choose the material you want to craft your
                Digital Card
              </p>
            </div>
            <div className="qc-img !max-w-full !ml-0">
              <img className="w-full" src={collection} alt="" />
            </div>
          </div>
          <div className="about-card-wrapper type-2 items-center">
            <div className="qc-img">
              <img src={w2} alt="" />
            </div>
            <div className="whyus-content plc-2">
              <h6 className="dash-title">About Card Connect</h6>
              <h4>Special Feature Digital Card</h4>
              <p>
                Our Digital and QR business cards are the ultimate networking
                tool for the digital age. With just a tap or scan, you can
                instantly share your contact details, website, and social media
                profiles with potential clients and colleagues.
              </p>
              <ul className="card-list">
                <li>
                  <img src={qr} alt="" />
                  <p>
                    <span className="block">QR (Quick Response) </span>is a
                    two-dimensional barcode that can be scanned by a smartphone
                    camera to quickly access information.
                  </p>
                </li>
                <li>
                  <img src={qr2} alt="" />
                  <p>
                    <span className="block">Digital Card</span>is a is a
                    wireless communication technology that enables data exchange
                    between devices by bringing them close together.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="info-area bg-cover bg-center"
          style={{ backgroundImage: `url(${infoBg})` }}
        >
          <div className="container">
            <div className="info-content text-center">
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
        <div className="container">
          <div className="about-card-wrapper type-2 items-center">
            <div className="qc-img">
              <img src={cardImg} alt="" />
            </div>
            <div className="whyus-content plc-2">
              <h6 className="dash-title">About Card Connect</h6>
              <h4>Highlights Of Card Connect Business Card </h4>
              <ul className="card-list type-2">
                <li>
                  <div className="flex items-center gap-4">
                    <img src={t1} alt="" />
                    <h6 className="text-[#d18c0d] text-lg font-medium">
                      Eco-Friendly
                    </h6>
                  </div>
                  <p>
                    Digital business cards are more environmentally friendly
                    compared to traditional printed business cards. They
                    eliminate the need for paper, ink, and other materials that
                    contribute to waste and environmental pollution.
                  </p>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <img src={t2} alt="" />
                    <h6 className="text-[#d18c0d] text-lg font-medium">
                      Cost-effective{" "}
                    </h6>
                  </div>
                  <p>
                    Digital business cards can be cost-effective compared to
                    traditional printed business cards. It can save money in the
                    long run by eliminating the need to constantly print and
                    distribute traditional business cards.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
