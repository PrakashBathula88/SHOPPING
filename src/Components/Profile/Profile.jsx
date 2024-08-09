import React from "react";
import { useRef, useContext } from "react";
import {  useNavigate } from "react-router-dom";
import "../Profile/Profile.css";

import Authcontext from "../LoginProvider/Loginprovider";
const Profile = () => {
  const navigate=useNavigate();
  const newpasswordInputref = useRef();

  const authCtx = useContext(Authcontext);

  const naviagate=useNavigate();

  const homePage=()=>{
    naviagate('/');
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewpassword = newpasswordInputref.current.value;
      
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAOD-cVUQG4pIYE1uRNv-KFcDQFvXv7JVU",
      {
        method: "POST",
        body: JSON.stringify({
          idtoken: authCtx.token,
          password: enteredNewpassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      }).then(res =>{
      navigate('/')
    });
  };

  return (
    <div className="form-container">
    <div className="logo-container">Password Change</div>

    <form className="form" onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          minLength="8"
      ref={newpasswordInputref}
          required
        />
      </div>

      <button className="form-submit-btn" type="submit">
        Send Email
      </button>
    </form>

    <p className="signup-link">
       Go To Products
      <h className="signup-link link" onClick={homePage}>
       Home
      </h>
    </p>
  </div>
  );
};

export default Profile;

