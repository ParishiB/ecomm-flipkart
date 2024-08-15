import React from "react";
import Logo from "../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.product.cartCount);

  const handleNavigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="flex bg-[#2974f0] p-4 text-white px-[100px]">
      <img src={Logo} className="h-[40px]" />
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600">
          <FaSearch />
        </span>
      </div>
      <div className="bg-white text-[#2974f0] mx-8">
        <button className="text-md px-10 py-2">Login</button>
      </div>
      <div className="font-bold px-10 mt-2">
        {" "}
        <h1>Become a Seller</h1>
      </div>
      <div className="font-bold px-10 mt-2">
        {" "}
        <h1>More</h1>
      </div>
      <div className="font-bold px-10 mt-2">
        <h1 onClick={handleNavigateToCart}>
          Cart
          {cartCount > 0 && (
            <span className="bg-red-600 text-white rounded-full px-2 py-1 text-xs ml-2">
              {cartCount}
            </span>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Header;
