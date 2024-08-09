import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "../Nav/Nav.css";
import Cart from "../Cart/CartItems";
import Authcontext from "../LoginProvider/Loginprovider";
import { useProductContext } from "../AddCart/CartProviders";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { cartItems, handleRemove } = useProductContext();
  const Authctx = useContext(Authcontext);
  const isLoggedin = Authctx.isLoggedin;

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const logoutHandler = () => {
    Authctx.Logout();
  };

  return (
    <div className="Nav_items">
      <div className="Allnavitems">
        <div className="nav-item-list">
          <Link to="/">HOME</Link>
          <Link to="/album">ALBUM</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/about">ABOUT</Link>
        </div>
        {!isLoggedin ? (
          <Link to="/signin" className="nav-item">LOGIN</Link>
        ) : (
          <>
            <Link to="/profile" className="nav-item">PROFILE</Link>
            <div className="logout" onClick={logoutHandler}>LOGOUT</div>
          </>
        )}
      </div>

      <button className="insta" onClick={toggleVisibility}>
        <div className="cart_page_cart">
          <BsCart4 /> Cart
          <span className="len">{cartItems.length}</span>
        </div>
      </button>
      {visible && <Cart ProductsList={cartItems} HandleRemove={handleRemove} />}
    </div>
  );
};

export default Nav;
