import { useEffect, useState } from "react";
import FlipkartAssured from "../assets/FlipkartAssured.png";
import { useDispatch } from "react-redux";
import useProducts from "../hooks/useProducts";
import { addToCart } from "../state/product/productSlice";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";

const Commerce = () => {
  const { products, loading, error } = useProducts();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  if (loading) {
    return <div className="text-black p-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-black p-20">Error fetching products.</div>;
  }

  return (
    <>
      <div className="text-black p-20">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <div className="p-4">
                <a
                  key={item.id}
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
                  <button
                    className="bg-blue-600 text-white p-1 m-2 rounded  w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </>
  );
};

export default Commerce;
