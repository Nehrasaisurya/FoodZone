import React from "react";

import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Contact = () => {
  return (
    <div className="px-4 md:px-10 lg:px-24  section-padding" id="Contact">
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-6/12 font-bold tracking-widest pr-0 md:pr-16">
          <h1 className="text-xl mb-1" data-aos="fade-up">
            Contact Us
          </h1>
          <div className="divider" data-aos="fade-up"></div>
          <div>
            <p
              className="mt-8 text-6xl mb-2 font-extrabold"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <span className="text-[#00b7ff]">F</span>ood{" "}
              <span className="text-[#00b7ff]">Z</span>one
            </p>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="flex items-center gap-4 text-lg">
                <FaPhone /> +91 9876543210
              </p>
              <p className="flex items-center gap-4 text-lg">
                <FaEnvelope /> Foodzone@gmail.com
              </p>
              <p className="flex items-center gap-4 text-lg">
                <FaMapMarkerAlt /> Near Panjagutta, Hyderabad
              </p>
              <p className="flex items-center gap-4 text-lg">
                <IoLogoInstagram /> FoodZone_123
              </p>
            </div>
            <div className="mt-10 text-center">
              <h1 className="mt-4 text-2xl tracking-widest" data-aos="fade-up">
                Make a Reservation
              </h1>
              <div
                className="small-divider mx-auto mb-4"
                data-aos="fade-up"
              ></div>
              <div className="flex gap-3">
                <input
                  className="bg-black bg-opacity-10 px-5 py-4 rounded-md w-full md:w-6/12 border-none outline-none placeholder:text-black placeholder:text-opacity-70 placeholder:tracking-widest"
                  placeholder="Name"
                  data-aos="fade-up"
                  data-aos-delay="50"
                ></input>
                <input
                  className="bg-black bg-opacity-10 px-5 py-4 rounded-md w-full md:w-6/12 border-none outline-none placeholder:text-black placeholder:text-opacity-70 placeholder:tracking-widest"
                  placeholder="Email"
                  data-aos="fade-up"
                  data-aos-delay="100"
                ></input>
              </div>
              <textarea
                className="bg-black bg-opacity-10 px-5 py-2 rounded-md  w-full mt-5 border-none outline-none placeholder:text-black placeholder:text-opacity-70 placeholder:tracking-widest"
                placeholder="Message"
                data-aos="fade-up"
                data-aos-delay="150"
              ></textarea>
              <button
                className="mt-4 mb-6 px-4 py-2 bg-[#00b7ff] text-white tracking-widest rounded-md"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-6/12 h-[550px]"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6738874004486!2d78.44968707553977!3d17.427431101649514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90caa04b44d1%3A0x41ee6e34f36e7036!2sMeridian%20Restaurant!5e0!3m2!1sen!2sin!4v1694768951792!5m2!1sen!2sin"
            className="w-full h-full custom-shadow rounded-xl"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
