import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);

  console.log("Cart items:", cart);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <div className="text-black p-20">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-lg mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover mb-2"
              />
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <h2 className="text-xl font-semibold">Total: ₹{totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
