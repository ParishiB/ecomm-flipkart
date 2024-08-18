import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import FlipkartAssured from "../../assets/FlipkartAssured.png";

const CommerceItems = ({
  currentProducts,
  cart,
  handleAddToCart,
  handleIncrease,
  handleDecrease,
  animate,
}) => {
  return (
    <div className="text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {currentProducts.map((item) => {
          const quantity =
            cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

          return (
            <div key={item.id} className="p-1 shadow-lg">
              <Link
                to={`/product/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-2"
                />
              </Link>
              <div className="bg-white transform transition-transform duration-300 hover:scale-y-105 hover:translate-y-[-24px] p-4 overflow-hidden">
                <img src={FlipkartAssured} className="h-[20px] mb-2" />
                <h2 className="text-lg font-semibold mb-2 truncate">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-2">₹{item.price}</p>
                <p className="text-green-500 font-bold text-[12px]">
                  Save extra % with combos
                </p>
                <div className="flex items-center justify-center mb-2">
                  <button
                    className="border p-2 px-4 rounded-full"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button
                    className="border p-2 px-4 rounded-full"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-blue-600 text-white p-1 m-2 rounded w-full flex justify-center"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommerceItems;
