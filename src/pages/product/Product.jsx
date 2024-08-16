import { useParams } from "react-router-dom";
import { useCallback } from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";

const Product = () => {
  const { id } = useParams();
  const { product, loading, error } = useProducts(id);
  const { cart, handleAddToCart, handleRemoveFromCart, RemoveParticularItem } =
    useCart();

  const handleAddClick = useCallback(
    () => handleAddToCart(product),
    [handleAddToCart, product]
  );
  const handleRemoveClick = useCallback(
    () => RemoveParticularItem(product),
    [RemoveParticularItem, product]
  );

  if (loading) {
    return <div className="text-black p-20">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-black p-20">Error fetching product details.</div>
    );
  }

  if (!product) {
    return <div className="text-black p-20">Product not found.</div>;
  }

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="text-black p-20">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover mb-4"
      />
      <p className="text-gray-800 mb-4">{product.description}</p>
      <p className="text-lg font-semibold">₹{product.price}</p>
      <button
        onClick={handleRemoveClick}
        disabled={!isInCart}
        className="border p-2 mr-2"
      >
        Remove from Cart
      </button>
      <button
        onClick={handleAddClick}
        disabled={isInCart}
        className="border p-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
