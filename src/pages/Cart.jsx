import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../state/product/productSlice";

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

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);

  const totalPrice = useMemo(
    () =>
      cart.reduce((total, item) => {
        const quantity = item.quantity ?? 0;
        const price = item.price ?? 0;
        return total + quantity * price;
      }, 0),
    [cart]
  );

  const handleIncrease = useCallback(
    (item) => {
      dispatch(increaseQuantity(item));
    },
    [dispatch]
  );

  const handleDecrease = useCallback(
    (item) => {
      dispatch(decreaseQuantity(item));
    },
    [dispatch]
  );

  return (
    <div className="text-black p-20">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          ))}
          <div className="border-t pt-4 mt-4">
            <h2 className="text-xl font-semibold">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>
            <button className="p-5 bg-blue-600 text-white">Place order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
