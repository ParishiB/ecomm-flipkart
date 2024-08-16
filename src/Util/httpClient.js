import axios from "axios";
export const getProducts = async () => {
  return await axios.get(`https://fakestoreapi.com/products}`);
};
export const getProductById = async (id) => {
  return await axios.get(`https://fakestoreapi.com/products/${id}`);
};
