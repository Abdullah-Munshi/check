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
import rect from "../assets/rect-1.svg";
import f1 from "../assets/f-1.svg";
import f2 from "../assets/f-2.svg";
import f3 from "../assets/f-3.svg";
import f4 from "../assets/f-4.svg";
import qc1 from "../assets/qc-1.png";
import qc2 from "../assets/qc-2.png";
import Footer from "../layout/Footer";
import HeaderBefore from "../layout/HeaderBefore";

const Home = () => {
  return (
    <>
      <HeaderBefore />
      <div
        className="hero-area relative h-[450px] md:h-[730px] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <img
          className="royal-circle absolute top-[28%] z-10"
          src={royalCircle}
          alt="img"
        />
        <div className="container relative z-20 ">
          <div className="styles_zeeqr_section__Ukmdt mt-6 md:mt-0">
            <div className="styles_col_home__6H2IT">
              <div className="styles_col__t0VEX">
                <img src={heroDOne} alt="" />
                <div className="styles_text_content__7bjhW">
                  <p className="styles_hero_section_p1__Tmy9o">
                    Elevate your Brand
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="138"
                    height="17"
                    viewBox="0 0 138 17"
                    fill="none"
                    className="styles_marginLeftAuto__uhakb"
                  >
                    <path
                      d="M3.12792 14.2856C2.00604 11.7006 27.7289 7.91952 58.7252 5.5864C92.6213 3.03501 112.565 2.26471 134.979 3.08428"
                      stroke="#ECA436"
                      strokeWidth="5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
                <p className="styles_hero_section_p2__9AtzL">
                  With Card Connect ®
                </p>
                <p className="styles_tagLineText__ytNOD">
                  Card connect connecting minds
                </p>
                <a className="box-btn" href="/select-card">
                  Start Now!
                </a>
              </div>
              <div className="styles_col__t0VEX">
                <div className="styles_ourVideo__sw7zd"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="whyus-area bg-repeat rounded-[20px]  -mt-5 relative z-10 bg-[rgb(21,21,21)]"
        style={{ backgroundImage: `url(${patternBg})` }}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -top-[12px] sm:-top-[15px] ">
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
      <div className="cta-area relative overflow-hidden">
        <div className="cta-overlay"></div>
        <div className="cta-overlay-back"></div>
        <div className="container relative z-10">
          <img src={rect} className="absolute rect-one" alt="" />
          <img src={rect} className="absolute rect-two" alt="" />
          <img src={rect} className="absolute rect-three" alt="" />
          <div className="space-y-5 md:space-y-0 md:grid grid-cols-2 items-center min-h-[307px] mb-5 py-10 relative z-10">
            <div className="cta-content">
              <img src={heroDOne} alt="" />
              <h2>Experience Elegance</h2>
              <p>That makes strong connections</p>
            </div>
            <div className="flex items-center flex-col justify-center text-center">
              <img src={btnTrans} alt="-" />
              <a shref="/select-card" className="box-btn relux mx-auto my-4">
                Get your Card
              </a>
              <img src={btnTrans} alt="-" />
            </div>
          </div>
        </div>
      </div>
      <div className="feature-area">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:gap-6 md:grid-cols-2 gap-10">
            <div className="feature-card">
              <div className="top">
                <div className="fea-icon">
                  <img src={f1} alt="" />
                </div>
                <h5>Instant Sharing</h5>
              </div>
              <p>
                Digital card business cards can be easily shared by tapping them
                against an digital card smartphone. This makes it easy for
                potential clients, colleagues, or contacts to receive your
                contact information without the need for manual data entry.
              </p>
            </div>
            <div className="feature-card">
              <div className="top">
                <div className="fea-icon">
                  <img src={f2} alt="" />
                </div>
                <h5>Secure</h5>
              </div>
              <p>
                The data stored on the digital card is encrypted. This can help
                to protect the data from unauthorized access in case the card is
                lost or stolen. We constantly make sure that the user’s
                information is secure, and we never jeopardize the privacy of
                the user’s information.
              </p>
            </div>
            <div className="feature-card">
              <div className="top">
                <div className="fea-icon">
                  <img src={f3} alt="" />
                </div>
                <h5>Enhanced Engagement</h5>
              </div>
              <p>
                An digital card can be programmed with additional information,
                such as a link to your website, social media profiles, or a
                promotional video. This can help to enhance engagement with your
                brand and encourage potential clients to learn more about your
                business.
              </p>
            </div>
            <div className="feature-card">
              <div className="top">
                <div className="fea-icon">
                  <img src={f4} alt="" />
                </div>
                <h5>Customize your own cards</h5>
              </div>
              <p>
                An digital card can be programmed with additional information,
                such as a link to your website, social media profiles, or a
                promotional video. This can help to enhance engagement with your
                brand and encourage potential clients to learn more about your
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="twin-area">
        <div className="container">
          <div className="twin-grid md:grid grid-cols-[470px_auto] gap-6 items-center mb-16">
            <div className="whyus-content plc-2">
              <h4>Our Collections</h4>
              <p>
                Card Connect always delivers not just a card but a stylish and
                customizable solution which would be the game changer in
                marketing.
              </p>
            </div>
            <div className="qc-img">
              <img src={qc1} alt="" />
            </div>
          </div>
          <div className="twin-grid md:grid grid-cols-[470px_auto] gap-6 items-center">
            <div className="whyus-content plc-2">
              <h4>Our Mission</h4>
              <p>
                Our mission is to empower individuals and businesses with
                innovative technology solutions that simplify and enhance their
                daily lives. We have developed a range of digital card products
                that seamlessly integrate with your digital presence, making it
                easier than ever to share your contact details, social media
                profiles, and website with others. Card Connect solutions are
                customizable and come in a variety of designs, allowing you to
                showcase your brand's identity and values. It is our mission to
                help businesses and individuals succeed in the digital age.
              </p>
            </div>
            <div className="qc-img">
              <img src={qc2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
