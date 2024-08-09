import React, { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import Authcontext from "../LoginProvider/Loginprovider";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);
  const { token } = useContext(Authcontext);

  useEffect(() => {
    const storeLocal = JSON.parse(localStorage.getItem("listitems"));

    setcartItems(storeLocal);

    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(
            `https://crudcrud.com/api/ac8af12a69a34848b626bf7029115d42/products/${token}`
          );
          setcartItems(response.data);
          localStorage.setItem("listitems", JSON.stringify(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    localStorage.setItem("listitems", JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (listItem) => {
    setcartItems([...cartItems, listItem]);
    if (token) {
      axios
        .post(
          `https://crudcrud.com/api/ac8af12a69a34848b626bf7029115d42/products/${token}`,
          listItem
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleRemove = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setcartItems(newItems);
  };

  return (
    <ProductContext.Provider value={{ addToCart, cartItems, handleRemove }}>
      {children}
    </ProductContext.Provider>
  );
};
