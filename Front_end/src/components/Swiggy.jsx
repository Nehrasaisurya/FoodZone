import React from "react";

const Swiggy = () => {
  return (
    <div className="px-4 md:px-10 lg:px-24 section-padding">
      <div
        className="p-2 py-6 md:p-8 flex flex-col md:flex-row justify-between items-center bg-[#85dcff] text-[#4d433a] rounded-lg custom-shadow"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div
          className="text-center w-full md:w-6/12 mb-6 md:mb-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-2xl uppercase tracking-widest font-bold">
            Free Delivery on first Order...💕🍕🎉
          </h1>
          <p className="uppercase tracking-widest font-bold">
            Order from our official website
          </p>
          <div className="">
            <button className=" uppercase tracking-widest font-bold text-[#f6f5f4] bg-[#4d433a] px-4 py-1 rounded-md mt-4">
              Order Now
            </button>
          </div>
        </div>
        <div
          className="mb-6 md:mb-0 flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="sml-divider rotate-0 md:rotate-90"></div>
        </div>
        <div className="w-10/12 md:w-6/12 flex justify-center">
          <a href="https://www.swiggy.com/" target="blank">
            <img
              src="images\swiggy.jpg"
              alt="..."
              className="rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Swiggy;
