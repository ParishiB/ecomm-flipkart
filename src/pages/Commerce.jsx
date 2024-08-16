// import { useEffect, useState } from "react";
// import FlipkartAssured from "../assets/FlipkartAssured.png";
// import { useDispatch, useSelector } from "react-redux";

// import useProducts from "../hooks/useProducts";
// import {
//   addToCart,
//   decreaseQuantity,
//   increaseQuantity,
// } from "../state/product/productSlice";
// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// const Commerce = () => {
//   const { products, loading, error } = useProducts();
//   const dispatch = useDispatch();

//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item));
//   };

//   const handleIncrease = (item) => {
//     dispatch(increaseQuantity(item));
//   };

//   const handleDecrease = (item) => {
//     dispatch(decreaseQuantity(item));
//   };

//   if (loading) {
//     return <div className="text-black p-20">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-black p-20">Error fetching products.</div>;
//   }

//   return (
//     <div className="text-black p-20">
//       {products.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((item) => {
//             const quantity = useSelector((state) =>
//               selectItemQuantity(state, item.id)
//             );

//             return (
//               <div key={item.id} className="p-4">
//                 <a
//                   href={`/product/${item.id}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="border p-4 rounded-lg shadow-lg"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-48 object-cover mb-2"
//                   />
//                 </a>
//                 <div className="bg-white transform transition-transform duration-300 hover:scale-y-105 hover:translate-y-[-24px] p-4">
//                   <img src={FlipkartAssured} className="h-[20px]" />
//                   <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
//                   <p className="text-gray-600">₹{item.price}</p>
//                   <div className="flex items-center">
//                     <button
//                       className="border p-2"
//                       onClick={() => handleDecrease(item)}
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{quantity}</span>
//                     <button
//                       className="border p-2"
//                       onClick={() => handleIncrease(item)}
//                     >
//                       +
//                     </button>
//                     <button
//                       className="bg-blue-600 text-white p-1 m-2 rounded w-full"
//                       onClick={() => handleAddToCart(item)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <div>No products found.</div>
//       )}
//     </div>
//   );
// };

// export default Commerce;
import { useDispatch, useSelector } from "react-redux";
import FlipkartAssured from "../assets/FlipkartAssured.png";
import useProducts from "../hooks/useProducts";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../state/product/productSlice";
import { selectItemQuantity } from "../state/product/productSelectors"; // Ensure this is the correct path
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Commerce = () => {
  const { products, loading, error } = useProducts();
  const dispatch = useDispatch();

  // Select all cart items from state
  const cart = useSelector((state) => state.product.cart);

  // Handler functions
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  if (loading) {
    return <div className="text-black p-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-black p-20">Error fetching products.</div>;
  }

  return (
    <div className="text-black p-20">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => {
            const quantity =
              cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

            return (
              <div key={item.id} className="p-4">
                <a
                  href={`/product/${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border p-4 rounded-lg shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover mb-2"
                  />
                </a>
                <div className="bg-white transform transition-transform duration-300 hover:scale-y-105 hover:translate-y-[-24px] p-4">
                  <img src={FlipkartAssured} className="h-[20px]" />
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600">₹{item.price}</p>
                  <div className="flex items-center">
                    <button
                      className="border p-2"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      className="border p-2"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                    <button
                      className="bg-blue-600 text-white p-1 m-2 rounded w-full"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
};

export default Commerce;
