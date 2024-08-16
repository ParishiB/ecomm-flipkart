import React from "react";
const CartItem = ({ item, onIncrease, onDecrease }) => (
  <div key={item.id} className="border p-4 rounded-lg shadow-lg mb-4">
    <div className="grid grid-cols-[30%_auto]">
      <div>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover mb-2"
        />
      </div>
      <div className="p-10">
        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-600">₹{item.price}</p>
        <div className="flex">
          <button className="border p-2" onClick={() => onDecrease(item)}>
            -
          </button>
          <p className="text-gray-600 p-5">{item.quantity}</p>
          <button className="border p-2" onClick={() => onIncrease(item)}>
            +
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default CartItem;
