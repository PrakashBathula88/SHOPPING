import React from "react";
import ReactDOM from "react-dom";
import classes from "../CartModal/CartPort.css";

const CartPortal = ({ onClose, children }) => {
  const portalRoot = document.getElementById("CartItemList");

  if (!portalRoot) {
    console.error("Portal root element ");
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
    </>,
    portalRoot
  );
};

export default CartPortal;
