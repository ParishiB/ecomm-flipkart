import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";
import { addToCart, removeFromCart } from "./../state/product/productSlice";

const Product = () => {
  const { id } = useParams();
  const { product, loading, error } = useProducts(id);
  const { cart, handleAddToCart, handleRemoveFromCart } = useCart();

  if (loading) {
    return <div className="text-black p-20">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-black p-20">Error fetching product details.</div>
    );
  }

  if (!product) {
    return <div className="text-black p-20">Product not found.</div>;
  }

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <>
      <div className="text-black p-20">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover mb-4"
        />
        <p className="text-gray-800 mb-4">{product.description}</p>
        <p className="text-lg font-semibold">₹{product.price}</p>
        <button onClick={handleRemoveFromCart} disabled={!isInCart}>
          Remove from Cart
        </button>
        <button onClick={handleAddToCart} disabled={isInCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product;
