import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteParticularItemsCart,
} from "./../state/product/productSlice";

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const RemoveParticularItem = (product) => {
    dispatch(deleteParticularItemsCart(product));
  };

  return { cart, handleAddToCart, handleRemoveFromCart, RemoveParticularItem };
};

export default useCart;
