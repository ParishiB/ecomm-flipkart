import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Modal from "../../components/misc/Modal";
import useScreenInfo from "../../hooks/useScreenInfo";

const PriceList = () => {
  const cart = useSelector((state) => state.product.cart);
  const [coupon, setCoupon] = useState("");
  const [modal, setModal] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const { isMobileView, isLargeView } = useScreenInfo();

  useEffect(() => {
    toast.info("Use coupon code: PARISHI20");
  }, []);

  const totalItems = useMemo(
    () => cart.reduce((total, item) => total + (item.quantity ?? 0), 0),
    [cart]
  );

  const totalPrice = useMemo(
    () =>
      cart.reduce((total, item) => {
        const quantity = item.quantity ?? 0;
        const price = item.price ?? 0;
        return total + quantity * price;
      }, 0),
    [cart]
  );

  const discountedPrice = useMemo(
    () => (discountApplied ? totalPrice * 0.8 : totalPrice),
    [totalPrice, discountApplied]
  );

  const handleApplyCoupon = useCallback(() => {
    if (coupon === "PARISHI20") {
      setDiscountApplied(true);
      toast.success("Coupon applied! 20% discount added.");
    } else {
      setDiscountApplied(false);
      toast.error("Invalid coupon code.");
    }
  }, [coupon]);

  const deliveryCharges = totalPrice > 0 ? 0 : 50;
  const savings = totalPrice - discountedPrice;

  const openPaymentModal = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  if (modal) {
    return <Modal />;
  }

  return (
    <div className="p-5 pt-0 w-full max-w-lg mx-auto">
      <div>
        <h1 className="font-bold">Do you have a coupon code?</h1>
        <div
          className={`${
            isMobileView || isLargeView ? "flex flex-col" : "flex"
          } gap-2 mt-2 w-full`}
        >
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Coupon code"
            className="border border-gray-300 px-2 py-1 flex-grow"
          />
          <button
            onClick={handleApplyCoupon}
            className="p-2 bg-blue-600 text-white rounded"
          >
            Apply
          </button>
        </div>
      </div>
      <div className="border-t pt-4 mt-4">
        <h2 className="text-xl font-semibold">Price details</h2>
        <div className="flex justify-between mt-2">
          <span>Price ({totalItems} items)</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Discount</span>
          <span className="text-green-600">− ₹{savings.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Delivery Charges</span>
          <span className="text-green-600">
            {deliveryCharges === 0 ? "Free" : `₹${deliveryCharges}`}
          </span>
        </div>
        <div className="flex justify-between mt-2 font-bold">
          <span>Total Amount</span>
          <span>₹{(discountedPrice + deliveryCharges).toFixed(2)}</span>
        </div>
        <div className="mt-2 text-green-600">
          You will save ₹{savings.toFixed(2)} on this order
        </div>
        <button
          className="p-5 bg-blue-600 text-white rounded mt-4 w-full"
          onClick={openPaymentModal}
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default PriceList;
