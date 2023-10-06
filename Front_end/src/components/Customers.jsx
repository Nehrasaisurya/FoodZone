import React from "react";

const Customers = () => {
  return (
    <div className="px-4 md:px-10 lg:px-24 section-padding">
      <div
        className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 items-center justify-between custom-shadow py-8 rounded-xl bg-white"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        <div className="flex flex-col text-center mx-auto gap-y-3">
          <h1 className="text-3xl md:text-4xl text-brand font-bold">10K+</h1>
          <p className="text-1xl secondary-font">Happy customers</p>
        </div>
        <div className="flex flex-col text-center mx-auto gap-y-3">
          <h1 className="text-3xl md:text-4xl text-brand font-bold">15K+</h1>
          <p className="text-1xl secondary-font">Deliveries</p>
        </div>
        <div className="flex flex-col text-center mx-auto gap-y-3">
          <h1 className="text-3xl md:text-4xl text-brand font-bold">20+</h1>
          <p className="text-1xl secondary-font">Chefs</p>
        </div>
        <div className="flex flex-col text-center mx-auto gap-y-3">
          <h1 className="text-3xl md:text-4xl text-brand font-bold">100+</h1>
          <p className="text-1xl secondary-font">Food Varieties</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
