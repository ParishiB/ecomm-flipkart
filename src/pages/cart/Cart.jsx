import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import useCart from "../../hooks/useCart";
import useScreenInfo from "../../hooks/useScreenInfo";
import PriceList from "./PriceList";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);
  const screenInfo = useScreenInfo();
  const { handleIncrease, handleDecrease, handleDelete } = useCart();
  const { isMobileView, isLargeMobile } = screenInfo;

  return (
    <div className="text-black p-20">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div
          className={` ${
            isMobileView || isLargeMobile
              ? "flex flex-col"
              : "grid grid-cols-[70%_auto]"
          }`}
        >
          <div>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onDelete={handleDelete}
              />
            ))}
          </div>
          <PriceList />
        </div>
      )}
    </div>
  );
};

export default Cart;
