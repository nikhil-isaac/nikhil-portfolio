import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import { TextLoop } from "react-text-loop-next";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BrandTwo from "./BrandTwo";
import avatar from "../assets/images/about/avatar.jpg";

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];
const PortfolioLanding = () => {
  let description =
    "I'm a software engineer specializing in building amazing digital experiences and products. Currently, I’m focused on building exceptional user interfaces for IBM.";
  // const PostList = BlogContent.slice(0, 3);
  return (
    <div>
      <Helmet pageTitle="Nikhil Manohar" />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide slider-style-3 d-flex align-items-center justify-content-center"
              key={index}
            >
              <div
                className="container"
                style={{
                  pointerEvents: "none",
                }}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      <h2 className="title">
                        Hi, I’m Nikhil Isaac Manohar <br />
                        <TextLoop>
                          <span className="section-title">
                            <h3>Software Engineer</h3>
                          </span>
                          <span className="section-title">
                            <h3>Full-stack Developer</h3>
                          </span>
                          <span className="section-title">
                            <h3>Open source contributor</h3>
                          </span>
                          <span className="section-title">
                            <h3>Public Speaker</h3>
                          </span>
                          <span className="section-title">
                            <h3>Volunteer</h3>
                          </span>
                          <span className="section-title">
                            <h3>Mentor</h3>
                          </span>
                        </TextLoop>{" "}
                      </h2>
                      <button
                        style={{
                          marginTop: "12px",
                          marginBottom: "50px",
                          pointerEvents: "all",
                        }}
                        class="rn-btn btn-solid"
                      >
                        <a href={"#contact"}>Contact Me</a>
                      </button>
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area  bg_color--1">
          <div className="about-wrapper">
            <div className="container about-container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-12">
                  <div className="ptb--20 about-inner inner">
                    <div className="section-title">
                      <div>
                        <div className="row row--35 align-items-center">
                          <div className="col-md-3">
                            <div className="thumbnail">
                              <img
                                className="w-100"
                                src={avatar}
                                alt="About Images"
                              />
                            </div>
                          </div>
                          <div className="col-md-9">
                            <p className="description">{description}</p>
                          </div>
                        </div>
                        <div className="row mt--30">
                          <h3 className="title">Education</h3>
                        </div>
                        <div className="row mt--30">
                          <TabTwo tabStyle="tab-style--1" type="education" />
                        </div>
                        <div className="row mt--30">
                          <h3 className="title">Experience</h3>
                        </div>
                        <div className="row mt--30">
                          <TabTwo tabStyle="tab-style--1" type="experience" />
                        </div>
                        <div className="row mt--30">
                          <h3 className="title">
                            Additional Experience & Accomplishments
                          </h3>
                        </div>
                        <div className="row mt--30">
                          <TabTwo
                            tabStyle="tab-style--1"
                            type="addExperience"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="skills" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Skills</h2>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="3"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Projects</h2>
                    <p>Few of the projects I've worked on.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
              {/* <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a className="rn-button-style--2 btn-solid" href="/blog">
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Blog Area */}
      {/* <div id="blog" className="fix">
        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2>Latest News</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, <br />
                    but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href="/blog-details">
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href="/blog-details">{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href="/blog-details">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* End Blog Area */}

      {/* Start Brand Area */}

      <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BrandTwo />
            </div>
          </div>
        </div>
      </div>
      {/* End Brand Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree
            contactImages="/assets/images/about/about-9.jpg"
            contactTitle="Contact Me"
          />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
