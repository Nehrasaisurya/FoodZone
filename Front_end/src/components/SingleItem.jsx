import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const SingleItem = () => {
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    dispatch(addItem(items));
  };

  const { slug } = useParams();

  const [items, setitem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityClient.fetch(`*[slug.current=="${slug}"]{
                title,
                mainImage{
                    asset->{
                        url
                    }
                },
                itemType,
                ingredients,
                price,
                rating,
                body
            }`);
        setitem(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!items) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <main className="h-screen p-5 md:p-20">
        <section className="container mx-auto flex justify-center items-center w-full h-full">
          <div className="p-3 md:p-6 flex flex-col md:flex-row bg-white custom-shadow gap-5 rounded-xl">
            <img
              src={items?.mainImage?.asset?.url}
              alt=".."
              className="rounded-2xl md:rounded-l-2xl object-cover w-full md:w-7/12"
            />
            <div className="w-full md:w-5/12 mx-auto my-auto mt-2 p-2 md:p-6 font-bold tracking-widest">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl mb-2">{items?.title}</h1>
                <h1>
                  {items.itemType === "veg" ? (
                    <img src="images\veg.png" className="w-6" alt="..." />
                  ) : (
                    <img src="images\nonveg.png" className="w-6" alt="..." />
                  )}
                </h1>
              </div>
              <div className="divider mt-0 mb-4"></div>
              <p className="text-sm text-justify">Description: {items?.body}</p>
              <div className="flex justify-between mt-4">
                <div>
                  <h1 className="text-lg">Price: ${items.price}</h1>
                  <h1 className="text-lg">{items.rating}⭐ </h1>
                  <button
                    className="bg-[#00b7ff] text-[#fff] px-4 py-2 rounded-md mt-3"
                    onClick={() => handleAddItem(items)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div>
                  <p className="">Ingredients used:</p>
                  <span className="capitalize">
                    {items.ingredients.map((tag) => (
                      <li key={tag} className="">
                        {tag}
                      </li>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SingleItem;
