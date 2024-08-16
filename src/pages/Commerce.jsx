import { useDispatch, useSelector } from "react-redux";
import FlipkartAssured from "../assets/FlipkartAssured.png";
import useProducts from "../hooks/useProducts";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../state/product/productSlice";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

const Commerce = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");
  const [availability, setAvailability] = useState(false);
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

  const filteredProducts = products.filter((product) => {
    const inPriceRange =
      priceRange === "0-100"
        ? product.price >= 0 && product.price <= 100
        : priceRange === "100-500"
        ? product.price > 100 && product.price <= 500
        : priceRange === "500+"
        ? product.price > 500
        : true;

    const inRating =
      rating === "4+"
        ? product.rating.rate >= 4
        : rating === "3+"
        ? product.rating.rate >= 3
        : rating === "2+"
        ? product.rating.rate >= 2
        : rating === "1+"
        ? product.rating.rate >= 1
        : true;

    const inStock = availability ? product.rating.count > 0 : true;

    return inPriceRange && inRating && inStock;
  });

  const currentProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  if (loading) {
    return <div className="text-black p-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-black p-20">Error fetching products.</div>;
  }

  return (
    <div className="grid grid-cols-[30%_auto]">
      <div>
        <Filter
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          rating={rating}
          setRating={setRating}
          availability={availability}
          setAvailability={setAvailability}
        />
      </div>
      <div>
        <div className="text-black">
          <div>
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map((item) => {
                  const quantity =
                    cart.find((cartItem) => cartItem.id === item.id)
                      ?.quantity || 0;

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
                        <h2 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h2>
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
          <Pagination
            products={filteredProducts}
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Commerce;
