import { useState, useEffect } from "react";
import { getProductById, getProducts } from "../Util/httpClient";

const useProducts = (id = null) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (id) {
          const response = getProductById(id);
          setProduct(response.data);
        } else {
          const response = await getProducts();
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  return { products, product, loading, error };
};

export default useProducts;
