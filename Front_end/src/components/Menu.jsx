import React, { useState, useEffect } from "react";
import sanityClient from "../client";

import { addItem } from "./CartSlice";
import { useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";

const Menu = () => {
  const [notification, setNotification] = useState("");
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setNotification("Item added to cart!");

    setTimeout(() => {
      setNotification("");
    }, 1500);
  };
  const [items, setitems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityClient.fetch(`*[_type=="item"]{
            title,
            slug,
            mainImage{
                asset->{
                    url,
                }
            },
            rating,
            itemType,
            price,
            ingredients
        }`);
        setitems(data);
        setfilter(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [filter, setfilter] = useState(items);

  const VegItems = () => {
    let filteritems = items.filter((item) => item.itemType === "veg");
    setfilter(filteritems);
  };

  const NonVegItems = () => {
    let filteritems = items.filter((item) => item.itemType !== "veg");
    setfilter(filteritems);
  };

  const AllItems = () => {
    setfilter(items);
  };

  const [Showmore, setshowmore] = useState("Show More");

  const [displayCount, setDisplayCount] = useState(6);

  const loadMoreItems = () => {
    if (displayCount === 6) {
      setDisplayCount(displayCount + filter.length - displayCount);
      setshowmore("Show Less");
    } else {
      setDisplayCount(6);
      setshowmore("Show More");
    }
  };

  return (
    <main className="px-4 md:px-10 lg:px-24 section-padding" id="Menu">
      <div className="mb-10">
        <h1
          className="text-xl text-center font-bold tracking-widest mb-3  text-[#00b7ff]"
          data-aos="fade-up"
        >
          -- DISCOVER --
        </h1>
        <h1
          className="text-center text-6xl font-bold"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Our Menu
        </h1>
        <div
          className="flex items-center justify-center gap-10 mt-10 secondary-font"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <button
            onClick={() => AllItems()}
            className="underline underline-offset-4"
          >
            ALL
          </button>
          <button
            onClick={() => VegItems()}
            className="underline underline-offset-4"
          >
            VEG
          </button>
          <button
            onClick={() => NonVegItems()}
            className="underline underline-offset-4"
          >
            NONVEG
          </button>
        </div>
      </div>
      <section className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {filter &&
            filter.slice(0, displayCount).map((item, index) => (
              <article
                key={index}
                className="flex flex-col md:flex-row justify-between font-bold tracking-widest bg-white rounded-lg p-4 menu-shadow md:p-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-12/12 md:w-6/12 ">
                  <img
                    src={item.mainImage.asset.url}
                    alt="..."
                    className="rounded-md transition-all h-full w-full"
                  />
                </div>
                <div className="w-12/12 md:w-6/12 px-1 md:px-5 py-2 mt-4">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex flex-col">
                      <h1 className="text-xl tracking-widest">{item.title}</h1>
                      <div className="small-divider mb-3"></div>
                    </div>
                    <h1>
                      {item.itemType === "veg" ? (
                        <img src="images\veg.png" className="w-6" alt="..." />
                      ) : (
                        <img
                          src="images\nonveg.png"
                          className="w-6"
                          alt="..."
                        />
                      )}
                    </h1>
                  </div>

                  <div className="flex justify-between">
                    <span className="capitalize text-sm">
                      {item.ingredients.slice(0, 3).map((tag) => (
                        <li key={tag} className="">
                          {tag}
                        </li>
                      ))}
                      <h1 className="text-xl">
                        {"⭐".repeat(Math.floor(item.rating))}
                      </h1>
                    </span>
                    <div className="font-bold">
                      <h1 className="text-xl font-extrabold">$ {item.price}</h1>
                      <button
                        className="border border-black border-opacity-20 text-red-500 px-3 py-3 rounded-md w-full tracking-widest mt-3"
                        onClick={() => handleAddItem(item)}
                      >
                        <AiFillHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
        {filter && displayCount <= filter.length && (
          <div
            className="flex justify-center mt-10 underline"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <button
              className="font-bold tracking-widest"
              onClick={loadMoreItems}
            >
              {Showmore}
            </button>
          </div>
        )}
      </section>
      {notification && (
        <div className="fixed top-16 left-0 text-center w-full">
          <span
            className="bg-green-300 rounded-md tracking-widest px-4 py-3 font-extrabold text-md"
            role="alert"
          >
            {notification}
          </span>
        </div>
      )}
    </main>
  );
};

export default Menu;
