import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import Commerce from "../pages/Commerce";
import Product from "../pages/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/commerce" />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/commerce" element={<Commerce />} />
    </Routes>
  );
};

export default Router;
