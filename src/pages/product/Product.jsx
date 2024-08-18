import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useProducts from "../../hooks/useProducts";
import { ClipLoader } from "react-spinners";
import rating from "../../assets/rating.png";
import { FaTags } from "react-icons/fa";
import {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
  deleteParticularItemsCart,
} from "../../state/product/productSlice";
import { useNavigate } from "react-router-dom";
import useScreenInfo from "../../hooks/useScreenInfo";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading, error } = useProducts(id);
  const cart = useSelector((state) => state.product.cart);
  const { isMobileView, isLargeMobile } = useScreenInfo();

  const goToCart = () => {
    navigate("/cart");
  };

  const handleAddClick = useCallback(
    () => dispatch(addToCart(product)),
    [dispatch, product]
  );
  const handleRemoveClick = useCallback(
    () => dispatch(deleteParticularItemsCart(product)),
    [dispatch, product]
  );
  const handleIncreaseClick = useCallback(
    () => dispatch(increaseQuantity(product)),
    [dispatch, product]
  );
  const handleDecreaseClick = useCallback(
    () => dispatch(decreaseQuantity(product)),
    [dispatch, product]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader color="#2974f0" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-black p-20">Error fetching product details.</div>
    );
  }

  if (!product) {
    return <div className="text-black p-20">Product not found.</div>;
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = !!cartItem;

  return (
    <div
      className={`p-20 pt-10 ${
        isMobileView || isLargeMobile
          ? "flex flex-col p-0"
          : "grid grid-cols-[30%_auto]"
      }`}
    >
      <div className="text-white mb-10">
        <img
          src={product.image}
          alt={product.title}
          className={`p-20 pt-10 w-full mb-4${
            isMobileView || isLargeMobile ? "h-[200px] flex justify-center" : ""
          }`}
        />
        <div className="flex gap-1 px-5">
          <button
            onClick={handleRemoveClick}
            disabled={!isInCart}
            className="border w-full py-2 bg-[#ff9f00]"
          >
            Remove from Cart
          </button>
          <button
            onClick={handleAddClick}
            disabled={isInCart}
            className="border bg-[#fb641b] py-2 w-full"
          >
            Add to Cart
          </button>
        </div>
        {isInCart && (
          <div className="flex justify-center m-5">
            <div className="flex text-black">
              <button
                className="border rounded-full px-6 py-2"
                onClick={handleDecreaseClick}
              >
                -
              </button>
              <p className="text-gray-600 p-5">{cartItem.quantity}</p>
              <button
                className="border rounded-full px-6 py-2"
                onClick={handleIncreaseClick}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>
      <div
        className={`m-10 ${
          isMobileView || isLargeMobile ? "mt-0 items-center" : ""
        }`}
      >
        <p className="text-gray-800 mb-4 font-extrabold">{product.title}</p>
        <p className="text-gray-500 font-bold flex items-center">
          <img src={rating} className="h-[20px] mr-2" alt="rating" />
          31,903 Ratings & 2,000 Review
        </p>
        <p className="text-lg font-semibold my-8">₹{product.price}</p>
        <p className="text-gray-800 mb-4">{product.description}</p>
        <div className="space-y-4">
          <div
            className={`flex items-center gap-2 ${
              isMobileView || isLargeMobile ? "w-full" : "p-2"
            }`}
          >
            <FaTags
              className={`text-green-600 ${
                isMobileView || isLargeMobile ? "hidden" : ""
              }`}
            />
            <span className="font-semibold inline">
              Get ₹50 Instant Discount on first Flipkart UPI transaction on
              order of ₹200 and above
            </span>
            <span className="text-blue-500 font-bold">T&C</span>
          </div>
        </div>
        <p
          className={`flex text-blue-500 font-bold ${
            isMobileView || isLargeMobile ? "py-5" : ""
          }`}
        >
          View 40 MORE OFFERS
        </p>
        <button
          onClick={goToCart}
          className="bg-[#fb641b] text-white p-2 font-bold my-2 mt-10 px-5"
        >
          Go to the Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
