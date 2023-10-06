import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import "../App.css";

const Home = () => {
  return (
    <div id="Home" className="overlay px-3 md:px-10 lg:px-24">
      <div className="text-white z-40 text-center md:text-start">
        <p
          className="secondary-font text-lg md:text-xl mb-3"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          CREATE HAPPY HOURS AT
        </p>
        <h1
          className="text-7xl sm:text-8xl md:text-9xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="brand-text">F</span>ood{" "}
          <span className="brand-text">Z</span>one
        </h1>
        <p
          className="uppercase secondary-font mt-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          we offer a highly seasonal and continuously evolving tasting menu
          experience.
        </p>
        <div
          className="flex justify-center gap-5 under"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Link to="Menu">
            <button className="mt-8 text-xl secondary-font">Visit Menu</button>
          </Link>
          <Link to="Contact">
            <button className="mt-8 text-xl secondary-font">
              Book A Table
            </button>
          </Link>
        </div>
      </div>
      <div
        className="absolute bottom-6 md:bottom-12 px-4 md:px-10 lg:px-24 left-0 text-white font-bold z-40 flex items-center gap-3 text-xl"
        data-aos="fade-right"
      >
        <FaInstagram />
        <FaFacebook />
        <FaTwitter />
        <p className="secondary-font font-light">Follow us</p>
      </div>
    </div>
  );
};

export default Home;
