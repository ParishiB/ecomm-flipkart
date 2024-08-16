import React, { useState, useEffect } from "react";

const priceRanges = [
  { value: "0-100", label: "0-100" },
  { value: "100-500", label: "100-500" },
  { value: "500+", label: "500 & above" },
];

const ratings = [
  { value: "4+", label: "4 star & above" },
  { value: "3+", label: "3 star & above" },
  { value: "2+", label: "2 star & above" },
  { value: "1+", label: "1 star & above" },
];

const Filter = ({
  priceRange,
  setPriceRange,
  rating,
  setRating,
  availability,
  setAvailability,
  products,
  setFilteredProducts,
}) => {
  const [lastClickTime, setLastClickTime] = useState(0);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter((product) => {
        const inPriceRange =
          priceRange === "0-100"
            ? product.price >= 0 && product.price <= 100
            : priceRange === "100-500"
            ? product.price > 100 && product.price <= 500
            : priceRange === "500+"
            ? product.price > 500
            : true; // No price filter applied

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
  }, [priceRange, rating, availability, products, setFilteredProducts]);

  const handlePriceRangeClick = (value) => {
    const currentTime = Date.now();
    if (currentTime - lastClickTime < 300) {
      setPriceRange("");
    } else {
      setPriceRange(value);
    }
    setLastClickTime(currentTime);
  };

  const handleAvailabilityChange = () => {
    setAvailability(!availability);
  };

  return (
    <div>
      <div className="font-bold mb-2">Price</div>
      {priceRanges.map(({ value, label }) => (
        <label key={value} className="block mb-1">
          <input
            type="radio"
            name="price"
            value={value}
            checked={priceRange === value}
            onClick={() => handlePriceRangeClick(value)}
            className="mr-2"
          />
          {label}
        </label>
      ))}

      <div className="font-bold mb-2 mt-4">Rating</div>
      {ratings.map(({ value, label }) => (
        <label key={value} className="block mb-1">
          <input
            type="radio"
            name="rating"
            value={value}
            checked={rating === value}
            onChange={(e) => setRating(e.target.value)}
            className="mr-2"
          />
          {label}
        </label>
      ))}

      <div className="font-bold mb-2 mt-4">Availability</div>
      <label className="block mb-1">
        <input
          type="checkbox"
          name="availability"
          checked={availability}
          onChange={handleAvailabilityChange}
          className="mr-2"
        />
        In Stock
      </label>
    </div>
  );
};

export default Filter;
