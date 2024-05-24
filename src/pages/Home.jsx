import React from "react";
import heroDOne from "../assets/hero-d-1.svg";
import heroBg from "../assets/hero-bg.png";
import patternBg from "../assets/pattern-1.svg";
import royalCircle from "../assets/royal-circle.svg";
import w1 from "../assets/w-1.png";
import w2 from "../assets/w-2.png";
import w3 from "../assets/w-3.svg";
import w4 from "../assets/w-4.svg";
import royalEdge from "../assets/royal-edge.svg";
import trans1 from "../assets/home-trans-1.svg";
import trans2 from "../assets/home-trans-2.svg";
import trans3 from "../assets/home-trans-3.svg";
import btnTrans from "../assets/button-trans.svg";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <div
        className="hero-area relative h-[730px] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <img className="absolute top-[28%] z-10" src={royalCircle} alt="img" />
        <div className="container relative z-20 ">
          <div class="styles_zeeqr_section__Ukmdt">
            <div class="styles_col_home__6H2IT">
              <div class="styles_col__t0VEX">
                <img src={heroDOne} alt="" />
                <div class="styles_text_content__7bjhW">
                  <p class="styles_hero_section_p1__Tmy9o">
                    Elevate your Brand
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="138"
                    height="17"
                    viewBox="0 0 138 17"
                    fill="none"
                    class="styles_marginLeftAuto__uhakb"
                  >
                    <path
                      d="M3.12792 14.2856C2.00604 11.7006 27.7289 7.91952 58.7252 5.5864C92.6213 3.03501 112.565 2.26471 134.979 3.08428"
                      stroke="#ECA436"
                      stroke-width="5"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </div>
                <p class="styles_hero_section_p2__9AtzL">With Card Connect ®</p>
                <p class="styles_tagLineText__ytNOD">
                  Card connect connecting minds
                </p>
                <a class="box-btn" href="/select-card">
                  Start Now!
                </a>
              </div>
              <div class="styles_col__t0VEX">
                <div class="styles_ourVideo__sw7zd"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="whyus-area bg-repeat rounded-[20px]  -mt-5 relative z-10 bg-[rgb(21,21,21)]"
        style={{ backgroundImage: `url(${patternBg})` }}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -top-[15px] ">
          <img className="w-[238px] block" src={royalEdge} alt="" />
        </div>
        <div className="container">
          <div className="whyus-master-grid space-y-[60px] md:space-y-[150px] relative">
            <img
              className="absolute !mt-0 left-0 md:-left-16 -top-16 w-[80px] md:w-[137px]"
              src={trans1}
              alt="icon"
            />
            <img
              className="absolute !mt-0 right-0 md:-right-16 -top-16 w-[50px] md:w-[76px]"
              src={trans2}
              alt="icon"
            />
            <img
              className="absolute !mt-0 top-1/2 hidden md:block left-0 md:-left-16"
              src={trans3}
              alt="icon"
            />
            <img
              className="absolute !mt-0 top-1/2 hidden md:block right-0 md:-right-16"
              src={trans3}
              alt="icon"
            />
            <img
              className="absolute !mt-0 left-0 md:-left-16 -bottom-16 -rotate-180 w-[50px] md:w-[76px]"
              src={trans2}
              alt="icon"
            />
            <img
              className="absolute !mt-0 right-0 md:-right-16 -bottom-16 -rotate-180 w-[80px] md:w-[137px]"
              src={trans1}
              alt="icon"
            />
            <h1 className="primary-title gradient-one !mt-0 text-center md:text-left mb-8">
              Why Us?
            </h1>
            <div className="whyus-single-grid md:grid items-center grid-cols-2 gap-6">
              <div className="whyus-content">
                <h4>Dynamic and Amazing Cards</h4>
                <p>
                  We are a dedicated team with highly talented designers and
                  skillful developers who can craft an amazing Digital Card for
                  you.
                </p>
              </div>
              <div className="whyus-img md:ml-auto">
                <img src={w1} alt="" className="max-w-full" />
              </div>
            </div>
            <div className="whyus-single-grid flex flex-col-reverse md:grid items-center grid-cols-2 gap-6">
              <div className="whyus-img">
                <img src={w2} alt="" className="max-w-full" />
              </div>
              <div className="whyus-content md:ml-auto md:text-right">
                <h4>Save Your Time</h4>
                <p>
                  With an Digital business card, you can share your contact
                  information with just a tap of the card on a smartphone.
                </p>
              </div>
            </div>
            <div className="whyus-single-grid md:grid items-center grid-cols-2 gap-6">
              <div className="whyus-content">
                <h4>Latest technology</h4>
                <p>
                  Digital cards can be cost-effective compared to traditional
                  printed business cards. It can save money in the long run by
                  eliminating the need to constantly print and distribute
                  traditional business cards.
                </p>
              </div>
              <div className="whyus-img md:ml-auto">
                <img src={w3} alt="" className="max-w-full" />
              </div>
            </div>
            <div className="whyus-single-grid flex flex-col-reverse md:grid items-center grid-cols-2 gap-6">
              <div className="whyus-img">
                <img src={w4} alt="" className="max-w-full" />
              </div>
              <div className="whyus-content md:ml-auto md:text-right">
                <h4>Supercharge your Strategy</h4>
                <p>
                  Don't settle for a plain business card that will be easily
                  forgotten. Upgrade to an Digital card and make a lasting
                  impression with every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-area relative ">
        <div className="cta-overlay"></div>
        <div className="cta-overlay-back"></div>
        <div className="container relative z-10">
          <div className="space-y-5 md:space-y-0 md:grid grid-cols-2 items-center min-h-[307px]">
            <div className="cta-content">
              <h2>Experience Elegance</h2>
              <p>That makes strong connections</p>
            </div>
            <div class="align-center flex-column">
              <img src={btnTrans} alt="-" />
              <a shref="/select-card" className="box-btn">
                Get your Card
              </a>
              <img src={btnTrans} alt="-" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
