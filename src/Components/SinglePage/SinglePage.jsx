import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import "./SinglePage.css";

const SinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="All_page">
      <span>
        <img
          className="img_tag_hovering"
          src={product.image}
          alt={product.title}
        />
      </span>
      <div className="button_container">
        <button>Add To Cart</button>
        <button>Buy Now</button>
      </div>
      <div>
        <div className="PRODUCT">
          <h1>{product.title}</h1>
          <p>27,966 Ratings & 1,778 Reviews</p>
          <p>Extra ₹13901 off</p>
          <div className="price_section">
            ₹ {product.price}
            <p className="old_price">
              <s>₹79,900</s> 19% off
            </p>
          </div>
          <div className="offer_section">
            <h3>Available offers</h3>
            <div>
              <MdLocalOffer style={{ color: "green" }} />
              Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C
            </div>
            <div>
              <MdLocalOffer style={{ color: "green" }} />
              Bank Offer 10% instant discount on SBI Credit Card Transactions,
              up to ₹750 on orders of ₹5,000 and above T&C
            </div>
            <div>
              <MdLocalOffer style={{ color: "green" }} />
              Bank Offer 10% instant discount on SBI Credit Card EMI
              Transactions, up to ₹1,250 on orders of ₹5,000 and above T&C
            </div>
            <div>
              <MdLocalOffer style={{ color: "green" }} />
              Special Price Get extra ₹13901 off (price inclusive of
              cashback/coupon) T&C
            </div>
          </div>
          <div className="warranty_section">
            <p>
              1 Month Warranty for cloth and 6 Months Warranty for In-Box
              Accessories
            </p>
          </div>
          <div className="highlight_section">
            <div>
              <h2>Sizes</h2>
              <div className="storage_options">
                <span>25 Small</span>
                <span>256 Large</span>
                <span>512 Medium</span>
              </div>
            </div>
            <div>
              <h3>Highlights</h3>
              <ul>
                <li>
                  <LuDot />
                 28 Size
                </li>
                <li>
                  <LuDot />
                  15.49 cm (6.1 inch) Super Retina XDR color
                </li>
                <li>
                  <LuDot /> 48 M + 12 S | size
                </li>
                <li>
                  <LuDot /> A16 Bionic High quality Product
                </li>
              </ul>
            </div>
          </div>
          <h2>Description</h2>
          <p className="description">{product.description}</p>
         
        </div>
      </div>
   
    </div>
  );
};

export default SinglePage;
