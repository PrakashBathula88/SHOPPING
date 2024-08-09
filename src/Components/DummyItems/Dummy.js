import React, { useEffect, useState } from "react";
import "./Phones.css";
import { IoMdCart } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useProductContext } from "../AddCart/CartProviders";
import { Link } from "react-router-dom";

const Dummy = () => {
  const {addToCart } = useProductContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
       alert("error")
      }
    };
    fetchProducts();
  }, []);

  const AddProductToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          {products.map((product) => (
            <div key={product.id} className="All_products">
              <Link to={`/singlepage/${product.id}`}>
                <span>
                  <img src={product.image} alt={product.title} />
                </span>
              </Link>
              <span className="PRODUCT">
                <h1>{product.title}</h1>
                <span className="price_logo">
                  <LiaRupeeSignSolid />
                  {product.price}
                </span>
                <button
                  className="Cart_logo"
                  onClick={(e) => {
                    e.stopPropagation();
                    AddProductToCart(product);
                  }}
                >
                  <IoMdCart />
                  Cart
                </button>
              </span>
            </div>
           
          ))}
        </div>
      )}
    </div>
  );
};

export default Dummy;
