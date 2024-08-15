// hooks/useProduct.js
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const useProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `https://fakestoreapi.com/products/${id}`
//         );
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   return { product, loading, error };
// };

// export default useProduct;
// hooks/useProducts.js
import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = (id = null) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (id) {
          const response = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          setProduct(response.data);
        } else {
          const response = await axios.get("https://fakestoreapi.com/products");
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
