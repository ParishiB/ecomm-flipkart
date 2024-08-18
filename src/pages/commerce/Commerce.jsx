import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useProducts from "../../hooks/useProducts";
import { ClipLoader } from "react-spinners";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../state/product/productSlice";
import { FaFilter } from "react-icons/fa";
import Pagination from "../../components/commerce/Pagination";
import Filter from "../../components/commerce/Filter";
import useScreenInfo from "../../hooks/useScreenInfo";
import CommerceItems from "./CommerceItems";

const Commerce = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [priceRange, setPriceRange] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [rating, setRating] = useState("");
  const [availability, setAvailability] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { isMobileView, isLargeMobile } = useScreenInfo();
  const itemsPerPage = 10;
  const { products, loading, error } = useProducts();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleFilterToggle = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const currentProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#2974f0" size={50} />
      </div>
    );
  }

  if (error) {
    return <div className="text-black p-20">Error fetching products.</div>;
  }

  return (
    <div className="relative">
      {(isMobileView || isLargeMobile) && (
        <>
          <button
            onClick={handleFilterToggle}
            className="fixed top-25 left-4 z-10 bg-white p-6 rounded-full shadow-md"
          >
            <FaFilter size={44} className="text-blue-600" />
          </button>

          {isFilterModalOpen && (
            <div className="fixed inset-0 bg-white z-40 p-4 overflow-auto">
              <Filter
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                rating={rating}
                setRating={setRating}
                availability={availability}
                setAvailability={setAvailability}
                products={products}
                setFilteredProducts={setFilteredProducts}
              />
              <button
                onClick={handleFilterToggle}
                className="absolute top-4 right-4 text-gray-600"
              >
                Close
              </button>
            </div>
          )}
        </>
      )}

      {isMobileView || isLargeMobile ? (
        <div className={isFilterModalOpen ? "pt-32" : "pt-4"}>
          <CommerceItems
            currentProducts={currentProducts}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
          <Pagination
            products={filteredProducts}
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      ) : (
        <div className="grid grid-cols-[250px_auto]">
          <Filter
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            rating={rating}
            setRating={setRating}
            availability={availability}
            setAvailability={setAvailability}
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
          <div>
            <CommerceItems
              currentProducts={currentProducts}
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
            <Pagination
              products={filteredProducts}
              totalItems={filteredProducts.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Commerce;
