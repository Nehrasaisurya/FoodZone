import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as MainLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "./CartSlice";
import { clearCart } from "./CartSlice";
import { AiOutlineDelete } from "react-icons/ai";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ itemId }));
  };

  const clearTheCart = () => {
    dispatch(clearCart());
  };
  const totalCost = cartItems.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [show, setshow] = useState(false);
  const toggleShow = () => {
    setshow(!show);
  };

  return (
    <div className="w-full">
      <nav
        className="fixed w-full p-4 py-6 z-10 bg-gradient-to-b from-black tracking-widest"
        id="navbar"
      >
        <div className="container mx-auto flex justify-between items-center font-bold">
          <MainLink to="/" className="cursor-pointer">
            <h1 className="main-font font-bold text-lg">FZ</h1>
          </MainLink>
          <div className="flex gap-5 items-center">
            <div className="hidden md:flex space-x-4">
              <Link
                spy={true}
                activeClass="active"
                to="Home"
                className="cursor-pointer"
              >
                <h1>HOME</h1>
              </Link>
              <Link
                spy={true}
                activeClass="active"
                to="About"
                className="cursor-pointer"
              >
                <h1>ABOUT</h1>
              </Link>
              <Link
                spy={true}
                activeClass="active"
                to="Menu"
                className="cursor-pointer"
              >
                <h1>MENU</h1>
              </Link>
              <Link
                spy={true}
                activeClass="active"
                to="Contact"
                className="cursor-pointer"
              >
                <h1>CONTACT</h1>
              </Link>
              <div className="cart cursor-pointer">
                <FaShoppingCart onClick={() => toggleShow()} />
                <small className="cart-number">{cartItems.length}</small>
              </div>
            </div>
          </div>
          <div className="md:hidden flex gap-5">
            <button onClick={toggleNavbar} className="">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="cart cursor-pointer">
              <FaShoppingCart onClick={() => toggleShow()} />
              <small className="cart-number">{cartItems.length}</small>
            </div>
          </div>
        </div>
        {isOpen && (
          <div>
            <div className="md:hidden text-center">
              <Link activeClass="active" to="Home" className="cursor-pointer">
                <h1 className="block py-2 px-4 ">Home</h1>
              </Link>
              <Link activeClass="active" to="Menu" className="cursor-pointer">
                <h1 className="block py-2 px-4 ">About</h1>
              </Link>
              <Link activeClass="active" to="Menu" className="cursor-pointer">
                <h1 className="block py-2 px-4 ">Menu</h1>
              </Link>
              <Link activeClass="active" to="Menu" className="cursor-pointer">
                <h1 className="block py-2 px-4 mx-auto">Contact</h1>
              </Link>
            </div>
          </div>
        )}

        {show && (
          <div className="absolute top-0 right-0 w-full h-screen bg-black bg-opacity-50 z-90">
            <div className="absolute top-0 right-0 w-[350px] sm:w-[400px] h-screen bg-[#8edfff] z-100 p-5 py-7">
              <div className="flex justify-between">
                <span> </span>
                <h1 className="text-black font-extrabold text-2xl">
                  -- CART --
                </h1>
                <FaTimes
                  onClick={toggleShow}
                  className="text-black cursor-pointer"
                />
              </div>
              {cartItems.length < 1 ? (
                <div className="justify-between hidden">
                  <span> </span>
                  <button className="text-white tracking-widest font-bold px-3 py-1 bg-red-500 rounded-md mt-2">
                    Clear
                  </button>
                </div>
              ) : (
                <div className="flex justify-between">
                  <span> </span>
                  <button
                    className="text-white tracking-widest font-bold px-3 py-1 bg-red-500 rounded-md mt-2 mb-5"
                    onClick={() => clearTheCart()}
                  >
                    Clear
                  </button>
                </div>
              )}

              <div className="overflow-y-auto max-h-[100vh] pb-20">
                {cartItems.length < 1 ? (
                  <Link
                    to="Menu"
                    className="flex justify-center flex-col items-center mt-10"
                  >
                    <h1 className="text-black font-bold text-lg">
                      Looks Like your cart is empty..
                    </h1>
                    <button className="text-blue-600 font-bold text-lg tracking-widest mb-10">
                      Explore Now
                    </button>
                  </Link>
                ) : (
                  cartItems.map((item, key) => (
                    <div className="">
                      <div
                        key={key}
                        className="w-12/12 h-32 p-3 bg-white custom-shadow rounded-md flex justify-between mt-3"
                      >
                        <img
                          src={item?.mainImage?.asset?.url}
                          alt="..."
                          className="w-5/12 rounded-md"
                        />
                        <div className="w-7/12 py-2 pl-2 flex flex-col text-black">
                          <div className="flex justify-between items-center">
                            <h1 className="text-lg font-bold tracking-widest">
                              {item.title}
                            </h1>
                          </div>
                          <div className="flex justify-between mt-auto">
                            <h1 className="font-bold text-lg">
                              $.{item.price}
                            </h1>
                            <div className="mt-auto">
                              <button
                                onClick={() => handleRemoveItem(item.key)}
                                className="text-md bg-red-500 text-white rounded-md px-4 py-2"
                              >
                                <AiOutlineDelete />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <div className="text-black flex mt-4 mb-4">
                  <spam className="hidden sm:flex">---------------</spam>
                  ---------------------------------------
                </div>
                <h1 className="text-black flex justify-end text-2xl">
                  TotalPrice: ${totalCost}
                </h1>
                <div className="flex justify-center mt-10">
                  <button className="bg-[#4d433a] px-4 rounded-sm py-2 tracking-widest">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
