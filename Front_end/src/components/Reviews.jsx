import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reviewsData = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.",
    user: "Prabhas",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.",
    user: "Allu Arjun",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.",
    user: "Ram Charan",
  },
];

const Reviews = () => {
  return (
    <section id="Reviews">
      <div className="section-padding bg-black bg-opacity-60 px-4 md:px-10 lg:px-24 text-white">
        <h1
          className="text-xl tracking-widest flex justify-center"
          data-aos="fade-up"
        >
          --Testimonial--
        </h1>
        <h1
          className="text-xl md:text-5xl font-bold mt-4 tracking-wider flex justify-center"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          What Our Customers Say...
        </h1>
        <div
          className="divider mx-auto mt-2"
          data-aos="fade-up"
          data-aos-delay="50"
        ></div>
        <div className="flex flex-col md:flex-row w-10/12 md:w-8/12 mx-auto mt-10 gap-6">
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={true}
            showIndicators={false}
          >
            {reviewsData.map((review, index) => (
              <div
                key={index}
                className="p-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <FaQuoteLeft className="mb-4" />
                <p className="secondary-font tracking-wider text-1xl">
                  {review.text}
                </p>
                <FaQuoteRight className="float-right mr-7" />
                <div className="mt-8 ">
                  <p>-----</p>
                  <p className="secondary-font text-xl">{review.user}</p>
                  <p className="secondary-font">Actor</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
