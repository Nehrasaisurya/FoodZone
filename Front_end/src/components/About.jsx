import React from "react";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row px-4 md:px-10 lg:px-24 section-padding tracking-widest"
      id="About"
    >
      <div className="hidden lg:flex">
        <img
          src="welcome-1.jpg"
          alt=""
          className="rounded-lg"
          data-aos="fade-up"
        />
      </div>
      <div
        className="mx-auto text-center w-10/12 lg:w-8/12 p-0 md:p-4 lg:p-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="flex text-3xl items-center justify-center font-bold text-[#00b7ff]">
          -- Welcome --
        </h1>
        <h1 className="text-5xl font-bold mt-8">Dining at FoodZone</h1>
        <div className="mt-4">
          <p className="text-md font-semibold">
            For a truly memorable dining experience, cuisine and atmosphere are
            paired as thoughtfully as food and wine. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco. Quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et
            dolorum fuga. Nam libero tempore.
          </p>
        </div>
        <div>
          <button className="text-lg mt-7 uppercase tracking-wider secondary-font bg-[#00b7ff] hover:bg-[#00aeff] text-white px-4 py-2 rounded-lg">
            Make Reservation
          </button>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img
          src="welcome-2.jpg"
          alt=""
          className="rounded-lg "
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default About;
