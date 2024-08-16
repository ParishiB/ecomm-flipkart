import React from "react";

const Filter = ({
  priceRange,
  setPriceRange,
  rating,
  setRating,
  availability,
  setAvailability,
}) => {
  return (
    <div>
      <div className="font-bold mb-2">Price</div>
      <label className="block mb-1">
        <input
          type="radio"
          name="price"
          value="0-100"
          checked={priceRange === "0-100"}
          onChange={(e) => setPriceRange(e.target.value)}
          className="mr-2"
        />
        0-100
      </label>
      <label className="block mb-1">
        <input
          type="radio"
          name="price"
          value="100-500"
          checked={priceRange === "100-500"}
          onChange={(e) => setPriceRange(e.target.value)}
          className="mr-2"
        />
        100-500
      </label>
      <label className="block mb-1">
        <input
          type="radio"
          name="price"
          value="500+"
          checked={priceRange === "500+"}
          onChange={(e) => setPriceRange(e.target.value)}
          className="mr-2"
        />
        500 & above
      </label>

      <div className="font-bold mb-2 mt-4">Rating</div>
      <label className="block mb-1">
        <input
          type="radio"
          name="rating"
          value="4+"
          checked={rating === "4+"}
          onChange={(e) => setRating(e.target.value)}
          className="mr-2"
        />
        4 star & above
      </label>
      <label className="block mb-1">
        <input
          type="radio"
          name="rating"
          value="3+"
          checked={rating === "3+"}
          onChange={(e) => setRating(e.target.value)}
          className="mr-2"
        />
        3 star & above
      </label>
      <label className="block mb-1">
        <input
          type="radio"
          name="rating"
          value="2+"
          checked={rating === "2+"}
          onChange={(e) => setRating(e.target.value)}
          className="mr-2"
        />
        2 star & above
      </label>
      <label className="block mb-1">
        <input
          type="radio"
          name="rating"
          value="1+"
          checked={rating === "1+"}
          onChange={(e) => setRating(e.target.value)}
          className="mr-2"
        />
        1 star & above
      </label>

      <div className="font-bold mb-2 mt-4">Availability</div>
      <label className="block mb-1">
        <input
          type="checkbox"
          name="availability"
          checked={availability}
          onChange={(e) => setAvailability(e.target.checked)}
          className="mr-2"
        />
        In Stock
      </label>
    </div>
  );
};

export default Filter;
