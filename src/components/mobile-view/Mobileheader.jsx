import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./../../assets/Logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { IoSparklesSharp } from "react-icons/io5";
import "../header/Header.css";

const Mobileheader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const cartCount = useSelector((state) => state.product.cartCount);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    if (cartCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      {menuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30"></div>
      )}

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-[#2974f0] p-4 border border-gray-300 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <div>
            <div className="flex flex-col space-y-4 mt-4">
              <h1 className="text-xl font-semibold">Become a seller</h1>
              <h1 className="text-xl font-semibold">Products</h1>
              <h1 className="text-xl font-semibold">Offers</h1>
              <h1 className="text-xl font-semibold">Policy</h1>
            </div>
          </div>
          <div className="-mt-[120px]">
            <RxCross2
              onClick={toggleMenu}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>

      {!menuOpen && (
        <div className="bg-[#2974f0] flex justify-between items-center p-2 z-30 relative">
          <img src={Logo} alt="Logo" className="h-[50px] p-2" />
          <div className="font-bold px-10 mt-2 relative">
            <h1
              onClick={handleNavigateToCart}
              className={`flex items-center cursor-pointer ${
                animate ? "animate-bounce" : ""
              }`}
            >
              <BsCart className="h-[30px]" />
              {cartCount > 0 && (
                <span className="bg-red-600 text-white rounded-full px-2 py-1 text-xs ml-2 relative flex items-center">
                  {cartCount}
                  {animate && (
                    <>
                      <IoSparklesSharp className="absolute top-[-15px] left-[-50px] text-yellow-400 text-lg animate-pulse" />
                    </>
                  )}
                </span>
              )}
            </h1>
          </div>
          <div className="flex items-center">
            <button className="bg-white text-[#2974f0] px-6 py-1 h-12 my-2 flex items-center justify-center border border-gray-300">
              Login
            </button>
            <button
              className="text-white px-4 py-2 h-12 flex items-center justify-center"
              onClick={toggleMenu}
            >
              <IoMenuSharp className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobileheader;
