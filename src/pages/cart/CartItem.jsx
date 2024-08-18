import React from "react";
import useScreenInfo from "../../hooks/useScreenInfo";
import { RiDeleteBin5Line } from "react-icons/ri";
const CartItem = React.memo(({ item, onIncrease, onDecrease, onDelete }) => {
  const { isMobileView, isLargeMobile } = useScreenInfo();

  return (
    <div key={item.id} className="border p-6 rounded-lg shadow-lg mb-4 ">
      <div
        className={`${
          isMobileView || isLargeMobile
            ? "flex flex-col items-center"
            : "grid grid-cols-[30%_auto]"
        }`}
      >
        <div>
          <img
            src={item.image}
            alt={item.title}
            className={`h-48 object-cover mb-2 ${
              isMobileView || isLargeMobile ? "w-full" : ""
            }`}
          />
        </div>
        <div
          className={`${
            isMobileView || isLargeMobile ? "text-center mt-4" : "p-10"
          }`}
        >
          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600">₹{item.price}</p>
          <div
            className={`${
              isMobileView || isLargeMobile
                ? "flex  justify-center items-center mt-4"
                : "flex"
            }`}
          >
            <button
              className="border w-8 h-8 flex items-center justify-center rounded-full mb-0"
              onClick={() => onDecrease(item)}
            >
              -
            </button>
            <p className="text-gray-600 mx-3 my-1">{item.quantity}</p>
            <button
              className="border w-8 h-8 flex items-center justify-center rounded-full mb-0"
              onClick={() => onIncrease(item)}
            >
              +
            </button>
            <button className="ml-5" onClick={() => onDelete(item)}>
              <RiDeleteBin5Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CartItem;
