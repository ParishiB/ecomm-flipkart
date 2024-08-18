import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../../assets/Logo.png";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { clearCart } from "../../state/product/productSlice";

const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(false);
      navigate("/");
      dispatch(clearCart());
    }, 10000);

    return () => clearTimeout(timer);
  }, [dispatch, navigate]);

  if (!isModalVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="flex items-center text-xl font-semibold mb-4">
          <span>Your order has been placed at</span>
          <img src={Logo} alt="Logo" className="ml-2 h-6" />
        </div>
        <IoCheckmarkDoneCircleSharp className="text-[#2974f0] text-4xl" />
      </div>
    </div>
  );
};

export default Modal;
