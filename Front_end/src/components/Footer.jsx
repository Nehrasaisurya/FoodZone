import React from "react";

import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="px-4 md:px-10 lg:px-24 section-padding text-center">
      <div className="flex flex-col font-bold tracking-widest">
        <div>
          <h1 className="text-3xl" data-aos="fade-up" data-aos-delay="50">
            Food Zone
          </h1>
          <p className="text-xl mb-3" data-aos="fade-up" data-aos-delay="100">
            Best Restro in Hyderabad
          </p>
          <div data-aos="fade-up" data-aos-delay="150">
            ----------------------
          </div>
        </div>
        <div className="mt-12">
          <h1>©2023 FoodZone Ltd .(IND) - All Rights Reserved</h1>
          <p className="flex justify-center items-center text-lg gap-4 cursor-pointer">
            Follow Us : <IoLogoFacebook />
            <IoLogoInstagram />
            <IoLogoTwitter />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
