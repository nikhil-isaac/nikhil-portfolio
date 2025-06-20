import React, { useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from "react-scrollspy";
import logo from "../../assets/images/logo/logo.svg";

const SocialShare = [
  { Social: <FaGithub />, link: "https://github.com/nikhil-isaac" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/nikhilisaacmanohar",
  },
];

const HeaderThree = props => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed").classList.add("sticky");
      } else {
        document.querySelector(".header--fixed").classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement.querySelector(".submenu").classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
  }, []);

  // Define functions directly, no need to bind them
  const menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  };

  const closeMenuTrigger = () => {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  };

  const { color = "default-color", homeLink } = props;

  let logoUrl = <img style={{ width: "50px", opacity: 0.8 }} src={logo} alt="Nikhil Manohar" />;

  return (
    <header className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href={homeLink}>{logoUrl}</a>
          </div>
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy
              className="mainmenu"
              items={["home", "about", "skills", "portfolio", "blog", "contact"]}
              currentClassName="is-current"
              offset={-200}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              {/* <li>
                <a href="#blog">Blog</a>
              </li> */}
              {/* <li>
                <a href="#contact">Contact</a>
              </li> */}
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right">
          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {SocialShare.map((val, i) => (
                <li key={i}>
                  <a href={`${val.link}`}>{val.Social}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="header-btn">
            <a className="rn-btn" href="#contact">
              <span>Contact me</span>
            </a>
          </div> */}
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={closeMenuTrigger} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderThree;
