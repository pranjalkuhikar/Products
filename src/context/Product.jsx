/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "../api/axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProductData = createContext();

const Product = ({ children }) => {
  const [product, setProduct] = useState(null);
  const getData = async () => {
    try {
      const { data } = await axios("/products");
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductData.Provider value={{ product }}>{children}</ProductData.Provider>
  );
};

export default Product;
