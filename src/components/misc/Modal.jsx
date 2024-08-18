import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const Modal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

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
