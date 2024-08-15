import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./../state/product/productSlice";

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return { cart, handleAddToCart, handleRemoveFromCart };
};

export default useCart;
