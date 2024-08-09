import React from "react";
import { FiPlus } from "react-icons/fi";
import { CiCircleMinus } from "react-icons/ci";
import { useProductContext } from "../AddCart/CartProviders";
import "../Cart/Cart.css";
import CartPortal from "../CartModal/Cartportals"

const Cart = ({ onClose, ProductsList }) => {
  const { handleRemove } = useProductContext();

  return (
    <>
      {ProductsList.length ? (
        <CartPortal onClose={onClose}>
          <div className="all_cart_items">
            <table className="cart_table">
              <thead>
                <tr className="cart_table_header">
                  <th>IMAGE</th>
                  <th>TITLE</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {ProductsList.map((item, index) => (
                  <tr key={index} className="cart_table_row">
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart_item_image"
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <FiPlus className="plus-symbol" />
                      <CiCircleMinus className="minus-symbol" />
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemove(index)}
                        className="remove_button"
                      >
                        REMOVE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CartPortal>
      ) : (
        alert("No cart items")
      )}
    </>
  );
};

export default Cart;
