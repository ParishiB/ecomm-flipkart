import { useState, useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";

const useFilter = (products, setFilteredProducts) => {
  const [price, setPrice] = useState([0, 500]);
  const [rating, setRating] = useState("");
  const [availability, setAvailability] = useState(false);

  const ratings = [
    { value: "4+", label: "4 " },
    { value: "3+", label: "3 " },
    { value: "2+", label: "2 " },
    { value: "1+", label: "1" },
  ];
  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter((product) => {
        const inPriceRange =
          product.price >= price[0] && product.price <= price[1];

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

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [price, rating, availability, products, setFilteredProducts]);

  const handlePriceRangeChange = (value) => {
    setPrice(value);
  };

  const handleAvailabilityChange = () => {
    setAvailability(!availability);
  };

  const handleClearFilters = () => {
    setPrice([0, 500]);
    setRating("");
    setAvailability(false);
  };

  return {
    price,
    rating,
    availability,
    ratings,
    handlePriceRangeChange,
    handleAvailabilityChange,
    handleClearFilters,
    setPrice,
    setRating,
    setAvailability,
  };
};

export default useFilter;
