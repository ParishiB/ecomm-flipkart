import React, { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../state/product/productSlice";

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
