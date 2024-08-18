import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { IoStarSharp } from "react-icons/io5";
import useFilter from "../../hooks/useFilter";

const Filter = ({ products, setFilteredProducts }) => {
  const {
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
  } = useFilter(products, setFilteredProducts);

  return (
    <div className="px-5">
      <div className="font-bold mb-2 mt-4 ml-2">Price</div>
      <div className="ml-3 mb-2">
        <Slider
          range
          min={0}
          max={1000}
          value={price}
          onChange={handlePriceRangeChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs mt-2">
          <span>{price[0]}</span>
          <span>{price[1]}</span>
        </div>
      </div>

      <div className="font-bold mb-2 mt-4 ml-2">Rating</div>
      {ratings.map(({ value, label, icon }) => (
        <label key={value} className="block mb-2 ml-3 flex items-center">
          <input
            type="checkbox"
            name="rating"
            value={value}
            checked={rating === value}
            onChange={(e) => setRating(e.target.value)}
            className="mr-2"
          />
          <div className="flex items-center">
            <span className="mr-1">{label}</span>
            <span className="ml-1 text-yellow-500">{icon}</span>
            <span className="ml-2"> & above</span>
          </div>
        </label>
      ))}

      <div className="font-bold mb-2 mt-4 ml-2">Availability</div>
      <label className="block ml-3">
        <input
          type="checkbox"
          name="availability"
          checked={availability}
          onChange={handleAvailabilityChange}
          className="mr-2"
        />
        In Stock
      </label>
      <button
        className="bg-dark-blue text-white p-2 rounded-lg mt-5 w-3/4"
        onClick={handleClearFilters}
      >
        Clear All filters
      </button>
    </div>
  );
};

export default Filter;
